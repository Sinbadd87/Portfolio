const about = document.getElementById("li-about");
const projects = document.getElementById("li-projects");
const skills = document.getElementById("li-skills");
const contacts = document.getElementById("li-contacts");

about.style.color = '#4316F3';

about.addEventListener('click', function(){
  about.style.color = '#4316F3';
  projects.style.color = '#2708A0';
  skills.style.color = '#2708A0';
  contacts.style.color = '#2708A0';
});
projects.addEventListener('click', function(){
  about.style.color = '#2708A0';
  projects.style.color = '#4316F3';
  skills.style.color = '#2708A0';
  contacts.style.color = '#2708A0';
});
skills.addEventListener('click', function(){
  about.style.color = '#2708A0';
  projects.style.color = '#2708A0';
  skills.style.color = '#4316F3';
  contacts.style.color = '#2708A0';
});
contacts.addEventListener('click', function(){
  about.style.color = '#2708A0';
  projects.style.color = '#2708A0';
  skills.style.color = '#2708A0';
  contacts.style.color = '#4316F3';
});