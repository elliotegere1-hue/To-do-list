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

    

     let taskObj = { task: task, priority: priority, notes: notes };


for (const key in toDoList) { // the code loops through the keys in the object
  if (toDoList[key].day === day) { // it then says if the to do list keys day in that iteration is the same as day that we decalred above 
    toDoList[key].todo.push(taskObj) // push task string into the current itterations key todolist
    count++
  }
}

    document.getElementById("count").textContent = count // ADDED: update count on page




    
    let list=document.getElementById("ul")
    
   list.innerHTML = "" // wipe the list clean first

for (let i = 0; i < toDoList.length; i++) {
  if (toDoList[i].todo.length > 0) {
    for (let t of toDoList[i].todo) {
      list.innerHTML += `<li>${toDoList[i].day} - ${t.task} (priority: ${t.priority})- ${t.notes}</li>`;
    }
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


function organizeTask(){
    let list=document.getElementById("ul")
    list.innerHTML = ""

    for (let i = 0; i < toDoList.length; i++) {
        let todos = toDoList[i].todo

        for (let x=0; x<todos.length; x++){                    // CHANGED: renamed inner loop var to x
            for(let j=0; j<todos.length-1-x; j++){
                if (todos[j].priority > todos[j+1].priority){  // CHANGED: > instead of < (puts 1 on top)
                    let temp=todos[j]                          // CHANGED: added let
                    todos[j]=todos[j+1]
                    todos[j+1]=temp
                }
            }
        }

        for (let t of todos) {
            list.innerHTML += `<li>${toDoList[i].day} - ${t.task} (priority: ${t.priority}) - ${t.notes}</li>`
        }
    }
}