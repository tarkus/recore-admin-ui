class Footer extends Spine.Controller
  className: "footer"

  reload: =>
    @render()
    
  render: =>
    @html @template("footer")
    @

module.exports = Footer
