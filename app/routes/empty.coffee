class Empty extends Spine.Controller

  constructor: (@text="No Data") ->
    super
    @render()

  render: =>
    @replace @template("empty") text: @text
    @

module.exports = Empty
