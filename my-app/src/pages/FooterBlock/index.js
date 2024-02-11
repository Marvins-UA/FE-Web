import './style.scss';
import ContactsBlock from "../../molecules/ContactsBlock";
import BecomePartnerForm from "../../molecules/BecomePartnerForm";

function FooterBlock() {
    return (
        <div className="FooterBlock" id='footerSection'>
            <BecomePartnerForm />
            <ContactsBlock />
        </div>
    );
}

export default FooterBlock;
