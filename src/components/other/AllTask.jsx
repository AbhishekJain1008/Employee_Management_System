// Admin all task present here

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-70">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed Task </h5>
        <h5 className="w-1/5 ">Failed Task </h5>
      </div>

      <div className="h-[80%] overflow-auto ">
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className="border-2 mb-2 py-2 px-3 flex justify-between rounded ">
              <h2 className="w-1/5 text-lg font-medium text-shadow-white">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-600">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-violet-700">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 text-red-600 font-medium">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
