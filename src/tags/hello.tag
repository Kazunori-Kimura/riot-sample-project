<hello>
  <h1>{ title } </h1>
  <p><b>value:</b> <span>{ value }</span></p>
  <button onclick="{increment}">++</button>

  this.value = 0;
  this.title = `Hello!`;

  /**
   * valueをincrementする
   */
  increment() {
    this.value++;
  }
</hello>