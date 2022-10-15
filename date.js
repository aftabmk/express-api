function getDate(prevDay,prevMonth,prevFullYear,setYear,type)
{
    let date = new Date()
    const day = prepend(reduce(date.getDate(),prevDay))
    const month = prepend(reduce(date.getMonth(),prevMonth))
    const year = prepend(reduce(Number(date.getFullYear().toString().substring(2)),prevFullYear))
    const yearFull = prepend(reduce(date.getFullYear(),prevFullYear)) 
    setYear ? typeYear = year : typeYear = yearFull
        
    switch(type)
        {
            case 'ampersand':format = day+'&'+month+'&'+typeYear;break
            case 'apostrophe':format = day+"'"+month+"'"+typeYear;break
            case 'asterisk':format = day+"*"+month+"*"+typeYear;break
            case 'atSign':format = day+"@"+month+"@"+typeYear;break
            case 'hyphen':format = day+'-'+month+'-'+typeYear;break
            case 'underScore':format = day+'_'+month+'_'+typeYear;break
            case 'dollar':format = day+'$'+month+'$'+typeYear;break
            case 'exclamation':format = day+'!'+month+'!'+typeYear;break
            case 'Hash':format = day+'#'+month+'#'+typeYear;break
            case 'quotation':format = day+'"'+month+'"'+typeYear;break
            case 'forwardSlash':format = day+'/'+month+'/'+typeYear;break;
        }
        return format
}
function reduce(current,reduce){if(current>reduce) return current-reduce;else return current}
function prepend(number){if(number<10){return '0'+number}else return number}

console.log(getDate(10,1,0,true,'forwardSlash'))

module.exports = { getDate }