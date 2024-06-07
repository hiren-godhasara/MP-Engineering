import React, { Component } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import styles from './SkeletonCard.module.scss'



const SkeletonCards = () => {
    return (
        <div>
            <Card className={styles.card} >
                <Skeleton style={{ borderRadius: "0.5rem" }}>
                    <div className={styles.img} ></div>
                </Skeleton>
                <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                    <Skeleton style={{ width: "100%", borderRadius: "0.5rem" }}>
                        <div style={{ height: "2rem", marginLeft: "5%", width: "90%", borderRadius: "0.5rem", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ width: "100%", marginTop: "0.75rem", borderRadius: "0.5rem" }}>
                        <div style={{ height: "2rem", width: "80%", marginLeft: "10%", borderRadius: "0.5rem", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.75rem", borderRadius: "0.2rem" }}>
                        <div style={{ height: "1.2rem", width: "40%", marginLeft: "30%", borderRadius: "0.5rem", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ width: "100%", borderRadius: "0.5rem", marginTop: "1.5rem" }}>
                        <div style={{ height: "2rem", marginLeft: "0%", width: "100%", borderRadius: "0.5rem", backgroundColor: "#d9d9d9" }}></div>
                    </Skeleton>
                </div>
            </Card>
        </div>
    );
}


export default SkeletonCards;
