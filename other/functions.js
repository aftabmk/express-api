const { NseIndia } = require('stock-nse-india')
const { marketStatus , glossary , marketTurnover , holiday, mergedDailyReports , allIndices , equityApi , tradeInfoApi ,corporateInfoApi ,financialInfoApi ,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi , listingToday , prevListing , blockDeals} = require('./Api')
const nse = new NseIndia()

async function FmarketStatus() {try{const req = await nse.getData(marketStatus);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fglossary() {try{const req = await nse.getData(glossary);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmarketTurnover() {try{const req = await nse.getData(marketTurnover);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fholiday() {try{const req = await nse.getData(holiday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmergedDailyReports() {try{const req = await nse.getData(mergedDailyReports);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallIndices() {try{const req = await nse.getData(allIndices);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fequity(param) {try{const equity= await equityApi(param);const req = await nse.getData(equity);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtradeInfo(param) {try{const tradeInfo =await tradeInfoApi(param);const req = await nse.getData(tradeInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FfinancialInfo(param) {try{const financialInfo =await financialInfoApi(param);const req = await nse.getData(financialInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FcorporateInfo(param) {try{const corporateInfo=await corporateInfoApi(param);const req = await nse.getData(corporateInfo);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fintraday(param) {try{const intraday =await intradayApi(param);const req = await nse.getData(intraday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fhistorical(param) {try{const historical =await historicalApi(param);const req = await nse.getData(historical);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findex(param) {try{const index =await indexApi(param);const req = await nse.getData(index);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexIntaday(param) {try{const indexIntaday =await indexIntadayApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexhistoricalApi(param) {try{const indexIntaday =await indexhistoricalApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FinsiderApi(param) {try{const indexIntaday =await insiderApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FlistingToday() {try{const req = await nse.getData(listingToday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FprevListing() {try{const req = await nse.getData(prevListing);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FblockDeals() {try{const req = await nse.getData(blockDeals);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}

module.exports = { FmarketStatus , Fglossary , FmarketTurnover , Fholiday , FmergedDailyReports , FallIndices , Fequity ,FtradeInfo , FcorporateInfo , Fintraday , FfinancialInfo,Fhistorical ,Findex ,FindexIntaday , FindexhistoricalApi , FinsiderApi ,FlistingToday , FprevListing , FblockDeals}  
