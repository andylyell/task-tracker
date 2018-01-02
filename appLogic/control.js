//modules
const ui = require('./ui.js');
const menu = require('./menu.js');
const data = require('./data.js');

//************// Main Control Initialisation ************//

//Control the application using event listeners initilisation
setUpEventListeners()

function findRootTaskElement(el) {
  if (!el) {
    return null;
  }
  if (el.classList && el.classList.contains('task-item-container')) {
    return el;
  }
  return findRootTaskElement(el.parentNode);

}

//store all active event listeners in a function so that they can be turned on and off
function setUpEventListeners() {

  const taskContainer = document.querySelector(ui.DOMstrings.taskContainer);
  const noTaskContainer = document.querySelector(ui.DOMstrings.noTaskContainer);

  //////////GET THE CURRENT ACTIVE TASKS///////////
  function getActiveTasks(){
    let doc;
    data.retrieveActiveTasks()
      .then(() => {
        doc = data.getOpenTasks();
        taskContainer.innerHTML = '';
        document.querySelector(ui.DOMstrings.taskCountNumber).innerHTML = doc.length;
        doc.forEach((task) => {
          taskContainer.innerHTML += `<div class="task-item-container"  data-label="${task.title}">
            <div id="task__control-button" class="task-item-tick" data-taskId="${task._id}">
              <svg class="task-item-image" viewBox="0 0 14.16 10.11">
              <path d="M5.05 10.1a1 1 0 0 1-.7-.29L.29 5.76a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.34 3.34 7.4-7.4a1 1 0 1 1 1.42 1.42l-8.11 8.1a1 1 0 0 1-.71.29z"/>
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
        //================// Zero Tasks available //================//
        if(doc.length === 0){
          ui.noActiveTasks();
        } else {
          noTaskContainer.classList.add('disabled');
        }
        //================// Delete Task ================//
        data.deleteTask()
          .then(() => {
            getActiveTasks();
          });

        //================// Edit Task ================//
        const editTaskButtons = document.querySelectorAll(ui.DOMstrings.taskEdit);
        for(i=0; i < editTaskButtons.length; i++){
          const task = editTaskButtons[i];
          const id = task.dataset.taskid;
          task.addEventListener('click', () => {
            // console.log(id);

            const taskEl = findRootTaskElement(task);

            //get current title
            const title = taskEl.querySelector('.task-item-title h4').innerHTML;

            //get current description
            const description = taskEl.querySelector('.task-item-description p').innerHTML;

            //title of task in title box
            document.querySelector(ui.DOMstrings.editTitle).innerHTML = `${title}`;
            //Description of task in description box
            document.querySelector(ui.DOMstrings.editDesc).innerHTML = `${description}`;

            ui.openEditPanel();

            data.editTasks(id);
            });

        }

        //================// Set Edit Task //================//


        //================// Edit task Panel Control //================//
        document.querySelector(ui.DOMstrings.editExit).addEventListener('click', ui.closeEditPanel);
        document.querySelector(ui.DOMstrings.editCancel).addEventListener('click', ui.closeEditPanel);

        //================// Search function ================//
        document.querySelector(ui.DOMstrings.searchField).addEventListener('input', () => {
          ui.searchFunction();
        })

        //================// Complete Task ================//
        const tickButtons = document.querySelectorAll(ui.DOMstrings.taskControl);
        for (i=0; i < tickButtons.length; i++){
          const tick = tickButtons[i];
          const id = tick.dataset.taskid;
          tick.addEventListener('click', () => {
            data.completeTask(id);
            getActiveTasks();
          })
        }

      })
  }
  //immeadiately call this function
  getActiveTasks();

  //////////GET THE CURRENT ACTIVE TASKS///////////
  function getArchivedTasks(){
    data.retrieveArchiveTasks()
    .then(() => {
      archiveDoc = data.getArchivedTasks();
      taskContainer.innerHTML = '';
      document.querySelector(ui.DOMstrings.taskCountNumber).innerHTML = archiveDoc.length;
      archiveDoc.forEach((task) => {
        taskContainer.innerHTML += `<div class="task-item-container" data-label="${task.title}">
          <div id="task__re-control-button" class="task-item-re" data-taskId="${task._id}">
            <svg class="task-item-image-re" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.03 14.27">
            <path d="M12 6A6 6 0 1 0 0 6a1 1 0 0 0 2 0 4 4 0 1 1 4.81 4l.45-.45a1 1 0 0 0-1.42-1.47l-2.23 2.24a1 1 0 0 0 0 1.41L5.84 14a1 1 0 0 0 1.41-1.41L6.69 12A6 6 0 0 0 12 6z"/>
          </svg>
          </div>
          <div class="task-item-body">
            <div class="task-item-title">
              <h4 class="title-archive">${task.title}</h4>
            </div>
            <div class="task-item-description">
              <p>${task.description}</p>
            </div>

            <div class="task-buttons">

              <div class="complete-hover">
                <div class="task-button-container date-completed buttons-archive-green task__date-completed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.99 22.99">
                <g class="date-completed-image" fill="#484848">
                  <path d="M17.63 7.5h-1.49v-1a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0-.5.5v1H9.45v-1A.5.5 0 0 0 9 6H7.35a.5.5 0 0 0-.5.5v1H5.36a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12.27a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM14.54 7h.6v2h-.6zM7.85 7h.6v2h-.6zm9.28 9.48H5.86v-8h1v1a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5v-1h4.09v1a.5.5 0 0 0 .5.5h1.6a.5.5 0 0 0 .5-.5v-1h1z"/>
                  <path d="M13.55 11.25l-2.86 2.85-1.25-1.25a.5.5 0 0 0-.71.71l1.61 1.6a.5.5 0 0 0 .35.15.51.51 0 0 0 .36-.15L14.26 12a.5.5 0 0 0 0-.7.5.5 0 0 0-.71-.05z"/>
                </g>
              </svg>
                </div>

                <div class="task-button-date task-date-green">
                  <p class="task-date-text">${task.date_completed}</p>
                </div>
              </div>


              <div class="create-hover">
                <div class="task-button-container date-created buttons-archive-green task__created-date">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.99 22.99">
                <g class="date-created-image" fill="#484848">
                  <path d="M17.63 7.5h-1.49v-1a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0-.5.5v1H9.45v-1A.5.5 0 0 0 9 6H7.35a.5.5 0 0 0-.5.5v1H5.36a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12.27a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM14.54 7h.6v2h-.6zM7.85 7h.6v2h-.6zm9.28 9.48H5.86v-8h1v1a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5v-1h4.09v1a.5.5 0 0 0 .5.5h1.6a.5.5 0 0 0 .5-.5v-1h1z"/>
                  <path d="M13.1 12.32H12v-1.1a.51.51 0 0 0-.5-.5.5.5 0 0 0-.5.5v1.1H9.89a.51.51 0 0 0-.5.5.5.5 0 0 0 .5.5H11v1.11a.5.5 0 0 0 .5.5.51.51 0 0 0 .5-.5v-1.11h1.1a.5.5 0 0 0 .5-.5.51.51 0 0 0-.5-.5z"/>
                </g>
              </svg>
                </div>

                <div class="task-button-date task-date-green">
                  <p class="task-date-text">${task.date_created}</p>
                </div>
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
      })
      //================// Zero Tasks available //================//
      if(archiveDoc.length === 0){
        ui.noArchivedTasks();
      } else{
        noTaskContainer.classList.add('disabled');
      }
      //================// Delete Task //================//
      data.deleteTask()
        .then(() => {
          getArchivedTasks();
        });
      //================// Search function //================//
      document.querySelector(ui.DOMstrings.searchField).addEventListener('input', () => {
        ui.searchFunction();
      });
      //================// reinstate function //================//
      const reButtons = document.querySelectorAll(ui.DOMstrings.reinstateButton);
      for (i=0; i < reButtons.length; i++){
        const re = reButtons[i];
        const id = re.dataset.taskid;
        re.addEventListener('click', () => {
          data.reinstateTask(id);
          getArchivedTasks();
        })
      }

    });
  }


  //================// Archived tasks ================//
  document.querySelector(ui.DOMstrings.archiveViewButton).addEventListener('click', () => {
    ui.archiveView();
    getArchivedTasks();
  })

  //================// Active tasks ================//
  document.querySelector(ui.DOMstrings.taskViewButton).addEventListener('click', () => {
    ui.taskView();
    getActiveTasks();
  })

  //================// Add task Panel Control //================//
  //Open panel//
  document.querySelector(ui.DOMstrings.addTaskButton).addEventListener('click', ui.openPanel)

  //Close panel//
  document.querySelector(ui.DOMstrings.panelCancel).addEventListener('click', ui.closePanel)
  document.querySelector(ui.DOMstrings.panelExit).addEventListener('click', ui.closePanel)

  //Clear Panel//
  document.querySelector(ui.DOMstrings.panelExit).addEventListener('click', ui.clearAll)
  document.querySelector(ui.DOMstrings.panelCancel).addEventListener('click', ui.clearAll)

  //================// Add Task //================//
  document.querySelector(ui.DOMstrings.panelConfirm).addEventListener('click', () => {
    const title = document.querySelector(ui.DOMstrings.panelTitle);

    if(title.value == ''){
        title.placeholder = 'enter a task title please';
        title.classList.add('input-error');
        title.addEventListener('input', () => {
          if(title.value !== ''){
            title.classList.remove('input-error');
          }
        })
      } else {
        data.addTask();
        ui.closePanel();
        ui.clearAll();
        const taskView = document.querySelector(ui.DOMstrings.taskViewButton);
        if(taskView.classList.contains('underline-persist-blue')){
          getActiveTasks();
      }
    }
  })
}
