const ResturantCardContainer = ({resturantList})=>{
    console.log(resturantList);
    const {name, avgRating} = resturantList.info;

    return (
        <div className="res-container">
            <img className="res-logo" src="https://imgs.search.brave.com/MIB3DIydW4zsAy-r81gUd2ybY0JjmwJrgq01XF_WWng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kNHQ3/dDh5OHhxbzB0LmNs/b3VkZnJvbnQubmV0/L2FwcC8vcmVzaXpl/ZC84MThYNDUwL3Jl/c3RhdXJhbnQvMjIz/MjMxL3Jlc3RhdXJh/bnQyMjAxNjA5MTMx/ODQ0MTMuanBn" alt="res-img" />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <p>4.5 stars</p>
            <h4>34 min Delivery</h4>
        </div>
    )
}

export default ResturantCardContainer;