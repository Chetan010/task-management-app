import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectTaskById } from "../selectors/taskSelector";
import { useDispatch, useSelector } from "react-redux";

const EditTask = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const task = useSelector(state => selectTaskById(state, taskId));
    console.log(task)
    const [formData, setFormData] = useState({
        id: task.id,
        title: task.title,
        description: task.description,
        duedate: task.duedate,
        status: task.status,
    });
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        duedate: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataWithId = {
            ...formData,
            id: taskId,
        }
        const newErrors = {};
        if (!formData.title) {
            newErrors.title = 'Title is required';
        }
        if (!formData.description) {
            newErrors.description = 'Description is required';
        }
        if (!formData.duedate) {
            newErrors.duedate = 'Due date is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            dispatch({ type: 'EDIT_TASK', task: formDataWithId });
            navigate(`/all-task`)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };
    return <>
        <div className="w-[70%] mx-auto">
            <div className=''>
                <h1 className="text-3xl font-bold my-8 text-center">Edit Task</h1>
                <div className='grid place-items-center'>
                    <form className="w-full mt-12 sm:mt-0 max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.title ? 'border-red-500' : ''}`}
                                    id="title"
                                    type="text"
                                    placeholder="Task Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.description ? 'border-red-500' : ''} `}
                                    id="description"
                                    placeholder="Task Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-2 sm:mb-6">
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="priority">
                                    Priority
                                </label>
                                <input
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.duedate ? 'border-red-500' : ''} `}
                                    id="duedate"
                                    type="date"
                                    placeholder="Due Date"
                                    name="duedate"
                                    value={formData.duedate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
                                    Status
                                </label>
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="To Do">To Do</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>

                        </div>
                        <button type='submit' className='mt-8 w-full p-3 bg-primary-color rounded-lg text-center text-white hover:bg-primary-hover-color'>Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default EditTask