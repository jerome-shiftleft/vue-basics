const app = Vue.createApp({
  data() {
    return {
      courseGoalA: '<span>Finish the course and learn Vue!</span>',
      courseGoalB: '<span>Master Vue and build amazing apps!</span>',
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      console.log('random number: ', randomNumber);      
      return (randomNumber < 0.5) ? this.courseGoalA : this.courseGoalB;
    }
  }
}); // end of const app = Vue.createApp({

app.mount('#user-goal');