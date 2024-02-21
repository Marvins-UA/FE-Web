import {ReactComponent as ProcessIcon} from "../../atoms/Icons/ProcessIcon.svg";
import './style.scss';
import Typography from "../../atoms/Typography";

function ProcessHeader() {
    return (
        <div className="ProcessHeader">
           <ProcessIcon className='ProcessIcon' />
            <div className='ProcessHeaderTitle'>
                <Typography variant='title3' fontWeight='body3'>ПРОЦЕС</Typography>
            </div>
            <div className='ProcessHeaderTitleMobile'>
                <Typography variant='title16' fontWeight='body3'>ПРОЦЕС</Typography>
            </div>
        </div>
    );
}

export default ProcessHeader;
