import Image from 'next/image';
import styles from './MainProducts.module.scss'
import image from '../../imageFolder/Storage Tank.png'
import Link from 'next/link';
import { products } from '../../data/subProducts'


const StorageTank = () => {
    return (
        <div className={styles.main}>
            <h1>StorageTank</h1>

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
                        <ol style={{ listStyle: 'decimal', marginLeft: '20px' }}>
                            {
                                products.map((product, index) => {
                                    {
                                        if (product.type == "tank") {
                                            return (

                                                <li key={index}>
                                                    <Link href={`product/${product.key}`}>{product.title}</Link>
                                                </li>
                                            );
                                        }
                                    }
                                })
                            }
                        </ol><br />
                        <p>Chemical Reactor is a vessel designed to contain chemical reactions. It is a type of reaction vessel that is designed to control temperature and pressure. The design of a chemical reactor is determined by many factors including the chemical reaction taking place, the type of reactor, the nature of the reactants, and the desired reaction conditions.</p><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorageTank;