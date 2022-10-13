//API endpoints
// basics
// 0) market state
const marketStatus = 'https://www.nseindia.com/api/marketStatus'
//common
// 1) glossary
const glossary = 'https://www.nseindia.com/api/glossary'
// 2) marketTurnover
const marketTurnover = 'https://www.nseindia.com/api/market-turnover'
// 4) Hoiday
const holiday = 'https://www.nseindia.com/api/holiday-master?type=trading'
// 1) mergedDailyReports
const keys = ['capital','derivativives'] 
const mergedDailyReports = 'https://www.nseindia.com/api/mergedDailyReports?key='+keys[0];
// 1) allIndices
const allIndices = 'https://www.nseindia.com/api/allIndices'
// equities
// NEW LISTING
const listingToday = 'https://www.nseindia.com/api/new-listing-today-ipo?index=NewListing'
const prevListing = 'https://www.nseindia.com/api/new-listing-today?index=RecentListing'
//block deals
const blockDeals = 'https://www.nseindia.com/api/new-listing-today?index=RecentListing'
// const stockSymbol = 'INFY'
// 1) equity
async function equityApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const equity = 'https://www.nseindia.com/api/quote-equity?symbol='+ stockSymbol
    return equity
}
// 1) tradeInfo
async function tradeInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const tradeInfo = 'https://www.nseindia.com/api/equity/tradeInfo'+stockSymbol
    return tradeInfo
}
// FINANCIAL
async function financialInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const tradeInfo = 'https://www.nseindia.com/api/results-comparision?index=equities&symbol='+stockSymbol
    return tradeInfo
}
// 1) corporateInfo
async function corporateInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const corporateInfo = 'https://www.nseindia.com/api/equity/corporateInfo/'+stockSymbol
    return corporateInfo
}
// 1) intraday
async function intradayApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const intraday = 'https://www.nseindia.com/api/equity/intraday/'+stockSymbol+'?preOpen=false'
    return intraday
}
// 1) historical
const date = ['2022-01-01','2022-05-01'] 
async function historicalApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const historical = 'https://www.nseindia.com/api/equity/historical/'+stockSymbol+'?dateStart='+date[0]+'&dateEnd='+date[1]
    return historical
}
// indices
// 1) index
async function indexApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const index = 'https://www.nseindia.com/api/equity-stockIndices?index='+ indexSymbol
    return index
}
// 1) index
async function indexIntadayApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexIntaday = 'https://www.nseindia.com/api/index/intraday/'+indexSymbol+'?preOpen=false' 
    return indexIntaday
}

// 1) historicalIndex not working
const dateindex = ['2022-01-01','2022-05-01'] 
async function indexhistoricalApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexhistorical = 'https://www.nseindia.com/api/equity/historical/'+indexSymbol+'?dateStart='+dateindex[0]+'&dateEnd='+dateindex[1]
    return indexhistorical
}

async function insiderApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    const indexhistorical = 'https://www.nseindia.com/api/corporates-pit?index=equities&from_date='+dateindex[0]+'&to_date='+dateindex[1]
    return indexhistorical
}


module.exports = { marketStatus , glossary , marketTurnover , holiday, mergedDailyReports , allIndices , equityApi , tradeInfoApi ,corporateInfoApi , financialInfoApi,intradayApi,historicalApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi , listingToday , prevListing , blockDeals}