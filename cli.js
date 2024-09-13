const fs = require("fs");
const path = require("path");

/**
 * File path for the task file.
 */
const filePath = path.resolve(__dirname, "task-data.json");

/**
 * Ensures that the task file exists.
 *
 * @param {string} filePath - The location of the file
 */
if (!fs.existsSync(filePath)) {
  console.log("No previous data found.\n Creating new data");
  fs.writeFileSync(filePath, JSON.stringify({}));
}

/**
 * Read task from the task file.
 */
let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

/**
 * Creates a new task.
 *
 * @param {string} taskName - Task Name
 */
const createTask = (taskName) => {
  const taskId = Date.now();
  const taskData = {
    taskName: taskName,
    taskStatus: "todo",
  };
  data[taskId] = taskData;
  console.log(`New task added with taskId ${taskId}`);
};

/**
 * Updates an existing tasks name.
 *
 * @param {string} taskId - Task Id
 * @param {string} taskName - Task Name
 */
const updateTaskName = (taskId, taskName) => {
  data[taskId]["taskName"] = taskName;
  console.log(`The task name of task with id ${taskId} is updated`);
};

/**
 * Updates an existing tasks status.
 *
 * @param {string} taskId -Task Id
 * @param {string} taskStatus  - Task Status
 */
const updateTaskStatus = (taskId, taskStatus) => {
  data[taskId]["taskStatus"] = taskStatus;
  console.log(`The task status of task with id ${taskId} is updated`);
};

/**
 * Deletes an existing task.
 *
 *  @param {string} taskId -Task Id
 */
const deleteTask = (taskId) => {
  delete data[taskId];
  console.log(`The task with id ${taskId} is deleted`);
};

/**
 * Shows all created tasks in the console
 */
const listAllTask = () => {
  console.log(data);
};

/**
 * Shows the task containing the taskId
 *
 * @param {string} taskId
 */
const listTask = (taskId) => {
  console.log(data[taskId]);
};

/**
 * Shows all tasks with the same status
 *
 * @param {string} status
 */
const listStatus = (status) => {
  const newData = Object.keys(data).map((key) => data[key].status == status);
  console.log(newData);
};