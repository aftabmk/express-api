const { NseIndia } = require('stock-nse-india')
const { marketStatus , marketTurnover , autocompleteApi , optionsApi , holiday, allIndices , equityApi , tradeInfoApi ,corporateInfoApi ,financialInfoApi ,intradayApi , indexPreOpenApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi , listingToday , prevListing ,
topgainer, topLooser ,activeStocks ,priceBand,volumeGainers ,allTimeHigh ,allTimeLow , largeDeal , shareHolding , promoter , public} = require('./Api')
const nse = new NseIndia()

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
async function Fautocomplete(param) {try{const search =await autocompleteApi(param);const req = await nse.getData(search);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FindexIntaday(param) {try{const indexIntaday =await indexIntadayApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findex(param) {try{const index =await indexApi(param);const req = await nse.getData(index);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Findexhistorical(param) {try{const indexIntaday =await indexhistoricalApi(param);const req = await nse.getData(indexIntaday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FinsiderApi(param) {try{const insider = insiderApi(param);const req = await nse.getData(insider);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FlistingToday() {try{const req = await nse.getData(listingToday);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FprevListing() {try{const req = await nse.getData(prevListing);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function Foptions(param) {try{const option =await optionsApi(param);const req = await nse.getData(option);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtopGainer() {try{const req = await nse.getData(topgainer);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FtopLooser() {try{const req = await nse.getData(topLooser);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FactiveStocks() {try{const req = await nse.getData(activeStocks);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FpriceBand() {try{const req = await nse.getData(priceBand);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FvolumeGainers() {try{const req = await nse.getData(volumeGainers);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallTimeHigh () {try{const req = await nse.getData(allTimeHigh );const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FallTimeLow() {try{const req = await nse.getData(allTimeLow);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FlargeDeal() {try{const req = await nse.getData(largeDeal);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FshareHolding(param){try{const stockSymbol = shareHolding(param);const req = await nse.getData(stockSymbol);const data = req;return data[0].recordId/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FPromoter(param){try{const promoterHolding =  promoter(param);const req = await nse.getData(promoterHolding);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}
async function FPublic(param){try{const publicHolding = public(param);const req = await nse.getData(publicHolding);const data = req;return data/* ;console.log(data)*/}catch(e){console.log(e)}}

module.exports = { FmarketStatus , Fautocomplete, FmarketTurnover , Fholiday , Foptions, FallIndices ,FindexPreOpenApi , Fequity ,FtradeInfo , 
    FcorporateInfo , Fintraday , FfinancialInfo,Fhistorical ,Findex ,FindexIntaday , Findexhistorical , indexPreOpenApi, FinsiderApi ,FlistingToday 
    , FprevListing , FtopGainer ,FtopLooser , FactiveStocks , FpriceBand , FvolumeGainers , FallTimeHigh , FallTimeLow , FlargeDeal ,FshareHolding
    ,FPromoter , FPublic }  
