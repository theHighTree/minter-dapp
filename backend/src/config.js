require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "the High NFTrees Test";
const description = "Welcome to the last party by the High NFTrees";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" },
      { name: "OneonOne"},
    ],
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Acapulco Gold Background" },
      { name: "Acapulco Gold Body"},
      { name: "Acapulco Gold Eyes"},
      { name: "Acapulco Gold Mouth"},
    ],
  },
  {
    growEditionSizeTo: 12,
    layersOrder: [
      { name: "Acapulco Gold Background" },
      { name: "Acapulco Gold Body"},
      { name: "Acapulco Gold Eyes"},
      { name: "Acapulco Gold Cigarette"},
    ],
  },
  {
    growEditionSizeTo: 14,
    layersOrder: [
      { name: "Acapulco Gold Background" },
      { name: "Acapulco Gold Body"},
      { name: "Acapulco Gold Eyes"},
      { name: "Acapulco Gold Bong"},
      { name: "Acapulco Gold BongWater"},
    ],
  },
  {
    growEditionSizeTo: 17,
    layersOrder: [
      { name: "Black Poison Background" },
      { name: "Black Poison Body"},
      { name: "Black Poison Eyes"},
      { name: "Black Poison Mouth"},
    ],
  },
  {
    growEditionSizeTo: 19,
    layersOrder: [
      { name: "Black Poison Background" },
      { name: "Black Poison Body"},
      { name: "Black Poison Eyes"},
      { name: "Black Poison Cigarette"},
    ],
  },
  {
    growEditionSizeTo: 22,
    layersOrder: [
      { name: "Black Poison Background" },
      { name: "Black Poison Body"},
      { name: "Black Poison Eyes"},
      { name: "Black Poison Bong"},
      { name: "Black Poison BongWater"},
    ],
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Blue Mystic Background" },
      { name: "Blue Mystic Body"},
      { name: "Blue Mystic Eyes"},
      { name: "Blue Mystic Mouth"},
    ],
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Blue Mystic Background" },
      { name: "Blue Mystic Body"},
      { name: "Blue Mystic Eyes"},
      { name: "Blue Mystic Cigarette"},
    ],
  },
  {
    growEditionSizeTo: 27,
    layersOrder: [
      { name: "Blue Mystic Background" },
      { name: "Blue Mystic Body"},
      { name: "Blue Mystic Eyes"},
      { name: "Blue Mystic Bong"},
      { name: "Blue Mystic BongWater"},
    ],
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Cookies Background" },
      { name: "Cookies Body"},
      { name: "Cookies Eyes"},
      { name: "Cookies Mouth"},
    ],
  },
  {
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "Cookies Background" },
      { name: "Cookies Body"},
      { name: "Cookies Eyes"},
      { name: "Cookies Cigarette"},
    ],
  },
  {
    growEditionSizeTo: 42,
    layersOrder: [
      { name: "Cookies Background" },
      { name: "Cookies Body"},
      { name: "Cookies Eyes"},
      { name: "Cookies Bong"},
      { name: "Cookies Bong Water"},
    ],
  },


];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2400,
  height: 2400,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://thehighnftrees.com" // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'the High NFTrees 42.0';
const CONTRACT_SYMBOL = 'HNFTR';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x5A735A050f761c7327625eA73B8C95E6978bc45a';
const TREASURY_ADDRESS = '0x5A735A050f761c7327625eA73B8C95E6978bc45a';
const MAX_SUPPLY = 42; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.01; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 5; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-06T04:00:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 500; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x5A735A050f761c7327625eA73B8C95E6978bc45a"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Tree will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreidtn2o2bmy7va275jpspq2qiz4dv46fubptztkphhzhodzwbbzlay"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "HNFTR",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "thehighnftrees.com",
  creators: [
    {
      address: "5A735A050f761c7327625eA73B8C95E6978bc45a",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
