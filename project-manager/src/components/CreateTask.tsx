import { useState } from "react";
import { postTask } from "../services/Task.services";
import { TaskInterface } from "../types/TaskInterface";
import { useUser } from "@clerk/clerk-react";
import FormField from "./FormField";

interface CreateTaskProps {
	setCreateTaskState: React.Dispatch<React.SetStateAction<boolean>>;
	createTaskState: boolean;
}

export default function CreateTask({
	setCreateTaskState,
	createTaskState,
}: CreateTaskProps) {
	const [times, setTimes] = useState({
		startTime: "00:00",
		endTime: "00:00",
	});
	
	return (
		<>
			{/* Modal */}
			<div
				className={
					createTaskState
						? "w-full flex-1 bg-white z-40 rounded-[10px] px-7 pt-3 pb-[17px] md:px-10 md:pt-4 md:pb-[30px]"
						: "hidden"
				}
			>
				<div id="title" className="flex justify-between items-center">
					<h1 className="text-roxo text-lg font-semibold mb-2 md:text-[26px]">
						Create new task
					</h1>
					<button
						onClick={() => setCreateTaskState(!createTaskState)}
            className="w-[17px] h-[17px] flex items-baseline"
					>
            <svg className="w-full h-full" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 6.25L6.25 18.75M6.25 6.25L18.75 18.75" stroke="#BD2323" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</button>
				</div>
				<form action="#" className="lg:flex lg:justify-between lg:gap-20">
				<div className="lg:w-full">
					{/* Title */}
					<label
						className="flex flex-col text-xs text-vinho font-medium mb-3"
					>
						<h3 className="flex text-xs text-vinho font-medium md:text-sm"> Title</h3>
						<input
							type="text"
							placeholder="Enter the title of the task"
							className="rounded-md border py-[5px] px-2 border-black border-opacity-10 placeholder:font-normal placeholder:text-black placeholder:opacity-50 placeholder:text-xs md:placeholder:text-sm mt-1"
						/>
					</label>

					{/* Status */}
					<h3 className="flex text-xs text-vinho font-medium mb-2 md:text-sm">
						Status
					</h3>
          <div className="flex mb-3">
            <label className="flex mr-5 text-xs text-[#2b2f32] font-inter md:text-sm">
              <input
                name="options"
                id="to-do"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative checked: checked:before:content-[''] checked:before:bg-roxo-create checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded "
              />
              To do
            </label>
            <label className="flex mr-5 text-xs text-[#2b2f32] font-inter md:text-sm">
              <input
                name="options"
                id="in-progress"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative checked: checked:before:content-[''] checked:before:bg-amarelo checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded"
              />
              In progress
            </label>
            <label className="flex text-xs text-[#2b2f32] font-inter md:text-sm">
              <input
                name="options"
                id="done"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative checked: checked:before:content-[''] checked:before:bg-verde checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded "
              />
              Done
            </label>
          </div>
					
					{/* Description */}
          <label>
            <h3 className="flex text-xs text-vinho font-medium md:text-sm"> Description</h3>
            <textarea className="resize-none w-full h-20 py-[5px] px-2 border rounded border-black border-opacity-10 placeholder:text-[10px] mb-3" placeholder="Enter a description"></textarea>
          </label>

					{/* Start date */}
          <label>
            <h3 className="flex text-xs text-vinho font-medium md:text-sm">Start Date</h3>
            <input type="date" className="relative appearance-none border border-black border-opacity-10 py-2 pl-10 pr-3 rounded-md text-xs text-preto-50 mr-[6px] before:content-[''] before:absolute before:top-1/2 before:left-3 before:translate-y-[-50%] before:w-4 before:h-4 before:bg-[url(src/assets/Calendar.svg)] before:bg-no-repeat before:bg-cover before:bg-center" value="12/12/2020"/>

            <input type="time" min="00:00" max="23:59" name="startTime" value={times.startTime} onChange={handleTimeChange} className="relative mb-3 border border-black border-opacity-10 py-2 pl-10 pr-3 rounded-md text-xs text-preto-50 mr-[6px] before:content-[''] before:absolute before:top-1/2 before:left-3 before:translate-y-[-50%] before:w-4 before:h-4 before:bg-[url(src/assets/clock.svg)] before:bg-no-repeat before:bg-cover before:bg-center"/>
          </label>

					{/* End date */}
					<label>
            <h3 className="flex text-xs text-vinho font-medium md:text-sm">End Date</h3>
            <input step="60" type="date" className="relative appearance-none border border-black border-opacity-10 py-2 pl-10 pr-3 rounded-md text-xs text-preto-50 mr-[6px] before:content-[''] before:absolute before:top-1/2 before:left-3 before:translate-y-[-50%] before:w-4 before:h-4 before:bg-[url(src/assets/Calendar.svg)] before:bg-no-repeat before:bg-cover before:bg-center" value="12/12/2020"/>

            <input type="time" min="00:00" max="23:59" name="endTime" value={times.endTime} onChange={handleTimeChange} className="relative mb-2  border border-black border-opacity-10 py-2 pl-10 pr-3 rounded-md text-xs text-preto-50 mr-[6px] before:content-[''] before:absolute before:top-1/2 before:left-3 before:translate-y-[-50%] before:w-4 before:h-4 before:bg-[url(src/assets/clock.svg)] before:bg-no-repeat before:bg-cover before:bg-center"/>
          </label>
					</div>
					{/* File upload */}
					<div className="lg:w-full">
					<label>
						<h3 className="flex text-xs text-vinho font-medium md:text-sm">Task cover</h3>
						<p className="w-full text-right text-xs font-inter text-roxo-claro font-medium">optional</p>
						<div className="relative flex flex-col items-center justify-center gap-2 w-full py-5 border border-dashed border-roxo-drop rounded mb-[18px]">
							<img src="src/assets/UploadIcon.svg" alt="upload" />
							<input type="file" className="absolute top-0 left-0 flex-1 opacity-0"/>
							<h4 className="text-xs font-inter font-normal text-[#4b5563]">Drop here to attach or <span className="text-roxo-claro">upload</span></h4>
							<h4 className="text-xs font-inter font-normal text-[#4b5563]">Max size: 5GB</h4>
						</div>
					</label>

					<label>
						<h3 className="flex text-xs text-vinho font-medium md:text-sm">Add people</h3>
						<div className="relative mb-3">
							<input type="text" placeholder="Add people" className="relative w-full rounded-md border py-[5px] px-2 pl-10 border-black border-opacity-10 placeholder:font-normal placeholder:text-black placeholder:opacity-50 placeholder:text-xs mt-1"/>
							<img src="src/assets/Searchh.svg" alt="search" className="absolute top-1/2 left-3 translate-y-[-40%]" />
						</div>
					</label>

					<h3 className="flex text-xs text-vinho font-medium mb-2">
						Priority
					</h3>
          <div className="flex mb-3">
            <label className="flex mr-5 text-xs text-[#2b2f32] font-inter pb-1">
              <input
                name="priorityOptions"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative checked:before:content-[''] checked:before:bg-roxo-create checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded "
              />
              Low
            </label>
            <label className="flex mr-5 text-xs text-[#2b2f32] font-inter">
              <input
                name="priorityOptions"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative checked:before:content-[''] checked:before:bg-amarelo checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded"
              />
              Mid
            </label>
            <label className="flex text-xs text-[#2b2f32] font-inter">
              <input
                name="priorityOptions"
                type="radio"
                className="appearance-none w-4 h-4 mr-1 text-left rounded-[5px] border border-preto-25 relative mb-8 checked:before:content-[''] checked:before:bg-vermelho checked:before:block checked:before:w-full checked:before:h-full checked:before:rounded "
              />
              High
            </label>
          </div>

					<button type="submit" className="w-full bg-verde text-white text-base font-medium py-3 rounded-lg md:text-base">Create!</button>
					</div>
				</form>
			</div>
			{/* Background */}
			<div className="fixed top-0 left-0 h-screen w-screen bg-preto-50 z-30"></div>
		</>
	);
}
