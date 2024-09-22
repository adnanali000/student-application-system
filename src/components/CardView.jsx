import React from 'react';
import mitImage from '../assets/mit.jpeg'
import imperialImage from '../assets/imperial.jpg'
import oxfordImage from '../assets/oxford.jpg'
import cambridgeImage from '../assets/cambride.jpg'

export default function CardView({ data }) {
  const getImage = {
    mit:mitImage,
    imperial:imperialImage,
    oxford: oxfordImage,
    cambridge:cambridgeImage
  }
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <div className='w-full h-52'>
            <img src={getImage[item?.university?.toLowerCase()]} className='w-full h-full object-cover rounded-tr-md rounded-tl-md' />
          </div>
          <div className='p-4'>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
          <div className='flex items-center justify-between'>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">University:</span> {item.university}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Country:</span> {item.country}
          </p>
          </div>
          <div className='flex items-center justify-between'>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Duration:</span> {item.duration} Year(s)
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Cost:</span> ${item.cost}
          </p>
          </div>
          <div className='flex items-center justify-between'>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Language:</span> {item.language}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Deadline: </span>
            {new Date(item.deadline).toLocaleDateString()}
          </p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
