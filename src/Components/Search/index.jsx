import { useState } from "react";
import "./style.css";
const SearchHomePage = (props)=>{
    console.log(props)
    const {getDataFromSearchComponent} = props;
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