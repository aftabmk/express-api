function filterCookie(cookie)
{
    const split = cookie.substring(8).split('O')[0]    
    const parse = parseInt(split,2)     
    const boolean = parse % 786 == 0
    return boolean      
}

module.exports = { filterCookie }














// const cookie = 'cookies=100101001110000011101110110010011101010001111011000O100101001110000011101110110010011101010001111011000O100101001110000011101110110010011101010001111011000O100101001110000011101110110010011101010001111011000O1001010011100000111011101100100111010100011110110001010Tue Oct 18 2022 17:34:14 GMT+0530 (India Standard Time)'
// console.log(getCookie(cookie))