import { useState } from "react";

export default function CreateTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "To-Do", 
  });

  const handleStatusChange = (status: string) => {
    setTask((prev) => ({
      ...prev,
      status,
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
    console.log("Task Saved:", task);
    setIsModalOpen(false);
    setTask({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "To-Do",
    });
  };

  return (
    <>
    

      {isModalOpen && (
        <div className="flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[491px] h-[1084px] bg-white p-6 rounded-lg shadow-lg relative">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

           
            <h2 className="w-[189.49px] h-[36px] text-[26px] font-semibold leading-[36px] text-left text-roxo font-roboto">Create new task</h2>


          
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title"
                  className="w-full border border border-[#0000001A] rounded-[6px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-[412px] flex flex-col gap-[8px]">
            
              <label className="block text-gray-700 font-medium">Status</label>

             
              <div className="flex gap-[25px]">
               
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStatusChange("To-Do")}
                    className="w-[20px] h-[20px] rounded-[6px] bg-roxo-create border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF]"
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

               
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStatusChange("Done")}
                    className="w-[20px] h-[20px] rounded-[6px] bg-branco border border-[#00000040] shadow-[inset_0_0_0_1px_#FFFFFF]"
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
                    className="w-[185px] h-[52px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-left text-[#00000080] 
                    bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] text-center"
                  />
                </div>
                <div className="w-[117px] h-[76px] absolute top-[409px] left-[230px] ">
                  <input
                    
                    type="Time"
                    name="startTime"
                    value={""}
                    onChange={handleInputChange}
                     className="w-[107px] h-[52px] p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-left text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end"
                  />
                </div>
              </div>

              
              <div>
                
                <label className="block text-gray-700 font-medium mb-1">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={""}
                  onChange={handleInputChange}
                    className="w-[185px] h-[52px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-left text-[#00000080] 
                      bg-[url('/src/assets/Calendar.svg')] bg-no-repeat bg-[15px_center] text-center"
                />

                <div className="w-[117px] h-[76px] absolute top-[500px] left-[230px] ">
                  <img src="" alt="" />
                  <input
                    type="Time"
                    name="endTime"
                    value={""}
                    onChange={handleInputChange}
                    className="w-[107px] h-[52px] p-[8px_16px_8px_16px] rounded-[8px] border border-[#0000001A] shadow-[inset_0_0_0_1px_#FFFFFF] font-roboto text-[14px] font-normal leading-[16.41px] text-left text-[#00000080] bg-[url('/src/assets/fi_clock.svg')] bg-no-repeat bg-[17px_center] text-end"
                  />
                </div>
                
              </div>

              <div>
                
              </div>
             

              <div className="text-center">
                <button
                  type="submit"
                  className="w-[410px] h-[48px] bg-verde text-white font-medium rounded-lg hover:bg-blue-600 transition">
                  Create!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
