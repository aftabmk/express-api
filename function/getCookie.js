function filterCookie(cookie)
{
    const split = cookie.substring(8).split('O')[0]    
    const parse = parseInt(split,2)     
    const boolean = parse % 786 == 0
    return boolean      
}

module.exports = { filterCookie }














