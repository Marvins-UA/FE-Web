import './style.scss';
import CooperationBlock from "../CooperationBlock";
import FlavorsBlock from "../FlavorsBlock";
import ProcessBlock from "../ProcessBlock";
import PackagingLine from "../../molecules/PackagingLineBlock";

function MainContent() {
    return (
        <div className="MainContent">
            <CooperationBlock />
            <FlavorsBlock />
            <ProcessBlock />
            <PackagingLine />
        </div>
    );
}

export default MainContent;
