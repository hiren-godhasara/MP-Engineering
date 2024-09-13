
import React from 'react';
import styles from './Compamy.module.scss';

const Company = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.head1}>
                Limpet Coil Reactor, Jacketed Reactor, GMP Model, Horizontal Tank, Pressure Tank, Silo, Jacketed & Non Jacketed Receiver,Distillation Column,Heat Exchanger and Condensor Suppliers and Exporters.
            </h1>
            <div className={styles.head}>
                MP ENGINEERING
            </div>
            <p className={styles.subHead}>
                MP ENGINEERING is specialized in chemical and pharma machinery manufacturing and process equipment manufacturing. It is located in high and new technology industrial development zone of Dahej. Our staffs constantly strive to become stronger after fifteen years of entrepreneurship. With excellent research team and experienced management personnel, our company constantly brings in talents and trains employees to be excellence.
            </p>
            <p className={styles.head}>Our Clients</p>
            <ul style={{ listStyleType: 'disc' }}>
                <li>Adiya Birla Chemicals</li>
                <li>Gujarat Fluro Chemicals</li>
                <li>Jubilant Foddworksd</li>
                <li>Sun Pharma</li>
            </ul>
        </div>
    );
};

export default Company;


