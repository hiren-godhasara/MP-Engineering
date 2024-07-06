import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/reactor.jpg'
import Link from 'next/link';

const MainProducts = () => {
    return (
        <div className={styles.main}>
            <h1>Chemical Reactor</h1>

            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                        width={1920}
                        height={1080}
                        className={styles.img}
                    />
                    <div className={styles.right}>
                        <h2>Chemical Reactor</h2><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                        <h2>Types of Chemical Reactor</h2>
                        <ol style={{ listStyle: 'decimal', marginLeft: '20px' }}>
                            <li><Link href=''>Glasslined Reactor</Link></li>
                            <li><Link href=''>SS Reactor</Link></li>
                            <li><Link href=''>Limpeted Reactor</Link></li>
                            <li><Link href=''>Jacketed Reactor</Link></li>
                            <li><Link href=''>Jacketed Reactor</Link></li>
                            <li><Link href=''>Jacketed Reactor</Link></li>
                        </ol><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    </div>
                </div>

                <h1 className={styles.h1}>Technical Specifications</h1>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Gross capacity (In Liters)</th>
                                <th>Working capacity (In Liters)</th>
                                <th>Shell Dimensions</th>
                                <th>HP/ RPM (PITCH BLABE)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Model">Row 1, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 1, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 1, Col 3</td>
                                <td data-label="Shell Dimensions">Row 1, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 1, Col 5</td>
                            </tr>
                            <tr>
                                <td data-label="Model">Row 2, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 2, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 2, Col 3</td>
                                <td data-label="Shell Dimensions">Row 2, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 2, Col 5</td>
                            </tr>
                            <tr>
                                <td data-label="Model">Row 3, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 3, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 3, Col 3</td>
                                <td data-label="Shell Dimensions">Row 3, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 3, Col 5</td>
                            </tr>
                            <tr>
                                <td data-label="Model">Row 4, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 4, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 4, Col 3</td>
                                <td data-label="Shell Dimensions">Row 4, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 4, Col 5</td>
                            </tr>
                            <tr>
                                <td data-label="Model">Row 5, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 5, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 5, Col 3</td>
                                <td data-label="Shell Dimensions">Row 5, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 5, Col 5</td>
                            </tr>
                            <tr>
                                <td data-label="Model">Row 6, Col 1</td>
                                <td data-label="Gross capacity (In Liters)">Row 6, Col 2</td>
                                <td data-label="Working capacity (In Liters)">Row 6, Col 3</td>
                                <td data-label="Shell Dimensions">Row 6, Col 4</td>
                                <td data-label="HP/ RPM (PITCH BLABE)">Row 6, Col 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default MainProducts;