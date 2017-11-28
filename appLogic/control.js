//modules
const ui = require('./ui.js');
const menu = require('./menu.js');
const dbFunc = require('./function.js');

// Make sure it is working correctly
// console.log('This is the control logic');

//************// Main Control Initialisation ************//

//Control the application using event listeners initilisation
setUpEventListeners()

//store all active event listeners in a function so that they can be turned on and off
function setUpEventListeners() {

  document.querySelector(ui.DOMstrings.archiveViewButton).addEventListener('click', () => {
    console.log('archive view button');
  })

  document.querySelector(ui.DOMstrings.taskViewButton).addEventListener('click', () => {
    console.log('Task view button');
  })

  //================// Panel Control ================//
  //Open panel//
  document.querySelector(ui.DOMstrings.addTaskButton).addEventListener('click', ui.openPanel)

  //Close panel//
  document.querySelector(ui.DOMstrings.panelCancel).addEventListener('click', ui.closePanel)
  document.querySelector(ui.DOMstrings.panelExit).addEventListener('click', ui.closePanel)


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

  document.querySelector(ui.DOMstrings.taskComplete).addEventListener('click', () => {
    console.log('Task Complete button');
  })

  document.querySelector(ui.DOMstrings.taskCreated).addEventListener('click', () => {
    console.log('Task created');
  })

  document.querySelector(ui.DOMstrings.taskEdit).addEventListener('click', () => {
    console.log('Task Edit');
  })

  document.querySelector(ui.DOMstrings.taskTrash).addEventListener('click', () => {
    console.log('Task trash');
  })

  document.querySelector(ui.DOMstrings.taskDateComplete).addEventListener('click', () => {
    console.log('Task Date completed');
  })

  document.querySelector(ui.DOMstrings.panelTitle).addEventListener('click', () => {
    console.log('Input title');
  })

  document.querySelector(ui.DOMstrings.panelDescription).addEventListener('click', () => {
    console.log('input description');
  })

  document.querySelector(ui.DOMstrings.panelConfirm).addEventListener('click', () => {
    console.log('confirm button');
  })

  //Message logging out if event listeners are active
  console.log('Event Listeners Active');


  //================// Add Task ================//

  //================// Delete Task ================//

  //================// Edit Task ================//

  //================// Date Created ================//

  //================// Date deleted ================//

  //================// Active tasks ================//

  //================// Archived tasks ================//

  //================// Complete Task ================//

  //================// Activate Task ================//

  //================// Switch views ================//

  //================// Menu ================//

}
