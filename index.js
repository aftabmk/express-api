const { NseIndia } = require('stock-nse-india')
const ex = require("express");
const cors = require('cors')
const { FmarketStatus, Fglossary, FmarketTurnover, Fholiday, FmergedDailyReports, FallIndices, Fequity, FtradeInfo, FcorporateInfo, FfinancialInfo,Fintraday, Fhistorical, Findex, FindexIntaday, FindexhistoricalApi, FinsiderApi , FlistingToday , FprevListing , FblockDeals} = require('./other/functions')

const nse = new NseIndia()

//EXPRESS APP
const app = ex();
app.use(cors());
const port = process.env.PORT || 5000;
const url = `<a href='https://nifty50.netlify.app'>https://nifty50.netlify.app</a>`


// routes
app.get(`/`, async (req, res) => { try { return res.status(200).send(`Hello have a nice day please go back to ${url}`); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketStatus`, async (req, res) => { try { const api = await FmarketStatus(); return res.status(200).send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/glossary`, async (req, res) => { try { const api = await Fglossary(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketTurnover`, async (req, res) => { try { const api = await FmarketTurnover(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/holiday`, async (req, res) => { try { const api = await Fholiday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/mergedDailyReports`, async (req, res) => { try { const api = await FmergedDailyReports(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/allIndices`, async (req, res) => { try { const api = await FallIndices(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/equity/:params`, async (req, res) => { try { const param = req.params.params;/*console.log(param)*/; const api = await Fequity(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/tradeInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FtradeInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/financialInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FfinancialInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/corporateInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FcorporateInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/intraday/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fintraday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/historical/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fhistorical(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/index/:params`, async (req, res) => { try { const param = req.params.params; const api = await Findex(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexIntaday/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexIntaday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexhistoricalApi/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexhistoricalApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/insider/:params`, async (req, res) => { try { const param = req.params.params; const api = await FinsiderApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/prevListing`, async (req, res) => { try { const api = await FprevListing(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/listingToday`, async (req, res) => { try { const api = await FlistingToday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/blockDeals`, async (req, res) => { try { const api = await FblockDeals(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })

app.get('/all', async (req, res) => {
    const url = 'https://www.nseindia.com/api/allIndices'
    const data = await nse.getData(url)
    res.send(data)
})

app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
