import Ember from 'ember';

export default Ember.Controller.extend({

  //this is where we put the action function for the submit button
  actions: {
    addTask: function(){
      //each of the fields in the form need to be stored in separate variables
      //this is the variable for the title field
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');
      //we test this out by using alert (similar to console.log)
      //alert(title);

      //create new task
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //save to firebase
      newTask.save();

      //clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }

});
