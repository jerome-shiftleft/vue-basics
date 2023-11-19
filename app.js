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
      let goal = this.goal.trim();
      if (goal !== '') {
        this.goals.push(this.goal);
        console.log(this.goals);
        this.goal = '';
      }
    }
  }
});

app.mount('#user-goals');
