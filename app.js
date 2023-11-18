const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value + lastname;
      console.log(`name: ${this.name}`);
    },
    confirmInput() {
      console.log('confirming input!');
      this.confirmedName = this.name;
      console.log(`confirmed name: ${this.confirmedName}`);
    },
    submitForm() {
      //event.preventDefault();
      console.log('submitting form!');
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
