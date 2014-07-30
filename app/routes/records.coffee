SchemaModel  = require '../models/schema'
RecordModel  = require '../models/record'

Row          = require './row'
Empty        = require './empty'
Pagination   = require './pagination'

RecordAdd    = require './record_add'
RecordView   = require './record_view'
RecordEdit   = require './record_edit'
RecordDelete = require './record_delete'

class Record extends Spine.Controller

  elements:
    ".page-header .title": "title"              # Title
    ".modal.detail": "detail_modal"             # Modal for detail view
    ".modal.action": "action_modal"             # Modal for actions
    ".panel-heading": "desc"                    # Subtitle
    ".tables": "table_container"                # Tables container
    ".table-records": "table_records"           # Record table
    ".table-records thead": "records_header"    # Record table's header
    ".table-records tbody": "records"           # Record table's body
    ".table-ids": "table_ids"                   # ID table
    ".table-ids thead": "ids_header"            # ID table's header
    ".table-ids tbody": "ids"                   # ID table's body
    ".pagination": "pagination"                 # Pagination container
    ".btn.add": "btn_add"                       # 'New' button
    ".btn.view": "btn_view"                     # 'View' button
    ".btn.edit": "btn_edit"                     # 'Edit' button
    ".btn.delete": "btn_delete"                 # 'Delete' button

  events:
    "click .page-header button.reload": "reload"  # Click on reload button

    "click .record-value": "detail"               # Click on field
    "click .modal.detail .content": "selectValue" # Click on field value 

    "click .record-id": "selectRow"               # Click on row handler
    "click .record-id.selected": "deselectRow"    # Click on row handler

    "click .actions .add": "showAddModal"         # Click on 'New' button
    "click .actions .view": "showViewModal"       # Click on 'View' Button
    "click .actions .edit": "showEditModal"       # Click on 'Edit' Button
    "click .actions .delete": "showDeleteModal"   # Click on 'Delete' Button

    "click .modal.action .btn-primary": "submit"  # Click on 'Submit'

    "click .sort": "sort"                         # Click on sorting field


  constructor: ->
    super
    @render()

    @per_page ?= 30
    @sort_field ?= 'id'
    @sort_direction ?= "DESC"
    SchemaModel.bind 'refresh', @createSchemas
    RecordModel.bind 'refresh', @createRecords

  reload: =>
    @configure @model, @page

  configure: (@model, @page=1, @sort_field='', @sort_direction='DESC') ->
    @stack.swap.scene = 'record'
    @title.html @model
    SchemaModel.fetch url: "/schema/#{@model}"

    @desc.html '&nbsp;'

    @ids_header.html ''
    @records_header.html ''

    @ids.html ''
    @records.html ''

    @pagination.html ''
    
    @btn_add.css 'display', 'none'
    @btn_view.css 'display', 'none'
    @btn_edit.css 'display', 'none'
    @btn_delete.css 'display', 'none'

    @active()

  createSchemas: (schemas) =>
    return unless @stack.swap.scene is 'record'
    @schema = schemas.pop()
    @fetchRecords()

  fetchRecords: =>
    field = @sort_field or 'id'
    url = "/record/#{@model}/page/#{@page}?per_page=#{@per_page}&field=#{field}&direction=#{@sort_direction}"
    RecordModel.fetch url: url

  createRecords: (records) =>
    @btn_add.css 'display', 'inline-block'

    @ids_header.html "<tr><th>&nbsp;</th></tr>"

    header = $("<tr/>")
    has_records = records.length > 0
    for name, value of @schema.properties
      if has_records and value.sortable
        toggler = $('<div/>').addClass 'dropdown-toggle'
        toggler.attr 'data-toggle', 'dropdown'
        toggler.attr 'id', "th-dropdown-#{name}"
        toggler.html name
        toggler.append '<span class="caret"></span>'
        dropdown = $('<ul/>').addClass 'dropdown-menu'
        dropdown.attr 'role', 'menu'
        dropdown.append "<li><a class='sort' data-dir='ASC' data-field='#{name}' href='javascript: void(0);'>Ascending</a></li>"
        dropdown.append "<li><a class='sort' data-dir='DESC' data-field='#{name}' href='javascript: void(0);'>Descending</a></li>"
        div = $("<div/>").addClass 'dropdown'
        div.append toggler
        div.append dropdown
        th = $("<th/>").append div
        header.append th
      else
        header.append $("<th/>").html name
    @records_header.html header

    if records.length is 0
      empty = new Empty
      @records.html empty.el

      @ids.append "<tr><td class='record-id-none'>&nbsp;</td></tr>"

      full_width = @table_container.width()
      @table_records.width full_width - @table_ids.width() - 2

      @[@action](@schema.name) if @action
      return

    first = records[0]
    @paginate first

    @desc.html "Showing #{first.range[0]}-#{first.range[1]} of #{first.total}" if first.range?
      
    for record in records
      @ids.append "<tr><td class='record-id' id='id-#{record.id}'>#{record.id}</td></tr>"
      row = new Row record: record, schema: @schema
      @records.append row.el

    full_width = @table_container.width()
    @table_records.width full_width - @table_ids.width() - 2

    @btn_view.addClass('disabled').css 'display', 'inline-block'
    @btn_edit.addClass('disabled').css 'display', 'inline-block'
    @btn_delete.addClass('disabled').css 'display', 'inline-block'

    @[@action](@schema.name) if @action

  paginate: (record) =>
    pager = new Pagination
      total: record.total
      current: @page
      per_page: @per_page
      path: "#/record/#{@model}"
    @pagination.html pager.el

  showAddModal: =>
    @navigate "/record/#{@schema.name}/add"

  showViewModal: =>
    @navigate "/record/#{@schema.name}/view/#{@selected_id}"

  showEditModal: =>
    @navigate "/record/#{@schema.name}/edit/#{@selected_id}"

  showDeleteModal: =>
    @navigate "/record/#{@schema.name}/delete/#{@selected_id}"

  add: (model) =>
    @action = null
    if @schema and @schema.name is model
      @record = new RecordModel
      @action_handler = new RecordAdd record: @record, schema: @schema, modal: @action_modal
    else
      @action = 'add'
      @configure model

  view: (model, id) =>
    @action = null
    @selected_id ?= id
    @record = RecordModel.find @selected_id
    return @navigate "/record/#{model}" unless @record
    if @schema and @schema.name is model
      @action_handler = new RecordView record: @record, schema: @schema, modal: @action_modal
    else
      @action = 'view'
      page = Math.floor(@selected_id / @per_page) + 1
      @configure model, page

  edit: (model, id) =>
    @action = null
    @selected_id ?= id
    if @schema and @schema.name is model
      @record = RecordModel.find @selected_id
      @action_handler = new RecordEdit record: @record, schema: @schema, modal: @action_modal
    else
      @action = 'edit'
      page = Math.floor(@selected_id / @per_page) + 1
      @configure model

  delete: (model, id) =>
    @action = null
    @selected_id ?= id
    @record = RecordModel.find @selected_id
    return @navigate "/record/#{model}" unless @record
    if @schema and @schema.name is model
      @action_handler = new RecordDelete record: @record, schema: @schema, modal: @action_modal
    else
      @action = 'delete'
      page = Math.floor(@selected_id / @per_page) + 1
      @configure model

  submit: =>
    @action_modal.find(".form-group.has-error").removeClass 'has-error'
    @action_modal.find(".alert-danger").css('display', 'none').html ""

    @action_handler?.submit?()
    
  detail: (e) =>
    e.preventDefault()
    e.stopPropagation()
    target = $(e.target)
    @detail_modal.find(".modal-title").html target.data('title')
    @detail_modal.find(".content").html target.data('content')
    @detail_modal.modal 'show'

  selectRow: (e) =>
    if @selected_id
      $("#id-#{@selected_id}").removeClass 'selected'
      $("#record-id-#{@selected_id}").removeClass 'selected'

    id_cell = $(e.target)
    @selected_id = id = id_cell.html()

    id_cell.addClass 'selected'
    $("#record-id-#{id}").addClass 'selected'

    @btn_view.removeClass 'disabled'
    @btn_edit.removeClass 'disabled'
    @btn_delete.removeClass 'disabled'

  deselectRow: (e) =>
    @selected_id = null
    id_cell = $(e.target)
    id = id_cell.html()
    id_cell.removeClass 'selected'
    $("#record-id-#{id}").removeClass 'selected'

    @btn_view.addClass 'disabled'
    @btn_edit.addClass 'disabled'
    @btn_delete.addClass 'disabled'
    
  selectValue: (e) =>
    selectText e.target

  sort: (e) =>
    target = $(e.target)
    field = target.data 'field'
    direction = target.data 'dir'
    @configure @model, 1, field, direction


  render: =>
    @replace @template("record_scene")
      model: @model
    @

module.exports = Record
