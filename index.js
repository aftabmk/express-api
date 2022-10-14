const ex = require("express");
const cors = require('cors')
const { FmarketStatus, Fautocomplete ,FmarketTurnover, Fholiday, FallIndices, Fequity, FtradeInfo, FcorporateInfo ,Foptions, FfinancialInfo,Fintraday, FindexPreOpenApi,Fhistorical, Findex, FindexIntaday, Findexhistorical, FinsiderApi , FlistingToday , FprevListing , FblockDeals} = require('./other/functions')

//EXPRESS APP
const app = ex();
app.use(cors());
function secure(req,res,next)
{
    if(res.headers.cookie)
    {
        console.log("secure route")
        next()
    }
    res.redirect("/")
    
}
const port = process.env.PORT || 5000;
const url = `<a href='https://nifty50.netlify.app'>https://nifty50.netlify.app</a>`


// routes
app.get(`/`, async (req, res) => { try { return res.status(200).send(`Hello have a nice day please go back to ${url}`); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketStatus`,secure ,async (req, res) => { try { const api = await FmarketStatus(); return res.status(200).send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/marketTurnover`, secure,async (req, res) => { try { const api = await FmarketTurnover(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/holiday`, secure,async (req, res) => { try { const api = await Fholiday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/allIndices`,secure, async (req, res) => { try { const api = await FallIndices(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/equity/:params`,secure, async (req, res) => { try { const param = req.params.params;/*console.log(param)*/; const api = await Fequity(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/tradeInfo/:params`,secure ,async (req, res) => { try { const param = req.params.params; const api = await FtradeInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/financialInfo/:params`,secure, async (req, res) => { try { const param = req.params.params; const api = await FfinancialInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/intraday/:params`,secure ,async (req, res) => { try { const param = req.params.params; const api = await Fintraday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/corporateInfo/:params`,secure, async (req, res) => { try { const param = req.params.params; const api = await FcorporateInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/historical/:params`,secure ,async (req, res) => { try { const param = req.params.params; const api = await Fhistorical(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/index/:params`,secure ,async (req, res) => { try { const param = req.params.params; const api = await Findex(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexIntaday/:params`, secure,async (req, res) => { try { const param = req.params.params; const api = await FindexIntaday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexPreOpen/:params`, secure,async (req, res) => { try { const param = req.params.params; const api = await FindexPreOpenApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/indexhistorical/:params`, secure,async (req, res) => { try { const param = req.params.params; const api = await Findexhistorical(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/insider/:params`, secure,async (req, res) => { try { const param = req.params.params;const api = await FinsiderApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/prevListing`, secure,async (req, res) => { try { const api = await FprevListing(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/listingToday`, secure,async (req, res) => { try { const api = await FlistingToday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/blockDeals`, secure,async (req, res) => { try { const api = await FblockDeals(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/search/:params`,secure, async (req, res) => { try { const param = req.params.params; const api = await Fautocomplete(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/options/:params`, secure,async (req, res) => { try { const param = req.params.params; const api = await Foptions(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get('/cookie', (req,res)=>{ res.setHeader ('cookie','private'); res.send(`cookie set`)})
app.get('/all', async (req, res) => {
    const url = 'https://www.nseindia.com/api/allIndices'
    const data = await nse.getData(url)
    res.send(data)
})

app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
