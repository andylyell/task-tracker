//Make sure it is exporting correctly
// console.log('This is the user interface logic');

//Const of DOMstrings available
const DOMstrings = {
  archiveViewButton: '#archive__view-button',
  taskViewButton: '#task__view-button',
  addTaskButton: '#add__task-button',
  searchField: '#search__input-field',
  taskCountTitle: '#task__count-title',
  taskCountNumber: '#task__counter-number',
  taskComplete: '#task__complete-button',
  taskCreated: '.task__created-date',
  taskEdit: '.task__edit-button',
  taskTrash: '.task__trash-button',
  taskDateComplete: '.task__date-completed',
  panelExit: '.panel__exit-button',
  panelTitle: '.panel__input-title',
  panelDescription: '.panel__input-description',
  panelCancel: '.panel__cancel-button',
  panelConfirm: '.panel__confirm-button',
  panelContainer: '.panel__container',
  backBlur: '.blur',
}

//makes the DOMstrings available to other modules by exporting it
exports.DOMstrings = DOMstrings;

//Variables available on the module scope for functions
let back = document.querySelector(DOMstrings.backBlur);
let panel = document.querySelector(DOMstrings.panelContainer);

//function controlling the panel opening
exports.openPanel = () => {
    back.style.opacity = '0.5';
    back.style.visibility = 'visible';
    panel.style.top = '0px';
  }

//function controlling the panel closing
exports.closePanel = () => {
    back.style.opacity = '0';
    back.style.visibility = 'hidden';
    panel.style.top = '-1300px';
  }


// //Function to show and hide the copied button
// function showCopied() {
//   clearTimeout(copiedSign);
//   copiedMessage.style.visibility = "visible";
//   copiedMessage.style.opacity = "1";
//   copiedSign = setTimeout(function() {
//     copiedMessage.style.visibility = "hidden";
//     copiedMessage.style.opacity = "0";
//   }, 1500);
// }
//
// //Functions to show/hide more information
// function showInfo() {
//   background.style.visibility = "visible";
//   background.style.opacity = "0.3";
//   modal.style.top = '0';
// }
//
// function hideInfo() {
//   if (w >= 500) {
//     modal.style.top = '-600px';
//   } else {
//     modal.style.top = '-800px';
//   }
//
//   background.style.opacity = "0";
//   background.style.visibility = "hidden";
//
// }
