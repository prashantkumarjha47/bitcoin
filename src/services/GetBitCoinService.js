import RestfulProvider from "./RestfulProvider";

class GetBitCoinService {
    getBitCoinValue = currency => {
        return RestfulProvider.get(`https://blockchain.info/tobtc?currency=${currency}&value=1`);
    };
}
export default new GetBitCoinService();
