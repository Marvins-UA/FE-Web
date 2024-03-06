import './style.scss';
import ProcessText from "../../molecules/ProcessText";
import ProcessHeader from "../../molecules/ProcessBlockHeader";
import ProcessSlider from "../../molecules/ProcessSlider";

function ProcessBlock() {
    return (
        <div className="ProcessBlock" id='processSection'>
            <ProcessHeader />
            <ProcessText />
            {/*<ProcessSlider />*/}
        </div>
    );
}

export default ProcessBlock;
