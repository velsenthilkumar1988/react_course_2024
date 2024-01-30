import { useEffect, useState } from "react";
import SearchHomePage from "../../Components/Search";
import "./style.css";
import RecipeItem from "../../Components/recipe-item";
import favoriteItemPage from "../../Components/favorite-item";
import FavourRecipeItem from "../../Components/favorite-item";
const dummydata = "dummydata";
const Homepage = () => {
  //loading state
  const [loadingState, setloadingState] = useState(false);

  //save result that we received from api
  const [receipes, setReceipes] = useState([]);
  //favourite state will be loading
  const [favouritesVal, setFavouritesVal] = useState([]);
  
  const getDataFromSearchComponent = (getData) => {
    console.log(getData, "getData Value");
    //keep loading state as true before we are calling true
    setloadingState(true);

    //calling api method receipes

    async function getReceipes() {
      const apiResource = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7d79ee5722714cc4b2912d4b092095b9&query=${getData}`
      );
      const result = await apiResource.json();
      console.log(result);
      const { results } = result;
      if (results && results.length > 0) {
        setloadingState(false);
        setReceipes(results);
      }
    }
    getReceipes();
  };
  console.log(setloadingState, receipes);
  const addToFavourites = (getCurrentRecipeItem) => {
    console.log(getCurrentRecipeItem);
    let cpyFavouriteVal = [...favouritesVal];

    const index = cpyFavouriteVal.findIndex(item=> item.id === getCurrentRecipeItem.id)
    console.log(index);
    if(index === -1){
        cpyFavouriteVal.push(getCurrentRecipeItem)
        setFavouritesVal(cpyFavouriteVal)
        //save the local storage in favourit items
        localStorage.setItem('favorites', JSON.stringify(cpyFavouriteVal))
    }else{
        alert('Item is Already inserted in Favourites')
    }
  };

  useEffect(()=>{
    console.log('lets play only one time on page load');
    const extractFovoriteFromLocalStorageOnPageLoad = JSON.parse(localStorage.getItem('favorites'));
    setFavouritesVal(extractFovoriteFromLocalStorageOnPageLoad);

  },[])

  return (
    <div className="homepage">
      <SearchHomePage
        getDataFromSearchComponent={getDataFromSearchComponent}
        dummydatavalue={dummydata}
      />

      {/**fovourite item loading */}  
      <div className="favour-wrapper">
            <h1 className="favour-title">Favorite Title</h1>
            <div className="favour-items">
            {favouritesVal && favouritesVal.length > 0
            ? favouritesVal.map((item) => (
                //favoriteItemPage
                <FavourRecipeItem
                id={item.id}
                image={item.image}
                title={item.title}
                />
              ))
            : null}
            </div>

      </div>  
      {/**fovourite item loading */}  

      {/**show loading state */}
      {loadingState && (
        <div className="">Loading Receipes ! Please Wait...</div>
      )}
      {/**show loading state */}

      {/**Map through all the receipes */}
      <div className="items">
        {receipes && receipes.length > 0
          ? receipes.map((item) => (
              <RecipeItem
                addToFavourites={()=>addToFavourites(item)}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))
          : null}
      </div>

      {/**Map through all the receipes */}
    </div>
  );
};

export default Homepage;
