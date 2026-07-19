let toDoList=[
    { day: "Monday", todo: []},
    { day: "Tuesday", todo: []},
    { day: "Wednesday", todo: []},
    { day: "Thursday", todo: []},
    { day: "Friday", todo: []},
    { day: "Saturday", todo: []},
    { day: "Sunday", todo: []},
    

]

   let count=0



function addTask(){
    let task=document.getElementById("TaskName").value
    let day=document.getElementById("day").value
    let priority=document.getElementById("selectBox").value
    let notes=document.getElementById("notes").value

    

    let taskString=`Task: ${task} \n
    priority: ${priority} \n
    notes: ${notes}`


for (const key in toDoList) { // the code loops through the keys in the object
  if (toDoList[key].day === day) { // it then says if the to do list keys day in that iteration is the same as day that we decalred above 
    toDoList[key].todo.push(taskString) // push task string into the current itterations key todolist
    count++
  }
}

    document.getElementById("count").textContent = count // ADDED: update count on page




    
    let list=document.getElementById("ul")
    
   list.innerHTML = "" // wipe the list clean first

for (let i = 0; i < toDoList.length; i++) {
  if (toDoList[i].todo.length > 0) {
    list.innerHTML += `<li>${toDoList[i].day} - ${toDoList[i].todo}</li>`
  }
}
    
       
    
    

document.getElementById("TaskName").value=""
    document.getElementById("day").value=""
    document.getElementById("selectBox").value=""
    document.getElementById("notes").value=""
    
    


}

function clearBtn(){
 let list=document.getElementById("ul")
 list.innerHTML=""

 document.getElementById("count").textContent=""
}


function find(){

 
   day=document.getElementById("day2").value

    for( key in toDoList){
if (toDoList[key].todo.length>0 && day=== toDoList[key].day){
for(let task of toDoList[key].todo){
  document.getElementById("fClass").innerHTML += task + "<br>"
}
    } 
}
    }
