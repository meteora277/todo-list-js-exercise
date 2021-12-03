// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    completed: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.completed = true;
    }

  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
//const task2 = newTask("Do Laundry", "😨");
console.log(task1);

task1.completeTask();

console.log(task1);

// // for now, let's just make sure we see our tasks
// console.log(tasks);

// Clean Cat Litter has been completed
