const Datastore = require('nedb');
const ui = require('./ui.js');
let db = new Datastore({filename: 'datastore/tasks.db', autoload: true});

// console.log(db);

//function to add a task to a database
exports.addTask = () => {

  const title = document.querySelector(ui.DOMstrings.panelTitle);
  const desc = document.querySelector(ui.DOMstrings.panelDescription);
  const created = new Date().toUTCString();
  const completed = 'not completed yet';
  let status = false;

  let task = {
    title: title.value,
    description: desc.value,
    date_created: created,
    date_completed: completed,
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
    db.find({status:false}).sort({date_created: -1}).exec((err, doc) => {
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
exports.deleteTask = () => {
  const tasksToDelete = document.querySelectorAll(ui.DOMstrings.taskTrash);
  for(i=0; i < tasksToDelete.length; i++){
    let task = tasksToDelete[i];
    task.addEventListener('click', () => {
      db.remove({ _id:task.dataset.taskid }, {}, (err, numRemoved) => {
        if(err){
          console.log(err)
        } else {
          console.log(`deleted ${task.dataset.taskid}`);
        }
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
exports.editTasks = (id) => {

  //Get title and description fields
  const title = document.querySelector(ui.DOMstrings.editTitle);
  const description = document.querySelector(ui.DOMstrings.editDesc);

  document.querySelector(ui.DOMstrings.editConfirm).addEventListener('click', () => {
    //when confirm is clicked update task back to the database
    db.update({ _id:id }, { $set: { title:title.value, description:description.value }}, {multi:true}, (err, numReplaced) => {
      if(err){
        console.log(err);
      } else {
        // console.log(numReplaced);
      }
    })
  })
}

//Function to complete tasks
exports.completeTask = (id) => {
  const complete = true;
  //add in data completed field
  // console.log(id);
    const dateComplete = new Date().toUTCString();
    db.update({_id:id}, { $set: { status:complete, date_completed:dateComplete }}, {}, (err, numReplaced) => {
      if(err){
        console.log(err);
      } else {
        console.log(numReplaced);
      }
    })
}


exports.reinstateTask = (id) => {
  const reinstate = false;
  const dateComplete = 'not complete'
  db.update({_id:id}, { $set: { status:reinstate, date_completed:dateComplete }}, {}, (err, numReplaced) => {
    if(err){
      console.log(err);
    } else {
      console.log(numReplaced);
    }
  })
}
