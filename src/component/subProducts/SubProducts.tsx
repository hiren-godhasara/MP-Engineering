import Image from 'next/image';
import styles from './SubProducts.module.scss'
import image from '../../imageFolder/r2.webp'
import Link from 'next/link';
import MainProducts from '../mainProducts/DistillationColumn';

const SubProducts = () => {
    return (
        <div className={styles.main}>
            <h1>Glasslined Reactor</h1>
            <div className={styles.container}>
                <div className={styles.imgDiv}>
                    <Image src={image} alt='' className={styles.imgDiv1} />
                    <Image src={image} alt='' className={styles.imgDiv1} />
                    <Image src={image} alt='' className={styles.imgDiv1} />
                </div>

                <div className={styles.right}>
                    <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                </div>
            </div>
        </div>
    )
}

export default SubProducts;