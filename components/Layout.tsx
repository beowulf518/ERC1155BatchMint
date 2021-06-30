import React, { ReactNode } from "react";
import Head from "next/head";
import { ProfileNavItem } from "./ProfileItem";
import { useEffect } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
  navbar?: string;
};

const Layout = ({ children }: Props) => {
  useEffect(()=>{

  },[])
  return (
    <>
      <Head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/open-sans/OpenSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        />
        <link
          rel="preload"
          href="/fonts/goodtimes/GoodTimes-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body className={"h-screen bg-white"}>
        <div className={"bg-light w-full"}>
          <div className={"py-3 backdrop-filter backdrop-blur-lg bg-darker bg-opacity-30 fixed top-0 w-full z-20"}>
            <div className={"z-50 px-0 sm:px-6 lg:px-28 flex flex-row flex-nowrap justify-between items-center mx-auto"}>
            
              <ProfileNavItem />
              
            </div>
          </div>
          {children}
        </div>
      </body>
    </>
  );
};

export default Layout;
