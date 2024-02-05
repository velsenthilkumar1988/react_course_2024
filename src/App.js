//should start with arrow function
//components


import "./App.css";
import ThemeButton from "./Components/theme-button";
import Homepage from "./pages/homepage";
import PropsType from "./pages/tutorjoes/PropsType";

//create context
// provide context
//consume context
function App() {
  //const [theme, setTheme] = useState(false);
  return (
    <div className="App">
        <Homepage/>
      </div>
  );
}
export default App;
