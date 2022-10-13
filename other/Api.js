//API endpoints
// basics
// 0) market state
const marketStatus = 'https://www.nseindia.com/api/marketStatus'
//common
// 2) marketTurnover
const marketTurnover = 'https://www.nseindia.com/api/market-turnover'
// 4) Hoiday
const holiday = 'https://www.nseindia.com/api/holiday-master?type=trading'

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
//search
async function autocompleteApi( param )
{
    const Search = await param.toUpperCase()
    // https://www.nseindia.com/api/search/autocomplete?q=NIFTY
    const equity = 'https://www.nseindia.com/api/search/autocomplete?q='+ Search
    return equity
}
// 1) tradeInfo
async function tradeInfoApi( param )
{
    const stockSymbol = await param.toUpperCase()
    // https://www.nseindia.com/api/quote-equity?symbol=HEG&section=trade_info
    const tradeInfo = 'https://www.nseindia.com/api/quote-equity?symbol='+stockSymbol+'&section=trade_info'
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
    // https://www.nseindia.com/api/quote-equity?symbol=HEG&section=corp_info
    const corporateInfo = 'https://www.nseindia.com/api/quote-equity?symbol='+stockSymbol+'&section=corp_info'
    return corporateInfo
}
// 1) intraday
async function intradayApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const intraday = 'https://www.nseindia.com/api/chart-databyindex?index='+stockSymbol+'EQN'
    return intraday
}
// option
// https://www.nseindia.com/api/option-chain-equities?symbol=HCLTECH
async function optionsApi( param )
{
    const stockSymbol = await param.toUpperCase()
    const  options = 'https://www.nseindia.com/api/option-chain-equities?symbol='+stockSymbol
    return options
}
// 1) historical
const date = ['01-01-2021','01-01-2022'] 
async function historicalApi( param )
{
    const stockSymbol = await param.toUpperCase()
    // https://www.nseindia.com/api/historical/cm/equity?symbol=HCLTECH&series=[%22EQ%22]&from=13-10-2021&to=13-10-2022
    const historical = 'https://www.nseindia.com/api/historical/cm/equity?symbol='+stockSymbol+'&series=[%22EQ%22]&from='+date[0]+'&to='+date[1]
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
async function indexPreOpenApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    // https://www.nseindia.com/api/chart-databyindex?index=NIFTY%2050&indices=true&preopen=true
    const indexIntaday = 'https://www.nseindia.com/api/chart-databyindex?index='+indexSymbol+'&indices=true&preopen=true' 
    return indexIntaday
}
// 1) index
async function indexIntadayApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    // https://www.nseindia.com/api/chart-databyindex?index=NIFTY%2050&indices=true
    const indexIntaday = 'https://www.nseindia.com/api/chart-databyindex?index='+indexSymbol+'&indices=true' 
    return indexIntaday
}

// 1) historicalIndex not working
const dateindex = ['13-10-2021','13-10-2022'] 
async function indexhistoricalApi( param )
{
    const indexSymbol = await encodeURI(param.toUpperCase())
    // https://www.nseindia.com/api/historical/fo/derivatives?&from=13-10-2021&to=13-10-2022&instrumentType=FUTIDX&symbol=NIFTY
    const indexhistorical = 'https://www.nseindia.com/api/historical/fo/derivatives?&from='+dateindex[0]+'&to='+dateindex[1]+'&instrumentType=FUTIDX&symbol='+indexSymbol
    return indexhistorical
}

const start = ['13-09-2022','13-10-2022']
function insiderApi(data)
{
    // 3month max
    // const start = await data
    const indexhistorical =  `https://www.nseindia.com/api/corporates-pit?index=equities&from_date=${start[0]}&to_date=${start[1]}`
    console.log(indexhistorical)
    console.log(start)
    return indexhistorical
}


module.exports = { marketStatus , marketTurnover , holiday , allIndices , autocompleteApi , indexPreOpenApi,equityApi , tradeInfoApi ,corporateInfoApi , financialInfoApi,intradayApi,historicalApi , optionsApi ,indexApi, indexIntadayApi, indexhistoricalApi , insiderApi , listingToday , prevListing , blockDeals}