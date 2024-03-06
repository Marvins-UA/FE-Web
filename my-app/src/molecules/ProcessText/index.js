import Typography from "../../atoms/Typography";
import './style.scss';

function ProcessText() {
    return (
        <div className='ProcessText'>
            <div className='RightProcessTextBlocks'>
                <div className='ProcessTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title5'>1. ПОЧАТОК</Typography>
                    <Typography variant='title8' fontWeight='body3'>
                        ЗАЛИШТЕ ЗАЯВКУ НА САЙТІ, ДАЛІ ПІСЛЯ ОБГОВОРЕННЯ ВСІХ<br/>
                        <Typography color='green' variant='title8' fontWeight='body3'> ВАЖЛИВИХ ДЛЯ ВАС </Typography>
                        ПИТАНЬ МИ З ВАМИ ЗАКЛЮЧАЄМО<br/>
                        ДОГОВІР З ОБГОВОРЕННЯМ УМОВ ДЛЯ ПОДАЛЬШОЇ СПІВПРАЦІ.
                    </Typography>
                </div>
                <div className='ProcessTextBlock'>
                    <div className='AmountTextBlock'>
                        <Typography color='green' fontWeight='body3' variant='title5'>2. КІЛЬКІСТЬ</Typography>
                        <div className='AmountText'>
                            <Typography variant='title8' fontWeight='body3'>
                                ОБГОВОРЕННЯ ПОТОЧНОЇ КІЛЬКОСТІ ВАШОГО ЗАМОВЛЕННЯ.<br/>
                                ДАЛІ ЗАМОВНИК ВНОСИТЬ
                                <Typography color='green' variant='title8' fontWeight='body3'> АВАНС (30% ВІД ЗАГАЛЬНОЇ
                                    СУМИ)</Typography>
                                ,<br/>НА ЦІ ГРОШІ МИ ВИРОБЛЯЄМО УПАКОВКУ НА
                                <Typography color='green' variant='title8' fontWeight='body3'> ВЕСЬ ОБСЯГ<br/>ЗАМОВЛЕННЯ.
                                </Typography>
                                З ГРОШЕЙ ВНЕСЕНИХ НА ВИРОБНИЦТВО<br/>
                                УПАКОВКИ МИ НІЧОГО НЕ ОТРИМУЄМО, МИ ЗАРОБЛЯЄМО ЛИШЕ<br/>
                                НА ВИГОТОВЛЕННІ ТА ПРОДАЖІ ЖУВАЛЬНОЇ ГУМКИ.
                            </Typography>
                                <Typography variant='title8' fontWeight='body3' color='addInfGrey'>
                                    ЗАУВАЖТЕ, ЩО В ПОДАЛЬШОМУ ВАШУ ЖУВАЛЬНУ ГУМКУ ВИ<br/>
                                    МОЖЕТЕ ОТРИМУВАТИ В БУДЬ-ЯКИЙ ЗРУЧНИЙ ДЛЯ ВАС ЧАС ТА В ТІЙ<br/>
                                    КІЛЬКОСТІ, ЯКА ВАМ НЕОБХІДНА В ЗАЛЕЖНОСТІ ВІД СПОЖИВАННЯ.<br/>
                                    РЕШТА ВАШОГО ЗАМОВЛЕННЯ ЗБЕРІГАЄТЬСЯ НА НАШОМУ СКЛАДІ<br/>
                                    БЕЗ ОБМЕЖЕННЯ В ЧАСІ ДО ВАШОЇ ЗАЯВКИ ПРО ПОСТАЧАННЯ
                                </Typography>
                        </div>
                    </div>
                </div>
                <div className='ProcessTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title5'>3. ДИЗАЙН</Typography>
                    <Typography variant='title8' fontWeight='body3'>
                        НАШ ДИЗАЙНЕР,
                        <Typography color='green' variant='title8' fontWeight='body3'> ВРАХОВУЮЧИ ВАШІ
                            ПОБАЖАННЯ</Typography>
                        , РОЗРОБЛЯЄ<br/>
                        ДИЗАЙН УПАКОВКИ ТА УЗГОДЖУЄ ЙОГО З ВАМИ.
                    </Typography>
                </div>
            </div>
            <div className='LeftProcessTextBlocks'>
                <div className='ProcessTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title5'>4. ВИРОБНИЦТВО</Typography>
                    <Typography variant='title8' fontWeight='body3'>
                        ПІСЛЯ УЗГОДЖЕННЯ ДИЗАЙНУ МИ
                        <Typography color='green' variant='title8' fontWeight='body3'> ЗАМОВЛЯЄМО ВИРОБНИЦТВО<br/>
                            УПАКОВКИ У ПІДПРИЄМСТВА, ЩО СПЕЦІАЛІЗУЄТЬСЯ НА<br/>
                            ВИГОТОВЛЕННІ УПАКОВКИ ДЛЯ ХАРЧОВОЇ ПРОДУКЦІЇ.
                        </Typography>
                        МАЙЖЕ<br/>ВЕСЬ ЧАС, ЩО ЙДЕ НА ВИРОБНИЦТВО ЗАМОВЛЕННЯ,<br/>
                        ВИТРАЧАЄТЬСЯ САМЕ НА ВИРОБНИЦТВО УПАКОВКИ З ВАШИМ<br/>
                        ДИЗАЙНОМ, ЦЕЙ ЧАС ЗАЗВИЧАЙ СТАНОВИТЬ
                        <Typography color='green' variant='title8' fontWeight='body3'> ПРИБЛИЗНО
                            2<br/>ТИЖНІ.</Typography>
                    </Typography>
                </div>
                <div className='ProcessTextBlock'>
                    <div className='ReceivingTextBlock'>
                        <Typography color='green' fontWeight='body3' variant='title5'>5. ОТРИМАННЯ</Typography>
                        <Typography variant='title8' fontWeight='body3'>
                            ПІСЛЯ ТОГО, ЯК ВАШЕ ЗАМОВЛЕННЯ БУЛО ВИГОТОВЛЕНО ТА<br/>
                            УКОМПЛЕКТОВАНО, ВИ МОЖЕТЕ ЗАМОВЛЯТИ ЙОГО ПЕВНИМИ<br/>
                            ЧАСТИНАМИ І ЯК РАНІШЕ ВЖЕ ЗАЗНАЧАЛОСЯ ОТРИМАТИ ЙОГО У<br/>
                            <Typography color='green' variant='title8' fontWeight='body3'> БУДЬ-ЯКИЙ ЗРУЧНИЙ ДЛЯ ВАС ЧАС ТА
                                У
                                БУДЬ-ЯКОМУ МІСЦІ.</Typography>
                        </Typography>
                    </div>
                </div>
                <div className='ProcessTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title5'>6. РЕАЛІЗАЦІЯ</Typography>
                    <Typography variant='title7' fontWeight='body3' color='yellow'>
                        ВІТАЄМО З УСПІШНИМ ПОКРАЩЕННЯМ ВАШОГО СЕРВІСУ!
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default ProcessText;