//API endpoints
// basics
// 0) market state
const marketStatus = 'https://stock-nse-india.herokuapp.com/api/marketStatus'
//common
// 1) glossary
const glossary = 'https://stock-nse-india.herokuapp.com/api/glossary'
// 2) marketTurnover
const marketTurnover = 'https://stock-nse-india.herokuapp.com/api/marketTurnover'
// 3) equityMaster
const equityMaster = 'https://stock-nse-india.herokuapp.com/api/equityMaster'
// 4) Hoiday
const holiday = 'https://stock-nse-india.herokuapp.com/api/holidays?type=trading'
// 1) mergedDailyReports
const keys = ['capital','derivativives'] 
const mergedDailyReports = 'https://stock-nse-india.herokuapp.com/api/mergedDailyReports?key='+keys[0];
// 1) allIndices
const allIndices = 'https://stock-nse-india.herokuapp.com/api/allIndices'
// 1) indexNames
const indexNames = 'https://stock-nse-india.herokuapp.com/api/indexNames'
// equities
// const stockSymbol = 'INFY'
// 1) equity
async function equityApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const equity = 'https://stock-nse-india.herokuapp.com/api/equity/'+ stockSymbol
    return equity
}
// 1) tradeInfo
async function tradeInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const tradeInfo = 'https://stock-nse-india.herokuapp.com/api/equity/tradeInfo'+stockSymbol
    return tradeInfo
}
// 1) corporateInfo
async function corporateInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const corporateInfo = 'https://stock-nse-india.herokuapp.com/api/equity/corporateInfo/'+stockSymbol
    return corporateInfo
}
// 1) intraday
async function intradayApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const intraday = 'https://stock-nse-india.herokuapp.com/api/equity/intraday/'+stockSymbol+'?preOpen=false'
    return intraday
}
// 1) historical
const date = ['2022-01-01','2022-05-01'] 
async function historicalApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const historical = 'https://stock-nse-india.herokuapp.com/api/equity/historical/'+stockSymbol+'?dateStart='+date[0]+'&dateEnd='+date[1]
    return historical
}
// indices
// 1) index
async function indexApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const index = 'https://stock-nse-india.herokuapp.com/api/index/'+ indexSymbol
    return index
}
// 1) index
async function indexIntadayApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexIntaday = 'https://stock-nse-india.herokuapp.com/api/index/intraday/'+indexSymbol+'?preOpen=false' 
    return indexIntaday
}

// 1) historicalIndex not working
const dateindex = ['2022-01-01','2022-05-01'] 
async function indexhistoricalApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexhistorical = 'https://stock-nse-india.herokuapp.com/api/equity/historical/'+indexSymbol+'?dateStart='+dateindex[0]+'&dateEnd='+dateindex[1]
    return indexhistorical
}


module.exports = { marketStatus , glossary , marketTurnover , equityMaster , holiday, mergedDailyReports , allIndices,indexNames, equityApi , tradeInfoApi ,corporateInfoApi ,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi }