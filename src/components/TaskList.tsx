import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoFilterSharp, IoClose } from "react-icons/io5";
interface Task {
    id: string;
    status: string;
    duedate: string;
}
const TaskList = () => {
    const tasks: Task[] = useSelector((state: any) => state.tasks.tasks);
    console.log(tasks)
    const [toggle, settoggle] = useState<boolean>(false);
    const [statusFilter, setStatusFilter] = useState<string>("All");
    const [dateSortOrder, setDateSortOrder] = useState<string>("none");

    const filteredTasks = tasks.filter((task: Task) => {
        const isStatusMatch =
            statusFilter === "All" || task.status === statusFilter;
        return isStatusMatch;
    });

    const sortedTasks = useMemo((): Task[] => {
        if (dateSortOrder === "none") return filteredTasks;
      
        return filteredTasks.slice().sort((a: Task, b: Task) => {
          const dateA = new Date(a.duedate).getTime();
          const dateB = new Date(b.duedate).getTime();
          if (dateSortOrder === "asc") {
            return dateA - dateB;
          } else if (dateSortOrder === "desc") {
            return dateB - dateA;
          }else{
            return 0
          }
        });
    },[filteredTasks]);

    return (
        <div className="w-[70%] mx-auto">
            <div className="mt-10">
                <h1 className="text-3xl ubuntu-bold my-8 text-center">Tasks Board</h1>
                <div className="flex justify-between items-center">
                    <div onClick={() => { settoggle(!toggle) }} className="flex justify-center items-center p-2 bg-primary-color rounded-xl">
                        {toggle ? (<IoClose className="text-xl text-white" />) : (<IoFilterSharp className="text-xl text-white" />)}


                    </div>
                    <div className="primary-text-color font-semibold">Total Tasks ({filteredTasks.length})</div>
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'} mt-10 justify-between items-center sm:flex-row gap-4 flex-col-reverse`}>
                    <div className="flex  flex-col sm:flex-row gap-2">
                        <div className="flex  flex-col sm:flex-row gap-2 items-center">
                            <p className="font-bold text-xl primary-text-color">Filter </p>
                            <div className="flex justify-center gap-[10px] sm:gap-2 flex-col sm:flex-row items-center">
                                <select
                                    className="bg-gray-200 p-2 rounded-xl"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="All">All Status</option>
                                    <option value="To Do">To Do</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col sm:flex-row items-center">
                        <p className="font-bold text-xl primary-text-color">Sort </p>
                        <div className="flex justify-center gap-[10px] sm:gap-3 flex-row items-center">
                            <select
                                className="bg-gray-200 p-2 rounded-xl"
                                value={dateSortOrder}
                                onChange={(e) => setDateSortOrder(e.target.value)}
                            >
                                <option value="none">None</option>
                                <option value="asc">ASC</option>
                                <option value="desc">DESC</option>
                            
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {sortedTasks.length > 0 ? (
                <div className="flex flex-wrap gap-y-4 gap-x-14 justify-center  overflow-y-auto mt-5 h-[100vh] sm:h-[100vh] p-5">
                    {sortedTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-[17vh] sm:mt-[30vh]">
                    <p>
                        No tasks found.{" "}
                        <Link to="/" className="primary-text-color">
                            Add a new task
                        </Link>
                    </p>
                </div>
            )} 
        </div>
    );
};

export default TaskList;