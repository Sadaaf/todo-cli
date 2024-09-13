# Task Tracker

A CLI tool for managing tasks

- [Project Requirements](./docs/requirements.md)
- [Requirements Analysis](./docs/requirement-analysis.md)

## Running the Project

Prerequisite: `nodejs`

Run the following commands to enter the project

```bash
git clone https://github.com/Sadaaf/todo-cli.git
cd todo-cli
```

Now run the following commands

```md
# Adding a new task

node cli.js add "Buy groceries"

# Updating and deleting tasks

node cli.js update 1 "Buy groceries and cook dinner"
node cli.js delete 1

# Marking a task as in progress or done

node cli.js mark-in-progress 1
node cli.js mark-done 1

# Listing all tasks

node cli.js list

# Listing individual task

node cli.js listOneTask 1

# Listing tasks by status

node cli.js list done
node cli.js list todo
node cli.js list in-progress
```
