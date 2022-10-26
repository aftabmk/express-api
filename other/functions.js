const { NseIndia } = require('stock-nse-india')
const nse = new NseIndia()
const { marketStatus , glossary , marketTurnover , equityMaster , holiday, mergedDailyReports , allIndices,indexNames, equityApi , tradeInfoApi ,corporateInfoApi ,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi} = require('./api')

async function FmarketStatus() {try{const req = await nse.getDataByEndpoint(marketStatus);const data = req.data;return data;console.log(data)}catch(e){console.log(e)}}
async function Fglossary() {try{const req = await nse.getDataByEndpoint(glossary);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmarketTurnover() {try{const req = await nse.getDataByEndpoint(marketTurnover);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FequityMaster() {try{const req = await nse.getDataByEndpoint(equityMaster);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fholiday() {try{const req = await nse.getDataByEndpoint(holiday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmergedDailyReports() {try{const req = await nse.getDataByEndpoint(mergedDailyReports);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallIndices() {try{const req = await nse.getDataByEndpoint(allIndices);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexNames() {try{const req = await nse.getDataByEndpoint(indexNames);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fequity(param) {try{const equity= await equityApi(param);const req = await nse.getDataByEndpoint(equity);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtradeInfo(param) {try{const tradeInfo =await tradeInfoApi(param);const req = await nse.getDataByEndpoint(tradeInfo);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FcorporateInfo(param) {try{const corporateInfo=await corporateInfoApi(param);const req = await nse.getDataByEndpoint(corporateInfo);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fintraday(param) {try{const intraday =await intradayApi(param);const req = await nse.getDataByEndpoint(intraday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fhistorical(param) {try{const historical =await historicalApi(param);const req = await nse.getDataByEndpoint(historical);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findex(param) {try{const index =await indexApi(param);const req = await nse.getDataByEndpoint(index);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexIntaday(param) {try{const indexIntaday =await indexIntadayApi(param);const req = await nse.getDataByEndpoint(indexIntaday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexhistoricalApi(param) {try{const indexIntaday =await indexhistoricalApi(param);const req = await nse.getDataByEndpoint(indexIntaday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Finsider(param) {try{const indexIntaday =await insiderApi(param);const req = await nse.getDataByEndpoint(indexIntaday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}

module.exports = { FmarketStatus , Fglossary , FmarketTurnover ,FequityMaster , Fholiday , FmergedDailyReports , FallIndices , FindexNames , Fequity ,FtradeInfo , FcorporateInfo , Fintraday ,Fhistorical ,Findex ,FindexIntaday , FindexhistoricalApi ,Finsider}  
