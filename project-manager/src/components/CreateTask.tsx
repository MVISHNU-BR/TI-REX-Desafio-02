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
          <div className="w-[491px] h-[1084px] bg-white p-6 rounded-lg shadow-lg relative md:w-[1001px] md:h-[584px]">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-[25px] h-[25px] absolute top-5 right-6 "
            >
              <img src="\src\assets\X-create.svg" alt="close-pag" />
            </button>

           
            <h2 className="w-[189.49px] h-[36px] text-[26px] font-semibold leading-[36px] text-left text-roxo font-roboto mb-4">Create new task</h2>


          
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title"
                 className="w-full sm:w-[412px] h-[36px] border border-[#0000001A] rounded-[6px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[412px] flex flex-col gap-[8px] ">
            
              <label className="block text-gray-700 font-medium">Status</label>
              <div className="flex gap-[25px] ">
               
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStatusChange("To-Do")}
                    className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                      task.status === "To-Do" ? "bg-roxo-create" : "bg-gray-300"
                    }`}
                  ></button>
                  <span>To-Do</span>
                </div>

                
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStatusChange("In Progress")}
                        className="w-[20px] h-[20px] rounded-[6px] bg-laranja-create border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF]"
                      ></button>
                      <span>In Progress</span>
                    </div>

               
                    <div className="flex items-center gap-2 ">
                      <button
                        type="button"
                        onClick={() => handleStatusChange("Done")}
                        className="w-[20px] h-[20px] rounded-[6px] bg-branco border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] "
                      ></button>
                      <span>Done</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    value={task.description}
                    onChange={handleInputChange}
                    placeholder="  Enter a description"
                    className="w-[412px] h-[113px] rounded-[6px] bg-branco border border-border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] resize-none focus:outline-none focus:ring-0"
                  ></textarea>
                </div>

          
                <div className="w-[311px]">
                  <div className="w-[187px] h-[76px]">
                    <label className="block text-gray-700 font-medium mb-1">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={task.startDate}
                      onChange={handleInputChange}
                      className="w-[185px] h-[52px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-[#00000080] 
                      bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] text-center"
                    />
                  </div>
                  <div className="w-[117px] h-[70px] absolute top-[421px] left-[230px] ">
                    <input
                      
                      type="Time"
                      name="startTime"
                      value={task.startTime}
                      onChange={handleInputChange}
                      className="w-[107px] h-[52px] p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px]  text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end"
                    />
                  </div>
                </div>

              
                  <div>
                    
                    <label className="block text-gray-700 font-medium mb-1">End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={task.endDate}
                      onChange={handleInputChange}
                        className="w-[185px] h-[52px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px]  text-[#00000080] 
                          bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] text-center"
                    />

                    <div className="w-[117px] h-[76px] absolute top-[511px] left-[230px] ">
                      <img src="" alt="" />
                      <input
                        type="Time"
                        name="endTime"
                        value={task.endTime}
                        onChange={handleInputChange}
                        className="w-[107px] h-[52px] p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end"
                      />
                      
                    </div>
                    
                  </div>

                <div>
                
              </div>
              
              <div className="relative md:top-[-520px] md:bottom-[622px] md:left-[488px] md:right-[547px]">
  
                <div className="flex-1">
                  <div className="relative md:top-[16px] md:bottom-[622px] md:left-[8px] md:right-[547px]">
                    <label className="block text-gray-700 font-medium mb-1 lg:">Task Cover</label>
                    <label className="relative md:top-[3px] lg:bottom-[622px] md:left-[250px] md:right-[547px]">optional</label>
                  </div>

                  <div
                    className="relative w-[410px] h-[50px] 
                    rounded-[6px] 
                    border border-[#60A5FA] bg-[#EFF6FF] 
                    mb-3 bg-[url('/src/assets/SystemIcons.svg')] bg-no-repeat bg-[15px_center] text-center"
                    
                  >
                    <span className="absolute top-[50%] left-10 transform -translate-y-1/2 font-inter text-lg text-preto leading-6 tracking-[ -0.02em] text-left underline decoration-solid decoration-transparent">imageattachment.jpg</span>
                    <button
                      type="button"
                      className="absolute top-[50%] right-4 transform -translate-y-1/2"
                      aria-label="Delete Task"
                    >
                      <img
                        src="/src/assets/lixeiraIcons.svg"
                        alt="Delete"
                        className="w-[18px] h-[18px]"
                      />
                    </button>
                  </div>

                  <div
                    className="w-[410px] h-[152px] rounded-[6px] border-2 border-dashed border-[#60A5FA] flex justify-center items-center mb-4"
                  >
                    <div className="w-[214px] h-[94px] flex flex-col justify-center items-center text-cinza-create">
                      <img
                        src="/src/assets/uploadicon.svg"
                        className="w-[24px] h-[24px] mb-2"
                        alt="Upload"
                      />
                      <span className="text-center text-[16px] leading-[26px] tracking-[-0.02em] font-inter font-normal">
                        Drop here to attach or <span className="text-roxo-claro">upload</span>
                      </span>
                      <span className="mt-4 text-cin tracking-[-0.02em] font-inter font-normal ">
                        Max size: 5GB
                      </span>
                    </div>
                  </div>
              </div>

              
              <div className="flex-1 ">
                <div>
                  <label className="block text-gray-700 font-medium  ">Add People</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="addPeople"
                    value={task.addPeople}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-[410px] h-[45px] border border-[#0000001A] rounded-[6px] px-10 py-2 bg-[url('/src/assets/searchh.svg')] bg-no-repeat bg-[left_10px_center] placeholder:pl-1 mb-3"
                  />
                </div>

               
                <div className="w-[412px] flex flex-col gap-[8px] ">
                  <label className="block text-gray-700 font-medium">Priority</label>
                  <div className="flex gap-[50px]">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePriorityChange("Low")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.priority === "Low" ? "bg-roxo-create" : "bg-gray-300"
                        }`}
                      ></button>
                      <span>Low</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePriorityChange("Mid")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.priority === "Mid" ? "bg-laranja-create" : "bg-gray-300"
                        }`}
                      ></button>
                      <span>Mid</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePriorityChange("High")}
                        className={`w-[20px] h-[20px] rounded-[6px] border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF] ${
                          task.priority === "High" ? "bg-branco" : "bg-gray-300"
                        }`}
                      ></button>
                      <span>High</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="w-[410px] h-[48px] bg-verde text-white font-medium rounded-md relative md:top-[3px] md:bottom-[622px] md:left-[-265px] md:right-[547px] "
                  >
                    Create!
                  </button>
                </div>
            </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
