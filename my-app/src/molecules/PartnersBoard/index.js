import NikasLogo from "../../atoms/Icons/NIKASLogoPartner.png";
import DubrovskiyLogo from "../../atoms/Icons/DubrovskiyLogoPartner.png";
import ZdybankaLogo from "../../atoms/Icons/ZdybankaLogoPartner.png";
import FlintLogo from "../../atoms/Icons/FLINTLogoPartner.png";
import MorimotoLogo from "../../atoms/Icons/MorimotoLogoPartner.png";
import SMILEFOODLogo from "../../atoms/Icons/SMILEFOODLogoPartners.png";
import KASKADLogo from "../../atoms/Icons/KASKADLogoPartners.png";
import OneFaceLogo from "../../atoms/Icons/ONEFACELogoPartners.png";
import KIDEVLogo from "../../atoms/Icons/KIDEVLogoPartners.png";
import ORIGAMILogo from "../../atoms/Icons/ORIGAMILogoPartners.png";
import CHIPSTERSLogo from "../../atoms/Icons/CHIPSTERSLogoPartners.png";
import './style.scss';

function PartnersBoard() {
    return (
        <div className="PartnersBoard">
            <div className='PartnersFirstLine'>
                <img src={NikasLogo} className='NikasLogo'/>
                <img src={DubrovskiyLogo} className='DubrovskiyLogo'/>
                <img src={ZdybankaLogo} className='ZdybankaLogo'/>
                <img src={FlintLogo} className='FlintLogo'/>
            </div>
            <div className='PartnersSecondLine'>
                <img src={MorimotoLogo} className='MorimotoLogo'/>
                <img src={SMILEFOODLogo} className='SMILEFOODLogo'/>
                <img src={KASKADLogo} className='KASKADLogo'/>
                <img src={OneFaceLogo} className='OneFaceLogo'/>
            </div>
            <div className='PartnersThirdLine'>
                <img src={KIDEVLogo} className='KIDEVLogo'/>
                <img src={ORIGAMILogo} className='ORIGAMILogo'/>
                <img src={CHIPSTERSLogo} className='CHIPSTERSLogo'/>
            </div>
        </div>
    );
}

export default PartnersBoard;