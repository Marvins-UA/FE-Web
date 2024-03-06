import './style.scss';
import CooperationBlock from "../CooperationBlock";
import FlavorsBlock from "../FlavorsBlock";
import ProcessBlock from "../ProcessBlock";

function MainContent() {
    return (
        <div className="MainContent">
            <CooperationBlock />
            <FlavorsBlock />
            <ProcessBlock />
        </div>
    );
}

export default MainContent;
