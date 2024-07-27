const projects = document.getElementById("projectsList");
const mostrar = document.getElementById("mostrar");

function showProjects() {
  projects.classList.toggle("projectsOn");
  
}
mostrar.addEventListener("click", showProjects);
