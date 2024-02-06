import './style.scss';
import CooperationBlock from "../CooperationBlock";
import FlavorsBlock from "../FlavorsBlock";
import ProcessText from "../../molecules/ProcessText";

function MainContent() {
    return (
        <div className="MainContent">
            <CooperationBlock />
            <FlavorsBlock />
            <ProcessText />
        </div>
    );
}

export default MainContent;
