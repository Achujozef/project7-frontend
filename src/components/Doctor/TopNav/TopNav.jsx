import React from 'react'


export default function TopNav() {
  return (

    <div className=" w-3/4 h-16 bg-gray-100">
      <div className="flex justify-center space-x-4 items-center">
        <button
          className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={() => {
            // Add your button click handler logic here
            console.log("Home Button clicked");
          }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="text-white mr-2" // Add margin to separate icon from text
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <BiHomeAlt2 /> 
         
          </svg> */}
        Home</button>

        <button
          className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={() => {
            // Add your button click handler logic here
            console.log("Diet Button clicked");
          }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="text-white mr-2" // Add margin to separate icon from text
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <HiOutlineDocumentText />
          </svg> */}
        Diet </button>

        <button
          className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={() => {
            // Add your button click handler logic here
            console.log("Message Button clicked");
          }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="text-white mr-2" // Add margin to separate icon from text
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <AiOutlineMessage />
          </svg> */}
       Messages </button>
      </div>
    </div>

  );
}
