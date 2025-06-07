import { useState } from "react";
import ResList from "./ResList";

const ResCategory = ({ resCategoryData }) => {
    const [showItems, setShowItems] = useState<boolean>(false)
    
    const accordianOpenHandler = ()=>{
        setShowItems(!showItems);
    }
  return (
    <div>
      <div className="mb-8 pb-4 shadow-lg p-10">
        {/* Accordian Header */}
        <div onClick={accordianOpenHandler} className="flex justify-between cursor-pointer">
          <h1 className="text-xl font-bold pb-8">
            {resCategoryData.title} ({resCategoryData.itemCards.length})
          </h1>
          <span className="text-xl">⬇️</span>
        </div>
        {/* Body */}
        <div>
          {showItems && <ResList foodListData={resCategoryData?.itemCards} />}
        </div>
        <div className="border-b border-black/20 h-1 mt-6"></div>
      </div>
    </div>
  );
};

export default ResCategory;
