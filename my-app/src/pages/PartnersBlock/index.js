import './style.scss';
import PartnersBoard from "../../molecules/PartnersBoard";
import Typography from "../../atoms/Typography";

function PartnersBlock() {
    return (
        <div className="PartnersBlock">
            <Typography variant='title3' fontWeight='body1'>НАШІ ПАРТНЕРИ</Typography>
            <PartnersBoard />
        </div>
    );
}

export default PartnersBlock;
