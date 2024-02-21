import Typography from "../../atoms/Typography";
import './style.scss';
import DividingLine from "../../atoms/DividingLine";

function AdvantagesTextBlock() {
    return (
        <div className='AdvantagesTextBlocks'>
            <div className='MobileAdvantageBlock'>
                <div className='AdvantagesTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title6'>ПІДХІД</Typography>
                    <Typography variant='title8' fontWeight='body4'>
                        ЗА
                        <Typography color='green' variant='title8' fontWeight='body4'> БАГАТОРІЧНИЙ ДОСВІД </Typography>
                        У СФЕРІ МИ РОЗРОБИЛИ<br/>
                        СПЕЦІАЛЬНИЙ ПІДХІД. ЙОГО МЕТА МАКСИМАЛЬНО<br/>
                        ЗАДОВОЛЬНИТИ
                        <Typography color='green' variant='title8' fontWeight='body4'> ПЕРСОНАЛЬНІ ПОТРЕБИ </Typography>
                        КОЖНОГО З НАШИХ<br/>
                        КЛІЄНТІВ.
                    </Typography>
                </div>
                <div className='MobileDividingLine'>
                    <DividingLine size='small'/>
                </div>
            </div>
            <div className='AdvantagesTextBlock'>
                <Typography color='green' fontWeight='body3' variant='title6'>ДОСТУПНІСТЬ</Typography>
                <Typography variant='title8' fontWeight='body4'>
                    ДОСТАВКА ЗАМОВЛЕННЯ ЗДІЙСНЮЄТЬСЯ У
                    <Typography color='green' variant='title8' fontWeight='body4'> БУДЬ-ЯКИЙ<br/>НАСЕЛЕННИЙ ПУНКТ
                        УКРАЇНИ </Typography>
                    (КРІМ ТИМЧАСОВО ОКУПОВАНИХ<br/>ТЕРИТОРІЙ).
                    <Typography color='green' variant='title8' fontWeight='body4'> ЗАМОВЛЕННЯ ТАКОЖ МОЖЕ
                        ДОСТАВЛЯТИСЯ<br/>ЧАСТИНАМИ </Typography>
                    , НАПРИКЛАД ПРИ ЗАГАЛЬНОМУ ОБСЯГУ<br/>
                    ЗАМОВЛЕННЯ У 20000 ОДИНИЦЬ КЛІЄНТ МАЄ ЗМОГУ ЗАМОВИТИ<br/>
                    ДОСТАВКУ 3000 ОДИНИЦЬ, ПРИ ЦЬОМУ 17000 ОДИНИЦЬ<br/>
                    ПРОДУКЦІЇ
                    <Typography color='green' variant='title8' fontWeight='body4'> ЗАЛИШАТЬСЯ НА СКЛАДІ</Typography>
                    , КЛІЄНТ САМ ОБИРАЄ ЯКУ<br/>
                    КІЛЬКІСТЬ ВІД ЗАГАЛЬНОГО ОБСЯГУ ХОЧЕ ОТРИМАТИ ЗАРАЗ.
                </Typography>
            </div>

            <div className='MobileAdvantageBlock3'>
                <div className='MobileDividingLine'>
                    <DividingLine size='small'/>
                </div>
                <div className='AdvantagesTextBlock'>
                    <Typography color='green' fontWeight='body3' variant='title6'>ДЛЯ КОЖНОГО</Typography>
                    <Typography variant='title8' fontWeight='body4'>
                        НАШИМИ ОСНОВНИМИ КЛІЄНТАМИ Є
                        <Typography color='green' variant='title8' fontWeight='body4'> РЕСТОРАНИ, ГОТЕЛІ, БАРИ,<br/>СПОРТИВНІ
                            КОМПЛЕКСИ, КОМПЛЕКСИ ВІДПОЧИНКУ, САЛОНИ<br/>КРАСИ ТА МАГАЗИНИ ОДЯГУ. </Typography>
                        МИ ЗДАТНІ РОЗРОБИТИ<br/>
                        ПРОПОЗИЦІЮ ПІД БУДЬ-ЯКИЙ ТИП БІЗНЕСУ.
                    </Typography>
                </div>
            </div>
        </div>
    )
        ;
}

export default AdvantagesTextBlock;