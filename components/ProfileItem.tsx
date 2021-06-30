import React from "react";
import Router from 'next/router'
import { useStore } from "../store";

export const ProfileNavItem = (props: any) => {
  const { isLoggedIn, selectedAddress,  connectWallet } = useStore();
  
  const addressPreview = (address: string): string => {
    return `${address.substr(0, 4)}...${address.substr(address.length - 3, 3)}`;
  }

  return (
    <div className={"flex hidden lg:flex items-center"}>
      {
        isLoggedIn && 
        <div>
          <a
            className={
              "px-4 py-2 rounded-3xl bg-white bg-opacity-10 mx-1 cursor-pointer text-brand font-bold text-sm"
            }
            onClick={async () => {
              Router.push("/profile")
            }}
          >
            My NFT
          </a>
        </div>
      }
      <a
        className={
          "px-4 py-2 rounded-3xl bg-white bg-opacity-10 mx-1 cursor-pointer text-brand font-bold text-sm"
        }
        onClick={async () => {
          connectWallet();
        }}
      >
        {isLoggedIn ? addressPreview(selectedAddress) : "Login"}
      </a>
    </div>
  );
};
