import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x844398fcc6EFE79dD5ef857d8e3Ffdb21f49d3D7'
);

export default instance;