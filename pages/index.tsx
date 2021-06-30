import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Test Task">
      <div className="px-6 pt-24 pb-24 lg:px-28">
        <div className="profile-container pt-5 pb-8 bg-darker rounded-2xl">
          <h1 className="text-white text-center">Weentar Smart Contract Developer Aptitude Test</h1>
          <br /><br /><br />
          <p className="text-white">
            Create an ERC1155 contract that everyone can use to mint a batch of their business card as tokens. <br />
            The token should contain the following data “name of the person”, “mail address”, “url to a photo”. <br />
            Based on this contract implement a simple (React based) web interface that people can connect to with Metamask to create their own batch of business cards and send it to other addresses. 
            <br />
            Furthermore, there should be a section that displays all business cards the current address received so far (use some styling to display them as actual cards).
            <br /><br />
            The following technologies and/or frameworks should be used:
            <br />
            ● Solidity for smart contract development<br />
            ● Truffle or Hardhat as a smart contract project framework<br />
            ● ReactJS for the web interface<br />
            ● Web3 or Ethers.js for the smart contract interaction
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
