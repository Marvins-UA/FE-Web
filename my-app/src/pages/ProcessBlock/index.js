import './style.scss';
import ProcessText from "../../molecules/ProcessText";
import ProcessHeader from "../../molecules/ProcessBlockHeader";

function ProcessBlock() {
    return (
        <div className="ProcessBlock">
            <ProcessHeader />
            <ProcessText />
        </div>
    );
}

export default ProcessBlock;
