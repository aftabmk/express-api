const ex = require('express')
const { FmarketStatus, Fautocomplete, FmarketTurnover, Fholiday, FallIndices, Fequity, FtradeInfo, FcorporateInfo, Foptions, FfinancialInfo, Fintraday, FindexPreOpenApi, Fhistorical, Findex, FindexIntaday, Findexhistorical, FinsiderApi, FlistingToday, FprevListing ,FtopGainer ,FtopLooser , FactiveStocks , FpriceBand , FvolumeGainers , FallTimeHigh , FallTimeLow , FlargeDeal , FshareHolding ,FPromoter , FPublic} = require('../other/functions')

const router = ex.Router()

router.get(`/marketStatus` ,async (req, res) => { try { const api = await FmarketStatus(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/marketTurnover`, async (req, res) => { try { const api = await FmarketTurnover(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/holiday`, async (req, res) => { try { const api = await Fholiday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/allIndices`, async (req, res) => { try { const api = await FallIndices(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/equity/:params`, async (req, res) => { try { const param = req.params.params;/*console.log(param)*/; const api = await Fequity(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/tradeInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FtradeInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/financialInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FfinancialInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/intraday/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fintraday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/corporateInfo/:params`, async (req, res) => { try { const param = req.params.params; const api = await FcorporateInfo(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/historical/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fhistorical(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/index/:params`, async (req, res) => { try { const param = req.params.params; const api = await Findex(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/indexIntaday/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexIntaday(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/indexPreOpen/:params`, async (req, res) => { try { const param = req.params.params; const api = await FindexPreOpenApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/indexhistorical/:params`, async (req, res) => { try { const param = req.params.params; const api = await Findexhistorical(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/insider/:params`, async (req, res) => { try { const param = req.params.params; const api = await FinsiderApi(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/prevListing`, async (req, res) => { try { const api = await FprevListing(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/listingToday`, async (req, res) => { try { const api = await FlistingToday(); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/search/:params`, async (req, res) => { try { const param = req.params.params; const api = await Fautocomplete(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/options/:params`, async (req, res) => { try { const param = req.params.params; const api = await Foptions(param); return res.status(200).send(api) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/topgainer` ,async (req, res) => { try { const api = await FtopGainer(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/toplooser` ,async (req, res) => { try { const api = await FtopLooser(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/activeStocks` ,async (req, res) => { try { const api = await FactiveStocks(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/priceBand` ,async (req, res) => { try { const api = await FpriceBand(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/volumeGainer` ,async (req, res) => { try { const api = await FvolumeGainers(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/alltimehigh` ,async (req, res) => { try { const api = await FallTimeHigh(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/alltimelow` ,async (req, res) => { try { const api = await FallTimeLow(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/largedeal` ,async (req, res) => { try { const api = await FlargeDeal(); return res.send(api); } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/shareHolding/:params/promoter`, async (req, res) => { try { const param = req.params.params; const api = await FshareHolding(param); const promoter = await FPromoter(api) ;return res.status(200).send(promoter) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
router.get(`/shareHolding/:params/public`, async (req, res) => { try { const param = req.params.params; const api = await FshareHolding(param); const public = await FPublic(api) ;return res.status(200).send(public) } catch (err) { return res.status(500).json({ err: err.toString() }) } })


module.exports = router
