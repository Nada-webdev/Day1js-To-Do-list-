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

          //cree un element img 
          let img=document.createElement("img");
          img.src="./img/pen (1).png";
         
          li.appendChild(img);

}
inputBox.value="";
saveData();
}

function MotivationMessage(){
const message=['Good job :)',
'i believe you can do more and more !',
'Proud of you keep going  !!',
'what a productive day :)'];
 const index=Math.floor(Math.random()* message.length);
 return message[index];

          
}
function displayMotivation() {
          const motivationContainer = document.getElementById("motivationBox");
          const motivationText = document.getElementById("motivation");
          motivationText.innerText = MotivationMessage();
          motivationContainer.style.display = "block"; 
          
      }

listContainer.addEventListener("click",function(e){
//pour avoir la tache checked si on click sure Li tagName
if(e.target.tagName ==="LI"){
          e.target.classList.toggle("checked")?displayMotivation():null;
          saveData();
       
}
//pour supp la tache si le tagName est span (le code ascii de X)
else if (e.target.tagName ==="SPAN"){
          e.target.parentElement.remove();
          saveData();
}
else if(e.target.tagName ==="IMG"){
  //update
  let li = e.target.parentElement;
        let currentText = li.firstChild.textContent;
        let newText = prompt("UPdate your task :", currentText);
        if (newText !== null && newText.trim() !== "") {
            li.firstChild.textContent = newText;
            saveData();
        }
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