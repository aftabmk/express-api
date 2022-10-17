const ex = require("express");
const cors = require('cors')
const helmet = require("helmet");
const cookie = require('cookie-parser')
const api = require('./Routes/routes')
//INITIALIZE
const app = ex();
const port = process.env.PORT || 5000;
const options = { origin: "http://localhost:5173", credentials: true }
const random = Math.floor(Math.random() * 101)
const expiry = 5 * 60 * 1000
const cookieOptions = { sameSite: 'strict', path: '/', expires: new Date(Date.now() + 900000), httpOnly: true }
const url = `<a href='https://nifty50.netlify.app'>https://nifty50.netlify.app</a>`

// FUNCTION
function getCookie(req, res, next) {if(req.headers.cookie){next();return}else{res.status(403).send('403 forbidden')}}

//EXPRESS APP
app.use(ex.json())
app.use(ex.urlencoded({ extended: true }))
app.use(helmet());
app.use(cors(options));
// routes
app.get(`/`, async (req, res) => { try { return res.status(202).send(url) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/account`, async (req, res) => { try { return res.status(202).cookie('cookies', 'hello', cookieOptions).send(url) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
// api router
app.use('/api',getCookie,api)


app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
