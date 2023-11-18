const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },
  watch: {
    counter(value) {
      console.log('watching counter!');
      this.counter = value < 0 ? 0 : value;
      
      // const that = this;
      // if (value > 50) {
      //   setTimeout(function() {
      //     that.counter = 0;
      //   }, 2000);
      // }

      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    }
    // name(value, oldValue) {
    //   console.log('watching name!');
    //   value = value.trim();      
    //   this.fullname = value === '' ? '' : `${value} ${this.lastName}`;
    // },
    // lastName(value) {
    //   console.log('watching lastName!');
    //   console.log('watching lastName!');
    //   value = value.trim();
    //   this.fullname = value === '' ? '' : `${this.name} ${value}`;
    // }
  },
  computed: {
    fullname() {
      console.log('computed full name!');
      let name = this.name.trim();
      let lastName = this.lastName.trim();
      let fullname = `${name} ${lastName}`;
      return fullname;
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
      this.lastName = '';
    }
  }
});

app.mount('#events');
