<hello>
  <h1>{ title } </h1>
  <p><b>value:</b> <span>{ value }</span></p>
  <button onclick="{increment}">++</button>

  <script>
    this.value = 0;
    this.title = `Hello!`;
    this.observer = opts.observer;

    /**
    * valueをincrementする
    */
    increment() {
      this.value++;
      this.observer.trigger("increment", { value: this.value });
    }
  </script>
</hello>