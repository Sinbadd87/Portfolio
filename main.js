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

//Slide underline
const tabs = document.querySelectorAll('.item');
const highlight = document.querySelector('#marker');
const firstTab = tabs[0];

// Calculate the position of the highlight element
const left = firstTab.getBoundingClientRect().left - 28.5;
const width = firstTab.offsetWidth + 8;

// Set the default position of the highlight element
highlight.style.left = `${left}px`;
highlight.style.width = `${width}px`;

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Get the index of the selected tab
    const index = this.dataset.index;
    
    // Calculate the position of the highlight element
    const left = this.offsetLeft;
    const width = this.offsetWidth;
    
    // Update the position of the highlight element
    highlight.style.left = `${left}px`;
    highlight.style.width = `${width}px`;
    
    // Add active class to the selected tab
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });
});