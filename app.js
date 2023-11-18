const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num = 1) {
      this.counter = this.counter + num;
    },
    reduce(num = 1) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
