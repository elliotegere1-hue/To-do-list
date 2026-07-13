let toDoList=[
    { day: "Monday", todo: []},
    { day: "Tuesday", todo: []},
    { day: "Wednsday", todo: []},
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
    let current=0
    

    let taskString=`Task: ${task} \n
    priority: ${priority} \n
    notes: ${notes}`

    if (day== "Monday"){
    toDoList[0].todo.push(taskString)
    current=0
    count=count+1
    }else if(day=="Tuesday"){
     toDoList[1].todo.push(taskString)
    current=1
    count+=1
    } else if(day=="Wednsday"){
     toDoList[2].todo.push(taskString)
    current=2
    count+=1
    }else if(day=="Thursday"){
     toDoList[3].todo.push(taskString)
    current=3
    count+=1
    }else if(day=="Friday"){
     toDoList[4].todo.push(taskString)
    current=4
    count+=1
    }else if(day=="Saturday"){
     toDoList[5].todo.push(taskString)
    current=5
    count+=1
    }else if(day=="Sunday"){
     toDoList[6].todo.push(taskString)
    current=6
    count+=1
    }

    document.getElementById("count").textContent=count 

    
    let list=document.getElementById("ul")
    
    list.innerHTML+=
    `<li>${toDoList[current].day} - ${toDoList[current].todo}</li>`
    
       
    
    if (toDoList[current].todo.length){
    toDoList[current].todo.shift()
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
