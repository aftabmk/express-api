const ex = require("express");
const cors = require('cors')
const { FmarketStatus, Fautocomplete ,FmarketTurnover, Fholiday, FallIndices, Fequity, FtradeInfo, FcorporateInfo ,Foptions, FfinancialInfo,Fintraday, FindexPreOpenApi,Fhistorical, Findex, FindexIntaday, Findexhistorical, FinsiderApi , FlistingToday , FprevListing , FblockDeals} = require('./other/functions')

//EXPRESS APP
const app = ex();
app.use(cors());

function secure(req,res,next)
{
    if(req.headers.gateway)
    {
        console.log(secure)
        next()
    }
    res.redirect('/error')
}
app.use(secure)
const port = process.env.PORT || 5000;
const url = `<a href='https://nifty50.netlify.app'>https://nifty50.netlify.app</a>`


// routes
app.get(`/`, async (req, res) => { try { return res.send(`Hello have a nice day please go back to ${url}`); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/error`, async (req, res) => { try { return send(`Sorry invalid path${url}`); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketStatus`, async (req, res) => { try { const api = await FmarketStatus(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketTurnover`, async (req, res) => { try { const api = await FmarketTurnover(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/holiday`, async (req, res) => { try { const api = await Fholiday(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/allIndices`, async (req, res) => { try { const api = await FallIndices(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/equity/:params`, async (req, res) => { try { const param = req.params.params;/*console.log(param)*/; const api = await Fequity(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/tradeInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FtradeInfo(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/financialInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FfinancialInfo(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/intraday/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fintraday(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/corporateInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FcorporateInfo(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/historical/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fhistorical(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/index/:params`, async (req, res) => { try { const param = req.params.params; const api = await Findex(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexIntaday/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexIntaday(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexPreOpen/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexPreOpenApi(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexhistorical/:params`, async (req, res) => { try { const param = req.params.params; const api = await Findexhistorical(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/insider/:params`, async (req, res) => { try { const param = req.params.params;const api = await FinsiderApi(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/prevListing`, async (req, res) => { try { const api = await FprevListing(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/listingToday`, async (req, res) => { try { const api = await FlistingToday(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/blockDeals`, async (req, res) => { try { const api = await FblockDeals(); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/search/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fautocomplete(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/options/:params`, async (req, res) => { try { const param = req.params.params; const api = await Foptions(param); return res.send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })


app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
