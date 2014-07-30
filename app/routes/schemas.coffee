SchemaModel = require '../models/schema'
SchemaView  = require './schema'

class Schema extends Spine.Controller

  elements:
    ".schema-view": "schema_view"
    ".page-header": "title"

  constructor: ->
    super
    @render()

    SchemaModel.bind 'refresh', @createSchemas

  configure: (@model) ->
    @stack.swap.scene = 'schema'
    @title.html "#{@model}'s Schema"
    SchemaModel.fetch url: "/schema/#{@model}"
    @active()

  createSchemas: (schemas) =>
    return unless @stack.swap.scene is 'schema'
    @schema = schemas[0]
    view = new SchemaView schema: @schema
    @schema_view.html view.el

  render: =>
    @replace @template("schema_scene")()
    @

module.exports = Schema
