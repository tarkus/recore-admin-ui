(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("config", function(exports, require, module) {
module.exports = {"npm_config_save_dev":"","npm_config_viewer":"man","npm_config_browser":"","npm_package_gitHead":"788fd684131c5f063125d881af7381f3484f5f0e","BOLD":"\u001b[1m","GREEN":"\u001b[38;5;220m","npm_config_rollback":"true","rvm_bin_path":"/Users/tarkus/.rvm/bin","TERM_PROGRAM":"iTerm.app","NODE":"/usr/local/bin/node","npm_config_usage":"","npm_package_homepage":"https://github.com/tarkus/recore-admin-ui","GEM_HOME":"/Users/tarkus/.rvm/gems/ruby-2.1.1","RESET":"\u001b(B\u001b[m","npm_config_globalignorefile":"/usr/local/etc/npmignore","npm_package_devDependencies_clean_css_brunch":">= 1.0 < 1.8","TERM":"xterm-256color","SHELL":"/bin/bash","npm_config_shell":"/bin/bash","npm_config_init_author_url":"","npm_config_shrinkwrap":"true","npm_config_parseable":"","IRBRC":"/Users/tarkus/.rvm/rubies/ruby-2.1.1/.irbrc","TMPDIR":"/var/folders/1s/7kj4mh7s1y1c471xz_fz25cr0000gp/T/","npm_config_init_license":"ISC","npm_config_email":"tarkus.nnkh@gmail.com","DOCKER_HOST":"tcp://localhost:4243","Apple_PubSub_Socket_Render":"/tmp/launch-i4oENU/Render","npm_config_sign_git_tag":"","npm_config_init_author_email":"","npm_config_cache_max":"null","npm_config_long":"","npm_config_local_address":"","npm_config_git_tag_version":"true","npm_config_cert":"","MY_RUBY_HOME":"/Users/tarkus/.rvm/rubies/ruby-2.1.1","npm_config_npat":"","npm_config_fetch_retries":"2","npm_config_registry":"https://registry.npmjs.org/","ORANGE":"\u001b[38;5;172m","npm_package_repository_url":"git@github.com:tarkus/recore-admin-ui.git","npm_config_versions":"","npm_config_message":"%s","npm_config_key":"","npm_package_readmeFilename":"README.md","npm_package_devDependencies_css_brunch":">= 1.0 < 1.8","npm_package_description":"A web interface for RecoreAdmin","USER":"tarkus","_system_type":"Darwin","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_always_auth":"","npm_package_devDependencies_jade_brunch":"^1.8.1","rvm_path":"/Users/tarkus/.rvm","npm_package_scripts_prepublish":"brunch build --production","TERMCAP":"SC|screen-256color|VT 100/ANSI X3.64 virtual terminal:\\\n\t:DO=\\E[%dB:LE=\\E[%dD:RI=\\E[%dC:UP=\\E[%dA:bs:bt=\\E[Z:\\\n\t:cd=\\E[J:ce=\\E[K:cl=\\E[H\\E[J:cm=\\E[%i%d;%dH:ct=\\E[3g:\\\n\t:do=^J:nd=\\E[C:pt:rc=\\E8:rs=\\Ec:sc=\\E7:st=\\EH:up=\\EM:\\\n\t:le=^H:bl=^G:cr=^M:it#8:ho=\\E[H:nw=\\EE:ta=^I:is=\\E)0:\\\n\t:li#30:co#110:am:xn:xv:LP:sr=\\EM:al=\\E[L:AL=\\E[%dL:\\\n\t:cs=\\E[%i%d;%dr:dl=\\E[M:DL=\\E[%dM:dc=\\E[P:DC=\\E[%dP:\\\n\t:im=\\E[4h:ei=\\E[4l:mi:IC=\\E[%d@:ks=\\E[?1h\\E=:\\\n\t:ke=\\E[?1l\\E>:vi=\\E[?25l:ve=\\E[34h\\E[?25h:vs=\\E[34l:\\\n\t:ti=\\E[?1049h:te=\\E[?1049l:us=\\E[4m:ue=\\E[24m:so=\\E[3m:\\\n\t:se=\\E[23m:mb=\\E[5m:md=\\E[1m:mr=\\E[7m:me=\\E[m:ms:\\\n\t:Co#8:pa#64:AF=\\E[3%dm:AB=\\E[4%dm:op=\\E[39;49m:AX:\\\n\t:vb=\\Eg:G0:as=\\E(0:ae=\\E(B:\\\n\t:ac=\\140\\140aaffggjjkkllmmnnooppqqrrssttuuvvwwxxyyzz{{||}}~~..--++,,hhII00:\\\n\t:po=\\E[5i:pf=\\E[4i:k0=\\E[10~:k1=\\EOP:k2=\\EOQ:k3=\\EOR:\\\n\t:k4=\\EOS:k5=\\E[15~:F3=\\E[1;2P:F4=\\E[1;2Q:F5=\\E[1;2R:\\\n\t:F6=\\E[1;2S:F7=\\E[15;2~:F8=\\E[17;2~:F9=\\E[18;2~:\\\n\t:FA=\\E[19;2~:kb=^H:K2=\\EOE:kB=\\E[Z:kF=\\E[1;2B:\\\n\t:kR=\\E[1;2A:*4=\\E[3;2~:*7=\\E[1;2F:#2=\\E[1;2H:#3=\\E[2;2~:\\\n\t:#4=\\E[1;2D:%c=\\E[6;2~:%e=\\E[5;2~:%i=\\E[1;2C:kh=\\E[1~:\\\n\t:@1=\\E[1~:kH=\\E[4~:@7=\\E[4~:kN=\\E[6~:kP=\\E[5~:kI=\\E[2~:\\\n\t:kD=\\E[3~:ku=\\EOA:kd=\\EOB:kr=\\EOC:kl=\\EOD:km:","SSH_AUTH_SOCK":"/tmp/launch-FCx4T4/Listeners","__CF_USER_TEXT_ENCODING":"0x1F6:0:0","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","npm_config_cache_lock_retries":"10","npm_package_author_name":"Tarkus Liu","npm_config_heading":"npm","npm_config_proprietary_attribs":"true","npm_config_fetch_retry_mintimeout":"10000","npm_package_devDependencies_javascript_brunch":">= 1.0 < 1.8","rvm_prefix":"/Users/tarkus","npm_config_json":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"start\"],\"original\":[\"start\"]}","MAGENTA":"\u001b[91m","__CHECKFIX1436934":"1","PATH":"/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/Users/tarkus/Code/recore-admin-ui/node_modules/.bin:/usr/local/bin:/usr/local/heroku/bin:/usr/local/sbin:/usr/local/bin:/Users/tarkus/.bin:/Users/tarkus/.rvm/gems/ruby-2.1.1/bin:/Users/tarkus/.rvm/gems/ruby-2.1.1@global/bin:/Users/tarkus/.rvm/rubies/ruby-2.1.1/bin:/usr/local/sbin:/usr/local/bin:/Users/tarkus/.bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/tarkus/.rvm/bin:/Users/tarkus/Development/adt-bundle/sdk/platform-tools:/Users/tarkus/Development/adt-bundle/sdk/tools:/Users/tarkus/Development/adt-bundle/sdk/platform-tools:/Users/tarkus/Development/adt-bundle/sdk/tools:/Users/tarkus/.rvm/bin","STY":"553.ttys000.Mephisto","npm_config_https_proxy":"","npm_config_engine_strict":"","npm_config_description":"true","_":"/Users/tarkus/Code/recore-admin-ui/node_modules/.bin/brunch","npm_config_userconfig":"/Users/tarkus/.npmrc","npm_config_init_module":"/Users/tarkus/.npm-init.js","PWD":"/Users/tarkus/Code/recore-admin-ui","npm_config_user":"","npm_config_node_version":"v0.10.26","npm_package_bugs_url":"https://github.com/tarkus/recore-admin-ui/issues","npm_package_devDependencies_auto_reload_brunch":">= 1.0 < 1.8","npm_lifecycle_event":"start","npm_config_save":"","npm_config_editor":"vi","npm_package_repository_type":"git","npm_package_name":"recore-admin-ui","LANG":"zh_CN.UTF-8","npm_config_tag":"latest","npm_package_devDependencies_stylus_brunch":"^1.8.1","ITERM_PROFILE":"Default","npm_config_global":"","npm_package_scripts_start":"brunch watch --server","npm_config_optional":"true","npm_config_username":"tarkus","_system_arch":"x86_64","npm_config_force":"","npm_config_bin_links":"true","npm_config_searchopts":"","npm_package_devDependencies_coffee_script_brunch":"^1.8.0","_system_version":"10.9","npm_config_depth":"null","npm_config_searchsort":"name","npm_config_rebuild_bundle":"true","npm_package_version":"0.4.13","npm_config_unicode":"true","rvm_version":"1.25.22 (stable)","SHLVL":"3","HOME":"/Users/tarkus","npm_config_fetch_retry_maxtimeout":"60000","npm_package_devDependencies_static_jade_brunch":"^1.7.0","npm_package_scripts_test":"brunch test","PURPLE":"\u001b[38;5;141m","npm_config_strict_ssl":"true","npm_config_loglevel":"http","npm_config_ca":"","npm_package_devDependencies_uglify_js_brunch":">= 1.0 < 1.8","npm_config_save_exact":"","npm_config_group":"20","npm_config_fetch_retry_factor":"10","npm_config_dev":"","npm_package_devDependencies_brunch":"^1.7.14","npm_config_version":"","npm_config_cache_lock_stale":"60000","npm_config_cache_min":"10","ITERM_SESSION_ID":"w0t0p0","npm_config_searchexclude":"","npm_config_cache":"/Users/tarkus/.npm","LOGNAME":"tarkus","npm_lifecycle_script":"brunch watch --server","npm_config_color":"true","WINDOW":"8","npm_config_proxy":"","npm_package_devDependencies_jsenv_brunch":"^1.4.2","npm_package_author_email":"tarkus@tarkus.im","GEM_PATH":"/Users/tarkus/.rvm/gems/ruby-2.1.1:/Users/tarkus/.rvm/gems/ruby-2.1.1@global","npm_package_devDependencies_coffee_script":"^1.7.1","npm_config_save_optional":"","npm_config_user_agent":"node/v0.10.26 darwin x64","npm_config_ignore_scripts":"","npm_config_cache_lock_wait":"10000","npm_config_production":"","npm_config_save_bundle":"","npm_config_umask":"18","npm_config_init_author_name":"","npm_config_git":"git","npm_config_unsafe_perm":"true","npm_config_tmp":"/var/folders/1s/7kj4mh7s1y1c471xz_fz25cr0000gp/T/","npm_config_onload_script":"","_system_name":"OSX","npm_node_execpath":"/usr/local/bin/node","npm_config_link":"","npm_config_prefix":"/usr/local","WHITE":"\u001b[30m"}
});

;require.register("initialize", function(exports, require, module) {
var Dashboard, Finder, Footer, Header, Loader, Records, RecoreAdmin, Schemas, Sidebar, Stage,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Header = require('./routes/header');

Footer = require('./routes/footer');

Sidebar = require('./routes/sidebar');

Dashboard = require('./routes/dashboard');

Schemas = require('./routes/schemas');

Records = require('./routes/records');

Finder = require('./routes/finder');

Loader = require('./routes/loader');

Spine.Controller.include({
  template: function(name) {
    return (require("./views/" + name)) || (function() {});
  }
});

Stage = (function(_super) {
  __extends(Stage, _super);

  Stage.prototype.className = "stage";

  Stage.prototype.controllers = {
    dashboard: Dashboard,
    records: Records,
    schemas: Schemas,
    finder: Finder,
    loader: Loader
  };

  function Stage() {
    if (this.el == null) {
      this.el = $("<div id='page-wrapper'/>").addClass(this.className).appendTo($("#wrapper"));
    }
    this.footer = new Footer;
    this.footer.render();
    Stage.__super__.constructor.apply(this, arguments);
  }

  return Stage;

})(Spine.Stack);

RecoreAdmin = (function(_super) {
  __extends(RecoreAdmin, _super);

  RecoreAdmin.prototype.className = "app";

  function RecoreAdmin() {
    RecoreAdmin.__super__.constructor.apply(this, arguments);
    this.header = new Header;
    this.sidebar = new Sidebar;
    this.append(this.header.render());
    this.append(this.sidebar.render());
    this.stage = new Stage;
    this.setStack(this.stage);
    this.stage.sidebar = this.sidebar;
    this.routes({
      "/finder": (function(_this) {
        return function() {
          return _this.stage.finder.active();
        };
      })(this),
      "/loader": (function(_this) {
        return function() {
          return _this.stage.loader.active();
        };
      })(this),
      "/schema/:name": (function(_this) {
        return function(params) {
          return _this.stage.schemas.configure(params.name);
        };
      })(this),
      "/record/:name": (function(_this) {
        return function(params) {
          return _this.stage.records.configure(params.name);
        };
      })(this),
      "/record/:name/page/:page": (function(_this) {
        return function(params) {
          return _this.stage.records.configure(params.name, params.page);
        };
      })(this),
      "/record/:name/add": (function(_this) {
        return function(params) {
          return _this.stage.records.add(params.name);
        };
      })(this),
      "/record/:name/view/:id": (function(_this) {
        return function(params) {
          return _this.stage.records.view(params.name, params.id);
        };
      })(this),
      "/record/:name/edit/:id": (function(_this) {
        return function(params) {
          return _this.stage.records.edit(params.name, params.id);
        };
      })(this),
      "/record/:name/delete/:id": (function(_this) {
        return function(params) {
          return _this.stage.records["delete"](params.name, params.id);
        };
      })(this),
      "*any": (function(_this) {
        return function() {
          return _this.stage.dashboard.active();
        };
      })(this)
    });
  }

  return RecoreAdmin;

})(Spine.Controller);

$(function() {
  var app, model, name, _ref;
  $.ajaxSetup({
    cache: false
  });
  app = new RecoreAdmin({
    el: $("#wrapper")
  });
  Spine.Route.setup();
  _ref = Spine.Models;
  for (name in _ref) {
    model = _ref[name];
    model.url = "" + base_uri + "/" + model.url;
  }
  window.init_socket = function() {
    return this.socket.on('task progress', function(data) {
      var schema;
      schema = Spine.Models['Schema'].findByAttribute('name', data.model);
      if (!schema) {
        return;
      }
      return schema.trigger('progress', data);
    });
  };
  return window.App = app;
});
});

;require.register("models/record", function(exports, require, module) {
var Record,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Record = (function(_super) {
  __extends(Record, _super);

  function Record() {
    return Record.__super__.constructor.apply(this, arguments);
  }

  Record.configure("Record", "model", "properties", "total", "range");

  Record.extend(Spine.Model.Ajax);

  Record.extend(Spine.ModelParty);

  Record.url = "/record";

  return Record;

})(Spine.Model);

module.exports = Record;
});

;require.register("models/schema", function(exports, require, module) {
var Schema,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Schema = (function(_super) {
  __extends(Schema, _super);

  function Schema() {
    return Schema.__super__.constructor.apply(this, arguments);
  }

  Schema.configure("Schema", "name", "id_generator", "properties", "task", "count");

  Schema.extend(Spine.Model.Ajax);

  Schema.extend(Spine.ModelParty);

  Schema.url = "/schema";

  return Schema;

})(Spine.Model);

module.exports = Schema;
});

;require.register("models/widget", function(exports, require, module) {
var Widget,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Widget = (function(_super) {
  __extends(Widget, _super);

  function Widget() {
    return Widget.__super__.constructor.apply(this, arguments);
  }

  Widget.configure("Widget", "name", "size", "content", "group");

  Widget.extend(Spine.Model.Ajax);

  Widget.extend(Spine.ModelParty);

  Widget.url = "/stats";

  return Widget;

})(Spine.Model);

module.exports = Widget;
});

;require.register("routes/dashboard", function(exports, require, module) {
var Dashboard, Panel, Widget,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Widget = require('../models/widget');

Panel = require('./panel');

Dashboard = (function(_super) {
  __extends(Dashboard, _super);

  Dashboard.prototype.elements = {
    ".widgets": "widgets",
    ".node-selection input": "node_input"
  };

  Dashboard.prototype.events = {
    "click .node-selection .input-group-addon": "select_node"
  };

  function Dashboard() {
    this.render = __bind(this.render, this);
    this.select_node = __bind(this.select_node, this);
    this.refresh = __bind(this.refresh, this);
    this.active = __bind(this.active, this);
    Dashboard.__super__.constructor.apply(this, arguments);
    this.columns = 3;
    this.render();
    Widget.bind('refresh', this.refresh);
  }

  Dashboard.prototype.active = function() {
    if (this.stack.swap.scene === 'dashboard') {
      return;
    }
    this.stack.swap.scene = 'dashboard';
    Widget.deleteAll();
    Widget.fetch({
      url: "" + base_uri + "/stats"
    });
    this.widgets.html('');
    return Dashboard.__super__.active.apply(this, arguments);
  };

  Dashboard.prototype.refresh = function(widgets) {
    var container, containers, group, total, view, widget, _i, _len, _name, _results;
    total = widgets.length;
    containers = {};
    for (_i = 0, _len = widgets.length; _i < _len; _i++) {
      widget = widgets[_i];
      if (!widget.group) {
        widget.group = 'ungrouped';
      }
      if (widget.size == null) {
        widget.size = 1;
      }
      if (containers[_name = widget.group] == null) {
        containers[_name] = $("<div/>").addClass("col-lg-" + (Math.min(12, Math.floor(widget.size * 4))));
      }
      view = new Panel({
        size: widget.size,
        title: widget.name,
        content: widget.content
      });
      containers[widget.group].append(view.el);
    }
    _results = [];
    for (group in containers) {
      container = containers[group];
      _results.push(this.widgets.append(container));
    }
    return _results;
  };

  Dashboard.prototype.select_node = function() {
    var node;
    node = this.node_input.val();
    if (!node) {
      return;
    }
    Widget.deleteAll();
    Widget.fetch({
      url: "" + base_uri + "/stats?node=" + (encodeURIComponent(node))
    });
    return this.widgets.html('');
  };

  Dashboard.prototype.render = function() {
    this.replace(this.template("dashboard")());
    return this;
  };

  return Dashboard;

})(Spine.Controller);

module.exports = Dashboard;
});

;require.register("routes/empty", function(exports, require, module) {
var Empty,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Empty = (function(_super) {
  __extends(Empty, _super);

  function Empty(text) {
    this.text = text != null ? text : "No Data";
    this.render = __bind(this.render, this);
    Empty.__super__.constructor.apply(this, arguments);
    this.render();
  }

  Empty.prototype.render = function() {
    this.replace(this.template("empty")({
      text: this.text
    }));
    return this;
  };

  return Empty;

})(Spine.Controller);

module.exports = Empty;
});

;require.register("routes/finder", function(exports, require, module) {
var Finder,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Finder = (function(_super) {
  __extends(Finder, _super);

  Finder.prototype.elements = {
    "input[name='key']": "key_input",
    ".result": "result"
  };

  Finder.prototype.events = {
    "submit form": "submit"
  };

  function Finder() {
    this.render = __bind(this.render, this);
    this.submit = __bind(this.submit, this);
    Finder.__super__.constructor.apply(this, arguments);
    this.render();
  }

  Finder.prototype.submit = function(e) {
    var self;
    e.preventDefault();
    this.result.html('');
    self = this;
    return $.ajax({
      url: "" + base_uri + "/util/finder",
      type: 'POST',
      data: {
        key: this.key_input.val()
      },
      success: function(result) {
        return self.result.html("<pre><code>" + result + "</code></pre>");
      }
    });
  };

  Finder.prototype.render = function() {
    this.replace(this.template("finder")());
    return this;
  };

  return Finder;

})(Spine.Controller);

module.exports = Finder;
});

;require.register("routes/flash", function(exports, require, module) {
var Flash,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Flash = (function(_super) {
  __extends(Flash, _super);

  function Flash(type, message, ttl) {
    this.type = type;
    this.message = message;
    this.ttl = ttl;
    this.render = __bind(this.render, this);
    this.destroy = __bind(this.destroy, this);
    Flash.__super__.constructor.apply(this, arguments);
    this.render();
    if (!(this.ttl < 0)) {
      setTimeout(this.destroy, 3000);
    }
  }

  Flash.prototype.destroy = function() {
    return this.el.fadeOut('slow', (function(_this) {
      return function() {
        return _this.el.remove();
      };
    })(this));
  };

  Flash.prototype.render = function() {
    this.replace(this.template('flash')({
      type: this.type,
      message: this.message
    }));
    $('body').append(this.el);
    return this;
  };

  return Flash;

})(Spine.Controller);

module.exports = Flash;
});

;require.register("routes/footer", function(exports, require, module) {
var Footer,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Footer = (function(_super) {
  __extends(Footer, _super);

  function Footer() {
    this.render = __bind(this.render, this);
    this.reload = __bind(this.reload, this);
    return Footer.__super__.constructor.apply(this, arguments);
  }

  Footer.prototype.className = "footer";

  Footer.prototype.reload = function() {
    return this.render();
  };

  Footer.prototype.render = function() {
    this.html(this.template("footer"));
    return this;
  };

  return Footer;

})(Spine.Controller);

module.exports = Footer;
});

;require.register("routes/header", function(exports, require, module) {
var Header,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Header = (function(_super) {
  __extends(Header, _super);

  function Header() {
    this.render = __bind(this.render, this);
    this.reload = __bind(this.reload, this);
    return Header.__super__.constructor.apply(this, arguments);
  }

  Header.prototype.className = "header";

  Header.prototype.reload = function() {
    return this.render();
  };

  Header.prototype.render = function() {
    this.html(this.template("header")({
      title: window.title,
      subtitle: window.subtitle
    }));
    return this;
  };

  return Header;

})(Spine.Controller);

module.exports = Header;
});

;require.register("routes/loader", function(exports, require, module) {
var Loader, Schema,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Schema = require('../models/schema');

Loader = (function(_super) {
  __extends(Loader, _super);

  Loader.prototype.elements = {
    ".select-model": "model_selection",
    "input[name='key']": "key_input",
    ".result": "result"
  };

  Loader.prototype.events = {
    "submit form": "submit"
  };

  function Loader() {
    this.submit = __bind(this.submit, this);
    Loader.__super__.constructor.apply(this, arguments);
    this.render();
  }

  Loader.prototype.submit = function(e) {
    var key, selected_model;
    e.preventDefault();
    selected_model = encodeURIComponent(this.model_selection.val());
    key = this.key_input.val();
    return Schema.fetch({
      url: "" + base_uri + "/util/loader?model=" + selected_model + "&key=" + key
    });
  };

  Loader.prototype.render = function() {
    this.replace(this.template('loader')());
    return this;
  };

  return Loader;

})(Spine.Controller);

module.exports = Loader;
});

;require.register("routes/pagination", function(exports, require, module) {
var Pagination,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Pagination = (function(_super) {
  __extends(Pagination, _super);

  function Pagination(_arg) {
    var append_last, append_more, left, page_num, right, _i, _j, _ref;
    this.path = _arg.path, this.total = _arg.total, this.current = _arg.current, this.per_page = _arg.per_page, this.scope = _arg.scope;
    this.render = __bind(this.render, this);
    this.link = __bind(this.link, this);
    Pagination.__super__.constructor.apply(this, arguments);
    if (this.scope == null) {
      this.scope = 5;
    }
    if (this.per_page == null) {
      this.per_page = 30;
    }
    if (this.path == null) {
      this.path = "#/";
    }
    this.links = [];
    if (this.current < 1) {
      this.current = 1;
    }
    this.current = parseInt(this.current);
    this.max = Math.ceil(this.total / this.per_page);
    if (!(this.max > 1)) {
      return this.render();
    }
    this.prev = this.current > 1 ? "" + this.path + "/page/" + (this.current - 1) : false;
    this.next = this.current < this.max ? "" + this.path + "/page/" + (this.current + 1) : false;
    if (this.max <= this.scope) {
      for (page_num = _i = 1, _ref = this.scope; 1 <= _ref ? _i <= _ref : _i >= _ref; page_num = 1 <= _ref ? ++_i : --_i) {
        this.links.push(this.link(page_num));
        if (page_num === this.max) {
          break;
        }
      }
      return this.render();
    }
    append_last = false;
    append_more = false;
    left = this.current - (Math.floor(this.scope / 2));
    if (left < 1) {
      left = 1;
    }
    right = Math.min(left + this.scope - 1, this.max);
    if (left > 1) {
      this.links.push(this.link(1));
    }
    if (left > 2) {
      this.links.push(this.link('...'));
    }
    if (right < this.max) {
      append_last = true;
    }
    if (right < this.max - 1) {
      append_more = true;
    }
    for (page_num = _j = left; left <= right ? _j <= right : _j >= right; page_num = left <= right ? ++_j : --_j) {
      this.links.push(this.link(page_num));
    }
    if (append_more) {
      this.links.push(this.link('...'));
    }
    if (append_last) {
      this.links.push(this.link(this.max));
    }
    this.render();
  }

  Pagination.prototype.link = function(page_num) {
    var link;
    link = {
      text: page_num
    };
    if (!isNaN(page_num)) {
      link.href = "" + this.path + "/page/" + page_num;
    }
    return link;
  };

  Pagination.prototype.render = function() {
    this.replace(this.template("pagination")({
      max: this.max,
      prev: this.prev,
      next: this.next,
      links: this.links,
      current: this.current
    }));
    return this;
  };

  return Pagination;

})(Spine.Controller);

module.exports = Pagination;
});

;require.register("routes/panel", function(exports, require, module) {
var Panel,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Panel = (function(_super) {
  __extends(Panel, _super);

  function Panel(_arg) {
    this.title = _arg.title, this.content = _arg.content, this.size = _arg.size;
    this.render = __bind(this.render, this);
    Panel.__super__.constructor.apply(this, arguments);
    if (this.size == null) {
      this.size = 1;
    }
    this.render();
  }

  Panel.prototype.render = function() {
    this.replace(this.template("panel")({
      size: this.size,
      title: this.title,
      content: this.content
    }));
    return this;
  };

  return Panel;

})(Spine.Controller);

module.exports = Panel;
});

;require.register("routes/record_add", function(exports, require, module) {
var Record, RecordAdd,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Record = require('../models/record');

RecordAdd = (function(_super) {
  __extends(RecordAdd, _super);

  RecordAdd.prototype.elements = {
    "form": "form",
    ".alert-danger": "form_error",
    ".input-group.date": "date"
  };

  function RecordAdd(_arg) {
    this.schema = _arg.schema, this.record = _arg.record, this.modal = _arg.modal;
    this.render = __bind(this.render, this);
    this.submit = __bind(this.submit, this);
    this.saved = __bind(this.saved, this);
    this.error = __bind(this.error, this);
    RecordAdd.__super__.constructor.apply(this, arguments);
    if (this.record == null) {
      this.record = new Record;
    }
    this.render();
    this.record.bind('ajaxError', this.error);
    this.record.bind('ajaxSuccess', this.saved);
    this.modal.find(".modal-title").html("Adding new " + this.schema.name);
    this.modal.find('.btn-default').css('display', 'inline-block').html("Cancel");
    this.modal.find('.btn-primary').css('display', 'inline-block').html("Save");
    this.modal.find(".modal-body").html(this.el);
    this.modal.data('action', 'create');
    this.modal.modal('show');
  }

  RecordAdd.prototype.error = function(record, xhr, statusText, error) {
    var error_fields, errors, field, field_group, _i, _len;
    if (xhr.status !== 400) {
      return;
    }
    error_fields = record.report_error(xhr.responseJSON);
    for (field in error_fields) {
      errors = error_fields[field];
      field_group = this.form.find(".field-group-" + field);
      field_group.addClass('has-error');
      for (_i = 0, _len = errors.length; _i < _len; _i++) {
        error = errors[_i];
        this.form_error.append($("<p/>").html("<strong>" + field + "</strong> " + error));
      }
    }
    this.form_error.css('display', 'block');
    if (error_fields.length > 0) {
      return this.modal.scrollTop(0);
    }
  };

  RecordAdd.prototype.saved = function() {
    this.modal.modal('hide');
    return this.navigate("/record/" + this.schema.name + "/page/" + this.stack.records.page);
  };

  RecordAdd.prototype.submit = function() {
    var field, fields, properties, _i, _len;
    fields = this.form.serializeArray();
    properties = {};
    for (_i = 0, _len = fields.length; _i < _len; _i++) {
      field = fields[_i];
      properties[field.name] = field.value;
    }
    return this.record.updateAttributes({
      model: this.schema.name,
      properties: properties
    }, {
      url: "" + base_uri + "/record/" + this.schema.name
    });
  };

  RecordAdd.prototype.render = function() {
    this.replace(this.template("record_add")({
      record: this.record,
      schema: this.schema
    }));
    this.date.datepicker();
    return this;
  };

  return RecordAdd;

})(Spine.Controller);

module.exports = RecordAdd;
});

;require.register("routes/record_delete", function(exports, require, module) {
var RecordDelete,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RecordDelete = (function(_super) {
  __extends(RecordDelete, _super);

  function RecordDelete(_arg) {
    this.record = _arg.record, this.schema = _arg.schema, this.modal = _arg.modal;
    this.render = __bind(this.render, this);
    this.destroy = __bind(this.destroy, this);
    this.submit = __bind(this.submit, this);
    RecordDelete.__super__.constructor.apply(this, arguments);
    this.render();
    this.record.bind('change', this.destroy);
    this.modal.find(".modal-title").html("Deleting " + (this.schema.name.toLowerCase()) + " #" + this.record.id);
    this.modal.find('.btn-default').css('display', 'inline-block').html("Cancel");
    this.modal.find('.btn-primary').css('display', 'inline-block').html("Confirm");
    this.modal.find('.modal-body').html(this.el);
    this.modal.data('action', 'delete');
    this.modal.modal('show');
  }

  RecordDelete.prototype.submit = function() {
    return this.record.destroy({
      url: "" + base_uri + "/record/" + this.record.model + "/" + this.record.id
    });
  };

  RecordDelete.prototype.destroy = function() {
    var Flash, flash;
    if (!this.record.destroyed) {
      return;
    }
    this.navigate("/record/" + this.schema.name + "/page/" + this.stack.records.page);
    $('.modal').modal('hide');
    Flash = require('./flash');
    return flash = new Flash("info", "" + this.schema.name + " id #" + this.record.id + " has been successfully deleted");
  };

  RecordDelete.prototype.render = function() {
    this.replace(this.template("record_delete")({
      record: this.record,
      schema: this.schema
    }));
    return this;
  };

  return RecordDelete;

})(Spine.Controller);

module.exports = RecordDelete;
});

;require.register("routes/record_edit", function(exports, require, module) {
var RecordEdit,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RecordEdit = (function(_super) {
  __extends(RecordEdit, _super);

  RecordEdit.prototype.elements = {
    "form": "form",
    ".input-group.date": "date",
    ".alert-danger": "form_error"
  };

  function RecordEdit(_arg) {
    this.record = _arg.record, this.schema = _arg.schema, this.modal = _arg.modal;
    this.render = __bind(this.render, this);
    this.submit = __bind(this.submit, this);
    this.saved = __bind(this.saved, this);
    this.error = __bind(this.error, this);
    RecordEdit.__super__.constructor.apply(this, arguments);
    this.render();
    this.record.bind('ajaxError', this.error);
    this.record.bind('ajaxSuccess', this.saved);
    this.modal.find(".modal-title").html("Editing " + this.schema.name + " #" + this.record.id);
    this.modal.find('.btn-default').css('display', 'inline-block').html("Cancel");
    this.modal.find('.btn-primary').css('display', 'inline-block').html("Save");
    this.modal.find(".modal-body").html(this.el);
    this.modal.data('action', 'update');
    this.modal.modal('show');
  }

  RecordEdit.prototype.error = function(record, xhr, statusText, error) {
    var error_fields, errors, field, field_group, _i, _len;
    if (xhr.status !== 400) {
      return;
    }
    error_fields = record.report_error(xhr.responseJSON);
    for (field in error_fields) {
      errors = error_fields[field];
      field_group = this.form.find(".field-group-" + field);
      field_group.addClass('has-error');
      for (_i = 0, _len = errors.length; _i < _len; _i++) {
        error = errors[_i];
        this.form_error.append($("<p/>").html("<strong>" + field + "</strong> " + error));
      }
    }
    this.form_error.css('display', 'block');
    if (error_fields.length > 0) {
      return this.modal.scrollTop(0);
    }
  };

  RecordEdit.prototype.saved = function() {
    var Flash, flash;
    $(".record-id.selected").removeClass('selected');
    this.modal.modal('hide');
    this.navigate("/record/" + this.schema.name + "/page/" + this.stack.records.page);
    Flash = require('./flash');
    return flash = new Flash("success", "" + this.schema.name + " id #" + this.record.id + " has been successfully saved");
  };

  RecordEdit.prototype.submit = function() {
    var field, fields, properties, _i, _len;
    fields = this.form.serializeArray();
    properties = {};
    for (_i = 0, _len = fields.length; _i < _len; _i++) {
      field = fields[_i];
      properties[field.name] = field.value;
    }
    return this.record.updateAttributes({
      model: this.schema.name,
      properties: properties
    }, {
      url: "" + base_uri + "/record/" + this.schema.name
    });
  };

  RecordEdit.prototype.render = function() {
    this.replace(this.template("record_edit")({
      record: this.record,
      schema: this.schema
    }));
    this.date.datepicker();
    return this;
  };

  return RecordEdit;

})(Spine.Controller);

module.exports = RecordEdit;
});

;require.register("routes/record_view", function(exports, require, module) {
var RecordView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RecordView = (function(_super) {
  __extends(RecordView, _super);

  RecordView.prototype.events = {
    "click .field-value": "select"
  };

  function RecordView(_arg) {
    this.record = _arg.record, this.schema = _arg.schema, this.modal = _arg.modal;
    this.render = __bind(this.render, this);
    this.select = __bind(this.select, this);
    RecordView.__super__.constructor.apply(this, arguments);
    this.render();
    this.modal.find(".modal-title").html("Viewing " + (this.schema.name.toLowerCase()) + " #" + this.record.id);
    this.modal.find(".modal-body").html(this.el);
    this.modal.find('.btn-default').css('display', 'inline-block').html("Close");
    this.modal.find('.btn-primary').css("display", 'none');
    this.modal.modal('show');
    this.modal.on('hide.bs.modal', (function(_this) {
      return function() {
        return _this.navigate("/record/" + _this.schema.name + "/page/" + _this.stack.records.page);
      };
    })(this));
  }

  RecordView.prototype.select = function(e) {
    return selectText(e.target);
  };

  RecordView.prototype.render = function() {
    this.replace(this.template("record_view")({
      record: this.record,
      schema: this.schema
    }));
    return this;
  };

  return RecordView;

})(Spine.Controller);

module.exports = RecordView;
});

;require.register("routes/records", function(exports, require, module) {
var Empty, Pagination, Record, RecordAdd, RecordDelete, RecordEdit, RecordModel, RecordView, Row, SchemaModel,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SchemaModel = require('../models/schema');

RecordModel = require('../models/record');

Row = require('./row');

Empty = require('./empty');

Pagination = require('./pagination');

RecordAdd = require('./record_add');

RecordView = require('./record_view');

RecordEdit = require('./record_edit');

RecordDelete = require('./record_delete');

Record = (function(_super) {
  __extends(Record, _super);

  Record.prototype.elements = {
    ".page-header .title": "title",
    ".modal.detail": "detail_modal",
    ".modal.action": "action_modal",
    ".panel-heading": "desc",
    ".tables": "table_container",
    ".table-records": "table_records",
    ".table-records thead": "records_header",
    ".table-records tbody": "records",
    ".table-ids": "table_ids",
    ".table-ids thead": "ids_header",
    ".table-ids tbody": "ids",
    ".pagination": "pagination",
    ".btn.add": "btn_add",
    ".btn.view": "btn_view",
    ".btn.edit": "btn_edit",
    ".btn.delete": "btn_delete"
  };

  Record.prototype.events = {
    "click .page-header button.reload": "reload",
    "click .record-value": "detail",
    "click .record-id": "selectRow",
    "click .record-id.selected": "deselectRow",
    "click .modal.detail .content": "selectValue",
    "click .actions .add": "showAddModal",
    "click .actions .view": "showViewModal",
    "click .actions .edit": "showEditModal",
    "click .actions .delete": "showDeleteModal",
    "click .modal.action .btn-primary": "submit",
    "click .sort": "sort"
  };

  function Record() {
    this.render = __bind(this.render, this);
    this.sort = __bind(this.sort, this);
    this.selectValue = __bind(this.selectValue, this);
    this.deselectRow = __bind(this.deselectRow, this);
    this.selectRow = __bind(this.selectRow, this);
    this.detail = __bind(this.detail, this);
    this.submit = __bind(this.submit, this);
    this["delete"] = __bind(this["delete"], this);
    this.edit = __bind(this.edit, this);
    this.view = __bind(this.view, this);
    this.add = __bind(this.add, this);
    this.showDeleteModal = __bind(this.showDeleteModal, this);
    this.showEditModal = __bind(this.showEditModal, this);
    this.showViewModal = __bind(this.showViewModal, this);
    this.showAddModal = __bind(this.showAddModal, this);
    this.paginate = __bind(this.paginate, this);
    this.createRecords = __bind(this.createRecords, this);
    this.fetchRecords = __bind(this.fetchRecords, this);
    this.createSchemas = __bind(this.createSchemas, this);
    this.reload = __bind(this.reload, this);
    Record.__super__.constructor.apply(this, arguments);
    this.render();
    if (this.per_page == null) {
      this.per_page = 30;
    }
    if (this.sort_field == null) {
      this.sort_field = 'id';
    }
    if (this.sort_direction == null) {
      this.sort_direction = "DESC";
    }
    SchemaModel.bind('refresh', this.createSchemas);
    RecordModel.bind('refresh', this.createRecords);
  }

  Record.prototype.reload = function() {
    return this.configure(this.model, this.page);
  };

  Record.prototype.configure = function(model, page) {
    this.model = model;
    this.page = page != null ? page : 1;
    this.stack.swap.scene = 'record';
    this.title.html(this.model);
    SchemaModel.fetch({
      url: "" + base_uri + "/schema/" + this.model
    });
    this.desc.html('&nbsp;');
    this.ids_header.html('');
    this.records_header.html('');
    this.ids.html('');
    this.records.html('');
    this.pagination.html('');
    this.btn_add.css('display', 'none');
    this.btn_view.css('display', 'none');
    this.btn_edit.css('display', 'none');
    this.btn_delete.css('display', 'none');
    return this.active();
  };

  Record.prototype.createSchemas = function(schemas) {
    if (this.stack.swap.scene !== 'record') {
      return;
    }
    this.schema = schemas.pop();
    return this.fetchRecords();
  };

  Record.prototype.fetchRecords = function() {
    return RecordModel.fetch({
      url: "" + base_uri + "/record/" + this.model + "/page/" + this.page + "?per_page=" + this.per_page + "&direction=" + this.sort_direction
    });
  };

  Record.prototype.createRecords = function(records) {
    var div, dropdown, empty, first, full_width, has_records, header, name, record, row, th, toggler, value, _i, _len, _ref;
    this.btn_add.css('display', 'inline-block');
    this.ids_header.html("<tr><th>&nbsp;</th></tr>");
    header = $("<tr/>");
    has_records = records.length > 0;
    _ref = this.schema.properties;
    for (name in _ref) {
      value = _ref[name];
      if (has_records && value.sortable) {
        toggler = $('<div/>').addClass('dropdown-toggle');
        toggler.attr('data-toggle', 'dropdown');
        toggler.attr('id', "th-dropdown-" + name);
        toggler.html(name);
        toggler.append('<span class="caret"></span>');
        dropdown = $('<ul/>').addClass('dropdown-menu');
        dropdown.attr('role', 'menu');
        dropdown.append("<li><a class='sort' data-dir='ASC' data-field='" + name + "' href='javascript: void(0);'>Ascending</a></li>");
        dropdown.append("<li><a class='sort' data-dir='DESC' data-field='" + name + "' href='javascript: void(0);'>Descending</a></li>");
        div = $("<div/>").addClass('dropdown');
        div.append(toggler);
        div.append(dropdown);
        th = $("<th/>").append(div);
        header.append(th);
      } else {
        header.append($("<th/>").html(name));
      }
    }
    this.records_header.html(header);
    if (records.length === 0) {
      empty = new Empty;
      this.records.html(empty.el);
      this.ids.append("<tr><td class='record-id-none'>&nbsp;</td></tr>");
      full_width = this.table_container.width();
      this.table_records.width(full_width - this.table_ids.width() - 2);
      if (this.action) {
        this[this.action](this.schema.name);
      }
      return;
    }
    first = records[0];
    this.paginate(first);
    if (first.range != null) {
      this.desc.html("Showing " + first.range[0] + "-" + first.range[1] + " of " + first.total);
    }
    for (_i = 0, _len = records.length; _i < _len; _i++) {
      record = records[_i];
      this.ids.append("<tr><td class='record-id' id='id-" + record.id + "'>" + record.id + "</td></tr>");
      row = new Row({
        record: record,
        schema: this.schema
      });
      this.records.append(row.el);
    }
    full_width = this.table_container.width();
    this.table_records.width(full_width - this.table_ids.width() - 2);
    this.btn_view.addClass('disabled').css('display', 'inline-block');
    this.btn_edit.addClass('disabled').css('display', 'inline-block');
    this.btn_delete.addClass('disabled').css('display', 'inline-block');
    if (this.action) {
      return this[this.action](this.schema.name);
    }
  };

  Record.prototype.paginate = function(record) {
    var pager;
    pager = new Pagination({
      total: record.total,
      current: this.page,
      per_page: this.per_page,
      path: "#/record/" + this.model
    });
    return this.pagination.html(pager.el);
  };

  Record.prototype.showAddModal = function() {
    return this.navigate("/record/" + this.schema.name + "/add");
  };

  Record.prototype.showViewModal = function() {
    return this.navigate("/record/" + this.schema.name + "/view/" + this.selected_id);
  };

  Record.prototype.showEditModal = function() {
    return this.navigate("/record/" + this.schema.name + "/edit/" + this.selected_id);
  };

  Record.prototype.showDeleteModal = function() {
    return this.navigate("/record/" + this.schema.name + "/delete/" + this.selected_id);
  };

  Record.prototype.add = function(model) {
    this.action = null;
    if (this.schema && this.schema.name === model) {
      this.record = new RecordModel;
      return this.action_handler = new RecordAdd({
        record: this.record,
        schema: this.schema,
        modal: this.action_modal
      });
    } else {
      this.action = 'add';
      return this.configure(model);
    }
  };

  Record.prototype.view = function(model, id) {
    var page;
    this.action = null;
    if (this.selected_id == null) {
      this.selected_id = id;
    }
    this.record = RecordModel.find(this.selected_id);
    if (!this.record) {
      return this.navigate("/record/" + model);
    }
    if (this.schema && this.schema.name === model) {
      return this.action_handler = new RecordView({
        record: this.record,
        schema: this.schema,
        modal: this.action_modal
      });
    } else {
      this.action = 'view';
      page = Math.floor(this.selected_id / this.per_page) + 1;
      return this.configure(model, page);
    }
  };

  Record.prototype.edit = function(model, id) {
    var page;
    this.action = null;
    if (this.selected_id == null) {
      this.selected_id = id;
    }
    if (this.schema && this.schema.name === model) {
      this.record = RecordModel.find(this.selected_id);
      return this.action_handler = new RecordEdit({
        record: this.record,
        schema: this.schema,
        modal: this.action_modal
      });
    } else {
      this.action = 'edit';
      page = Math.floor(this.selected_id / this.per_page) + 1;
      return this.configure(model);
    }
  };

  Record.prototype["delete"] = function(model, id) {
    var page;
    this.action = null;
    if (this.selected_id == null) {
      this.selected_id = id;
    }
    this.record = RecordModel.find(this.selected_id);
    if (!this.record) {
      return this.navigate("/record/" + model);
    }
    if (this.schema && this.schema.name === model) {
      return this.action_handler = new RecordDelete({
        record: this.record,
        schema: this.schema,
        modal: this.action_modal
      });
    } else {
      this.action = 'delete';
      page = Math.floor(this.selected_id / this.per_page) + 1;
      return this.configure(model);
    }
  };

  Record.prototype.submit = function() {
    var _ref;
    this.action_modal.find(".form-group.has-error").removeClass('has-error');
    this.action_modal.find(".alert-danger").css('display', 'none').html("");
    return (_ref = this.action_handler) != null ? typeof _ref.submit === "function" ? _ref.submit() : void 0 : void 0;
  };

  Record.prototype.detail = function(e) {
    var target;
    e.preventDefault();
    e.stopPropagation();
    target = $(e.target);
    this.detail_modal.find(".modal-title").html(target.data('title'));
    this.detail_modal.find(".content").html(target.data('content'));
    return this.detail_modal.modal('show');
  };

  Record.prototype.selectRow = function(e) {
    var id, id_cell;
    if (this.selected_id) {
      $("#id-" + this.selected_id).removeClass('selected');
      $("#record-id-" + this.selected_id).removeClass('selected');
    }
    id_cell = $(e.target);
    this.selected_id = id = id_cell.html();
    id_cell.addClass('selected');
    $("#record-id-" + id).addClass('selected');
    this.btn_view.removeClass('disabled');
    this.btn_edit.removeClass('disabled');
    return this.btn_delete.removeClass('disabled');
  };

  Record.prototype.deselectRow = function(e) {
    var id, id_cell;
    this.selected_id = null;
    id_cell = $(e.target);
    id = id_cell.html();
    id_cell.removeClass('selected');
    $("#record-id-" + id).removeClass('selected');
    this.btn_view.addClass('disabled');
    this.btn_edit.addClass('disabled');
    return this.btn_delete.addClass('disabled');
  };

  Record.prototype.selectValue = function(e) {
    return selectText(e.target);
  };

  Record.prototype.sort = function(e) {
    var target;
    target = $(e.target);
    this.sort_field = target.data('field');
    this.sort_direction = target.data('dir');
    return this.configure(this.model);
  };

  Record.prototype.render = function() {
    this.replace(this.template("record_scene")({
      model: this.model
    }));
    return this;
  };

  return Record;

})(Spine.Controller);

module.exports = Record;
});

;require.register("routes/row", function(exports, require, module) {
var Row,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Row = (function(_super) {
  __extends(Row, _super);

  function Row(_arg) {
    this.record = _arg.record, this.schema = _arg.schema;
    this.render = __bind(this.render, this);
    Row.__super__.constructor.apply(this, arguments);
    this.render();
    this.record.bind('save', this.render);
  }

  Row.prototype.render = function() {
    this.replace(this.template('row')({
      record: this.record,
      schema: this.schema
    }));
    return this;
  };

  return Row;

})(Spine.Controller);

module.exports = Row;
});

;require.register("routes/schema", function(exports, require, module) {
var Schema, SchemaModel,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SchemaModel = require('../models/schema');

Schema = (function(_super) {
  __extends(Schema, _super);

  Schema.prototype.elements = {
    ".modal": "modal",
    ".txt": "menu_text",
    ".actions .input-group": "actions",
    ".action.create-index .input-group-btn": "create_index_btn",
    ".action.remove-index .input-group-btn": "remove_index_btn",
    ".action.remove-property .input-group-btn": "remove_property_btn",
    ".action.remove-index input": "remove_index_property_field",
    ".action.remove-property input": "remove_property_field",
    ".task-progress": "progress_container",
    ".task-progress .progress-report": "progress",
    ".task-progress .empty": "noprogress",
    ".progress-report .btn-dump": "btn_dump",
    ".progress-report .progress-bar": "progress_bar",
    ".progress-report .progress-bar span": "progress_text",
    ".progress-report .title": "task_title",
    ".progress-report .status": "task_status",
    ".progress-report .errors": "task_errors",
    ".progress-report .objects": "task_objects",
    ".progress-report .time-elapsed": "task_time_elapsed",
    ".progress-report .time-left": "task_time_left",
    ".task-control .btn-play": "btn_play",
    ".task-control .btn-stop": "btn_stop",
    ".task-control .btn-pause": "btn_pause"
  };

  Schema.prototype.events = {
    "click .function": "detail",
    "click .action.create-index .dropdown-menu a": "select_field_to_create_index",
    "click .action.create-index .input-group-btn": "create_index",
    "click .action.remove-index .input-group-btn": "remove_index",
    "click .action.remove-property .input-group-btn": "remove_property",
    "click .progress-report .btn-dump": "task_dump",
    "click .task-control .btn-play": "task_resume",
    "click .task-control .btn-stop": "task_stop",
    "click .task-control .btn-pause": "task_pause"
  };

  function Schema(schema) {
    this.schema = schema;
    this.render = __bind(this.render, this);
    this.task_dump = __bind(this.task_dump, this);
    this.task_pause = __bind(this.task_pause, this);
    this.task_stop = __bind(this.task_stop, this);
    this.task_resume = __bind(this.task_resume, this);
    this.remove_property = __bind(this.remove_property, this);
    this.remove_index = __bind(this.remove_index, this);
    this.create_index = __bind(this.create_index, this);
    this.select_field_to_create_index = __bind(this.select_field_to_create_index, this);
    this.enable_actions = __bind(this.enable_actions, this);
    this.disable_actions = __bind(this.disable_actions, this);
    this.task_done = __bind(this.task_done, this);
    this.task_init = __bind(this.task_init, this);
    this.progress_report = __bind(this.progress_report, this);
    this.detail = __bind(this.detail, this);
    Schema.__super__.constructor.apply(this, arguments);
    this.render();
    this.schema.bind('progress', this.progress_report);
  }

  Schema.prototype.detail = function(e) {
    var target;
    target = $(e.target);
    this.modal.find(".modal-title").html(target.data('title'));
    this.modal.find(".content").html(target.data('content'));
    return this.modal.modal('show');
  };

  Schema.prototype.progress_report = function(schema, data) {
    var status, text;
    if (!this.task_initialized) {
      this.task_init();
    }
    if (data.progress == null) {
      return;
    }
    if (data.progress === 100) {
      text = 'DONE';
      this.task_done();
    } else {
      text = "" + data.progress + "%";
    }
    status = data.status;
    if (status === 'paused') {
      status = "<font style=\"color: #d64e28\">" + data.status + "</font>";
    }
    if (data.progress === 100) {
      status = 'DONE';
    }
    this.task_status.html(status);
    this.task_objects.html("" + data.current + "/" + data.objects);
    this.task_errors.html("" + data.errors.length);
    this.task_time_elapsed.html(this.duration(data.time_elapsed));
    this.task_time_left.html(this.duration(data.time_estimated - data.time_elapsed));
    this.progress_bar.css("width", "" + data.progress + "%");
    return this.progress_text.html("" + text);
  };

  Schema.prototype.task_init = function() {
    if (this.task_initialized) {
      return;
    }
    this.btn_dump.attr('disabled', false);
    this.btn_play.attr('disabled', false);
    this.btn_stop.attr('disabled', false);
    this.btn_pause.attr('disabled', false);
    this.task_title.html(this.schema.task.title);
    this.task_status.html(this.schema.task.status);
    this.task_objects.html("" + this.schema.task.current + "/" + this.schema.task.objects);
    this.task_time_elapsed.html(this.duration(0));
    this.task_time_left.html(this.duration(null));
    this.noprogress.css('display', 'none');
    this.progress.css('display', 'block');
    this.disable_actions();
    return this.task_initialized = true;
  };

  Schema.prototype.task_done = function() {
    this.btn_dump.attr('disabled', 'disabled');
    this.btn_play.attr('disabled', 'disabled');
    this.btn_stop.attr('disabled', 'disabled');
    this.btn_pause.attr('disabled', 'disabled');
    this.enable_actions();
    return this.task_initialized = true;
  };

  Schema.prototype.disable_actions = function() {
    this.actions.find('.btn').attr('disabled', 'disabled');
    return this.actions.find('input').attr('disabled', 'disabled');
  };

  Schema.prototype.enable_actions = function() {
    this.actions.find('.btn').attr('disabled', false);
    return this.actions.find('input').attr('disabled', false);
  };

  Schema.prototype.select_field_to_create_index = function(e) {
    this.selected_field = $(e.target).html();
    this.menu_text = this.el.find(".txt");
    return this.menu_text.html("Index on " + this.selected_field);
  };

  Schema.prototype.create_index = function() {
    if (this.create_index_btn.attr('disabled')) {
      return;
    }
    if (!this.selected_field) {
      return;
    }
    $.getJSON("" + base_uri + "/create_index/" + this.schema.name + "/" + this.selected_field, (function(_this) {
      return function(json) {
        _this.schema.task = json;
        return _this.task_init();
      };
    })(this));
    this.selected_field = null;
    return this.menu_text = 'Select property';
  };

  Schema.prototype.remove_index = function() {
    if (this.remove_index_btn.attr('disabled')) {
      return;
    }
    if (!this.remove_index_property_field.val()) {
      return;
    }
    $.getJSON("" + base_uri + "/remove_index/" + this.schema.name + "/" + (this.remove_index_property_field.val()), (function(_this) {
      return function(json) {
        _this.schema.task = json;
        return _this.task_init();
      };
    })(this));
    return this.remove_index_property_field.val('');
  };

  Schema.prototype.remove_property = function() {
    if (this.remove_property_btn.attr('disabled')) {
      return;
    }
    if (!this.remove_property_field.val()) {
      return;
    }
    $.getJSON("" + base_uri + "/remove_property/" + this.schema.name + "/" + (this.remove_property_field.val()), (function(_this) {
      return function(json) {
        _this.schema.task = json;
        return _this.task_init();
      };
    })(this));
    return this.remove_property_field.val('');
  };

  Schema.prototype.task_resume = function() {
    if (this.btn_play.attr('disabled')) {
      return;
    }
    if (!this.schema.task.id) {
      return;
    }
    return $.getJSON("" + base_uri + "/task/resume/" + this.schema.task.id, (function(_this) {
      return function(json) {
        _this.noprogress.css('display', 'none');
        _this.progress.css('display', 'block');
        _this.progress_container.removeClass('paused');
        _this.btn_play.css('display', 'none');
        _this.btn_pause.css('display', 'inline-block');
        _this.btn_stop.css('display', 'inline-block');
        return _this.disable_actions();
      };
    })(this));
  };

  Schema.prototype.task_stop = function() {
    if (this.btn_stop.attr('disabled')) {
      return;
    }
    if (!this.schema.task.id) {
      return;
    }
    return $.getJSON("" + base_uri + "/task/stop/" + this.schema.task.id, (function(_this) {
      return function(json) {
        _this.progress.css('display', 'none');
        _this.noprogress.css('display', 'block');
        _this.progress_container.removeClass('paused');
        _this.btn_play.css('display', 'none');
        _this.btn_pause.css('display', 'inline-block');
        _this.btn_stop.css('display', 'inline-block');
        return _this.task_done();
      };
    })(this));
  };

  Schema.prototype.task_pause = function() {
    if (this.btn_pause.attr('disabled')) {
      return;
    }
    if (!this.schema.task.id) {
      return;
    }
    return $.getJSON("" + base_uri + "/task/pause/" + this.schema.task.id, (function(_this) {
      return function(json) {
        _this.noprogress.css('display', 'none');
        _this.progress.css('display', 'block');
        _this.task_status.html('paused');
        _this.progress_container.addClass('paused');
        _this.btn_pause.css('display', 'none');
        _this.btn_play.css('display', 'inline-block');
        _this.btn_stop.css('display', 'inline-block');
        return _this.enable_actions();
      };
    })(this));
  };

  Schema.prototype.task_dump = function() {
    var page;
    if (this.btn_dump.attr('disabled')) {
      return;
    }
    if (!this.schema.task.id) {
      return;
    }
    page = window.open("" + base_uri + "/task/dump/" + this.schema.task.id);
    return page.document.title = "Task Dump - " + this.schema.task.id;
  };

  Schema.prototype.duration = function(time) {
    var days, duration, hours, mins, secs;
    time = parseInt(time);
    if (!(time > 0)) {
      return "--:--:--";
    }
    duration = "";
    time = Math.floor(time / 1000);
    days = Math.floor(time / 86400);
    time -= days * 86400;
    hours = Math.floor(time / 3600);
    time -= hours * 3600;
    mins = Math.floor(time / 60);
    time -= mins * 60;
    secs = time % 60;
    if (hours.toString().length === 1) {
      hours = "0" + hours;
    }
    if (mins.toString().length === 1) {
      mins = "0" + mins;
    }
    if (secs.toString().length === 1) {
      secs = "0" + secs;
    }
    if (days > 0) {
      duration += "" + days + ":";
    }
    duration += "" + hours + ":" + mins + ":" + secs;
    return duration;
  };

  Schema.prototype.render = function() {
    this.html(this.template('schema')({
      schema: this.schema,
      duration: this.duration
    }));
    if (this.schema.task.id) {
      this.task_init();
      this.progress_report(this.schema, this.schema.task.progress);
      if (this.schema.task.status === 'paused') {
        this.task_pause();
      }
    }
    return this;
  };

  return Schema;

})(Spine.Controller);

module.exports = Schema;
});

;require.register("routes/schemas", function(exports, require, module) {
var Schema, SchemaModel, SchemaView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SchemaModel = require('../models/schema');

SchemaView = require('./schema');

Schema = (function(_super) {
  __extends(Schema, _super);

  Schema.prototype.elements = {
    ".schema-view": "schema_view",
    ".page-header": "title"
  };

  function Schema() {
    this.render = __bind(this.render, this);
    this.createSchemas = __bind(this.createSchemas, this);
    Schema.__super__.constructor.apply(this, arguments);
    this.render();
    SchemaModel.bind('refresh', this.createSchemas);
  }

  Schema.prototype.configure = function(model) {
    this.model = model;
    this.stack.swap.scene = 'schema';
    this.title.html(this.model);
    SchemaModel.fetch({
      url: "" + base_uri + "/schema/" + this.model
    });
    return this.active();
  };

  Schema.prototype.createSchemas = function(schemas) {
    var view;
    if (this.stack.swap.scene !== 'schema') {
      return;
    }
    this.schema = schemas[0];
    view = new SchemaView({
      schema: this.schema
    });
    return this.schema_view.html(view.el);
  };

  Schema.prototype.render = function() {
    this.replace(this.template("schema_scene")());
    return this;
  };

  return Schema;

})(Spine.Controller);

module.exports = Schema;
});

;require.register("routes/sidebar", function(exports, require, module) {
var SchemaModel, Sidebar,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SchemaModel = require('../models/schema');

Sidebar = (function(_super) {
  __extends(Sidebar, _super);

  Sidebar.prototype.className = "sidebar";

  Sidebar.prototype.elements = {
    ".model-list": 'model_list',
    ".collection-list": 'collection_list'
  };

  function Sidebar() {
    this.render = __bind(this.render, this);
    this.createList = __bind(this.createList, this);
    this.updateCount = __bind(this.updateCount, this);
    Sidebar.__super__.constructor.apply(this, arguments);
    this.subview = require('./sidebar_list');
    this.render();
    SchemaModel.bind('refresh', this.updateCount);
  }

  Sidebar.prototype.updateCount = function(schemas) {
    var schema, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = schemas.length; _i < _len; _i++) {
      schema = schemas[_i];
      $(".count-" + schema.name).html(schema.count);
      window.count[schema.name] = schema.count;
      if (document.getElementById("count-" + schema.name)) {
        document.getElementById("count-" + schema.name).innerHTML = schema.count;
        _results.push(window.models[schema.name] = schema);
      } else {
        _results.push(this.createList(schema));
      }
    }
    return _results;
  };

  Sidebar.prototype.createList = function(schema) {
    var idx, padding, parts, sub, sub_div, sub_title, sub_ul, subs, view, _i, _ref;
    view = new this.subview({
      schema: schema
    });
    if (schema.collection) {
      parts = schema.name.split(":collection:");
      sub = "";
      subs = [];
      padding = 1;
      for (idx = _i = 0, _ref = parts.length; _i <= _ref; idx = _i += 2) {
        if (!parts[idx]) {
          break;
        }
        subs.push(parts[idx]);
        if ($(".collection-" + sub).length === 0) {
          sub_div = $("<div/>").addClass("collection-" + (subs.join('-')));
          sub_div.css('padding-left', "" + padding + "em");
          sub_title = $('<h6/>').addClass("collection-title-" + (subs.join('-'))).html(subs.join(':'));
          sub_ul = $('<ul/>').addClass("sub nav collection-list-" + (subs.join('-')));
          sub_ul.append(view.el);
          sub_div.append(sub_title, sub_ul);
          this.collection_list.append(sub_div);
        } else {
          $(".collection-list-" + (subs.join('-'))).append(view.el);
        }
        padding = padding * 2;
      }
    } else {
      this.model_list.append(view.el);
    }
    return $("#page-wrapper").height($(".navbar-static-side").height() + 60);
  };

  Sidebar.prototype.render = function() {
    var name, schema, _ref;
    this.html(this.template("sidebar")());
    _ref = window.models;
    for (name in _ref) {
      schema = _ref[name];
      this.createList(schema);
    }
    return this;
  };

  return Sidebar;

})(Spine.Controller);

module.exports = Sidebar;
});

;require.register("routes/sidebar_list", function(exports, require, module) {
var SidebarList,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SidebarList = (function(_super) {
  __extends(SidebarList, _super);

  function SidebarList(_arg) {
    var parts;
    this.schema = _arg.schema;
    this.render = __bind(this.render, this);
    SidebarList.__super__.constructor.apply(this, arguments);
    parts = this.schema.name.split(":collection:");
    this.title = parts.pop();
    this.render();
  }

  SidebarList.prototype.render = function() {
    this.replace(this.template('sidebar_list')({
      name: this.schema.name,
      title: this.title,
      collection: this.schema.collection,
      count: this.schema.count
    }));
    return this;
  };

  return SidebarList;

})(Spine.Controller);

module.exports = SidebarList;
});

;
//# sourceMappingURL=app.js.map