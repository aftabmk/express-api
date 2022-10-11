//API endpoints
// basics
// 0) market state
const marketStatus = '/api/marketStatus'
//common
// 1) glossary
const glossary = '/api/glossary'
// 2) marketTurnover
const marketTurnover = '/api/marketTurnover'
// 3) equityMaster
const equityMaster = '/api/equityMaster'
// 4) Hoiday
const holiday = '/api/holidays?type=trading'
// 1) mergedDailyReports
const keys = ['capital','derivativives'] 
const mergedDailyReports = '/api/mergedDailyReports?key='+keys[0];
// 1) allIndices
const allIndices = '/api/allIndices'
// 1) indexNames
const indexNames = '/api/indexNames'
// equities
// const stockSymbol = 'INFY'
// 1) equity
async function equityApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const equity = '/api/equity/'+ stockSymbol
    return equity
}
// 1) tradeInfo
async function tradeInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const tradeInfo = '/api/equity/tradeInfo'+stockSymbol
    return tradeInfo
}
// 1) corporateInfo
async function corporateInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const corporateInfo = '/api/equity/corporateInfo/'+stockSymbol
    return corporateInfo
}
// 1) intraday
async function intradayApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const intraday = '/api/equity/intraday/'+stockSymbol+'?preOpen=false'
    return intraday
}
// 1) historical
const date = ['2022-01-01','2022-05-01'] 
async function historicalApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const historical = '/api/equity/historical/'+stockSymbol+'?dateStart='+date[0]+'&dateEnd='+date[1]
    return historical
}
// indices
// 1) index
async function indexApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const index = '/api/index/'+ indexSymbol
    return index
}
// 1) index
async function indexIntadayApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexIntaday = '/api/index/intraday/'+indexSymbol+'?preOpen=false' 
    return indexIntaday
}

// 1) historicalIndex not working // use less than year
const dateindex = ['2022-01-01','2022-05-01'] 
async function indexhistoricalApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexhistorical = '/api/equity/historical/'+indexSymbol+'?dateStart='+dateindex[0]+'&dateEnd='+dateindex[1]
    return indexhistorical
}
// 1) insider data
const dateinsider = ['2022-01-01','2022-05-01'] 
async function insiderApi()
{
    // https://www.nseindia.com/api/corporates-pit?index=equities&from_date=11-07-2022&to_date=11-10-2022
    const insider = '/api/corporates-pit?index=equities&from_date='+dateinsider[0]+'&to_date='+dateinsider[1]
    return insider
}


module.exports = { marketStatus , glossary , marketTurnover , equityMaster , holiday, mergedDailyReports , allIndices,indexNames, equityApi , tradeInfoApi ,corporateInfoApi ,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi}