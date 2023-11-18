const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name(value, oldValue) {
      console.log('watching!');
      value = value.trim();
      oldValue = oldValue.trim();
      console.log(`old value: ${oldValue}`);
      console.log(`new value: ${value}`);

      let name = value;
      this.fullname = name === '' ? '' : name + ' Gomez';
    }
  },
  computed: {
    // fullname() {
    //   console.log('full name!');
    //   let name = this.name.trim();
    //   name = name === '' ? '' : name + ' Gomez';
    //   return name;
    // }
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
