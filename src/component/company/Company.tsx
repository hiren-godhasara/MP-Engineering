// 'use client'

import React from 'react';

import styles from './Compamy.module.scss';
import MainProducts from '../mainProducts/DistillationColumn';
import SubProducts from '../subProducts/SubProducts';




const Company = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.detailsContainer}>
                Limpeted Reactor, Jacketed Reactor, Chemical Reactor Manufacturers, Suppliers and Exporters in India, Pune, Aurangabad, Goa, Mumbai, Nagpur, Bangalore, Chennai
            </div>
            <div className={styles.head}>
                MP ENGINEERING
            </div>
            <p className={styles.subHead}>
                MP ENGINEERING is specialized in chemical and pharma machinery manufacturing and process equipment manufacturing. It is located in high and new technology industrial development zone of Pune. Our staffs constantly strive to become stronger after fifteen years of entrepreneurship. With excellent research team and experienced management personnel, our company constantly brings in talents and trains employees to be excellence.
            </p>
        </div>
    );
};

export default Company;


