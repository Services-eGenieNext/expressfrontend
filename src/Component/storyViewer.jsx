import React, { useEffect } from "react";
import NotFoundImage from "../assets/images/noDataFound.png";
import ImagePlaceholder from '../assets/images/imagePlaceholder.png'

function StoryViewer({ storieResults }) {
  useEffect(() => {
    console.log(storieResults, "storieResults")
  }, [storieResults])
  return (
    <div className="flex justify-center">
      {storieResults.length <= 0 ? (
        <div>
          <img className="w-[500px]" src={NotFoundImage} alt="" />
          <p className="sm:text-[24px]">No Data Found</p>
          <p className="sm:text-[24px]">Search Your Fictional Story</p>
        </div>
      ) : (
        <div className="text-black flex flex-col gap-y-5">
          {storieResults.map((story, index) => {
            return <div key={index} className="bg-white px-3 py-5 md:w-[750px] sm:w-[500px] w-[250px] rounded-md opacity-50 flex md:flex-row flex-col gap-x-5 items-center">
              {story?.images?.length > 0 ? (
                <img className="md:w-[250px] md:h-[250px] md:mb-0 mb-5 rounded-md" src={story?.images[0]?.url} alt="" />
              ) : (
                <img className="md:w-[250px] md:h-[250px] md:mb-0 mb-5 rounded-md" src={ImagePlaceholder} alt="" />
              )}
              <div className="flex flex-col gap-y-5">
                <p className="font-bold"><span className="mr-2">
                Story Line:
                </span>
                {story.storyLine}
                </p>
                <p className="md:text-start text-center"><span className="font-bold mr-2">
                  Story Result:
                </span>
                  {story.result}
                </p>
              </div>
            </div>
          })}
        </div>
      )}
    </div>
  );
}

export default StoryViewer;
