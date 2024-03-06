import NavMenu from "../../molecules/NavMenu";
import './style.scss';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import ArrowsBlock from "../../molecules/ArrowsBlock";
import React, { useState, useEffect, useRef} from 'react';
import ApplicationForm from "../../molecules/ApplicationForm";
import SmileFoodGum from "../../atoms/Icons/SmileFoofGum.png";
import SushiGum from "../../atoms/Icons/SushiGum.png";
import KidevYellowGum from "../../atoms/Icons/KidevYellowGum.png";
import LogoMarvins from "../../atoms/Icons/logo_Marvins.png";
import MobileHeaderText from "../../atoms/MobileHeaderText";
import FooterBlock from "../FooterBlock";

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
                        <Typography fontWeight='body2' variant='title7' color='transparentGrey'>Єдиний в Україні
                            виробник жувальної гумки з 2015 року</Typography>
                    </div>
                </div>

                <div className='HeaderTextMobile'>
                    <div className='MainTitleMobile'>
                        <Typography variant='title13' fontWeight='body3'>MARVIN’S™</Typography>
                        <Typography variant='title5' fontWeight='body3'>ЗАВЕРШАЛЬНИЙ ШТРИХ ДЛЯ</Typography>
                        <Typography variant='title5' fontWeight='body3'>ІДЕАЛЬНОГО ОБСЛУГОВУВАННЯ</Typography>
                    </div>
                    <div className='AdditionalInfTitleMobile'>
                        <Typography fontWeight='body7' variant='title14'>універсальне рішення для покращення<br/>
                            вашого рівня обслуговування
                        </Typography>
                    </div>
                </div>
                <div className='LeaveApplicationBtn'>
                    <Button size='big' onClick={() => setFormActive(true)}>
                        <Typography variant='title5' fontWeight='body3'>ЗАЛИШИТИ ЗАЯВКУ</Typography>
                    </Button>
                    <Typography variant='title7' fontWeight='body3'>Або задати будь-які запитання</Typography>
                </div>
                <div className='LeaveApplicationBtnMobile'>
                    <a href='#BecomePartnerForm'>
                        <Button size='medium'>
                            <Typography variant='title14' fontWeight='body3'>ЗАЛИШИТИ ЗАЯВКУ</Typography>
                        </Button>
                    </a>
                    <Typography variant='title6' fontWeight='body6'>Або задати будь-які запитання</Typography>
                </div>
            </div>
            <ArrowsBlock/>
            <div className="HeaderPackagingLine">
                <div className='LogoPackageBlock'>
                    <img src={KidevYellowGum} />
                    <img src={LogoMarvins} className='LogoMarvins'/>
                </div>
                <div className='LogoPackageBlock'>
                    <img src={SushiGum}/>
                    <img src={LogoMarvins} className='LogoMarvins'/>
                </div>
                <div className='LogoPackageBlock'>
                    <img src={SmileFoodGum}/>
                    <img src={LogoMarvins} className='LogoMarvins'/>
                </div>
            </div>
            <MobileHeaderText />
        </div>
    );
}

export default HeaderBlock;
