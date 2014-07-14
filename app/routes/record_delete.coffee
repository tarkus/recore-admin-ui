class RecordDelete extends Spine.Controller

  constructor: (record: @record, schema: @schema, modal: @modal) ->
    super
    @render()
    @record.bind 'change', @destroy

    @modal.find(".modal-title").html "Deleting #{@schema.name.toLowerCase()} ##{@record.id}"
    @modal.find('.btn-default').css('display', 'inline-block').html "Cancel"
    @modal.find('.btn-primary').css('display', 'inline-block').html "Confirm"
    @modal.find('.modal-body').html @el
    @modal.data 'action', 'delete'
    @modal.modal 'show'

  submit: =>
    @record.destroy url: "#{base_uri}/record/#{@record.model}/#{@record.id}"

  destroy: =>
    return unless @record.destroyed
    @navigate "/record/#{@schema.name}/page/#{@stack.records.page}"
    $('.modal').modal 'hide'
    Flash = require './flash'
    flash = new Flash "info", "#{@schema.name} id ##{@record.id} has been successfully deleted"

  render: =>
    @replace @template("record_delete") record: @record, schema: @schema
    @

module.exports = RecordDelete
