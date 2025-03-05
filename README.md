# Task Management App
The application should allow users to manage tasks efficiently. User can add, edit and delete the task.

# Steps to Create a React App Using npx create-react-app

## Step 1: Install Node.js and NPM
The first step is to install Node.js in your system to create a React application.
You can Install Node and NPM by following our article on- How to install Node on your system?

## Step 2: Initialize the React App Using create-react-app

```bash
npm npx create-react-app app_name
```

## Cloning and Running the Application in local

Clone the project into local

```bash
npm install
```

In the project directory, you can run:

```bash
npm npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Application design

#### Components

1. **Sidebar** Component : This Component displays the menu for add task and Task list. When click the menu then navigate the particular component.

2. **AddTask** Component : This Component display the add form. This component is use to add task and store the data on local storage

3. **EditTask** Component : This Component display the edit form. This component is use to edit the task and update the related data in local storage

4. **TaskList** Component : This Component displays the details of all task. This component gets data from local storage. This component is the child compone of *TaskCard* component.



