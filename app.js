const app = Vue.createApp({
  data() {
    return {
      goal: '',
      goals: ['Finish the course!'],      
    };
  },
  methods: {
    addGoal() {
      console.log('adding goal!');
      this.goals.push(this.goal);
      console.log(this.goals);
    }
  }
});

app.mount('#user-goals');
