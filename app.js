const app = Vue.createApp({
  data() {
    return {
      goal: '',
      goals: [],      
    };
  },
  methods: {
    addGoal() {
      console.log('adding goal!');
      this.goals.push(this.goal);
      console.log(this.goals);
      this.goal = '';
    }
  }
});

app.mount('#user-goals');
