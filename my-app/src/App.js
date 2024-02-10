import './App.css';
import HeaderBlock from "./pages/HeaderBlock";
import MainContent from "./pages/MainContent";
import PackagingLine from "./molecules/PackagingLineBlock";
import AdvantagesBlock from "./pages/AdvantagesBlock";
import PartnersBlock from "./pages/PartnersBlock";
import FooterBlock from "./pages/FooterBlock";
import ApplicationForm from "./molecules/ApplicationForm";

function App() {
  return (
    <div className="App">
        <HeaderBlock />
        <ApplicationForm />
        <div className='MainContentDiv'>
            <MainContent />
        </div>
        <PackagingLine />
        <div className='MainContentDiv'>
            <div className='MainContent'>
                <AdvantagesBlock />
                <PartnersBlock />
                <FooterBlock />
            </div>
        </div>
    </div>
  );
}

export default App;
