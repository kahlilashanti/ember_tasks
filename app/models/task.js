import DS from 'ember-data';
//this is a library that gives us the concept of 'stores'

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
