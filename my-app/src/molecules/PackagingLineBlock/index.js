import SmileFoodGum from "../../atoms/Icons/SmileFoofGum.png";
import OneFaceGum from "../../atoms/Icons/OneFaceGum.png";
import ShoTamGum from "../../atoms/Icons/ShoTamGum.png";
import PlainGum from "../../atoms/Icons/PlainGum.png";
import ZdybankaGum from "../../atoms/Icons/ZdybankaGum.png";
import KidevGum from "../../atoms/Icons/KidevGum.png";
import SushiGum from "../../atoms/Icons/SushiGum.png";
import DOMGum from "../../atoms/Icons/DOMGum.png";
import KidevYellowGum from "../../atoms/Icons/KidevYellowGum.png";
import './style.scss';

function PackagingLine() {
    return (
        <div className="PackagingLine">
            <img src={SmileFoodGum}/>
            <img src={OneFaceGum}/>
            <img src={ShoTamGum}/>
            <img src={PlainGum}/>
            <img src={ZdybankaGum}/>
            <img src={KidevGum}/>
            <img src={SushiGum}/>
            <img src={DOMGum}/>
            <img src={KidevYellowGum}/>
        </div>
    );
}

export default PackagingLine;