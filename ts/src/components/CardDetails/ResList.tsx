import { CDN } from "../../utils/constants";

const ResList = ({ foodListData }) => {
  // console.log("Food List Data", foodListData);
  return (
    <div>
      <ul className="space-y-5 relative">
        {foodListData &&
          foodListData.map((food, idx) => {
            const data = food?.card?.info;
            return (
              <li key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{data?.name}</h3>
                  <div className="h-20 w-20">
                    <img
                      src={CDN + data.imageId}
                      alt={data.title}
                      className="w-full h-full shadow-lg object-cover"
                    />
                  </div>
                </div>
                <p>
                  ₹{data?.defaultPrice / 100 || Math.floor(data?.price / 100)}
                </p>
                <p>{data?.description || "description"}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ResList;
