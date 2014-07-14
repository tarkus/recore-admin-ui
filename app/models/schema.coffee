class Schema extends Spine.Model

  @configure "Schema", "name", "id_generator", "properties", "task", "count"
  @extend Spine.Model.Ajax
  @extend Spine.ModelParty

  @url: "/schema"

module.exports = Schema

