/* develblock:start */
//if(!window.__karma__) {
//   require ("./js/hmr"); 
//}
window._bundler = "fusebox";
/* develblock:end */

window.Popper = require("popper.js");

var App = require("app"),
        Router = require("router"),
        Default = require("default"),
        Setup = require("setup"),
        Helpers = require("helpers"),
        Config = require("config");
require("pager");

App.init(Default);

var Route = Router.init();

Setup.init();

/* develblock:start */
//Code between the ..start and ..end tags will be removed by the BlockStrip plugin during the production build.
//testit is true if running under Karma - see testapp_dev.html
if (typeof testit !== "undefined" && testit) {
    
    var apptest = require("apptest").apptest;

    //Run acceptance tests. - To run only unit tests, comment the apptest call.
    apptest(Route, Helpers, App);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    setTimeout(function () {
        __karma__.start();  //<===== Very Important - executed here!! -- Fusebox needs a delay.
    }, 500);

}
/* develblock:end */

