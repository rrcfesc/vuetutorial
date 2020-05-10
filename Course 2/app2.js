let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    select() {
      this.$emit('hi')
      this.selected = true
    }
  }
}
 
let PlanPickerComponent =  {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})