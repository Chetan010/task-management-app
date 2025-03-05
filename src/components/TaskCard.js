import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { MdClose, MdEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const TaskCard = ({task}) => {
    const {id, title, description, duedate, status} = task
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        const currentDate = dateObject.toLocaleDateString();
        return currentDate;
    };
    let dueDate = getDate(duedate);
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "done":
                return "bg-green-200 text-green-800";
            case "in progress":
                return "bg-blue-200 text-blue-800";
            case "to do":
                return "bg-yellow-200 text-yellow-800";
            default:
                return "bg-white";
        }
    };
    const handleRemoveTask = () => {
        dispatch({ type: 'DELETE_TASK', taskId: id });
    };

    const handleEditTask = () => {
        navigate(`/tasks/${id}/edit`);
    }

    return (
        <div
            className={` flex flex-col rounded-xl justify-center gap-4 bg-white w-72 max-h-[350px] shadow-xl border relative`}
        >
            <div className='absolute -top-[10px] -right-[10px] bg-red-500 p-[4px] rounded-[20px] hover:bg-red-400 cursor-pointer'
                onClick={handleRemoveTask}
            ><MdClose /></div>
            <div
                className={`relative bg-clip-border mt-4 ml-4 mr-4 rounded-lg ${getStatusColor(
                    status
                )} shadow-md h-[80px]`}
            >
                <h1 className="font-bold text-center text-xl py-4 mb-5 ubuntu-bold">{`${title}`}</h1>
            </div>
            <div className="border-0 p-2 text-center">
                <p className="poppins-light ">{`${description}`}</p>
                <div className="flex justify-between mt-[5px] text-sm font-semibold py-2 px-4">
                    <div className="flex justify-center flex-col">
                        <p>Due Date</p>
                        <p className="font-light">{`${dueDate}`}</p>
                    </div>
                   
                </div>
            </div>
            <div className="footer p-3 flex items-center justify-between">
                <button
                    type="button"
                    className={`flex items-center justify-center gap-2 text-black  select-none focus:outline-none shadow-md  uppercase font-bold text-xs py-2 px-6 rounded-lg ${getStatusColor(status)}
                        }`}
                > {status}</button>
                <button
                    type="button"
                    onClick={handleEditTask}
                    className={`flex items-center justify-center gap-2 text-black  select-none focus:outline-none shadow-md  uppercase font-bold text-xs py-2 px-6 rounded-lg hover:bg-[#d6d5d5]`}
                ><MdEdit /> Edit</button>
            </div>
        </div>
    );
};



export default TaskCard;