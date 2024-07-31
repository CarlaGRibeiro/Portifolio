const url = "../img/capas/";

const projectsList = [
  {
    id: 1,
    img: url + "0.png",
    txtAlt: "Imagem com o nome do projeto escrito: Alavanque",
    projeto: "Alavanque",
    linkFuncional: "https://carlagribeiro.github.io/Alavanque",
  },
  {
    id: 2,
    img: url + "1.png",
    txtAlt: "Imagem com o nome do projeto escrito: Divulga Bairro",
    projeto: "Divulga Bairro",
    linkFuncional: "b",
  },
  {
    id: 3,
    img: url + "2.png",
    txtAlt: "Imagem com o nome do projeto escrito: Xoxocolate Buquê",
    projeto: "Xoxocolate Buquê",
    linkFuncional: "c",
  },
  {
    id: 3,
    img: url + "3.png",
    txtAlt: "Imagem com o nome do projeto escrito: Tardis Company",
    projeto: "Tardis Company",
    linkFuncional: " https://carlagribeiro.github.io/agencia-de-viagem-with-react/",
  },
];


projectsList.map((project)=>{
   let card= `<div id="${project.id}">
      <p id="project-p">${project.projeto} </p>
      <img id="project-img"src="${project.img}"> 
      <button id="project-btn-go"><a href="${project.linkFuncional}">Ver o projeto.</a> </button>
   </div>`
  document.getElementById('projectsList').innerHTML +=card;
}

)


