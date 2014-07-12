Header     = require './routes/header'
Footer     = require './routes/footer'
Sidebar    = require './routes/sidebar'

Dashboard  = require './routes/dashboard'
Schemas    = require './routes/schemas'
Records    = require './routes/records'
Finder     = require './routes/finder'
Loader     = require './routes/loader'

Spine.Controller.include
  
  template: (name) -> (require "./views/#{name}") or (->)

class Stage extends Spine.Stack
  className: "stage"

  controllers:
    dashboard: Dashboard
    records:   Records
    schemas:   Schemas
    finder:    Finder
    loader:    Loader

  constructor: ->
    @el = $("<div id='page-wrapper'/>").addClass(@className).appendTo($("#wrapper")) unless @el?
    @footer = new Footer
    @footer.render()

    super
    
  #default: 'dashboard'
  
class RecoreAdmin extends Spine.Controller
  className: "app"
  
  constructor: ->
    super

    @header  = new Header
    @sidebar = new Sidebar

    @append @header.render()
    @append @sidebar.render()

    @stage = new Stage
    @setStack @stage
    @stage.sidebar = @sidebar


    @routes
      "/finder": =>
        @stage.finder.active()

      "/loader": =>
        @stage.loader.active()

      "/schema/:name": (params) =>
        @stage.schemas.configure(params.name)

      "/record/:name": (params) =>
        @stage.records.configure(params.name)

      "/record/:name/page/:page": (params) =>
        @stage.records.configure(params.name, params.page)

      "/record/:name/add": (params) =>
        @stage.records.add(params.name)

      "/record/:name/view/:id": (params) =>
        @stage.records.view(params.name, params.id)

      "/record/:name/edit/:id": (params) =>
        @stage.records.edit(params.name, params.id)

      "/record/:name/delete/:id": (params) =>
        @stage.records.delete(params.name, params.id)

      "*any": =>
        @stage.dashboard.active()

$ ->
  $.ajaxSetup cache: false

  app = new RecoreAdmin el: $("#wrapper")
  Spine.Route.setup()

  for name, model of Spine.Models
    model.url = "#{base_uri}/#{model.url}"

  window.init_socket = ->
    @socket.on 'task progress', (data) ->
      schema = Spine.Models['Schema'].findByAttribute 'name', data.model
      return unless schema
      schema.trigger 'progress', data

  window.App = app


