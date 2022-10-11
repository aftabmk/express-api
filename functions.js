const ax = require("axios");
const {  marketStatus , glossary , marketTurnover , equityMaster , holiday, mergedDailyReports , allIndices,indexNames, equityApi , tradeInfoApi ,corporateInfoApi ,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi } = require('./Api')

async function FmarketStatus() {try{const req = await ax.get(marketStatus);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fglossary() {try{const req = await ax.get(glossary);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmarketTurnover() {try{const req = await ax.get(marketTurnover);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FequityMaster() {try{const req = await ax.get(equityMaster);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fholiday() {try{const req = await ax.get(holiday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FmergedDailyReports() {try{const req = await ax.get(mergedDailyReports);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallIndices() {try{const req = await ax.get(allIndices);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexNames() {try{const req = await ax.get(indexNames);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fequity(param) {try{const equity= await equityApi(param);const req = await ax.get(equity);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtradeInfo(param) {try{const tradeInfo =await tradeInfoApi(param);const req = await ax.get(tradeInfo);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FcorporateInfo(param) {try{const corporateInfo=await corporateInfoApi(param);const req = await ax.get(corporateInfo);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fintraday(param) {try{const intraday =await intradayApi(param);const req = await ax.get(intraday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Fhistorical(param) {try{const historical =await historicalApi(param);const req = await ax.get(historical);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findex(param) {try{const index =await indexApi(param);const req = await ax.get(index);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexIntaday(param) {try{const indexIntaday =await indexIntadayApi(param);const req = await ax.get(indexIntaday);const data = req.data;return data/* ;console.log(data)*/}catch(e){console.log(e)}}

module.exports = { FmarketStatus , Fglossary , FmarketTurnover ,FequityMaster , Fholiday , FmergedDailyReports , FallIndices , FindexNames , Fequity ,FtradeInfo , FcorporateInfo , Fintraday ,Fhistorical ,Findex ,FindexIntaday}  
