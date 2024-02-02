import CooperationTextBlock from "../../atoms/CooperationTextBlock";
import Typography from "../../atoms/Typography";
import PersonIcon from "../../atoms/Icons/PersonIcon.svg"
import './style.scss';

function CooperationBlock() {
    return (
        <div className="CooperationBlock">
            <div className='CooperationHeader'>
                <div className='MainTitleCooperation'>
                    <Typography fontWeight='body3' variant='title3'>СПІВПРАЦЯ З MARVINS™ ЦЕ НЕ <br/>ПРОСТО  ЖУВАЛЬНА ГУМКА З ВАШИМ <br/>ВЛАСНИМ ДИЗАЙНОМ, ЦЕ:</Typography>
                </div>
                <div>
                    <img src={PersonIcon} className='PersonIcon'/>
                </div>
            </div>
            <div className='TextBlocks'>
                <div className='LeftTextBlocks'>
                    <div className='TextBlock'>
                        <CooperationTextBlock>
                            <Typography variant='title6' fontWeight='body3'>ПОЛІПШЕННЯ ВАШОГО РІВНЯ ОБСЛУГОВУВАННЯ, ЩО
                                КОШТУЄ В <br/>РАЙОНІ 1 ГРИВНІ ЗА ОДИНИЦЮ.</Typography>
                        </CooperationTextBlock>
                        <div className='AdditionalInfCooperation'>
                            <Typography variant='title9' fontWeight='body5' fontStyle='italic'>(ЦІНА ЗАЛЕЖИТЬ ВІД ОБСЯГУ
                                ЗАМОВЛЕННЯ ТА ТИПУ ПІДСОЛОДЖУВАЧА)</Typography>
                        </div>
                    </div>
                    <div className='TextBlock2'>
                        <CooperationTextBlock>
                            <Typography variant='title6' fontWeight='body3'>
                                ДОДАТКОВИЙ
                                <Typography variant='title6' fontWeight='body3' color='green'> БРЕНДОВАНИЙ
                                    АТРИБУТ </Typography>
                                У ВАШОМУ ЗАКЛАДІ,<br/>ЯКИЙ ПРИВЕРНЕ УВАГУ ВАШОГО КЛІЄНТА
                            </Typography>
                        </CooperationTextBlock>
                    </div>
                    <CooperationTextBlock>
                        <div className='TextBlock'>
                            <Typography variant='title6' fontWeight='body3'>
                                <Typography variant='title6' fontWeight='body3' color='green'>ГІГІЄНА. </Typography>
                                НАПРИКЛАД ПІСЛЯ СТРАВ З ЧАСНИКОМ MARVINS<br/>ПОВНІСТЮ ПРИБЕРЕ ЗАПАХ ЧАСНИКУ З РОТУ,
                                ТАКОЖ
                                MARVINS<br/>ПРИБИРАЄ ЗАПАХ ПІСЛЯ КУРІННЯ ЦИГАРОК, ЩО ТЕЖ МОЖЕ<br/>СТАТИ В НАГОДІ ДЕЯКИМ
                                ВАШИМ КЛІЄНТАМ
                            </Typography>
                        </div>
                    </CooperationTextBlock>
                </div>
                <div className='RightTextBlocks'>
                    <CooperationTextBlock>
                        <div className='TextBlock'>
                            <Typography variant='title6' fontWeight='body3'>
                                СПІВПРАЦЯ З
                                <Typography variant='title6' fontWeight='body3' color='green'> УКРАЇНСЬКИМ
                                    ВИРОБНИКОМ </Typography>
                                , ЩО НЕ НЕХТУЄ<br/>СТАНДАНТАРТАМИ ЯКОСТІ ТА БЕЗПЕКИ
                            </Typography>
                        </div>
                    </CooperationTextBlock>
                    <div className='TextBlock5'>
                        <CooperationTextBlock>
                            <Typography variant='title6' fontWeight='body3'>
                                <Typography variant='title6' fontWeight='body3' color='green'> НАТИВНА РЕКЛАМА</Typography>
                                , ЩО НАГАДАЄ КЛІЄНТУ ПРО ВАС В СИТУАЦІЇ<br/>КОЛИ ВІН ПОКЛАДЕ ГУМКУ ДО КИШЕНІ І ДІСТАНЕ ЇЇ ЧЕРЕЗ<br/>ДЕЯКИЙ ЧАС
                            </Typography>
                        </CooperationTextBlock>
                    </div>
                <CooperationTextBlock>
                    <div className='TextBlock'>
                        <Typography variant='title6' fontWeight='body3'>
                            ЗРУЧНІСТЬ ДЛЯ ВАС, ТАК ЯК НАША КОМПАНІЯ ПРИКЛАЛА<br/>ЗНАЧНІ ЗУСИЛЛЯ, ЩОБ НАШІ ПАРТНЕРИ
                            ВІДЧУВАЛИ<br/>КОМФОРТ ПРИ СПІВПРАЦІ З НАМИ.
                            <Typography variant='title6' fontWeight='body3' color='green'> ЦЕЙ САЙТ НАДАСТЬ<br/>ВАМ ВСЮ
                                ІНФОРМАЦІЮ, ЩО ВАС ЦІКАВИТЬ </Typography>
                        </Typography>
                    </div>
                </CooperationTextBlock>
            </div>
        </div>
</div>
    );
}

export default CooperationBlock;
