import React, { useEffect, useState } from "react";
import "./Movie.css";
export default function Comments({ movieRevievList }) {
  const [revievs, setRevievs] = useState(movieRevievList);

  useEffect(() => {
    console.log(movieRevievList);
    if (movieRevievList) {
      for (let a = 0; a < movieRevievList.results.length; a++) {
        console.log(movieRevievList.results[a].author_details.avatar_path);
      }
    }
  });

  return (
    <>
      {movieRevievList.total_results > 0 && (

        <div className="bg-[#0F172A] w-full h-full mt-12 sm:mt-12 py-4 sm:py-6 px-8 sm:px-14 lg:px-24 flex flex-col align-center">
             <div className="w-full pr-4 mb-12 sm:mb-4 " >
        <h3 className="bg-indigo-600 w-auto inline py-2 rounded-lg shadow-indigo-700  ml-[4.6px] shadow-lg px-3 pr-4 text-4xl sm:text-5xl text-[#0f172a] font-bold fontTextTitle"   style={{
                backgroundImage:
                  "linear-gradient(to left bottom, #60a5fa, #5697fb, #5388fa, #5878f7, #6366f1)",
              }}>Comments</h3>

                </div>
                <div className="space-y-4 pt-0 sm:pt-4 mb-12 sm:mb-2">
                {movieRevievList.results.map((comment) => (
            <div
              className="commentBg w-full h-full pt-3  px-4 rounded-lg shadow-lg shadow-indigo-700 pb-3"
              style={{
                backgroundImage:
                  "linear-gradient(to left bottom, #60a5fa, #5697fb, #5388fa, #5878f7, #6366f1)",
              }}
            >
              <div className="w-full h-[80px] flex flex-wrap border-b-[1px] border-[#0F172A]">
                <div className="w-16 h-16 rounded-full">
                  <img
                    className="rounded-full"
                    src={
                      comment.author_details.avatar_path != null
                        ? comment.author_details.avatar_path.length < 50
                          ? `https://www.gravatar.com/avatar/${comment.author_details.avatar_path}`
                          : comment.author_details.avatar_path.slice(1)
                        : "https://i0.wp.com/www.dizibox.tv/wp-content/themes/dbx18/assets/img/avatar.jpg?ssl=1"
                    }
                  ></img>
                </div>
                <h3 className="pt-1 sm:pt-2 pl-2 font-semibold text-lg text-[#0F172A]">
                  @{comment.author_details.username}
                </h3>

                <div className="w-full sm:w-48 h-24 ml-auto mt-[-45px] sm:mt-0 flex-row">
                    
                  <h3 className="pt-[6.8px] sm:pt-2  text-right pr-4 font-medium text-md text-[#0F172A]">
                    {comment.created_at.slice(0, 10)}
                  </h3>
                 
                </div>
              </div>
              <div className="w-full h-auto pt-3 overflow-x-hidden">
                <div className="w-full h-auto">
                  <p className="font-[500] text-md fontText pb-4">
                    {comment.content}
                  </p>
                </div>
              </div>
              {comment.author_details.rating&&
                  <div className="flex justify-end inline">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
                    <h3 className="text-right pr-4 font-medium text-xl text-[#0F172A]">
                      {comment.author_details.rating}
                    </h3>
                  </div>
                  }
            </div>
            
          ))}
                </div>
        
        </div>
      )}
    </>
  );
}
