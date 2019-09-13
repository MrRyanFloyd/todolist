//import {moment, format} from 'moment';
import {newTaskDiv} from './newTaskDiv.js';
import {newProject} from './newProject.js';

let currentProject = "Project 1";
let allProjects = [];
//allProjects.push(currentProject);
let activeDisplayedProject = document.getElementById("activeProject");
//activeDisplayedProject.innerHTML = currentProject;

const addProjectTask = (e) => {
    e.preventDefault();
    console.log("did this work");
    let taskTitle = submitForm.elements[0].value;
    let taskDescription = submitForm.elements[1].value;
    let taskDate = submitForm.elements[2].value;
    let taskPriority = submitForm.elements[3].value;
    newTaskDiv(taskTitle, taskDescription, taskDate, taskPriority);
    submitForm.reset();
    $('#addTaskModal').modal('hide');
    return {taskTitle,
        taskDescription,
        taskDate,
        taskPriority
    }
};

const addProject = (e) => {
    e.preventDefault();
    let projectTitle = newProjectSubmit.elements[0].value;
    let temporaryProject = newProject(projectTitle);
    allProjects.push(temporaryProject);
    newProjectSubmit.reset();
    let projectDropdownList = document.getElementById("dropDownMenuList");
    activeDisplayedProject.innerHTML = projectTitle;
    let newProjectToAdd = document.createElement('a');
    newProjectToAdd.addEventListener('click', changeActiveProject);
    newProjectToAdd.innerHTML = projectTitle;
    newProjectToAdd.className = "dropdown-item";
    projectDropdownList.appendChild(newProjectToAdd);
    $('#newProjectModal').modal('hide');
    //console.log(allProjects);
    return {
        projectTitle,
        temporaryProject
    }
};



const checkBoxClicked = (e) => {
    let currentTaskListTitle = document.getElementById("currentTasksTitle");
    let completedTaskListTitle = document.getElementById("completedTasksTitle");
    let taskDiv = (e.target.parentNode.parentNode);
    completedTaskListTitle.appendChild(taskDiv);
    if (e.target.checked) {
        completedTaskListTitle.appendChild(taskDiv);
        taskDiv.setAttribute("style", "text-decoration: line-through;");

    };
    if (!e.target.checked) {
        currentTaskListTitle.appendChild(taskDiv);
        taskDiv.setAttribute("style", "text-decoration: none");
    }
    

};

let allCheckboxes = document.getElementsByClassName("checkbox");
console.log(allCheckboxes);
for (let i = 0; i <= allCheckboxes.length; i++) {
    if (allCheckboxes[i]) {
        allCheckboxes[i].addEventListener('click', checkBoxClicked);
    }
}

const changeActiveProject = (e) => {
    activeDisplayedProject.innerHTML = e.target.innerHTML;
}


let submitForm = document.getElementById('formSubmit');
submitForm.addEventListener('submit', addProjectTask);

let addProjectSubmit = document.getElementById('newProjectSubmit');
addProjectSubmit.addEventListener('submit', addProject);

let defaultStarterProject = document.getElementById("defaultStarterProject");
defaultStarterProject.addEventListener('click', changeActiveProject);
activeDisplayedProject.innerHTML = defaultStarterProject.innerHTML;

$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})

