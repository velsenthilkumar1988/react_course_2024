import { useEffect, useState } from "react";
import "./style.css";
const SearchHomePage = (props)=>{
    console.log(props)
    const {getDataFromSearchComponent, apiCalledSuccess, setApiCalledSuccess} = props;
    const [inputValue, setInputValue] = useState('') //initial value
    const handleInputValue = (event) =>{
        const {value} = event.target;
        setInputValue(value);
    }
    console.log(inputValue)

    const handleSubmit = (event)=>{
        event.preventDefault()
        getDataFromSearchComponent(inputValue)
    }
    useEffect(()=>{
        if(apiCalledSuccess){
            setInputValue('')
            setApiCalledSuccess(false)
        }
    },[apiCalledSuccess, setApiCalledSuccess])
    return(
        <div className="search_home_page">
            <form onSubmit={handleSubmit} action="" className="Form_Search">
                <input type="search" onChange={handleInputValue} value={inputValue} placeholder="Search Receipes" id="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};


export default SearchHomePage;