const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value + lastname;
    },
    submitForm() {
      //event.preventDefault();
      console.log('submitting form');
    },
    add(num = 1) {
      this.counter = this.counter + num;
    },
    reduce(num = 1) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
