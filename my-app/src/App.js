import './App.css';
import HeaderBlock from "./pages/HeaderBlock";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <div className="App">
        <HeaderBlock />
        <div className='MainContentDiv'>
            <MainContent />
        </div>
    </div>
  );
}

export default App;
