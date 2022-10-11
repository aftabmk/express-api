
const ex = require("express");
const cors = require('cors')
const { FmarketStatus, Fglossary , FmarketTurnover ,FequityMaster , Fholiday , FmergedDailyReports , FallIndices , FindexNames , Fequity ,FtradeInfo , FcorporateInfo , Fintraday ,Fhistorical ,Findex ,FindexIntaday} = require('./functions')

//EXPRESS APP
const app = ex() ; app.use(cors()) ;const port = process.env.PORT || 5000;
// routes
app.get(`/marketStatus`, async (req, res) => {try {const api = await FmarketStatus();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/glossary`, async (req, res) => {try {const api = await Fglossary();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/marketTurnover`, async (req, res) => {try {const api = await FmarketTurnover();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/equityMaster`, async (req, res) => {try {const api = await FequityMaster();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/holiday`, async (req, res) => {try {const api = await Fholiday();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/mergedDailyReports`, async (req, res) => {try {const api = await FmergedDailyReports();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/allIndices`, async (req, res) => {try {const api = await FallIndices();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/indexNames`, async (req, res) => {try {const api = await FindexNames();return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/equity/:params`, async (req, res) => {try {const param = req.params.params ;/*console.log(param)*/;const api = await Fequity(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/tradeInfo/:params`, async (req, res) => {try {const param = req.params.params ;const api = await FtradeInfo(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/corporateInfo/:params`, async (req, res) => {try {const param = req.params.params ;const api = await FcorporateInfo(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/intraday/:params`, async (req, res) => {try {const param = req.params.params ;const api = await Fintraday(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/historical/:params`, async (req, res) => {try {const param = req.params.params ;const api = await Fhistorical(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/index/:params`, async (req, res) => {try {const param = req.params.params ;const api = await Findex(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})
app.get(`/indexIntaday/:params`, async (req, res) => {try {const param = req.params.params ;const api = await FindexIntaday(param);return res.status(200).send(api)}catch (err) {return res.status(500).json({err: err.toString()})}})

app.listen(port, () => {console.log(`running on port http://localhost:5000`)})
