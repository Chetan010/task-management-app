const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.task] };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.task.id ? action.task : task
          ),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.taskId),
        };
      case 'UPDATE_STATUS':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.taskId
              ? { ...task, status: action.status }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;