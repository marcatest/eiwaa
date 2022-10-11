function cdbl(input) {
    var rtn = 0;
    if (input == '') {
        rtn = 0;
    }
    else if (input == '.') {
        rtn = 0;
    }
    else if (input == '-') {
        rtn = 0;
    }
    else if (isNaN(input)) {
        rtn = 0;
    }
    else if (input == null) {
        rtn = 0;
    }
    else if (input == 'Infinity') {
        rtn = 0;
    }
    else {
        rtn = input;
    }

    return parseFloat(rtn);
}
function cstr(input) {
    var rtn = '';
    if (input == undefined) {
        rtn = '';
    }
    else if (input == null) {
        rtn = '';
    }
    else {
        rtn = input;
    }

    return String(rtn);
}
function format(input,decimalplace) {
   return parseFloat(cdbl(input)).toFixed(decimalplace);
}