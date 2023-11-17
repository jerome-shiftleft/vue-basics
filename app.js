const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
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