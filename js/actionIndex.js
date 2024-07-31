const projects = document.getElementById("projectsList");
const mostrar = document.getElementById("mostrar");
const btnWhats = document.getElementById("btn-whats");
const urlWhats = "https://api.whatsapp.com/send?phone=5521983591846&text=Ol%C3%A1,%20vi%20seu%20portif%C3%B3lio%20e,%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA%20e%20seus%20projetos.%20"
function showProjects() {
  projects.classList.toggle("projectsOn");
  
}
mostrar.addEventListener("click", showProjects);

btnWhats.addEventListener('click',()=>{
  window.open(urlWhats);
})

