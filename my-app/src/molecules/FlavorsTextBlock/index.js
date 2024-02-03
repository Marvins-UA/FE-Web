import Typography from "../../atoms/Typography";
import './style.scss';

function FlavorsTextBlock() {
    return (
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
    );
}

export default FlavorsTextBlock;