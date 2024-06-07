import React, { Component } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import styles from './VariantSkeleton.module.scss'



const VariantSkeletonCards = () => {
    return (
        <div className={styles.allCard}>
            <Card className={styles.card} >
                <Skeleton>
                    <div className={styles.img} ></div>
                </Skeleton>
                <div style={{ marginTop: "0.75rem" }}>
                    <Skeleton >
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "100%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "80%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "0.8rem", marginLeft: "-8%", width: "60%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                </div>
            </Card>
            <Card className={styles.card} >
                <Skeleton>
                    <div className={styles.img} ></div>
                </Skeleton>
                <div style={{ marginTop: "0.75rem" }}>
                    <Skeleton >
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "100%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "80%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "0.8rem", marginLeft: "-8%", width: "60%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                </div>
            </Card>
            <Card className={styles.card} >
                <Skeleton>
                    <div className={styles.img} ></div>
                </Skeleton>
                <div style={{ marginTop: "0.75rem" }}>
                    <Skeleton >
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "100%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "80%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "0.8rem", marginLeft: "-8%", width: "60%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                </div>
            </Card>
            <Card className={styles.card} >
                <Skeleton>
                    <div className={styles.img} ></div>
                </Skeleton>
                <div style={{ marginTop: "0.75rem" }}>
                    <Skeleton >
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "100%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "1rem", marginLeft: "-8%", width: "80%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                    <Skeleton style={{ marginTop: "0.3rem" }}>
                        <div style={{ height: "0.8rem", marginLeft: "-8%", width: "60%", borderRadius: "5px", backgroundColor: "#f0f0f0" }}></div>
                    </Skeleton>
                </div>
            </Card>
        </div>
    );
}


export default VariantSkeletonCards;
