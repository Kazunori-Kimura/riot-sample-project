<hoge>
  <p class={ "strong": isStrong }
    onclick={ toggleStrong }>value: { this.value }</p>

  <style>
    .strong {
      font-weight: bold;
    }
  </style>

  <script>
    this.isStrong = false;
    this.value = 0;
    this.observer = opts.observer;

    toggleStrong() {
      this.isStrong = !this.isStrong;
    }

    this.observer.on("increment", (data) => {
      this.value = data.value;
      this.update();
    });
  </script>
</hoge>