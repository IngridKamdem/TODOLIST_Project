let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);  
        inputBox.value= "";
    }
}


function saveData(){
    localStorage.setItem("data, list-container.innerHTML");
}


listContainer.addEventListener("click", function(e){
    console.log(e.target.tagName)
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
    } else if (e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData();
    }else{
        alert("Click Error");
    }
});


saveData();
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

     