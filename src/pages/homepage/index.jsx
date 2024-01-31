import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import SearchHomePage from "../../Components/Search";
import "./style.css";
import RecipeItem from "../../Components/recipe-item";
import FavourRecipeItem from "../../Components/favorite-item";
const dummydata = "dummydata";

const reducer = (state, action) => {
  switch (action.type) {
    case "filter_favourites":
      console.log(action);
      return {
        ...state,
        filteredValue: action.value,
      };

    default:
      return state;
  }
};
const initialState = {
  filteredValue: "",
};
const Homepage = () => {
  //loading state
  const [loadingState, setloadingState] = useState(false);

  //save result that we received from api
  const [receipes, setReceipes] = useState([]);

  //favourite state will be loading
  const [favouritesVal, setFavouritesVal] = useState([]);

  //state for api is successfully or not
  const [apiCalledSuccess, setApiCalledSuccess] = useState(false);

  //use reduce functionallity
  const [FilteredState, dispatch] = useReducer(reducer, initialState);

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
        setApiCalledSuccess(true);
      }
    }
    getReceipes();
  };
  console.log(setloadingState, receipes);
  const addToFavourites = useCallback((getCurrentRecipeItem)=>{
    console.log(getCurrentRecipeItem);
    let cpyFavouriteVal = [...favouritesVal];

    const index = cpyFavouriteVal.findIndex(
      (item) => item.id === getCurrentRecipeItem.id
    );
    console.log(index);
    if (index === -1) {
      cpyFavouriteVal.push(getCurrentRecipeItem);
      setFavouritesVal(cpyFavouriteVal);
      //save the local storage in favourit items
      localStorage.setItem("favorites", JSON.stringify(cpyFavouriteVal));
      window.scrollTo({top: '0', behavior: 'smooth'})
    } else {
      alert("Item is Already inserted in Favourites");
    }
  },[favouritesVal])
  // const addToFavourites = (getCurrentRecipeItem) => {
  //   console.log(getCurrentRecipeItem);
  //   let cpyFavouriteVal = [...favouritesVal];

  //   const index = cpyFavouriteVal.findIndex(
  //     (item) => item.id === getCurrentRecipeItem.id
  //   );
  //   console.log(index);
  //   if (index === -1) {
  //     cpyFavouriteVal.push(getCurrentRecipeItem);
  //     setFavouritesVal(cpyFavouriteVal);
  //     //save the local storage in favourit items
  //     localStorage.setItem("favorites", JSON.stringify(cpyFavouriteVal));
  //   } else {
  //     alert("Item is Already inserted in Favourites");
  //   }
  // };

  const RemoveFromFavour = (getCurrentId) => {
    let cpyFavouriteVal = [...favouritesVal];
    cpyFavouriteVal = cpyFavouriteVal.filter(
      (item) => item.id !== getCurrentId
    );
    setFavouritesVal(cpyFavouriteVal);
    localStorage.setItem("favorites", JSON.stringify(cpyFavouriteVal));
  };

  useEffect(() => {
    console.log("lets play only one time on page load");
    const extractFovoriteFromLocalStorageOnPageLoad = JSON.parse(
      localStorage.getItem("favorites")
    );
    setFavouritesVal(extractFovoriteFromLocalStorageOnPageLoad);
  }, []);

  const filteredFavouritesItem = favouritesVal.filter((item) =>
    item.title.toLowerCase().includes(FilteredState.filteredValue)
  );

  const renderRecipes = useCallback(()=>{
    if(receipes && receipes.length >0)
    {
      return(
        receipes.map((item) => (
          <RecipeItem
            addToFavourites={() => addToFavourites(item)}
            id={item.id}
            image={item.image}
            title={item.title}
          />
      ))
      )
    }
  },[receipes,addToFavourites])

  return (
    <div className="homepage">
      <SearchHomePage
        getDataFromSearchComponent={getDataFromSearchComponent}
        dummydatavalue={dummydata}
        apiCalledSuccess={apiCalledSuccess}
        setApiCalledSuccess={setApiCalledSuccess}
      />

      {/**fovourite item loading */}
      <div className="favour-wrapper">
        <h1 className="favour-title">Favorite Title</h1>

        {/** set favour search option*/}
        <div className="search_favour">
          <input
            value={FilteredState.filteredValue}
            name="searchfavorites"
            onChange={(event) =>
              dispatch({ type: "filter_favourites", value: event.target.value })
            }
            placeholder="Search Favourites Items"
          />
        </div>
        {/** set favour search option*/}

        <div className="favour-items">
          {
            !filteredFavouritesItem.length && <div className="no-items">No Favorites are Found!!!</div>
          }
          {filteredFavouritesItem && filteredFavouritesItem.length > 0
            ? filteredFavouritesItem.map((item) => (
                //favoriteItemPage
                <FavourRecipeItem
                  RemoveFromFavour={() => RemoveFromFavour(item.id)}
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
        {/* {
          renderRecipes()
        } */}

        {
          useMemo(()=>
              !loadingState && receipes && receipes.length > 0 
              ? receipes.map((item) => (
              <RecipeItem
                addToFavourites={() => addToFavourites(item)}
                id={item.id}
                image={item.image}
                title={item.title}
              />
              )): null,
          [loadingState, receipes, addToFavourites])
        }

        {/* {receipes && receipes.length > 0
          ? receipes.map((item) => (
              <RecipeItem
                addToFavourites={() => addToFavourites(item)}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))
          : null} */}
      </div>

      {/**Map through all the receipes */}
      {
        !loadingState && !receipes.length && <div className="no-items">No Receipes are there ????</div>
      }
    </div>
  );
};

export default Homepage;
