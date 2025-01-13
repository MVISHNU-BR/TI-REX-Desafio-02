import { useState } from "react";
import { postTask } from "../services/Task.services";
import { TaskInterface } from "../types/TaskInterface";

export default function CreateTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState<TaskInterface>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    addPeople: "",
    status: "To-Do",
    priority: "Low",
  });

  const handleStatusChange = (status: "To-Do" | "In Progress" | "Done") => {
    setTask((prev) => ({
      ...prev,
      status,
    }));
  };

  const handlePriorityChange = (priority: "Low" | "Mid" | "High") => {
    setTask((prev) => ({
      ...prev,
      priority,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.title.trim()) {
      alert("Title is required.");
      return;
    }

    if (task.startDate && task.endDate && task.startDate > task.endDate) {
      alert("End date must be later than the start date.");
      return;
    }

    postTask(task)
      .then(() => {
        console.log("Task Saved:", task);
        setTask({
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          startTime: "",
          endTime: "",
          addPeople: "",
          status: "To-Do",
          priority: "Low",
        });
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error saving task:", error);
        alert("An error occurred while saving the task.");
      });
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-[200px] h-[40px] bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Create Task
      </button>

      {isModalOpen && (
        <div className="flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[343px] h-[758.08px] bg-white p-6 rounded-lg shadow-lg relative sm:w-[491px] sm:h-[1084px] lg:w-[1001px] lg:h-[584px] ">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-[25px] h-[25px] absolute top-5 right-6 "
            >
              <img src="\src\assets\X-create.svg" alt="close-pag" />
            </button>

            <h2 className="w-[189.49px] h-[36px] text-[26px] font-semibold leading-[36px] text-left text-roxo font-roboto mb-4">
              Create new task
            </h2>

            <form
              onSubmit={handleSubmit}
              className=" debug flex flex-col lg:flex-row gap-9"
            >
              <div className="debug flex flex-col lg:w-[467px]">
                <div>
                  <label
                    htmlFor="task"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="task"
                    value={task.title}
                    onChange={handleInputChange}
                    placeholder="Enter task title"
                    className="w-full sm:w-[412px] h-[36px] border border-[#0000001A] rounded-[6px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-[412px] flex flex-col gap-[8px] ">
                  <label className="block text-gray-700 font-medium">
                    Status
                  </label>
                  <div className="flex gap-[25px]">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStatusChange("To-Do")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.status === "To-Do"
                            ? "bg-roxo-create"
                            : "bg-gray-300"
                        }`}
                      ></button>
                      <span>To-Do</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStatusChange("In Progress")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.status === "In Progress"
                            ? "bg-laranja-create"
                            : "bg-gray-300"
                        }`}
                      ></button>
                      <span>In Progress</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStatusChange("Done")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.status === "Done" ? " bg-branco " : "bg-gray-300"
                        }`}
                      ></button>
                      <span>Done</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={task.description}
                    onChange={handleInputChange}
                    placeholder="  Enter a description"
                    className="w-[412px] h-[113px] rounded-[6px] bg-branco border border-border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="w-[311px]">
                  <div className="w-[187px] h-[76px] flex items-center gap-3 ">
                    <div>
                      <label
                        htmlFor="startDate"
                        className="text-gray-700 font-medium mb-1"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={task.startDate}
                        onChange={handleInputChange}
                        className="w-[185px] h-[52px] rounded-lg border border-black opacity-25 font-roboto text-sm font-normal leading-[16.41px] text-[#00000080] 
                      bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] pl-8 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input
                      type="Time"
                      name="startTime"
                      value={task.startTime}
                      onChange={handleInputChange}
                      className="w-[107px] h-[52px] mt-6 p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px]  text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={task.endDate}
                    onChange={handleInputChange}
                    className="w-[185px] h-[52px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px]  text-[#00000080] 
                          bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <div className="w-[117px] h-[76px] absolute top-[511px] left-[230px] ">
                    <img src="" alt="" />
                    <input
                      type="Time"
                      name="endTime"
                      value={task.endTime}
                      onChange={handleInputChange}
                      className="w-[107px] h-[52px] p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="debug flex flex-col lg:w-[410px]">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1 debug">
                    <div className="flex justify-between">
                      <label
                        htmlFor="imageInput"
                        className="text-azul-escuro text-sm font-medium "
                      >
                        Task Cover
                      </label>
                      <p className="text-roxo-claro font-medium mb-1">
                        optional
                      </p>
                    </div>
                    <div className="w-[353px] h-12 pl-9 flex justify-between pr-2 border rounded-lg items-center bg-[url('/src/assets/SystemIcons.svg')] bg-no-repeat bg-[12px_center] sm:w-full lg:w-[410px]">
                      <label htmlFor="imageInput" className="text-base">
                        imageattachment.jpg
                      </label>
                      <input
                        type="file"
                        id="imageInput"
                        className="hidden w-full"
                        placeholder="Upload Image"
                      />
                      <button className="">
                        <img
                          src="/src/assets/lixeiraIcons.svg"
                          alt="Delete"
                          className="w-[18px] h-[18px]"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[152px] rounded-[6px] border-2 border-dashed border-[#60A5FA] flex justify-center items-center mb-4">
                    <div className="w-full h-[94px] flex flex-col justify-center items-center text-cinza-create">
                      <img
                        src="/src/assets/uploadicon.svg"
                        className="w-[24px] h-[24px] mb-2"
                        alt="Upload"
                      />
                      <span className="text-center text-[16px] leading-[26px] tracking-[-0.02em] font-inter font-normal">
                        Drop here to attach or{" "}
                        <span className="text-roxo-claro">upload</span>
                      </span>
                      <span className="mt-4 text-cin tracking-[-0.02em] font-inter font-normal ">
                        Max size: 5GB
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 ">
                  <div>
                    <label className="text-gray-700 font-medium  ">
                      Add People
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="addPeople"
                      value={task.addPeople}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-[410px] h-[45px] border border-[#0000001A] rounded-[6px] px-10 py-2 bg-[url('/src/assets/searchh.svg')] bg-no-repeat bg-[left_10px_center] placeholder:pl-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="w-[412px] flex flex-col gap-[8px] ">
                    <label className="block text-gray-700 font-medium">
                      Priority
                    </label>
                    <div className="flex gap-[50px]">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handlePriorityChange("Low")}
                          className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                            task.priority === "Low"
                              ? "bg-roxo-create"
                              : "bg-gray-300"
                          }`}
                        ></button>
                        <span>Low</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handlePriorityChange("Mid")}
                          className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                            task.priority === "Mid"
                              ? "bg-laranja-create"
                              : "bg-gray-300"
                          }`}
                        ></button>
                        <span>Mid</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handlePriorityChange("High")}
                          className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                            task.priority === "High"
                              ? "bg-branco"
                              : "bg-gray-300"
                          }`}
                        ></button>
                        <span>High</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-[410px] h-[48px] bg-verde text-white font-medium rounded-md hover:scale-105 transition-transform duration-200"
                    >
                      Create!
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
