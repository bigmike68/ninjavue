new Vue({
  el: '#vue-app',
  data: {
    name: 'Glenny',
    job: 'Web Developer',
    team: 'Golden State Warriors',
    website: 'https://www.si.com/',
    website2: 'https://www.espn.com/',
    websiteTag: '<a href="https://www.espn.com/">ESPN Online</a>'
  },
  methods: {
    greet: function(time){
      return 'Good' + time + ' ' + this.name + '!';
    }
  }
});
