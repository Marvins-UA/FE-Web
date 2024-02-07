import './style.scss';
import CooperationBlock from "../CooperationBlock";
import FlavorsBlock from "../FlavorsBlock";
import ProcessBlock from "../ProcessBlock";
import PackagingLine from "../../molecules/PackagingLineBlock";
import AdvantagesBlock from "../AdvantagesBlock";

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
