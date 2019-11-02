new Vue({
  el: '#vue-app',
  data: {
    name: 'Big Mike',
    job: 'Web Developer',
    team: 'Golden State Warriors'
  },
  methods: {
    greet: function(person){
      return 'Hola' + person;
    }
  }
});
