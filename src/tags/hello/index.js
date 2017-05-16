
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('hello', '<h1>{title} </h1> <p><b>value:</b> <span>{value}</span></p> <button onclick="{increment}">++</button>', '', '', function(opts) {
    this.value = 0;
    this.title = `Hello!`;
    this.observer = opts.observer;

    this.increment = function() {
      this.value++;
      this.observer.trigger("increment", { value: this.value });
    }.bind(this)
});});