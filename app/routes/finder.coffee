class Finder extends Spine.Controller

  elements:
    "input[name='key']": "key_input"
    ".result": "result"

  events:
    "submit form": "submit"

  constructor: ->
    super
    @render()

  submit: (e) =>
    e.preventDefault()
    @result.html ''
    self = @
    $.ajax
      url: "#{base_uri}/util/finder"
      type: 'POST'
      data:
        key: @key_input.val()
      success: (result) ->
        self.result.html "<pre><code>#{result}</code></pre>"

  render: =>
    @replace @template("finder")()
    @

module.exports = Finder
