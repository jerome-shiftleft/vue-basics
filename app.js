const app = Vue.createApp({
  data: () => {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    outputGoal: () => {
      const randomNumber = Math.random();
      console.log('random number: ', randomNumber);
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
}); // end of const app = Vue.createApp({

app.mount('#user-goal');