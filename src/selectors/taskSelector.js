export const selectTaskById = (state, taskId) => {
    return state.tasks.tasks.find((task) => task.id === taskId);
};
