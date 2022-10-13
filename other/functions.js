const { NseIndia } = require('stock-nse-india')
const { marketStatus , marketTurnover , autocompleteApi , optionsApi , holiday, allIndices , equityApi , tradeInfoApi ,corporateInfoApi ,financialInfoApi ,intradayApi , indexPreOpenApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi , listingToday , prevListing , blockDeals} = require('./Api')
const nse = new NseIndia()

async function Fautocomplete(param) {try{const search =await autocompleteApi(param);const req = await nse.getData(search);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmarketStatus() {try{const req = await nse.getData(marketStatus);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmarketTurnover() {try{const req = await nse.getData(marketTurnover);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fholiday() {try{const req = await nse.getData(holiday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallIndices() {try{const req = await nse.getData(allIndices);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fequity(param) {try{const equity= await equityApi(param);const req = await nse.getData(equity);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtradeInfo(param) {try{const tradeInfo =await tradeInfoApi(param);const req = await nse.getData(tradeInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FfinancialInfo(param) {try{const financialInfo =await financialInfoApi(param);const req = await nse.getData(financialInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FcorporateInfo(param) {try{const corporateInfo=await corporateInfoApi(param);const req = await nse.getData(corporateInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fintraday(param) {try{const intraday =await intradayApi(param);const req = await nse.getData(intraday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexPreOpenApi(param) {try{const preintraday =await indexPreOpenApi(param);const req = await nse.getData(preintraday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fhistorical(param) {try{const historical =await historicalApi(param);const req = await nse.getData(historical);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findex(param) {try{const index =await indexApi(param);const req = await nse.getData(index);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexIntaday(param) {try{const indexIntaday =await indexIntadayApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findexhistorical(param) {try{const indexIntaday =await indexhistoricalApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FinsiderApi(param) {try{const insider = insiderApi(param);const req = await nse.getData(insider);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FlistingToday() {try{const req = await nse.getData(listingToday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FprevListing() {try{const req = await nse.getData(prevListing);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FblockDeals() {try{const req = await nse.getData(blockDeals);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Foptions(param) {try{const option =await optionsApi(param);const req = await nse.getData(option);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}

module.exports = { FmarketStatus , Fautocomplete, FmarketTurnover , Fholiday , Foptions, FallIndices ,FindexPreOpenApi , Fequity ,FtradeInfo , FcorporateInfo , Fintraday , FfinancialInfo,Fhistorical ,Findex ,FindexIntaday , Findexhistorical , indexPreOpenApi, FinsiderApi ,FlistingToday , FprevListing , FblockDeals}  
