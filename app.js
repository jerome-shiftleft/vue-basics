const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.goal.trim() !== "") {
        const isGoalsEmpty = this.goals.length === 0;

        let id = isGoalsEmpty ? 0 : this.goals[this.goals.length - 1].id + 1;

        this.goals.push({ id, title: this.goal });
        this.goal = "";
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
