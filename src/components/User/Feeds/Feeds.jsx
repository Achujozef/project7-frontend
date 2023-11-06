import React, { useEffect, useState } from "react";
import TopNav from "../TopNav/TopNav";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchFeeds } from "../../../api/feeds";
import { useSelector } from "react-redux";
import Post from './Post'; 

export default function Feeds() {


  const [feeds, setFeeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const user = useSelector(state => state.userlogin.patient);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFeeds(user.id);
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    }
    fetchData();
  }, []);


  function handleFollowedButtonClick() {}


  // Filter feeds based on the search query
  // const filteredFeeds = feeds.filter(feed => {
  //   return feed.doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
  // });


  return (
    <div className="w-1/2 p-4 flex flex-col items-center">
      <TopNav />
      <div className="mt-4 w-full max-w-md relative flex items-center">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 pr-10"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="">
        <button
          className='my-2 mx-2 p-2 rounded-lg border w-32 bg-gray-100 hover:bg-green-600  cursor-pointer text-xl font-semibold'
          onClick={() => handleFollowedButtonClick("Item 1")}
        >
          Followed
        </button>
        <button
          className='my-2 mx-2 p-2 rounded-lg border w-32 bg-gray-100 hover:bg-green-600  cursor-pointer text-xl font-semibold'
          onClick={() => handleFollowedButtonClick("Item 2")}
        >
          Top Feeds
        </button>
      </div>
      <div className="overflow-y-auto mt-4" style={{ maxHeight: '780px' }}>
      {feeds.map((feed) => (
        <Post key={feed.id} post={feed} />
      ))}
      </div>
    </div>
  );
}
