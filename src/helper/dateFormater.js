

const DateFormater_yyyyMMM = (d) => {
    const monthIndex = d.getMonth()
    const MM = monthNames[monthIndex]
    const year = d.getFullYear()
    return `${year} ${MM}`
}

const DateFormater_mmYYYY_mmYYYY = (start, end) => {
    let sd = new Date(start);
    let ed = new Date(end)
    const sdMonthIndex = sd.getMonth()
    const sdMM = monthNames[sdMonthIndex]
    const sdYYYY = sd.getFullYear()
    const edMonthIndex = ed.getMonth()
    const edMM = monthNames[edMonthIndex]
    const edYYYY = ed.getFullYear()
    // if (sdYYYY == edYYYY)
    //     return `${sdMM} - ${edMM}`
    // else
    return `${sdMM}, ${sdYYYY} - ${edMM}, ${edYYYY}`
}

const DateFormater_mmYYYY_Xmonth = (start, end) => {
    let sd = new Date(start);
    let ed = new Date(end)
    const sdMonthIndex = sd.getMonth()
    const sdMM = monthNames[sdMonthIndex]
    const sdYYYY = sd.getFullYear()
    const edMonthIndex = ed.getMonth()
    const edMM = monthNames[edMonthIndex]
    const edYYYY = ed.getFullYear()

    let range = 0;
    if (edMonthIndex < sdMonthIndex)
        range = 12 + edMonthIndex - sdMonthIndex + 1;
    else
        range = edMonthIndex - sdMonthIndex + 1;

    return `${sdMM} ${sdYYYY} ${range} months`
}

const DateFormater = (start, end) => {
    let sd = new Date(start);
    let ed = new Date(end)
    const sdMonthIndex = sd.getMonth()
    const sdMM = monthNames[sdMonthIndex]
    const sdYYYY = sd.getFullYear()
    const edMonthIndex = ed.getMonth()
    const edMM = monthNames[edMonthIndex]
    const edYYYY = ed.getFullYear()

    let range = 0;
    if (edMonthIndex < sdMonthIndex)
        range = 12 + edMonthIndex - sdMonthIndex + 1;
    else
        range = edMonthIndex - sdMonthIndex + 1;

    return `${sdMM} ${sdYYYY}`
}


export default DateFormater;



const monthFullNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]