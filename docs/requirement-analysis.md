# Requirements

[<-- Go back](../readme.md)

We will store the data in json format in local-storage

## Data Model

- taskId: the task identifier
- taskName: Name of the task
- taskStatus: Status of task - todo, done, in-progress

```json
{
    "taskId": {
        taskName: ""
        taskStatus: ""},
    "taskId": {
        taskName: ""
        taskStatus: ""},
    "taskId": {
        taskName: ""
        taskStatus: ""},
}
```

## Functionality

Modifications on tasks

createTask(taskName)
updateTaskName(taskId, taskName)
updateTaskStatus(taskId, taskStatus)
deleteTask(taskId)

Fetching tasks list

list() - List all tasks
list(done) - List all tasks that are done
list(todo) - List all tasks that are not done
list(in-progress) - List all tasks that are in progress
