import Typography from "../../atoms/Typography";
import EmojiIcon from "../../atoms/Icons/EmojiIcon.svg"
import MintFlavorImg from "../../atoms/Icons/MintFlavorImg.png"
import BerriesFlavorImg from "../../atoms/Icons/BerriesFlavorImg.png"
import CitrusFlavorImg from "../../atoms/Icons/CitrusFlavorImg.png"
import WatermelonFlavorImg from "../../atoms/Icons/WatermelonFlavorImg.png"
import './style.scss';
import FlavorBlock from "../../atoms/FlavorBlock";

function FlavorsBlock() {
    return (
        <div className="FlavorsBlock">
            <div className='FlavorsDiv'>
            <div className='FlavorsHeaderDiv'>
                <div className='FlavorsHeader'>
                    <div className='MainTitleFlavor'>
                        <Typography fontWeight='body3' variant='title3'>СМАКИ</Typography>
                    </div>
                    <div>
                        <img src={EmojiIcon} className='EmojiIcon'/>
                    </div>
                </div>
                <div className='FlavorsImagesBlock'>
                    <FlavorBlock title='Карпатська м’ята' img={MintFlavorImg} />
                    <FlavorBlock title='Ягідний мікс' img={BerriesFlavorImg} />
                    <FlavorBlock title='Цитрусовий мікс' img={CitrusFlavorImg} />
                    <FlavorBlock title='Кавун' img={WatermelonFlavorImg} />
                </div>
            </div>
            <div className='FlavorsTextBlock'>
                <div className='TextBlock'>
                    <Typography variant='title5' fontWeight='body3'>Сьогодні лінійка жувальної гумки Marvins™<br/>представлена у</Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> 4 смаках</Typography>
                    <Typography variant='title5' fontWeight='body3'>.Також залежно від<br/>вибору замовника</Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> підсолоджувачем </Typography>
                    <Typography variant='title5' fontWeight='body3'>у гумці<br/>може виступати як</Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> цукор </Typography>
                    <Typography variant='title5' fontWeight='body3'>, так і</Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> цукрозамінник</Typography>
                    <Typography variant='title5' fontWeight='body3'>.<br/>В майбутньому кількість смаків буде зростати.</Typography>
                </div>
                <div className='TextBlock'>
                    <Typography variant='title5' fontWeight='body3'>Слід також зазначити, що</Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> всі смаки </Typography>
                    <Typography variant='title5' fontWeight='body3'>мають<br/></Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'> однакову ціну </Typography>
                    <Typography variant='title5' fontWeight='body3'> та </Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'>однаковий час на<br/>виробництво</Typography>
                    <Typography variant='title5' fontWeight='body3'>. Ціна різниться в залежності від<br/>компоненту, що виступає у ролі<br/></Typography>
                    <Typography variant='title5' fontWeight='body3' color='green'>підсолоджувача (цукор або цукрозамінник)</Typography>
                </div>
            </div>
            </div>
        </div>
    );
}

export default FlavorsBlock;
