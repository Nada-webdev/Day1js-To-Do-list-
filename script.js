const inputBox=document.getElementById("input-Box");     //const pour stocker le contenue de input
const listContainer=document.getElementById("list-Container");   


function addTask(){
//si user n'a pas donner une tache evoie une alert
if(inputBox.value === ''){
          alert("you must write something!");
}

else{
          //la creation de la tache 
          let li=document.createElement("li");
          li.innerHTML=inputBox.value;
          listContainer.appendChild(li);

          //pour le X avec un code ascii
          let span=document.createElement("span");
          span.innerHTML="\u00d7";
          li.appendChild(span);
}
inputBox.value="";
saveData();
}


listContainer.addEventListener("click",function(e){
//pour avoir la tache checked si on click sure Li tagName
if(e.target.tagName ==="LI"){
          e.target.classList.toggle("checked");
          saveData();
}
//pour supp la tache si le tagName est span (le code ascii de X)
else if (e.target.tagName ==="SPAN"){
          e.target.parentElement.remove();
          saveData();
}
}, false);


/*==========================*/
/*         Data             */
/*==========================*/

function saveData(){
          localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
          listContainer.innerHTML=localStorage.getItem("data");
}

showTask(); //les taches reste meme si on fait reload pour la page