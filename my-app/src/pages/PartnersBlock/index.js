import './style.scss';
import PartnersBoard from "../../molecules/PartnersBoard";
import Typography from "../../atoms/Typography";

function PartnersBlock() {
    return (
        <div className="PartnersBlock" id='partnersSection'>
            <div className='PartnersTitle'>
                <Typography variant='title3' fontWeight='body1'>НАШІ ПАРТНЕРИ</Typography>
            </div>
            <div className='PartnersMobileTitle'>
                <Typography variant='title16' fontWeight='body3'>НАШІ ПАРТНЕРИ</Typography>
            </div>
            <PartnersBoard />
        </div>
    );
}

export default PartnersBlock;
