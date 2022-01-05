module.exports = function toReadable (number) {
    let hundred = Math.floor(number / 100);
    let dozen = Math.floor((number - hundred * 100) / 10);
    let unit = number % 10;

    let str = '';
    let arr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen']

    let arr_dozen = ['', '', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];


    if (number % 100 >= 1 && number % 100 <= 19) {
        str = `${arr[number % 100]}`;
    } else if (unit !== 0) {
        str = `${arr[unit]}`;
    } else if (unit === 0 && number < 100 && number < 20){
        return `${arr[unit]}`;
    }


    if (dozen > 1) {
        str = `${arr_dozen[dozen]}ty ${str}`;
    }

    if (number >= 100) {
        return `${arr[hundred]} hundred ${str}`.trim();
    } else {
        return str.trim();
    }
}
