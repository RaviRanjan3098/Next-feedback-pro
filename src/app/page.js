"use client"
import Image from "next/image";
import React,{useState} from "react";
import { FaStar } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [communicationrating, setCommunicationrating] = useState(0);
  const [selected, setSelected] = useState(null);
  return (
    <>
     <section className="flex  justify-center bg-blue-500 h-screen">
       <div className="bg-white m-4 rounded-xl p-3 pb-16">
         <span><RxCross2 className="text-xl" /></span>
         <h1 className="text-xl font-medium">Leave a review </h1>
        <div className="mt-4">
         <p className="text-md font-medium">Safety </p>
         <p className="text-sm text-gray-500">open and exploratory interviews are very useful. </p>
         <div className="flex space-x-2 mt-1 cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)}>
                <FaStar className={star <= rating ? "text-yellow-500 text-lg" : "text-gray-300 text-lg"} />
              </span>
            ))}
          </div>
       </div>
              {/* communication section */}
       <div className="mt-4">
         <p className="text-md font-medium">Communication </p>
         <p className="text-sm text-gray-500">If you would like to rate your own communication skills, you can do so based on feedback </p>
         <div className="flex space-x-2 mt-1 cursor-pointer">
            {[1, 2, 3, 4, 5].map((communicationstar) => (
              <span key={communicationstar} onClick={() => setCommunicationrating(communicationstar)}>
                <FaStar className={communicationstar <= communicationrating ? "text-yellow-500 text-lg" : "text-gray-300 text-lg"} />
              </span>
            ))}
          </div>
       </div>
                 {/* like and dislike section */}
       <div className="mt-4">
         <p className="text-md font-medium">Would you recommend trausti? </p>
         <p className="text-sm text-gray-500">Your opinion won't be posted publicly</p>
         <div className="flex space-x-6 mt-2 text-md cursor-pointer">
            <div className="flex space-x-2" onClick={() => setSelected('dislike')}>
              <span className={selected === 'dislike' ? 'text-yellow-500' : 'text-gray-300'}><AiFillDislike className="text-2xl" /></span>
              <p >No</p>
            </div>
            <div className="flex space-x-2" onClick={() => setSelected('like')}>
              <span className={selected === 'like' ? 'text-yellow-500' : 'text-gray-300'}><AiFillLike className="text-2xl" /></span>
              <p >Yes</p>
            </div>
          </div>
       </div>
                 {/* Praise */}
       <div className="mt-4">
         <p className="text-md font-medium">Praise </p>
         <p className="text-sm text-gray-500">What traits best describe Trausti?</p>
         <div className="flex space-x-6 mt-2 text-md cursor-pointer flex-wrap">
            <div className="px-3 py-1 bg-gray-300 rounded-full hover:bg-green-400">
              <button>Adventurous</button>
            </div>
            <div className="px-3 py-1 bg-gray-300 rounded-full hover:bg-green-400">
              <button>Clean</button>
            </div>
            <div className="px-3 py-1 bg-gray-300 rounded-full hover:bg-green-400">
              <button>Good listener</button>
            </div>
          </div>
       </div>
       </div>

     </section>
    </>
  );
}
