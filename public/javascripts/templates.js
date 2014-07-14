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
require.register("index.html", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),title = locals_.title;
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"description\" content=\"Recore Admin\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui\">\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n    <title>" + (jade.escape((jade_interp = title || 'Recore Admin') == null ? '' : jade_interp)) + "</title>\n    <link rel=\"stylesheet\" href=\"stylesheets/vendor.css\">\n    <link rel=\"stylesheet\" href=\"stylesheets/app.css\">\n    <script src=\"javascripts/vendor.js\"></script>\n    <script src=\"javascripts/templates.js\"></script>\n    <script src=\"javascripts/app.js\"></script>\n    <script src=\"bootstrap.js\"></script>\n    <script src=\"socket.js\"></script>\n    <script>\n      function selectText(element) {\n        if (document.selection) {\n          var range = document.body.createTextRange();\n          range.moveToElementText(element);\n          range.select();\n        } else if (window.getSelection) {\n          var range = document.createRange();\n          range.selectNode(element);\n          window.getSelection().addRange(range);\n        }\n      }\n      \n      $.fn.datepicker.defaults.format = 'yyyy-mm-dd'\n      \n      var config = require('config');\n      var App = require('initialize');\n      var count = [];\n      \n    </script>\n  </head>\n  <body>\n    <div id=\"wrapper\"></div>\n  </body>\n</html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/dashboard", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"dashboard container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">Dashboard</h1>\n    </div>\n  </div>\n  <div class=\"row node-selection\">\n    <div class=\"col-lg-3\">\n      <div class=\"input-group\">\n        <input type=\"text\" placeholder=\"Server node\" class=\"form-control\"/>\n        <div class=\"input-group-addon\"><span class=\"fa fa-angle-double-right\"></span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row widgets\"></div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/empty", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),text = locals_.text;
var jade_indent = [];
buf.push("\n<tr>\n  <td colspan=\"1000\"><span style=\"font-family: monospace; font-style: italic; color: #999\">" + (jade.escape((jade_interp = text) == null ? '' : jade_interp)) + "</span></td>\n</tr>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/finder", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"key_finder container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">Key Finder</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input type=\"text\" name=\"key\" placeholder=\"Key\" autocomplete=\"off\" class=\"form-control\"/>\n              <div class=\"input-group-addon\"><span class=\"fa fa-search\"></span></div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-warning\">Find</button>\n          </div>\n        </form>\n        <div class=\"result\"></div>\n      </div>\n    </div>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/flash", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),type = locals_.type,message = locals_.message;
var jade_indent = [];
buf.push("\n<div class=\"flash\">\n  <div" + (jade.cls(['alert','alert-dissmiable',"alert-" + (type ? type : 'info') + ""], [null,null,true])) + ">\n    <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button>\n    <p>" + (jade.escape((jade_interp = message) == null ? '' : jade_interp)) + "</p>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/footer", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/header", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),title = locals_.title,subtitle = locals_.subtitle;
var jade_indent = [];
buf.push("\n<div style=\"margin-bottom: 0\" class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"nav-header\">\n    <button type=\"button\" data-toggle=\"collapse\" data-target=\".sidebar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"#/\" class=\"navbar-brand\">" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "<sup>ALPHA</sup>");
if (subtitle)
{
buf.push("<span> for " + (jade.escape((jade_interp = subtitle) == null ? '' : jade_interp)) + "</span>");
}
buf.push("</a>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/loader", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"loader container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">Collection Loader</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <select class=\"select-model form-control\">\n              <option>Select model</option>");
// iterate this.models
;(function(){
  var $$obj = this.models;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var model = $$obj[name];

buf.push("\n              <option" + (jade.attr("value", "" + (name) + "", true, false)) + ">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var model = $$obj[name];

buf.push("\n              <option" + (jade.attr("value", "" + (name) + "", true, false)) + ">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <input type=\"text\" name=\"key\" placeholder=\"Key\" autocomplete=\"off\" class=\"form-control\"/>\n              <div class=\"input-group-addon\"><span class=\"fa fa-play\"></span></div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-warning\">Load</button>\n          </div>\n        </form>\n        <div class=\"result\"></div>\n      </div>\n    </div>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/pagination", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),max = locals_.max,prev = locals_.prev,links = locals_.links,current = locals_.current,next = locals_.next;
var jade_indent = [];
if (max > 1)
{
buf.push("\n<ul class=\"pagination\">\n  <li" + (jade.cls(["" + (prev ? '' : 'disabled') + ""], [true])) + ">");
if (prev)
{
buf.push("<a" + (jade.attr("href", "" + (prev) + "", true, false)) + "><span class=\"fa fa-caret-left\"></span></a>");
}
else
{
buf.push("<a href=\"javascript: void(0);\"><span class=\"fa fa-caret-left\"></span></a>");
}
buf.push("\n  </li>");
// iterate links
;(function(){
  var $$obj = links;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var link = $$obj[$index];

buf.push("\n  <li" + (jade.cls(["" + (link.text == current ? 'active' : '') + ""], [true])) + ">");
if (link.href)
{
buf.push("<a" + (jade.attr("href", "" + (link.href) + "", true, false)) + ">" + (jade.escape((jade_interp = link.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("\n    <link class=\"text\"/>");
}
buf.push("\n  </li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var link = $$obj[$index];

buf.push("\n  <li" + (jade.cls(["" + (link.text == current ? 'active' : '') + ""], [true])) + ">");
if (link.href)
{
buf.push("<a" + (jade.attr("href", "" + (link.href) + "", true, false)) + ">" + (jade.escape((jade_interp = link.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("\n    <link class=\"text\"/>");
}
buf.push("\n  </li>");
    }

  }
}).call(this);

buf.push("\n  <li" + (jade.cls(["" + (next ? '' : 'disabled') + ""], [true])) + ">");
if (next)
{
buf.push("<a" + (jade.attr("href", "" + (next) + "", true, false)) + "><span class=\"fa fa-caret-right\"></span></a>");
}
else
{
buf.push("<a href=\"javascript: void(0);\"><span class=\"fa fa-caret-right\"></span></a>");
}
buf.push("\n  </li>\n</ul>");
}
else
{
buf.push("\n<div class=\"no-pagination\"></div>");
};return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/panel", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),title = locals_.title,content = locals_.content;
var jade_indent = [];
buf.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "</div>\n  <div class=\"panel-body\">");
if (typeof(content) != 'object')
{
buf.push("\n    <pre>" + (jade.escape((jade_interp = content) == null ? '' : jade_interp)) + "</pre>");
}
else if (Array.isArray(content))
{
buf.push("\n    <table class=\"table table-striped table-bordered\">\n      <tbody>");
// iterate content
;(function(){
  var $$obj = content;
  if ('number' == typeof $$obj.length) {

    for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
      var item = $$obj[idx];

if (typeof(item) == 'string')
{
buf.push("\n        <tr>\n          <td>" + (jade.escape((jade_interp = item) == null ? '' : jade_interp)) + "</td>\n        </tr>");
}
else
{
buf.push("\n        <tr>");
// iterate item
;(function(){
  var $$obj = item;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var value = $$obj[key];

buf.push("\n          <td>" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var value = $$obj[key];

buf.push("\n          <td>" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  }
}).call(this);

buf.push("\n        </tr>");
}
    }

  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;      var item = $$obj[idx];

if (typeof(item) == 'string')
{
buf.push("\n        <tr>\n          <td>" + (jade.escape((jade_interp = item) == null ? '' : jade_interp)) + "</td>\n        </tr>");
}
else
{
buf.push("\n        <tr>");
// iterate item
;(function(){
  var $$obj = item;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var value = $$obj[key];

buf.push("\n          <td>" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var value = $$obj[key];

buf.push("\n          <td>" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</td>");
    }

  }
}).call(this);

buf.push("\n        </tr>");
}
    }

  }
}).call(this);

buf.push("\n      </tbody>\n    </table>");
}
else
{
// iterate content
;(function(){
  var $$obj = content;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var value = $$obj[key];

buf.push("\n    <div class=\"row\">\n      <label class=\"field-name col-lg-5\">" + (jade.escape((jade_interp = key) == null ? '' : jade_interp)) + ":</label>\n      <div class=\"field-value col-lg-7\">" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</div>\n    </div>");
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var value = $$obj[key];

buf.push("\n    <div class=\"row\">\n      <label class=\"field-name col-lg-5\">" + (jade.escape((jade_interp = key) == null ? '' : jade_interp)) + ":</label>\n      <div class=\"field-value col-lg-7\">" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</div>\n    </div>");
    }

  }
}).call(this);

}
buf.push("\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/record_add", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),schema = locals_.schema,default_value = locals_.default_value,value = locals_.value;
var jade_indent = [];
buf.push("\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div style=\"display: none\" class=\"alert alert-danger\"></div>\n    <form class=\"form-horizontal\">");
// iterate schema.properties
;(function(){
  var $$obj = schema.properties;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

default_value = property.default_value
if (!default_value) default_value = ""
buf.push("\n      <div" + (jade.cls(['form-group',"field-group-" + (name) + ""], [null,true])) + ">\n        <label class=\"control-label field-name col-lg-4\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</label>\n        <div class=\"col-lg-8\">");
if (property.type == 'integer' || property.type == 'float')
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"" + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/>");
}
else if (property.type == 'boolean')
{
value = default_value ? true : false
buf.push("\n          <label class=\"control-label radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"1\"" + (jade.attr("checked", value, true, false)) + "/>YES\n          </label>\n          <label class=\"control-label radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"0\"" + (jade.attr("checked", !value, true, false)) + "/>NO\n          </label>");
}
else if (property.type == 'timestamp')
{
buf.push("\n          <div" + (jade.cls(['input-group',"" + (default_value == '[Function]' ? '' : 'date') + ""], [null,true])) + ">\n            <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"date " + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/><span class=\"input-group-addon\"><i class=\"fa fa-th\"></i></span>\n          </div>");
}
else
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"" + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/>");
}
buf.push("\n          <div class=\"help-block\"></div>\n        </div>\n      </div>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

default_value = property.default_value
if (!default_value) default_value = ""
buf.push("\n      <div" + (jade.cls(['form-group',"field-group-" + (name) + ""], [null,true])) + ">\n        <label class=\"control-label field-name col-lg-4\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</label>\n        <div class=\"col-lg-8\">");
if (property.type == 'integer' || property.type == 'float')
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"" + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/>");
}
else if (property.type == 'boolean')
{
value = default_value ? true : false
buf.push("\n          <label class=\"control-label radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"1\"" + (jade.attr("checked", value, true, false)) + "/>YES\n          </label>\n          <label class=\"control-label radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"0\"" + (jade.attr("checked", !value, true, false)) + "/>NO\n          </label>");
}
else if (property.type == 'timestamp')
{
buf.push("\n          <div" + (jade.cls(['input-group',"" + (default_value == '[Function]' ? '' : 'date') + ""], [null,true])) + ">\n            <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"date " + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/><span class=\"input-group-addon\"><i class=\"fa fa-th\"></i></span>\n          </div>");
}
else
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("disabled", default_value=='[Function]', true, false)) + (jade.attr("placeholder", "" + (default_value == '[Function]' ? 'Auto' : default_value) + "", true, false)) + (jade.cls(['form-control',"" + (default_value == '[Function]' ? 'disabled' : '') + ""], [null,true])) + "/>");
}
buf.push("\n          <div class=\"help-block\"></div>\n        </div>\n      </div>");
    }

  }
}).call(this);

buf.push("\n    </form>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/record_delete", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),schema = locals_.schema,record = locals_.record;
var jade_indent = [];
buf.push("\n<p class=\"caution\">Delete " + (jade.escape((jade_interp = schema.name.toLowerCase()) == null ? '' : jade_interp)) + " id  <code>#" + (jade.escape((jade_interp = record.id) == null ? '' : jade_interp)) + "</code></p>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/record_edit", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),schema = locals_.schema,value = locals_.value,record = locals_.record,time = locals_.time;
var jade_indent = [];
buf.push("\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div style=\"display: none\" class=\"alert alert-danger\"></div>\n    <form class=\"form-horizontal\">");
// iterate schema.properties
;(function(){
  var $$obj = schema.properties;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

value = record.properties[name]
buf.push("\n      <div class=\"form-group\">\n        <label class=\"field-name col-lg-4\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</label>\n        <div class=\"col-lg-8\">");
if (property.type == 'integer' || property.type == 'float')
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (value) + "", true, false)) + " class=\"form-control\"/>");
}
else if (property.type == 'boolean')
{
buf.push("\n          <label class=\"radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"1\"" + (jade.attr("checked", value, true, false)) + "/>YES\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"0\"" + (jade.attr("checked", !value, true, false)) + "/>NO\n          </label>");
}
else if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("\n          <div class=\"input-group date\">\n            <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (time) + "", true, false)) + " class=\"form-control\"/><span class=\"input-group-addon\"><i class=\"fa fa-th\"></i></span>\n          </div>");
}
else
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (value) + "", true, false)) + " class=\"form-control\"/>");
}
buf.push("\n        </div>\n      </div>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

value = record.properties[name]
buf.push("\n      <div class=\"form-group\">\n        <label class=\"field-name col-lg-4\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</label>\n        <div class=\"col-lg-8\">");
if (property.type == 'integer' || property.type == 'float')
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (value) + "", true, false)) + " class=\"form-control\"/>");
}
else if (property.type == 'boolean')
{
buf.push("\n          <label class=\"radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"1\"" + (jade.attr("checked", value, true, false)) + "/>YES\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\"" + (jade.attr("name", "" + (name) + "", true, false)) + " value=\"0\"" + (jade.attr("checked", !value, true, false)) + "/>NO\n          </label>");
}
else if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("\n          <div class=\"input-group date\">\n            <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (time) + "", true, false)) + " class=\"form-control\"/><span class=\"input-group-addon\"><i class=\"fa fa-th\"></i></span>\n          </div>");
}
else
{
buf.push("\n          <input type=\"text\"" + (jade.attr("name", "" + (name) + "", true, false)) + (jade.attr("value", "" + (value) + "", true, false)) + " class=\"form-control\"/>");
}
buf.push("\n        </div>\n      </div>");
    }

  }
}).call(this);

buf.push("\n    </form>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/record_scene", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"record container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\"><span class=\"title\"></span>\n        <button type=\"button\" class=\"btn btn-default reload\"><span class=\"fa fa-refresh\"></span></button>\n      </h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"> &nbsp;</div>\n        <div class=\"panel-body tables\">\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-default view\"><span class=\"fa fa-eye\"></span>Detail</button>\n            <div class=\"space\"></div>\n            <button type=\"button\" class=\"btn btn-default edit\"><span class=\"fa fa-edit\"></span>Edit</button>\n          </div>\n          <div class=\"actions pull-right\">\n            <button type=\"button\" class=\"btn btn-default delete\"><span class=\"fa fa-times\"></span>Delete</button>\n          </div>\n          <div class=\"clear\"></div>\n          <div class=\"table-responsive\">\n            <div class=\"table-ids\">\n              <table class=\"table table-bordered\">\n                <thead></thead>\n                <tbody></tbody>\n              </table>\n            </div>\n            <div class=\"table-records\">\n              <table class=\"table table-bordered\">\n                <thead class=\"header\"></thead>\n                <tbody></tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-default add\"><span class=\"fa fa-plus-circle\"></span>New</button>\n            <div class=\"space\"></div>\n            <button type=\"button\" class=\"btn btn-default view\"><span class=\"fa fa-eye\"></span>Detail</button>\n            <div class=\"space\"></div>\n            <button type=\"button\" class=\"btn btn-default edit\"><span class=\"fa fa-edit\"></span>Edit</button>\n          </div>\n          <div class=\"actions pull-right\">\n            <button type=\"button\" class=\"btn btn-default delete\"><span class=\"fa fa-times\"></span>Delete</button>\n          </div>\n          <div class=\"clear\"></div>\n          <div class=\"pagination\"></div>\n          <div class=\"clear\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade detail\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n          <h4 class=\"modal-title\"></h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"well\">\n            <div class=\"content\"></div>\n          </div>\n        </div>\n        <div class=\"modal-footer\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade action\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n          <h4 class=\"modal-title\"></h4>\n        </div>\n        <div class=\"modal-body\"></div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n          <div class=\"space\"></div>\n          <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/record_view", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),schema = locals_.schema,value = locals_.value,record = locals_.record,time = locals_.time;
var jade_indent = [];
buf.push("\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <table class=\"table\">\n      <tbody></tbody>");
// iterate schema.properties
;(function(){
  var $$obj = schema.properties;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

value = record.properties[name]
buf.push("\n      <tr>\n        <td class=\"field-name\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</td>");
if (property.type == 'boolean')
{
buf.push("\n        <td class=\"field-value\">\n          <div" + (jade.cls(['label','label-default',"" + (value ? 'label-success' : '') + ""], [null,null,true])) + ">YES</div>\n          <div class=\"space\"></div>\n          <div" + (jade.cls(['label','label-default',"" + (value ? '' : 'label-danger') + ""], [null,null,true])) + ">NO</div>\n        </td>");
}
else if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("\n        <td class=\"field-value\">\n          <pre>");
if (time)
{
buf.push("" + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("<i>EMPTY</i>");
}
buf.push("</pre>\n        </td>");
}
else
{
buf.push("\n        <td class=\"field-value\">\n          <pre>");
if (value)
{
buf.push("" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("<i>EMPTY</i>");
}
buf.push("</pre>\n        </td>");
}
buf.push("\n      </tr>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

value = record.properties[name]
buf.push("\n      <tr>\n        <td class=\"field-name\">" + (jade.escape((jade_interp = name.replace(/_/g, ' ')) == null ? '' : jade_interp)) + "</td>");
if (property.type == 'boolean')
{
buf.push("\n        <td class=\"field-value\">\n          <div" + (jade.cls(['label','label-default',"" + (value ? 'label-success' : '') + ""], [null,null,true])) + ">YES</div>\n          <div class=\"space\"></div>\n          <div" + (jade.cls(['label','label-default',"" + (value ? '' : 'label-danger') + ""], [null,null,true])) + ">NO</div>\n        </td>");
}
else if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("\n        <td class=\"field-value\">\n          <pre>");
if (time)
{
buf.push("" + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("<i>EMPTY</i>");
}
buf.push("</pre>\n        </td>");
}
else
{
buf.push("\n        <td class=\"field-value\">\n          <pre>");
if (value)
{
buf.push("" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("<i>EMPTY</i>");
}
buf.push("</pre>\n        </td>");
}
buf.push("\n      </tr>");
    }

  }
}).call(this);

buf.push("\n    </table>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/row", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),record = locals_.record,schema = locals_.schema,value = locals_.value,time = locals_.time;
var jade_indent = [];
buf.push("\n<tr" + (jade.attr("id", "record-id-" + (record.id) + "", true, false)) + " class=\"record-row\">");
// iterate schema.properties 
;(function(){
  var $$obj = schema.properties ;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

value = record.properties[name]
buf.push("\n  <td" + (jade.cls(["type-" + (property.type == '[Function]' ? 'function' : property.type) + ""], [true])) + "><span" + (jade.attr("data-title", "" + (name) + "", true, false)) + (jade.attr("data-content", "" + (value) + "", true, false)) + " class=\"record-value\">");
if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("" + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "");
}
buf.push("</span></td>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

value = record.properties[name]
buf.push("\n  <td" + (jade.cls(["type-" + (property.type == '[Function]' ? 'function' : property.type) + ""], [true])) + "><span" + (jade.attr("data-title", "" + (name) + "", true, false)) + (jade.attr("data-content", "" + (value) + "", true, false)) + " class=\"record-value\">");
if (property.type == 'timestamp')
{
if (value && value.toString().length == 10) value = value * 1000
time = value ? this.moment(value).format("YYYY-MM-DD HH:mm:ss ZZ") : ''
buf.push("" + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "");
}
buf.push("</span></td>");
    }

  }
}).call(this);

buf.push("\n</tr>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/schema", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),schema = locals_.schema,odd = locals_.odd,duration = locals_.duration;
var jade_indent = [];
buf.push("\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-lg-3\">\n      <p class=\"id-generator\"><span>ID Generator:</span><code>" + (jade.escape((jade_interp = schema.id_generator) == null ? '' : jade_interp)) + "</code>");
if (schema.id_generator == '[Function]')
{
buf.push("<span data-title=\"ID Generator\"" + (jade.attr("data-content", "" + (schema._id_generator) + "", true, false)) + " class=\"fa fa-caret-right function\"></span>");
}
buf.push("\n      </p>\n      <p class=\"object-count\"><span>Objects:</span><code>" + (jade.escape((jade_interp = schema.count) == null ? '' : jade_interp)) + "</code></p>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Properties </div>\n      <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped table-bordered table-hover properties\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Index</th>\n                <th>Default Value</th>\n              </tr>\n            </thead>\n            <tbody>");
odd = -1
// iterate schema.properties 
;(function(){
  var $$obj = schema.properties ;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

odd = -odd
buf.push("\n              <tr" + (jade.cls(["" + (odd > 0 ? 'odd' : 'even') + ""], [true])) + ">\n                <td class=\"name\"><code>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</code></td>\n                <td class=\"type\"><code>" + (jade.escape((jade_interp = property.type) == null ? '' : jade_interp)) + "</code>");
if (property.type == '[Function]')
{
buf.push("<span" + (jade.attr("data-title", "Type of '" + (name) + "'", true, false)) + (jade.attr("data-content", "" + (property._type) + "", true, false)) + " class=\"fa fa-caret-right function\"></span>");
}
buf.push("\n                </td>\n                <td class=\"index\">");
if (property.index || property.unique)
{
buf.push("<span" + (jade.cls(['fa',"" + (property.unique ? 'fa-bolt' : 'fa-check') + ""], [null,true])) + "></span>");
}
else
{
buf.push("<span class=\"fa fa-times\"></span>");
}
buf.push("\n                </td>\n                <td class=\"default_value\">");
if (property.default_value)
{
buf.push("<code>" + (jade.escape((jade_interp = property.default_value) == null ? '' : jade_interp)) + "</code>");
if (property.default_value == '[Function]')
{
buf.push("<span" + (jade.attr("data-title", "Default Value of '" + (name) + "'", true, false)) + (jade.attr("data-content", "" + (property._default_value) + "", true, false)) + " class=\"fa fa-caret-right function\"></span>");
}
}
else
{
buf.push("<span class=\"grey\">Undefined</span>");
}
buf.push("\n                </td>\n              </tr>");
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

odd = -odd
buf.push("\n              <tr" + (jade.cls(["" + (odd > 0 ? 'odd' : 'even') + ""], [true])) + ">\n                <td class=\"name\"><code>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</code></td>\n                <td class=\"type\"><code>" + (jade.escape((jade_interp = property.type) == null ? '' : jade_interp)) + "</code>");
if (property.type == '[Function]')
{
buf.push("<span" + (jade.attr("data-title", "Type of '" + (name) + "'", true, false)) + (jade.attr("data-content", "" + (property._type) + "", true, false)) + " class=\"fa fa-caret-right function\"></span>");
}
buf.push("\n                </td>\n                <td class=\"index\">");
if (property.index || property.unique)
{
buf.push("<span" + (jade.cls(['fa',"" + (property.unique ? 'fa-bolt' : 'fa-check') + ""], [null,true])) + "></span>");
}
else
{
buf.push("<span class=\"fa fa-times\"></span>");
}
buf.push("\n                </td>\n                <td class=\"default_value\">");
if (property.default_value)
{
buf.push("<code>" + (jade.escape((jade_interp = property.default_value) == null ? '' : jade_interp)) + "</code>");
if (property.default_value == '[Function]')
{
buf.push("<span" + (jade.attr("data-title", "Default Value of '" + (name) + "'", true, false)) + (jade.attr("data-content", "" + (property._default_value) + "", true, false)) + " class=\"fa fa-caret-right function\"></span>");
}
}
else
{
buf.push("<span class=\"grey\">Undefined</span>");
}
buf.push("\n                </td>\n              </tr>");
    }

  }
}).call(this);

buf.push("\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"task-progress col-lg-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\"><span class=\"fa fa-tasks\"></span>Running Task</div>\n      <div class=\"panel-body\">\n        <div" + (jade.attr("style", "display: " + (schema.task.id ? 'block' : 'none') + "", true, false)) + " class=\"progress-report\">\n          <div class=\"row\">\n            <div class=\"report col-lg-10\"><span class=\"title\">" + (jade.escape((jade_interp = schema.task.id ? schema.task.title : '') == null ? '' : jade_interp)) + "</span>\n              <div class=\"pull-right\">\n                <div class=\"label label-default\">Status:&nbsp;<span class=\"status\">" + (jade.escape((jade_interp = schema.task.id ? schema.task.status : 'stopped') == null ? '' : jade_interp)) + "</span></div>\n                <div class=\"label label-default\">Objects:&nbsp;<span class=\"objects\">" + (jade.escape((jade_interp = schema.task.id ? schema.task.current + "/" + schema.task.objects : '0/0') == null ? '' : jade_interp)) + "</span></div>\n                <div class=\"label label-default\">Errors:&nbsp;<span class=\"errors\">" + (jade.escape((jade_interp = schema.task.id ? schema.task.errors : 0) == null ? '' : jade_interp)) + "</span></div>\n                <div class=\"label label-default\">Elapsed:&nbsp;<span class=\"time-elapsed\">" + (jade.escape((jade_interp = schema.task.id ? duration(schema.task.elapsed) : duration()) == null ? '' : jade_interp)) + "</span></div>\n                <div class=\"label label-default\">Time Left:&nbsp;<span class=\"time-left\">Time Left: " + (jade.escape((jade_interp = schema.task.id ? duration(schema.task.estimated - schema.task.elapsed) : duration()) == null ? '' : jade_interp)) + "</span></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-10\">\n              <button type=\"button\" style=\"float: left\" class=\"btn btn-default btn-dump\"><span class=\"fa fa-search-plus\"></span></button>\n              <div class=\"progress\">\n                <div" + (jade.attr("style", "width: " + (schema.task.id ? schema.task.progress : 0 ) + "%", true, false)) + " class=\"progress-bar\"><span>" + (jade.escape((jade_interp = schema.task.id ? schema.task.progress : 0 ) == null ? '' : jade_interp)) + "%</span></div>\n              </div>\n            </div>\n            <div class=\"col-lg-2\">\n              <div class=\"task-control\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" style=\"display: none\" class=\"btn btn-default btn-play\"><span class=\"fa fa-play\"></span></button>\n                  <button type=\"button\" class=\"btn btn-default btn-pause\"><span class=\"fa fa-pause\"></span></button>\n                  <button type=\"button\" class=\"btn btn-default btn-stop\"><span class=\"fa fa-stop\"></span></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div" + (jade.attr("style", "display: " + (schema.task.progress ? 'none' : 'block') + "", true, false)) + " class=\"empty\"><i style=\"color: #999\">NONE</i></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"actions col-lg-12\">\n    <div class=\"action create-index col-lg-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><span class=\"fa fa-bolt\"></span>Build Index</div>\n        <div class=\"panel-body\">\n          <div class=\"input-group\">\n            <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default form-control dropdown-toggle\">\n              <p class=\"txt\">Select property</p><span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">");
// iterate schema.properties
;(function(){
  var $$obj = schema.properties;
  if ('number' == typeof $$obj.length) {

    for (var name = 0, $$l = $$obj.length; name < $$l; name++) {
      var property = $$obj[name];

if (property.index || property.unique)
{
buf.push("\n              <li><a href=\"javascript:void(0);\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var name in $$obj) {
      $$l++;      var property = $$obj[name];

if (property.index || property.unique)
{
buf.push("\n              <li><a href=\"javascript:void(0);\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("\n            </ul>\n            <div class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-default\">Go</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"action remove-index col-lg-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><span class=\"fa fa-truck\"></span>Remove Legacy Index</div>\n        <div class=\"panel-body\">\n          <div class=\"input-group\">\n            <input type=\"text\" placeholder=\"Property\" class=\"form-control\"/>\n            <div class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-default\">Go</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"action remove-property col-lg-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><span class=\"fa fa-trash-o\"></span>Remove Legacy Property</div>\n        <div class=\"panel-body\">\n          <div class=\"input-group\">\n            <input type=\"text\" placeholder=\"Property\" class=\"form-control\"/>\n            <div class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-default\">Go</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n        <h4 class=\"modal-title\"></h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"well content\"></div>\n      </div>\n      <div class=\"modal-footer\"></div>\n    </div>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/schema_scene", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"schema container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\"></h2>\n    </div>\n  </div>\n  <div class=\"schema-view\"></div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/sidebar", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<div class=\"navbar-default navbar-static-side\">\n  <div class=\"sidebar-space\"></div>\n  <div class=\"sidebar-collapse\">\n    <h5>Utilities</h5>\n    <ul id=\"side-menu\" class=\"utilities nav\">\n      <li><a href=\"#/finder\"><span class=\"fa fa-key\"></span>Finder</a></li>\n      <li><a href=\"#/loader\"><span class=\"fa fa-sitemap\"></span>Collection Loader</a></li>\n    </ul>\n  </div>\n  <div class=\"sidebar-space\"></div>\n  <div class=\"sidebar-collapse\">\n    <h5>Models</h5>\n    <ul class=\"model-list nav\"></ul>\n  </div>\n  <div class=\"sidebar-space\"></div>\n  <div class=\"sidebar-collapse collection-list\">\n    <h5>Collections</h5>\n  </div>\n</div>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/sidebar_list", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),name = locals_.name,collection = locals_.collection,title = locals_.title,count = locals_.count;
var jade_indent = [];
buf.push("\n<li><a" + (jade.attr("href", "#/record/" + (name) + "", true, false)) + " class=\"record\">");
if (collection)
{
buf.push("<span class=\"fa fa-angle-double-right\"></span>");
}
else
{
buf.push("<span class=\"fa fa-table\"></span>");
}
buf.push("" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "\n    <div" + (jade.attr("id", "count-" + (name) + "", true, false)) + " class=\"label label-default\">" + (jade.escape((jade_interp = count) == null ? '' : jade_interp)) + "</div></a><a" + (jade.attr("href", "#/schema/" + (name) + "", true, false)) + " class=\"schema\"><span class=\"fa fa-chevron-right\"></span></a></li>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=templates.js.map