import React, { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { ChatContext } from "../../context/ChatContext";

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;

// -------------------------------------- \\
// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import ChatContainer from "../components/ChatContainer";
// import RightSidebar from "../components/RightSidebar";

// const HomePage = () => {
//   const [selectedUser, setSelectedUser] = useState(false);

//   return (
//     <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
//       {/* className={`homepage overflow-hidden backdrop-blur-md w-[75%] h-[85%] rounded-[20px] grid border-solid border border-white ${
//         selectedUser ? "grid-cols-[300px_1fr_300px]" : "grid-cols-[300px_1fr]"
//       }`} */}
//       <div
//         className={`backdrop-blur-md border-2 border-gray-600 rounded-[20px] overflow-hidden h-[100%] grid grid-cols-1 relative ${
//           selectedUser
//             ? "md:grid-cols-[300px_1fr_300px]"
//             : "md:grid-cols-[300px_1fr]"
//         }`}
//       >
//         <Sidebar
//           selectedUser={selectedUser}
//           setSelectedUser={setSelectedUser}
//         />
//         <ChatContainer
//           selectedUser={selectedUser}
//           setSelectedUser={setSelectedUser}
//         />
//         <RightSidebar
//           selectedUser={selectedUser}
//           setSelectedUser={setSelectedUser}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
