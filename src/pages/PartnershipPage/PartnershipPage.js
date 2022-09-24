import React from 'react';
import Feedback from "../../components/Feedback";
import {HandySvg} from "handy-svg";
import arr from "../../assets/icons/arr.svg";

const PartnershipPage = () => {
    return (
        <div className="partnership">
            <div className="partnership__top">
                <span>Главная</span>
                <span>
                    <HandySvg src={arr} width="6" height="9"/>
                </span>
                <span>Сотрудничество</span>
            </div>
            <div className="partnership__title">
                <h2>Корпоративным клиентам</h2>
            </div>
            <div className="partnership__text">
                <p>Одна из приоритетных задач нашей компании работа с корпоративными клиентами, международными
                    организациями, малыми и средними предприятиями.
                </p>
                <p>Заключаем корпоративные договора на поставку любой компьютерной и офисной техники сетевого и
                    серверного оборудования, а также программного обеспечения всех ведущих мировых производителей
                </p>
                <p>Персональный менеджер и технические консультации для каждого клиента. Если вы не нашли необходимые
                    товары у нас на сайте- мы привезем их вам под заказ согласно вашей заявки.
                </p>
                <p>Работа по договору с оплатой банковским перечислением, также возможна пост оплата за поставленный
                    товар.
                </p>
                <p> Предоставляем все необходимые сопроводительные документы и сертификаты на товар. Гарантия качества и
                    последующее сервисное обслуживание на все предлагаемые нами товары.
                </p>
            </div>

            {/*Я по фану добавил, если не залетит можно убрать часть фидбека*/}
            <div className="partnership__feedback">
                <div className="partnership__title">
                    <h2>Данные для сотрудничества:</h2>
                </div>
                <Feedback/>
            </div>

        </div>
    );
};

export default PartnershipPage;