new Vue({
  el: '#vue-app',
  data: {
    name: 'Glenny',
    job: 'Web Developer',
    team: 'Golden State Warriors'
  },
  methods: {
    greet: function(time){
      return 'Good' + time + ' ' + this.name + '!';
    }
  }
});
