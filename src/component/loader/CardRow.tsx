import React from 'react';
import SkeletonCard from './SkeletonCard'
import styles from './CardRow.module.scss'


const CardRow = (e: any) => {

    const renderSkeletonCards = () => {
        const cards = [];
        for (let i = 0; i < e.val; i++) {
            cards.push(<SkeletonCard key={i} />);
        }
        return cards;
    };

    return (
        <div className={styles.cardRow}>
            {renderSkeletonCards()}
        </div>
    );
};

export default CardRow;
