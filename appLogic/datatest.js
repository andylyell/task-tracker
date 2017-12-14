//Make sure it is exporting correctly
// console.log('This is the db + function logic');

const Datastore = require('nedb');
let db = new Datastore({filename: 'datastore/tasks.db', autoload: true});

// db.loadDatabase(function(err) {
//   // console.log(db)
// });

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
//   //date_completed: this will not be set until complete.
// }

var people = []

var scott = {
  name: 'Scott',
  sex: 'male',
  age: 45,
}

var ben = {
  name: 'Ben',
  sex: 'male',
  age: 16,
}

var fred = {
  name: 'Fred',
  sex: 'male',
  age: 23,
}

var nick = {
  name: 'Nick',
  sex: 'male',
  age: 31,
}

var yela = {
  name: 'Yela',
  sex: 'female',
  age: 21,
}

var anna = {
  name: 'Anna',
  sex: 'female',
  age: 57,
}

var mel = {
  name: 'Melanie',
  sex: 'female',
  age: 28,
}

var freya = {
  name: 'Freya',
  sex: 'female',
  age: 36,
}

people.push(scott,ben,fred,nick,yela,anna,mel,freya);

// db.insert(people, function(err, doc){
//   console.log('Found user', doc.name);
// });

 // db.find({ name: 'Scott'}, function(err, doc) {
 //   console.log('Found User', doc.name)
 // });

 // db.insert(scott, function(err, doc){
 //   // console.log('Inserted', doc.name, 'With ID', doc._id);
 //   console.log(doc);
 // });


//whats in the datastore?
// db.find({}, function(err, doc){
//    // console.log(doc.length);
//   doc.forEach(function(d){
//     console.log('Found user:', d.name, 'ID = ', d._id);
//   });
// });;

//sorting
db.find({}).sort({name:1}).exec(function(err, doc){
  //currently works just needs to display in order as well
  // console.log(doc);
  doc.forEach(function(d){
    console.log(`User = ${d.name}. Sex = ${d.sex}. Id = ${d._id}`);
  })
});
