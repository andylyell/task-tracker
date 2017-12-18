//Const of DOMstrings available
const DOMstrings = {
  archiveViewButton: '#archive__view-button',
  taskViewButton: '#task__view-button',
  addTaskButton: '#add__task-button',
  searchField: '#search__input-field',
  taskCountTitle: '#task__count-title',
  taskCountNumber: '#task__counter-number',
  taskControl: '#task__control-button',
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
  activeTaskContainer: '#task__active-container',
  taskBody: '.task-item-container'
}

//makes the DOMstrings available to other modules by exporting it
exports.DOMstrings = DOMstrings;

//Variables available on the module scope for functions
const back = document.querySelector(DOMstrings.backBlur);
const panel = document.querySelector(DOMstrings.panelContainer);
const addTaskButton = document.querySelector(DOMstrings.addTaskButton);
const searchField = document.querySelector(DOMstrings.searchField);
const taskViewButton = document.querySelector(DOMstrings.taskViewButton);
const archiveViewButton = document.querySelector(DOMstrings.archiveViewButton);
const taskCountNumber = document.querySelector(DOMstrings.taskCountNumber);
const panelTitle = document.querySelector(DOMstrings.panelTitle);
const panelDesc = document.querySelector(DOMstrings.panelDescription);
const panelConfirm = document.querySelector(DOMstrings.panelConfirm);

//**********//function controlling the panel opening
exports.openPanel = () => {
    back.style.opacity = '0.5';
    back.style.visibility = 'visible';
    panel.style.top = '0px';
  }

//**********//function controlling the panel closing
exports.closePanel = () => {
    back.style.opacity = '0';
    back.style.visibility = 'hidden';
    panel.style.top = '-1600px';
  }

//**********//function to clear the input description and input title on cancel or x
exports.clearAll = () => {
    panelTitle.value = ""
    panelDesc.value = ""
  }

//**********//function to update the number in the task counter view
exports.updateTaskCount = (number) => {
  taskCountNumber.innerHTML = number;
}

//**********//function to show error if trying to submit a task without a title
exports.titleError = () => {
  //bring the title input to focus

  //put red 1px border around the input title

  //goes away as soon as the user writes something in the title
}

//**********//function to change color of UI when pressing archive
exports.archiveView = () => {
  //change add task button to have a green background
  addTaskButton.classList.add('archive-green');


  //change search focus colour to green
  searchField.classList.add('search-archive');

  //remove underline from task
  taskViewButton.classList.remove('underline-persist-blue');
  taskViewButton.classList.add('underline-blue');

  //Add underline to archive
  archiveViewButton.classList.add('underline-persist-green');

  //Turn underline green
  taskViewButton.classList.add('underline-green');
  taskViewButton.classList.remove('underline-blue');

  //change hover background of tick/reinstate to green
  // taskControl.classList.add('task-item-tick-reinstate');

  //Change colour add task panel title focus to green
  panelTitle.classList.add('search-archive');
  //Change colour add task panel description focus to green
  panelDesc.classList.add('search-archive');
  //Change colour add task panel confirm focus to green
  panelConfirm.classList.add('archive-submit')

}

//**********//function to change the colour of UI when pressing task
exports.taskView = () => {
  //change add task button to have a blue background
  addTaskButton.classList.remove('archive-green');

  //change button backgrounds on hover to green and borders sto green
  // taskCreated.classList.remove('buttons__archive-green');
  // taskEdit.classList.remove('buttons__archive-green');

  //change search focus colour to blue
  searchField.classList.remove('search-archive');

  //remove underline from archive
  archiveViewButton.classList.remove('underline-persist-green');

  //Add underline to task
  taskViewButton.classList.add('underline-persist-blue');

  //change hover background of tick/reinstate to green
  // taskControl.classList.remove('task-item-tick-reinstate');

    //Change colour add task panel title focus to blue
    panelTitle.classList.remove('search-archive');
    //Change colour add task panel description focus to blue
    panelDesc.classList.remove('search-archive');
    //Change colour add task panel confirm focus to blue
    panelConfirm.classList.remove('archive-submit')
}


//**********//Function to search on task titles
exports.searchFunction = () => {
  const taskItemTitle = document.querySelectorAll(DOMstrings.taskBody);
  // console.log(taskItemTitle);
  let filter = searchField.value.toUpperCase();
  // console.log(filter);
  for (let index = 0; index < taskItemTitle.length; index++) {
    let item = taskItemTitle[index];
    if (item.dataset.label.toUpperCase().indexOf(filter) > -1) {
      item.classList.remove('disabled');
    } else if (searchField.value === "") {
      item.classList.remove('disabled');
    } else {
      item.classList.add('disabled');
    }
  }
}
