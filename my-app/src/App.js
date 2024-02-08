import './App.css';
import HeaderBlock from "./pages/HeaderBlock";
import MainContent from "./pages/MainContent";
import PackagingLine from "./molecules/PackagingLineBlock";
import AdvantagesBlock from "./pages/AdvantagesBlock";
import PartnersBlock from "./pages/PartnersBlock";
import ContactsBlock from "./molecules/ContactsBlock";

function App() {
  return (
    <div className="App">
        <HeaderBlock />
        <div className='MainContentDiv'>
            <MainContent />
        </div>
        <PackagingLine />
        <div className='MainContentDiv'>
            <div className='MainContent'>
                <AdvantagesBlock />
                <PartnersBlock />
                <ContactsBlock />
            </div>
        </div>
    </div>
  );
}

export default App;
