import "./style.css";

const RecipeItem = (props)=>{
    const {id,image,title,addToFavourites} = props;

    console.log(props,'receipes items are there')
    
    return(
        <div key={id} className="recipe-items">
            <div>
                <img src={image} alt="image of recipes"/>
            </div>
            <p>{title}</p>
            <button type="button" onClick={addToFavourites}>Add to Favourites</button>
        </div>
    )
}

export default RecipeItem;