//modules
const ui = require('./ui.js');
const menu = require('./menu.js');
const data = require('./data.js');



//************// Main Control Initialisation ************//

//Control the application using event listeners initilisation
setUpEventListeners()

//store all active event listeners in a function so that they can be turned on and off
function setUpEventListeners() {

  //================// Active tasks ================//

  //================// Archived tasks ================//
  document.querySelector(ui.DOMstrings.archiveViewButton).addEventListener('click', () => {
    ui.archiveView();
  })

  //================// Active tasks ================//
  document.querySelector(ui.DOMstrings.taskViewButton).addEventListener('click', () => {
    ui.taskView();
  })


  data.retrieveTasks();

  const promise = new Promise((fufill, reject) => {
    var n = data.getTaskCount();
    if(n !== 0){
      fufill(n);
    } else{
      reject(n);
    }
  });

  promise.then((number) => {
    console.log(number);
  }, (number) => {
    console.log(`failed with a number of ${number}`);
  })
  // console.log(data.getTaskCount());



  //================// Panel Control ================//
  //Open panel//
  document.querySelector(ui.DOMstrings.addTaskButton).addEventListener('click', ui.openPanel)

  //Close panel//
  document.querySelector(ui.DOMstrings.panelCancel).addEventListener('click', ui.closePanel)
  document.querySelector(ui.DOMstrings.panelExit).addEventListener('click', ui.closePanel)

  //Clear Panel//
  document.querySelector(ui.DOMstrings.panelExit).addEventListener('click', ui.clearAll)
  document.querySelector(ui.DOMstrings.panelCancel).addEventListener('click', ui.clearAll)


  //================// Add Task ================//
  document.querySelector(ui.DOMstrings.panelConfirm).addEventListener('click', () => {
    data.addTask();
  })


  //================// Search function ================//

  document.querySelector(ui.DOMstrings.searchField).addEventListener('click', () => {
    console.log('Search input field');
  })

  document.querySelector(ui.DOMstrings.taskCountTitle).addEventListener('click', () => {
    console.log('Task Counter Title');
  })

  document.querySelector(ui.DOMstrings.taskCountNumber).addEventListener('click', () => {
    console.log('Task Counter number');
  })

  // document.querySelector(ui.DOMstrings.panelTitle).addEventListener('click', () => {
  //   console.log('Input title');
  // })
  //
  // document.querySelector(ui.DOMstrings.panelDescription).addEventListener('click', () => {
  //   console.log('input description');
  // })

  //Message logging out if event listeners are active
  // console.log('Event Listeners Active');




  //================// Delete Task ================//

  //================// Edit Task ================//

  //================// Date Created ================//

  //================// Date deleted ================//

  //================// Complete Task ================//

  //================// Activate Task ================//

  //================// Switch views ================//

  //================// Menu ================//

}



// document.querySelector(ui.DOMstrings.taskControl).addEventListener('click', () => {
//   console.log('Task Control button');
// })

// document.querySelector(ui.DOMstrings.taskCreated).addEventListener('click', () => {
//   console.log('Task created');
// })

// document.querySelector(ui.DOMstrings.taskEdit).addEventListener('click', () => {
//   console.log('Task Edit');
// })

// document.querySelector(ui.DOMstrings.taskTrash).addEventListener('click', () => {
//   console.log('Task trash');
// })

// document.querySelector(ui.DOMstrings.taskDateComplete).addEventListener('click', () => {
//   console.log('Task Date completed');
// })
