const Datastore = require('nedb');
const ui = require('./ui.js');
let db = new Datastore({filename: 'datastore/tasks.db', autoload: true});

// console.log(db);

//function to add a task to a database
exports.addTask = () => {

  const title = document.querySelector(ui.DOMstrings.panelTitle);
  const desc = document.querySelector(ui.DOMstrings.panelDescription);
  const created = new Date().toUTCString();
  let status = false;

  let task = {
    title: title.value,
    description: desc.value,
    date_created: created,
    status: status
  }

  if (title.value == '') {
    console.log('Nothing in the title');
  } else {
    db.insert(task, (err, doc) => {
      console.log(`Inserted task: ${doc.title} with an id of ${doc._id}`);
    })
  }
} 

//ACESS TO THE DATA//
let openTasks;

exports.getOpenTasks = () => {
  return openTasks;
}

//Function to show and sort active tasks by date
exports.retrieveActiveTasks = () => {

  return new Promise((resolve, reject) => {
    db.find({status:false}).sort({date_created: 1}).exec((err, doc) => {
      if (err) {
        return reject();
      } else {
        openTasks = doc;
      }
      resolve();
    });
  });
}

//Function to delete tasks from database
exports.deleteTask = (e) => {
  const tasksToDelete = document.querySelectorAll(ui.DOMstrings.taskTrash);
  console.log(tasksToDelete);
  for(i=0; i < tasksToDelete.length; i++){
    let task = tasksToDelete[i];
    task.addEventListener('click', () => {
      db.remove({ _id:task.dataset.taskid }, {}, (err, numRemoved) => {
        if(err){
          console.log(err)
        } else {
          console.log(`deleted ${task.dataset.taskid}`);
        }
        e.preventDefault();
      })
    })
  }
}

let archivedTasks;

exports.getArchivedTasks = () => {
  return archivedTasks;
}

//Function to show archived tasks
exports.retrieveArchiveTasks = () => {
  return new Promise((resolve, reject) => {
    db.find({status:true}).sort({date_completed: -1}).exec((err, doc) => {
      if (err) {
        return reject();
      } else {
        archivedTasks = doc;
      }
      resolve();
    });
  });
}

//Function to edit tasks
exports.editTasks = () => {
  console.log('stuff');
  //open panel up

  // populate title with current title of tasks

  //populate description with current description of task

  //when confirm is clicked update task back to the database
}

//how would I make this a product

// console.log(`${counter} from data.js`)

// getNames();
//
//
// function getNames() {
//   db.find({}, function(err, doc) {
//     console.log(doc);
//     doc.forEach(function(d) {
//       console.log('Found user:', d.name, 'ID = '  );
//       console.log('1');
//     });
//   });
// }

// var taskExample = {
//   title: 'Finish task X',
//   description: 'This is information about task X',
//   date_created: ${this will be the javaScript Date() function},
//   complete: false,
//   date_completed: this will not be set until complete.
// }

// db.insert(people, function(err, doc){
//   console.log('Found user', doc.name);
// });

// db.find({ name: 'Scott'}, function(err, doc) {
//   console.log('Found User', doc.name)
// });

// db.insert(scott, function(err, doc){
//    console.log('Inserted', doc.name, 'With ID', doc._id);
//   console.log(doc);
// });

//whats in the datastore?
// db.find({}, function(err, doc){
//     console.log(doc.length);
//   doc.forEach(function(d){
//     console.log('Found user:', d.name, 'ID = ', d._id);
//   });
// });;
