module.exports = function toReadable (number) {
    const units = [];
    units[0] = '',
    units[1] = 'one',
    units[2] = 'two',
    units[3] = 'three',
    units[4] = 'four',
    units[5] = 'five',
    units[6] = 'six',
    units[7] = 'seven',
    units[8] = 'eight',
    units[9] = 'nine';
  
    const firstTens = [];
    firstTens[0] = 'ten',
    firstTens[1] = 'eleven',
    firstTens[2] = 'twelve',
    firstTens[3] = 'thirteen',
    firstTens[4] = 'fourteen',
    firstTens[5] = 'fifteen',
    firstTens[6] = 'sixteen',
    firstTens[7] = 'seventeen',
    firstTens[8] = 'eighteen',
    firstTens[9] = 'nineteen';
  
    const tens = [];
    tens[0] = '',
    tens[1] = 'ten',
    tens[2] = 'twenty',
    tens[3] = 'thirty',
    tens[4] = 'forty',
    tens[5] = 'fifty',
    tens[6] = 'sixty',
    tens[7] = 'seventy',
    tens[8] = 'eighty',
    tens[9] = 'ninety';
  
    const hundreds = 'hundred';
    const zero = 'zero';
  
    let result = '';
  
    if ((String(number).length === 1) && (String(number)[0]) === '0') { // if number = 0
      result = `${zero}`;
    } else if (String(number).length === 1) { // if number = 1 - 9
      result = `${units[number]}`;
    } else if ((String(number).length === 2) && (String(number)[0]) === '1') {    // if number = 10-19
      result = `${firstTens[Number(String(number)[1])]}`;
    } else if ((String(number).length === 2) && (String(number)[1]) === '0') {    // if number % 10 = 0, (10, 20... 90)
      result = `${tens[Number(String(number)[0])]}`;
    } else if (String(number).length === 2) { // if number = from 20 to 100
      result = `${tens[Number(String(number)[0])]} ${units[Number(String(number)[1])]}`;
    } else if ((String(number).length === 3) && (String(number)[1]) === '1') {    // if number = x10-x19, where x - hundredsCount
      result = `${units[Number(String(number)[0])]} ${hundreds} ${firstTens[Number(String(number)[2])]}`;
    } else if ((String(number).length === 3) && ((String(number)[1]) === '0') && ((String(number)[2]) === '0')) {    // if number = x00 (100, 200... 900)
      result = `${units[Number(String(number)[0])]} ${hundreds}`;
    } else if ((String(number).length === 3) && ((String(number)[1]) === '0')) {    // if number = x0x (x01, x02... x09)
      result = `${units[Number(String(number)[0])]} ${hundreds} ${units[Number(String(number)[2])]}`;
    } else if ((String(number).length === 3) && ((String(number)[2]) === '0')) {    // if number = xx0 (120, xx0... 990)
      result = `${units[Number(String(number)[0])]} ${hundreds} ${tens[Number(String(number)[1])]}`;
    } else if (String(number).length === 3) { // if number others numbers from 100 to 999
      result = `${units[Number(String(number)[0])]} ${hundreds} ${tens[Number(String(number)[1])]} ${units[Number(String(number)[2])]}`;
    } else {
      result = `Enter number from 0 to 999`;
    }
  
    return result;
}
