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
    "taskName": "",
    "taskStatus": ""
  }
}
```

## Functionality

Modifications on tasks

- createTask(taskName)
- updateTaskName(taskId, taskName)
- updateTaskStatus(taskId, taskStatus)
- deleteTask(taskId)

Fetching tasks list

- listAllTask() - List all tasks
- listTask(taskId) - List specific task
- list(status) - List all tasks of the status
