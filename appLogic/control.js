//modules
const ui = require('./ui.js');
const menu = require('./menu.js');
const dbFunc = require('./function.js');

// Make sure it is working correctly
// console.log('This is the control logic');


//************// Main Control Initialisation //************//

//Control the application using event listeners init
setUpEventListeners()


//************// Event listeners //************//

//store all active event listeners in a function so that they can be turned on and off
function setUpEventListeners() {

  document.querySelector(ui.DOMstrings.archiveViewButton).addEventListener('click', () => {
    console.log('archive view button');
  })

  document.querySelector(ui.DOMstrings.taskViewButton).addEventListener('click', () => {
    console.log('Task view button');
  })

  document.querySelector(ui.DOMstrings.addTaskButton).addEventListener('click', () => {
    console.log('Add task button');
  })

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

  console.log('Event Listeners Active');

}


//================// Add Task //================//


//================// Delete Task //================//


//================// Edit Task //================//


//================// Date Created //================//


//================// Date deleted //================//


//================// Active tasks //================//


//================// Archived tasks //================//


//================// Search function //================//


//================// Complete Task //================//


//================// Activate Task //================//


//================// Switch views //================//


//================// Menu //================//
