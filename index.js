const ex = require("express");
const cors = require('cors')
const helmet = require("helmet");
const cookie = require('cookie-parser')
const api = require('./Routes/routes');
const { setCookie } = require("./function/setCookie");
const { filterCookie } = require("./function/getCookie");
const url = `<a href='https://nifty50.netlify.app'>https://nifty50.netlify.app</a>`
//INITIALIZE
const app = ex();
const port = process.env.PORT || 5000;
const options = { origin: "http://localhost:5173", credentials: true }
const cookieOptions = { sameSite: 'strict', path: '/', expires: new Date(Date.now() + 900000), httpOnly: true }

// FUNCTION
function getCookie(req, res, next) 
{
    if(req.headers.cookie)
    {
        if( filterCookie(req.headers.cookie))
        {
            next();
            return
        }
        else
        {
            res.status(401).send([{'status':401,'description':'Invalid certificate'}])
            return
        }
    }
    else
    {
        res.status(403).send([{'status':403 ,'description':'forbidden'}])
    }
}

//EXPRESS APP
app.use(ex.json())
app.use(ex.urlencoded({ extended: true }))
app.use(helmet());
app.use(cors(options));
// routes
app.get(`/`, async (req, res) => { try { return res.status(202).send(url) } catch (err) { return res.status(500).json({ err: err.toString() }) } })
app.get(`/account`, async (req, res) => 
{ try 
    { 
        return res.status(202)
        .cookie( setCookie() , cookieOptions)
        .send(url) 
    } 
    catch (err) 
    { 
        return res.status(500).json({ err: err.toString() }) 
    } })
// api router
app.use('/api',getCookie,api)


app.listen(port, () => { console.log(`running on port http://localhost:5000`) })
