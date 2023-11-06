import React, {useState} from 'react';

export default function Client() {
  const [searchQuery, setSearchQuery]= useState('')
  const [currentPage, setCurrentPage]= useState(1)

  const clients = [
    {
      id: 1,
      name: 'John Doe 1',
      image: 'client1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith 2',
      image: 'client2.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson 3',
      image: 'client3.jpg',
    },
    {
      id: 4,
      name: 'Alice Johnson 4',
      image: 'client4.jpg',
    },
    {
      id: 5,
      name: 'Alice Johnson 5',
      image: 'client5.jpg',
    },
    {
      id: 6,
      name: 'Alice Johnson 6',
      image: 'client6.jpg',
    },
    {
      id: 7,
      name: 'Alice Johnson 7',
      image: 'client7.jpg',
    },
    {
      id: 8,
      name: 'Alice Johnson 8',
      image: 'client8.jpg',
    },
    {
      id: 9,
      name: 'Alice Johnson 9',
      image: 'client9.jpg',
    },
  ];

    const filteredClitents=clients.filter((client)=>
    client.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )

    const itemsPerPage=5

    const totalPages=Math.ceil(filteredClitents.length/itemsPerPage);


    const startIndex = (currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage


    const currentClients = filteredClitents.slice(startIndex,endIndex)
    const handlePageChange = (page)=>{
      setCurrentPage(page)
    }
  return (
    <div className='w-3/4 h-screen p-20 bg-green-100 flex flex-col items-center'>
      <h1 className='text-2xl font-semibold text-green-800 mb-4'>
        Clients List
      </h1>
      <input
      type='text'
      placeholder='Search Clients'
      className='w-full py-2 px-4 mb-4 rounded-md border border-gray-300'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <div className='grid grid-cols-5 gap-4'>
        {currentClients.map((client) => (
          <div
            key={client.id}
            className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center'>
            <img
              src={client.image}
              alt={`${client.name}'s Profile`}
              className='w-20 h-20 object-cover rounded-full mb-2'
            />
            <p className='text-xl font-semibold'>{client.name}</p>
            <div className='space-x-2'>
              <button className='py-2 px-4 rounded-full flex items-center text-blue-600 hover:underline'>
                View Profile
              </button>
              <button className='text-blue-600 hover:underline'>
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4 flex justify-center space-x-2'>
        {Array.from({length:totalPages},(_,index)=>(
          <button
          key={index}
          className={`px-3 py-2 rounded-full ${
            currentPage === index +1
            ? `bg-green-800 text-white`
            : 'bg-white border border-gray-300 text-gray-600 hover:bg-green-800 hover:text-white'
          }`}
          onClick={()=>handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
