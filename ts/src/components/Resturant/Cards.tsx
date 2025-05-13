interface ResturantData {
  id: string;
  name: string;
  image: string;
  locality: string;
  areaName: string;
  rating: number | string;
  price: number;
  cuisines: string;
  deliveryTime: string | number;
  link: string;
}

const Cards = ({data}: {data: ResturantData}) => {
    // console.log(props.data)
    const {name, image, locality, price, rating, cuisines, areaName} = data;
  return (
    <div className="w-96 rounded-md bg-white shadow-md">
      <img
        className="h-52 rounded-tl-md rounded-tr-md object-cover w-full"
        src={image}
        alt=""
      />

      <div className="p-5 font-light text-sm text-[#2a2a2a]">
        <div className="flex justify-between font-semibold">
          <h1>{name}</h1>
          <div className="rating">{rating}</div>
        </div>
        <div className="detail-1 flex justify-between">
          <p>{cuisines}</p>
          <p>{price} for two</p>
        </div>
        <div className="detail-1 flex justify-between">
          <p>{locality}</p>
          <p>{areaName}</p>
        </div>
        <div className="flex flex-col gap-3 mt-4 font-semibold text-white">
          <button className="bg-emerald-500 w-full flex justify-between py-2 px-4 rounded-md">
            <div className="left">Flat 35% off on Booking</div>
            <div className="right">+8 more</div>
          </button>
          <button className="bg-emerald-200 text-emerald-600 w-full flex justify-between py-2 px-4 rounded-md">
            <div className="left">Flat 35% off on Booking</div>
            <div className="right">+8 more</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
