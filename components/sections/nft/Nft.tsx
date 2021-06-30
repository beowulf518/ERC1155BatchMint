import React, { FC, useEffect } from 'react'
import NftCard from '../../card/NftCard'

interface Props {
    className?: string
    nftAssets?: any
}

const Nft: FC<Props> = ({
    className,
    nftAssets,
    ...props
}) =>{
    useEffect(()=>{
        console.log('nft section', nftAssets)
    },[])
    return (
        <div className="grid grid-cols-3 mx-10 mt-5 gap-x-3 gap-y-2 lg:gap-y-0">
            {
                nftAssets&&
                nftAssets.map((item, key)=>(
                    <div className="col-span-4 lg:col-span-1">
                        <NftCard item={item}></NftCard>
                    </div>
                ))
            }
        </div>
    )
}


export default Nft