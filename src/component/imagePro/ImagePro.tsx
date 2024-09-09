import Image from 'next/image';
import styles from './ImagePro.module.scss';
import image from '../../imageFolder/r1.webp';

const ImagePro = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>Our Products</h1>
            <div className={styles.gridContainer}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger1" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 1</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 2</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 2</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 2</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 2</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} alt="HeatExchanger2" className={styles.image} width={300} height={200} />
                    <div className={styles.overlay}>
                        <p>Heat Exchanger 2</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ImagePro;
