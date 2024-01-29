import SearchHomePage from "../../Components/Search";

const dummydata = 'dummydata';
const Homepage = ()=>{
    const getDataFromSearchComponent = (getData)=>{
        console.log(getData,'getData Value')

        //calling api method receipes
        async function getReceipes(){
            const apiResource = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7d79ee5722714cc4b2912d4b092095b9&query=${getData}`);
            const result = await apiResource.json()
            console.log(result);
        }
        getReceipes();
    }
    return(
        <div className="homepage">
            <SearchHomePage getDataFromSearchComponent={getDataFromSearchComponent} dummydatavalue= {dummydata}/>
        </div>
    )
}

export default Homepage;