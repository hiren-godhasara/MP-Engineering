import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/slide-2.jpg'
import Link from 'next/link';


const HeatExchnager = () => {
    return (
        <div className={styles.main}>
            <h1>HeatExchnager</h1>

            <div className={styles.info}>
                <div className={styles.container}>
                    <Image
                        src={image}
                        alt=''
                    />
                    <div className={styles.right}>
                        <h2>Chemical Reactor</h2><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                        <h2>Types of Chemical Reactor</h2>
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeatExchnager;