import './style.scss';
import ContactsBlock from "../../molecules/ContactsBlock";
import BecomePartnerForm from "../../molecules/BecomePartnerForm";

function FooterBlock() {
    return (
        <div className="FooterBlock">
            <BecomePartnerForm />
            <ContactsBlock />
        </div>
    );
}

export default FooterBlock;
