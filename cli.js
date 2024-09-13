const fs = require("fs");
const path = require("path");

// File path for the task file
const filePath = path.resolve(__dirname, "task-data.json");

// Ensures that the task file exists
if (!fs.existsSync(filePath)) {
  console.log("No previous data found.\n Creating new data");
  fs.writeFileSync(filePath, JSON.stringify({}));
}

// Read task from the task file
let data = fs.readFileSync(filePath, "utf-8");

console.log(data);
