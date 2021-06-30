import React from 'react'
import styles from './index.module.scss'

export default function NftCard(props) {
    const {image, name, email_address} = props.item;
    return (
        <div className={"rounded-xl text-left w-full relative text-white "+styles.NFTCard}>
            <div className={styles.NFT}>
                <div className={styles.NFTIcon}>
                    <img src={image} alt="Safe &amp; Secure" />
                </div>
                <div className={styles.NFTContent}>
                    <h3 className={styles.NFTTitle}>{name}</h3>
                    <p>{email_address}</p>
                </div>
            </div>
        </div>
    )
}
