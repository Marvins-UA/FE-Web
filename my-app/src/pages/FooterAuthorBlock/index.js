import './style.scss';
import Typography from "../../atoms/Typography";

function FooterAuthorBlock() {
    return (
        <div className="FooterAuthorBlock">
            <Typography fontWeight='body5' variant='title5'>Made by <a href={'https://www.linkedin.com/in/anastasiia-slynko-6b2532279/'}>Anastasiia Slynko</a></Typography>
            <Typography fontWeight='body5' variant='title5'>Всі права захищені</Typography>
        </div>
    );
}

export default FooterAuthorBlock;
