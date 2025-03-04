import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5932a9FC8ed7DF4c0a3BbffFc04184a8A6477b06"
);

export default instance;
