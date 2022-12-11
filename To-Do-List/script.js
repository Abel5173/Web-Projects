document.querySelector('#push').onclick = function(){
    // Validate input field
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task!")
    }
    // Add a new Task
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
      `
// Deleting a Task
        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
// Crossing out a completed task
        var tasks = document.querySelectorAll(".task")
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }
        // Clearing input field after each entry
        document.querySelector("#newtask input").value=""
    }
}