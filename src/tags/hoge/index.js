
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('hoge', '<p class="{⁗strong⁗: isStrong}" onclick="{toggleStrong}">value: {this.value}</p>', 'hoge .strong,[data-is="hoge"] .strong{ font-weight: bold; }', '', function(opts) {
    this.isStrong = false;
    this.value = 0;
    this.observer = opts.observer;

    this.toggleStrong = function() {
      this.isStrong = !this.isStrong;
    }.bind(this)

    this.observer.on("increment", (data) => {
      this.value = data.value;
      this.update();
    });
});});