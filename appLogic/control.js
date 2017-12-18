//modules
const ui = require('./ui.js');
const menu = require('./menu.js');
const data = require('./data.js');



//************// Main Control Initialisation ************//

//Control the application using event listeners initilisation
setUpEventListeners()

//store all active event listeners in a function so that they can be turned on and off
function setUpEventListeners() {

  //================// Archived tasks ================//
  document.querySelector(ui.DOMstrings.archiveViewButton).addEventListener('click', () => {
    ui.archiveView();
  })

  //================// Active tasks ================//
  document.querySelector(ui.DOMstrings.taskViewButton).addEventListener('click', () => {
    ui.taskView();
  })

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



  document.querySelector(ui.DOMstrings.taskCountTitle).addEventListener('click', () => {
    console.log('Task Counter Title');
  })

  document.querySelector(ui.DOMstrings.taskCountNumber).addEventListener('click', () => {
    console.log('Task Counter number');
  })

  //ACESS TO THE DATA//
  let doc;
  let taskContainer = document.querySelector(ui.DOMstrings.activeTaskContainer);

  data.retrieveActiveTasks()
    .then(() => {
      doc = data.getOpenTasks();
      document.querySelector(ui.DOMstrings.taskCountNumber).innerHTML = doc.length;
      doc.forEach((task) => {
        taskContainer.innerHTML += `<div class="task-item-container"  data-label="${task.title}">
          <div id="task__control-button" class="task-item-tick">
            <svg class="task-item-image" viewBox="0 0 14.16 10.11">
            <path d="M5.05 10.1a1 1 0 0 1-.7-.29L.29 5.76a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.34 3.34 7.4-7.4a1 1 0 1 1 1.42 1.42l-8.11 8.1a1 1 0 0 1-.71.29z"/>
          </svg>
            <svg class="task-item-image-re disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.03 14.27">
            <path d="M12 6A6 6 0 1 0 0 6a1 1 0 0 0 2 0 4 4 0 1 1 4.81 4l.45-.45a1 1 0 0 0-1.42-1.47l-2.23 2.24a1 1 0 0 0 0 1.41L5.84 14a1 1 0 0 0 1.41-1.41L6.69 12A6 6 0 0 0 12 6z"/>
          </svg>
          </div>
          <div class="task-item-body">
            <div class="task-item-title">
              <h4>${task.title}</h4>
            </div>
            <div class="task-item-description">
              <p>${task.description}</p>
            </div>

            <div class="task-buttons">

              <div class="create-hover">
                <div class="task-button-container date-created task__created-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.99 22.99">
                <g class="date-created-image" fill="#484848">
                  <path d="M17.63 7.5h-1.49v-1a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0-.5.5v1H9.45v-1A.5.5 0 0 0 9 6H7.35a.5.5 0 0 0-.5.5v1H5.36a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12.27a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM14.54 7h.6v2h-.6zM7.85 7h.6v2h-.6zm9.28 9.48H5.86v-8h1v1a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5v-1h4.09v1a.5.5 0 0 0 .5.5h1.6a.5.5 0 0 0 .5-.5v-1h1z"/>
                  <path d="M13.1 12.32H12v-1.1a.51.51 0 0 0-.5-.5.5.5 0 0 0-.5.5v1.1H9.89a.51.51 0 0 0-.5.5.5.5 0 0 0 .5.5H11v1.11a.5.5 0 0 0 .5.5.51.51 0 0 0 .5-.5v-1.11h1.1a.5.5 0 0 0 .5-.5.51.51 0 0 0-.5-.5z"/>
                </g>
              </svg>
                </div>

                <div class="task-button-date">
                  <p class="task-date-text">${task.date_created}</p>
                </div>
              </div>

              <div class="task-button-container edit task__edit-button" data-taskId="${task._id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.99 22.99">
                <path class="edit-image" d="M18.84 6.48L17.07 4.7a.51.51 0 0 0-.71 0l-2 2a.46.46 0 0 0-.14.41.48.48 0 0 0-.41.13l-8 8a.49.49 0 0 0-.13.47h-.1a.51.51 0 0 0-.5.5v1.67a.5.5 0 0 0 .5.5h1.68a.5.5 0 0 0 .5-.5.58.58 0 0 0 .19 0 .47.47 0 0 0 .35-.15l8-8a.48.48 0 0 0 .13-.41h.06a.47.47 0 0 0 .35-.15l2-2a.5.5 0 0 0 0-.69zM6.09 16.23l1.15 1.14H6.09zm1.91.44L6.88 15.6l7.28-7.29 1.08 1.08zm8.54-8.54l-1.12-1.07 1.29-1.29 1.07 1.07z" fill="#484848"/>
              </svg>

              </div>
              <div class="task-button-container trash task__trash-button" data-taskId="${task._id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.99 22.99">
                <g class="trash-image" fill="#484848">
                  <path d="M15 9a.43.43 0 0 0-.43.39L14.25 17h-5.5l-.32-7.57A.43.43 0 0 0 8 9a.41.41 0 0 0-.39.43L8 17.37a.41.41 0 0 0 .4.39h6.29a.41.41 0 0 0 .41-.39l.33-7.9A.41.41 0 0 0 15 9z"/>
                  <path d="M15.43 7.19h-2.18a.51.51 0 0 0 0-.13V5.64a.41.41 0 0 0-.41-.41h-2.71a.41.41 0 0 0-.41.41v1.42a.28.28 0 0 0 0 .13H7.56a.41.41 0 0 0-.41.41.42.42 0 0 0 .41.4h7.87a.41.41 0 0 0 .41-.41.41.41 0 0 0-.41-.4zm-4.89-.13v-1h1.91v1a.5.5 0 0 0 0 .13h-2a.28.28 0 0 0 .09-.13z"/>
                  <path d="M10.23 15.59a.42.42 0 0 0 .41-.42l-.1-5.17a.41.41 0 0 0-.42-.41.42.42 0 0 0-.4.42l.1 5.14a.4.4 0 0 0 .41.44z"/>
                  <path d="M12.77 15.59a.4.4 0 0 0 .4-.4l.1-5.14a.41.41 0 0 0-.4-.42.4.4 0 0 0-.42.41l-.09 5.13a.41.41 0 0 0 .4.42z"/>
                </g>
              </svg>
              </div>
            </div>
          </div>
        </div>`
      });

      //================// Delete Task ================//
      data.deleteTask();

      //================// Edit Task ================//

      //================// Complete Task ================//

      //================// Activate Task ================//

      //================// Search function ================//
      document.querySelector(ui.DOMstrings.searchField).addEventListener('input', () => {
        ui.searchFunction();
      })

    })


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
