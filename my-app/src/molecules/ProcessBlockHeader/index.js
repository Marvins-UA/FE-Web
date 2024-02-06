import {ReactComponent as ProcessIcon} from "../../atoms/Icons/ProcessIcon.svg";
import './style.scss';
import Typography from "../../atoms/Typography";

function ProcessHeader() {
    return (
        <div className="ProcessHeader">
           <ProcessIcon className='ProcessIcon' />
           <Typography variant='title3' fontWeight='body3'>ПРОЦЕС</Typography>
        </div>
    );
}

export default ProcessHeader;
