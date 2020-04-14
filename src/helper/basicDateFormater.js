const mmmYYYY = (d) => {
    if (!d)
        return ''
    let date = new Date(d);
    let index = date.getMonth();
    let mmm = monthNames[index];
    let yyyy = date.getFullYear();
    if (index == new Date().getMonth() && yyyy == new Date().getFullYear())
        return 'Present';
    return `${mmm}, ${yyyy}`;
};

export default mmmYYYY;


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