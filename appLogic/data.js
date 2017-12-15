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

let counter = 0;

exports.getTaskCount = () => {
  return counter;
}

//Function to show and sort by title
exports.retrieveTasks = () => {

  db.find({}).sort({date_created: -1}).exec((err, doc) => {

    //for each entry in the database do something
    doc.forEach((d) => {
      console.log(`Task title = ${d.title}. Task description = ${d.description}. Task created = ${d.date_created} Task Complete status = ${d.status}.`);
      counter++;
    })
    console.log(counter);
  });
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
