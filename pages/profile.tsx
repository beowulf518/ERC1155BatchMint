import React from "react";
import Nft from "../components/sections/nft/Nft";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useStore } from "../store";


export default function Profile() {
  const { nftAssets } = useStore();
  useEffect(()=>{
    console.log(nftAssets)
  },[])

  return (
    <Layout>
      <div className="px-6 pt-24 pb-24 lg:px-28">
        <div className="profile-container pt-5 pb-8 bg-darker rounded-2xl">
          <Nft nftAssets = { nftAssets }/>
        </div>
      </div>
    </Layout>
  );
}
