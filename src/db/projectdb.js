import {
  css,
  express,
  html,
  javascript,
  mySQL,
  nextjs,
  node,
  react,
  redux,
  tailwind,
  typescript,
  Solidity,
  wix,
  Binance,
  ethereum,
  Move,
  Aptos,
  Hardhat,
  rust,
  Solana,
  Polygon,
  rainbow,
  web3,
  mongodb,
  jotai,
} from './techstack';

export const ProjectList = [
  {
    heading: 'Factory',
    img: './factory.png',
    title: 'Smart Contract and Frontend for FactoryGame Platform',
    description:
      'Factory is a game asset creation platform based on NFT technology, dedicated to providing users with a unique NFT synthesis and management experience. The platform allows users to create new, higher-level NFTs, known as "Products," by staking existing digital assets (such as ERC-20, ERC-721, and ERC-1155 tokens). These products serve not only as in-game assets but also as advertising mediums with real collateral value.',
    techStack: [
      react,
      node,
      mongodb,
      Solidity,
      rainbow,
      Binance,
      tailwind,
      jotai,
    ],
    liveLink: 'https://factorygame.org',
  },
  {
    heading: 'Kerluke',
    img: './kerluke.png',
    title: 'Decentralised Raffle-To-Earn platform for NFTs ',
    description:
      'Kerluke is the world’s first decentralised Raffle-To-Earn platform for NFTs that helps sellers to liquidate easily and gives everyone a fair chance to win their favourite NFTs. Users can lock NFT assets in our smart contract and create their own decentralised raffles. Players can buy raffle tickets to stand a chance of winning their favourite NFTs.',
    techStack: [Solidity, Hardhat, Polygon],
    liveLink: 'https://kerluke.org/',
  },
  {
    heading: 'Mentalmatics',
    img: './mentalmatics.JPG',
    title: 'MMT ERC20 Token ICO Development',
    description:
      'Mentalmatics is site for Mentalmatics™ , a mental arithmetic school which provides specialised training on 2-hand 4-finger abacus and mental arithmetic. This school is trying to launch new ERC20 token called Mentalmatics - MMT.',
    techStack: [react, nextjs, wix, Solidity, rainbow, Binance, tailwind],
    liveLink: 'https://mentalmatics.com',
  },
  {
    heading: 'Paywong',
    img: './paywong.png',
    title: 'PWG ICO Platform Development',
    description:
      'Paywong is a Web3 startup, with a mission to empower businesses and individuals by helping them unlock the power of the decentralised economy. The Paywong token is a utility token for the protocol. Participated in ICO, and unfortunately the project was cancelled',
    techStack: [node, react, tailwind, nextjs, Solidity, ethereum],
    liveLink: 'https://paywong.com/',
  },
  {
    heading: 'Crypto Beefy Vault',
    img: './Vault.png',
    title: 'Dapp using Cross-chain Vault',
    description:
      "The main product offered by Beefy Finance are the 'Vaults' in which you stake your crypto tokens. The investment strategy tied to the specific vault will automatically increase your deposited token amount by compounding arbitrary yield farm reward tokens back into your initially deposited asset.",
    techStack: [react, tailwind, Solidity, Hardhat, Binance],
    liveLink: 'https://defivualt.onrender.com/',
  },
  {
    heading: 'Split_or_Steal',
    img: './splitsteal.PNG',
    title: 'Smart Contract for Split_or_Steal Dapp on Aptos',
    description:
      'This game is dapp which two players will be selected from a pool of online users, and are presented with a potential reward. The players are given a maximum of 2 minutes to speak with eachother – at which point, they can then choose to either share, or attempt to steal the reward.',
    techStack: [Move, Aptos],
    liveLink: '',
  },
  {
    heading: 'CoinFlip Dapp',
    img: './coinflip.jpg',
    title: 'Smart Contract for Coin Flip Dapp on Solana',
    description:
      'Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers. This contract is deployed on Solana using Rust language',
    techStack: [rust, Solana],
    liveLink: '',
  },
  {
    heading: 'Uniswap Bot',
    img: './mev.png',
    title: 'Uniswap Trading Bot',
    description:
      'This trading bot buys and sells cryptocurrency tokens based on post-trade profit analysis. This bot is based solely on Web3 scripts and does not use any smart contracts, and has further become the basis for several cryptocurrency trading bots.',
    techStack: [node, express, web3],
    liveLink: '',
  },
];

export const extra = [
  {
    heading: 'Creek Waters',
    img: './landing.png',
    title: 'Website for Dubai ',
    description:
      'CREEK WATERS is a website that allows visitors to experience the epitome of luxury at Creek Waters, a luxury residential development located in the heart of Dubai Creek Harbour.',
    techStack: [html, javascript, css, react, tailwind],
    liveLink:
      'https://sales-inquiries.ae/axcapital/creek-waters/?cm_id=14234443811_128601192911_634311793342_kwd-2008893114396_c__g_&gclid=Cj0KCQjwy9-kBhCHARIsAHpBjHjBfMlBZzEkH9dP843URNelgbNWTiXSe8w0_CFcbZqQ2OaUpgrMlNAaAi0PEALw_wcB',
  },
  {
    heading: 'Web Scrapping',
    img: './scrapping.png',
    title: 'Web Scrapping for Store',
    description:
      'NayadNayad is the Computer Hardward and Several Equipment Store in Israel. Now this store is expanding their store, so need to scrape other store, so I developed the scrapping system for their store.',
    techStack: [react, node, express, typescript, tailwind, redux, mySQL],
    liveLink: 'https://www.nayadnayad.co.il/',
  },
];

export const Achievements = [
  {
    heading: 'Honor Reward',
    img: './forward.jpg',
    title: 'Dapp and Dash Campaign',
    description:
      "From November 17th to December 2nd, The Forward and Rootstock jointly organized blockchain campaign on AlphaGuility. During the campaign, I participated with the nickname 'awesomeRonald' and emerged as a winner.",
    techStack: [],
    liveLink: '',
  },
  {
    heading: 'CertificationB',
    img: './Certification1.png',
    title: 'Blockchain Solidity Certification of Study Section',
    description:
      'On August 11, 2021, I successfully obtained the Blockchain Solidity certification from Study Section.',
    techStack: [],
    liveLink: '',
  },
  {
    heading: 'Certification W',
    img: './Certification2.png',
    title: 'Full Stack Tech',
    description:
      'On April 24, 2023, I successfully obtained the Full Stack certification from Study Section.',
    techStack: [],
    liveLink: '',
  },
];
