import './App.css';
import HeaderBlock from "./pages/HeaderBlock";
import MainContent from "./pages/MainContent";
import PackagingLine from "./molecules/PackagingLineBlock";
import AdvantagesBlock from "./pages/AdvantagesBlock";
import PartnersBlock from "./pages/PartnersBlock";
import FooterBlock from "./pages/FooterBlock";
import ApplicationForm from "./molecules/ApplicationForm";
import HeaderSlider from "./molecules/HeaderSlider";
import ProcessSlider from "./molecules/ProcessSlider";

function App() {

    return (
    <div className="App">
        <HeaderBlock />
        <HeaderSlider />
        <ApplicationForm />
        <div className='MainContentDiv'>
            <MainContent />
        </div>
        <ProcessSlider />
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
