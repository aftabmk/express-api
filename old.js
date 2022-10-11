//req-headers is requird for api call istead of set headers
const ax = require("axios");


//url 
const nse="https://www.nseindia.com/"
const nifty50="https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050"
const niftyindices="https://www.nseindia.com/api/allIndices"
const niftymid150="https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20MIDCAP%20150"
const niftysml250="https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20SMALLCAP%20250"
const insidertrading ="https://www.nseindia.com/api/corporates-pit?"
//search


f();
async function f()
{
    const req = await ax.get(nse);
    const data = await req;
    const head = data.headers['set-cookie']
    // for(i=0;i<head.length;i++){
    // const cook = head[i].split(";")[0]+";";
    
    // console.log(val)
    // }
    if(head.length==4){
    const a = head[0].split(";")[0]+";";
    const b = head[1].split(";")[0]+";";
    const c = head[2].split(";")[0]+";";
    const d= head[3].split(";")[0]+";";
    const cookie = a+b+c+d
    //console.log(cookie)
    //node-fetch api
    const r = await ax.get(nifty50, {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "cookie": `${cookie}`,
          "Referer": "https://www.nseindia.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });
const da = await r;
//console.log(`${cookie}`)
console.log(da.data.data)
}
else
{
    return("cookie error")
}}
