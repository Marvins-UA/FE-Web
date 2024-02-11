import NavMenu from "../../molecules/NavMenu";
import './style.scss';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import ArrowsBlock from "../../molecules/ArrowsBlock";
import {useContext, useState} from "react";
import ApplicationForm from "../../molecules/ApplicationForm";

function HeaderBlock() {
    const [formActive, setFormActive] = useState(false);


    return (
        <div className="HeaderBlock">
            <ApplicationForm activeForm={formActive} setActiveForm={setFormActive}/>
            <NavMenu/>
            <div className='HeaderInfoBlock'>
                <div className='HeaderText'>
                    <div className='MainTitle'>
                        <Typography variant='title1' fontWeight='body1'>MARVIN’S™</Typography>
                        <div className='MainTitle2'>
                            <Typography variant='title2' fontWeight='body1'>ЗАВЕРШАЛЬНИЙ ШТРИХ ДЛЯ</Typography>
                            <Typography variant='title2' fontWeight='body1'>ІДЕАЛЬНОГО</Typography>
                            <Typography variant='title2' fontWeight='body1'>ОБСЛУГОВУВАННЯ</Typography>
                        </div>
                    </div>
                    <div className='AdditionalInfTitle'>
                        <Typography fontWeight='body2' variant='title7' color='transparentGrey'>Єдиний в Україні виробник жувальної гумки з 2015 року</Typography>
                    </div>
                </div>
                <div className='LeaveApplicationBtn'>
                    <Button size='big' onClick={() => setFormActive(true)}>
                        <Typography variant='title5' fontWeight='body3'>ЗАЛИШИТИ ЗАЯВКУ</Typography>
                    </Button>
                    <Typography variant='title7' fontWeight='body3'>Або задати будь-які запитання</Typography>
                </div>
            </div>
            <ArrowsBlock/>
        </div>
    );
}

export default HeaderBlock;
