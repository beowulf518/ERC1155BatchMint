import {
  Context,
  createContext,
  useContext,
  useState,
} from "react";
import { ethers } from 'ethers';
import request from "./lib/fetch";
import web3Provider from "./services/web3Provider"
import { WNTNFT } from './config/contractConfig';

 
const StoreContext: Context<Partial<any>> = createContext({});
const abi: any = WNTNFT.abi

export const useStore = () => useContext(StoreContext);

export const StoreWrapper = ({ children, userAddress, token }: any) => {
  const [provider, setProvider] = useState(null);
  const [nftAssets, setNftAssets] = useState<any>(null);
  const [network, setNetwork] = useState<any>(null);
  const [selectedAddress, setSelectedAddress] = useState<string>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  const connectWallet = async () => {
    // Check if connection is already established
    console.log("----start wallet connection----");
    const _web3Provider = await web3Provider();
    const _provider = new ethers.providers.Web3Provider(_web3Provider);
    const signer = _provider.getSigner();
    const address = await signer.getAddress();
    const network = await _provider.getNetwork();


    setProvider(_provider);
    setNetwork(network);
    setSelectedAddress(address);
    setIsLoggedIn(true);

    localStorage.setItem('isLogin', 'true');
    //getNFT and store it
    console.log(signer)
    await getNFT(signer, address)
    
    _web3Provider.on("disconnect", (error: { code: number; message: string }) => {
      console.log(error);
      disconnectWallet();
    });
    
    console.log(address, network);
  }

  const getNFT = async (__singer, _address) => {
    let nftArr = [];
    //get nft from contract
    const nftContract = new ethers.Contract("0x4F27d022ba66550181CA5A9aF465A246D3A56C25", abi, __singer)
    console.log(nftContract)
    for (let index = 1; index < 10; index++) {
      const isSuccess = await nftContract.balanceOf(_address, index)
      // const isSuccess = await nftContract.methods.balanceOf(_address, index).call()
      console.log(isSuccess, index)
      if (isSuccess == "1") {
        const uri = await nftContract.uri(index)
        console.log(uri)
        request(uri, {})
          .then(res => {
            nftArr.push(res);
          })
          .catch(error => {
            console.error('error', error);
          })
      }
    }
    // set nft to state
    setNftAssets(nftArr);

  }

  const disconnectWallet = () => {
    console.log("------start disconnect to wallet-------");
    setIsLoggedIn(false);
    setProvider(null);
    setNetwork(null);
    setSelectedAddress(null);
    localStorage.setItem('isLogin', 'false');
  }

  const value = {
    selectedAddress,
    isLoggedIn,
    nftAssets,
    connectWallet,
    disconnectWallet,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
