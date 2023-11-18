const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('full name!');
      let name = this.name.trim();
      name = name === '' ? '' : name + ' Gomez';
      return name;
    }
  },
  methods: {
    outputFullName() {
      console.log('outputting full name!');
      let name = this.name.trim();
      name = name === '' ? '' : name + ' Gomez';
      return name;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      console.log('incrementing!');
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log('decrementing');
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
