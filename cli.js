const fs = require("fs");
const path = require("path");
const { argv } = require("node:process");

const taskName = "";
const taskStatus = "";

try {
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
   * Read CLI arguments
   *
   * @returns {object} object containing the arguments
   */
  const readCliArguments = () => {
    const command = argv[2];
    switch (command) {
      case "add":
        createTask(argv[3]);
        break;
      case "update":
        updateTaskName(argv[3], argv[4]);
        break;
      case "delete":
        deleteTask(argv[3]);
        break;
      case "mark-in-progress":
        updateTaskStatus(argv[3], "in-progress");
        break;
      case "mark-done":
        updateTaskStatus(argv[3], "done");
        break;
      case "list":
        if (!argv[3]) {
          listAllTask();
        } else {
          listStatus(argv[3]);
        }
        break;
      case "listOneTask":
        listTask(argv[3]);
        break;
      default:
        console.log("Invalid argument");
    }
  };

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
      createdAt: getTimeNow(),
      updatedAt: getTimeNow(),
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
    data[taskId].taskName = taskName;
    data[taskId].updatedAt = getTimeNow();
    console.log(`The task name of task with id ${taskId} is updated`);
  };

  /**
   * Updates an existing tasks status.
   *
   * @param {string} taskId -Task Id
   * @param {string} taskStatus  - Task Status
   */
  const updateTaskStatus = (taskId, taskStatus) => {
    data[taskId].taskStatus = taskStatus;
    data[taskId].updatedAt = getTimeNow();
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
    Object.keys(data).map((key) =>
      console.log(
        `ID: ${key} - Task Name: ${data[key].taskName} - Task Status: ${data[key].taskStatus} - CreatedAt: ${data[key].createdAt} - UpdatedAt: ${data[key].updatedAt}`
      )
    );
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
    const newData = {};
    Object.keys(data).map((key) => {
      if (data[key].taskStatus === status) {
        newData[key] = data[key];
      }
    });
    console.log(newData);
  };

  ////////////
  // Helper //
  ////////////
  getTimeNow = () => new Date().toUTCString();

  readCliArguments();

  /**
   * Saving the data to json
   */
  fs.writeFileSync(filePath, JSON.stringify(data));
} catch (error) {
  console.log("An error occurred please try again");
}
