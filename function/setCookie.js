function setCookie()
{
    const date = new Date().getTime() 
    const secret = date*786
    const hex = secret.toString(2) 
    const join = "cookies="+hex +"O"+ hex + "O" +hex+"O" +hex + "O"+hex +hex + hex + hex + hex +'1010' + new Date()
    return join  
}
// console.log(setCookie())
module.exports = { setCookie }
















