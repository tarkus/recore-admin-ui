Schema = require '../models/schema'

class Loader extends Spine.Controller

  elements:
    ".select-model": "model_selection"
    "input[name='key']": "key_input"
    ".result": "result"

  events:
    "submit form": "submit"

  constructor: ->
    super
    @render()

  submit: (e) =>
    e.preventDefault()
    selected_model = encodeURIComponent @model_selection.val()
    key = @key_input.val()
    Schema.fetch url: "/util/loader?model=#{selected_model}&key=#{key}"

  render: ->
    @replace @template('loader')()
    @

module.exports = Loader
