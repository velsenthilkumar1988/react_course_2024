import "./style.css";

const FavourRecipeItem = (props)=>{
    const {id,image,RemoveFromFavour,title} = props;

    console.log(props,'receipes items are there')
    
    return(
        <div key={id} className="recipe-items">
            <div>
                <img src={image} alt="image of recipes"/>
            </div>
            <p>{title}</p>
            <button type="button" onClick={RemoveFromFavour}>Remove to Favourites</button>
        </div>
    )
}

export default FavourRecipeItem;