//
//  validator.js
//  validationTests
//
//  Created by Robbie Bardijn on 2012-06-07.
//  Copyright 2012 Robbie Bardijn. All rights reserved.
//
function Validator() {
    this.hasErrors = false;
}

Validator.hassErrors = function() {
    return this.hasErrors;
};

Validator.validate = function(validators) {
    this.hasErrors = false;
    for (var validator_obj in validators) {
        if (validators[validator_obj].validator === undefined || (validators[validator_obj].validator !== true && validators[validator_obj].validator !== false)) {
            throw "you must specify a validator key in a validator object, the value of this key Must be a function";
        }
        if (validators[validator_obj].onFail === undefined || (validators[validator_obj].onFail instanceof Function === false)) {
            throw "you must specify a onFail key in a validator object, the value of this key Must be a function";
        }
        if (validators[validator_obj].validator === true) {
            validators[validator_obj].onSuccess();
        } else {
            this.hasErrors = true;
            validators[validator_obj].onFail();
        }
    }
};

String.prototype.ltrim = function() {
    return this.replace(/^\s+/, "");
};
String.prototype.rtrim = function() {
    return this.replace(/\s+$/, "");
};

Validator.validateUsernameOrPassword = function(username) {
    var exp = /^[a-zA-Z0-9_?\-?]+$/;
    if (username.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateHexvalue = function(hexValue) {
    var exp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
    if (hexValue.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateEmail = function(email) {
    var exp = /^([a-zA-Z0-9_\.\-]+)@([\da-zA-Z\.\-]+)\.([a-zA-Z\.]{2,6})$/;
    if (email.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateUrl = function(url) {
    var exp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (url.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateIpadress = function(ip) {
    var exp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ip.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateHtmltag = function(tag) {
    var exp = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    if (tag.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateRequired = function(str) {
    if (str.length !== 0) {
        return true;
    } else {
        return false;
    }
};

Validator.validateLength = function(str, min, max) {
    if (min === 0 && max === 0) {
        throw "Validator : When calling validateLength min or max should be different from 0.";
    }
    if ((min >= max || max <= min) && (max !== 0)) {
        throw "Validator : When calling validateLength min is the minimum and max should be the maximum.";
    }
    if (min !== 0 && max !== 0) {
        if (str.length > min && str.length < max) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    if (min === 0 && max !== 0) {
        if (str.length < max) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    if (min !== 0 && max === 0) {
        if (str.length > min) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    return false;
};

Validator.isInteger = function(value) {
    if (parseInt(value, 10)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateRange = function(value, min, max) {
    (min === undefined) ? min = 0: min = min;
    (max === undefined) ? max = 100: max = max;
    if ((min >= max || max <= min) && (max !== 0)) {
        throw "Validator : When calling validateRange min is the minimum and max should be the maximum.";
    }
    var ivalue = value;
    if (min !== 0 && max !== 0) {
        if (ivalue > min && ivalue < max) {
            return true;
        } else {
            return false;
        }
        return false;
    }

    if (min === 0 && max !== 0) {
        if (ivalue < max) {
            return true;
        } else {
            return false;
        }
        return false;
    }

    if (min !== 0 && max === 0) {
        if (ivalue > min) {
            return true;
        } else {
            return false;
        }
        return false;
    }

    return true;
};

Validator.validateDate = function(date) {
    var exp = /(0[1-9]|[12][0-9]|3[01])[\/\-\.](0[1-9]|1[012])[\/\-\.](19|20)[0-9]{2}/;
    if (date.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateHour = function(hour) {
    var exp = /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/;
    if (hour.match(exp)) {
        return true;
    } else {
        return false;
    }
};

Validator.validateIsequalto = function(str, comparrer, ignoreWhitespaceInbackandfront) {
    (ignoreWhitespaceInbackandfront === undefined) ? ignoreWhitespaceInbackandfront = false: ignoreWhitespaceInbackandfront = ignoreWhitespaceInbackandfront;
    if (ignoreWhitespaceInbackandfront === true) {
        str = str.ltrim();
        comparrer = comparrer.ltrim();
        str = str.rtrim();
        comparrer = comparrer.rtrim();
    }
    if (str === comparrer) {
        return true;
    } else {
        return false;
    }
};

Validator.validateIsNotequalto = function(str, comparrer, ignoreWhitespaceInbackandfront) {
    (ignoreWhitespaceInbackandfront === undefined) ? ignoreWhitespaceInbackandfront = false: ignoreWhitespaceInbackandfront = ignoreWhitespaceInbackandfront;
    if (ignoreWhitespaceInbackandfront === true) {
        str = str.ltrim();
        comparrer = comparrer.ltrim();
        str = str.rtrim();
        comparrer = comparrer.rtrim();
    }
    if (str === comparrer) {
        return false;
    } else {
        return true;
    }
};

Validator.validateRegExp = function(str, exp) {
    if (str.match(exp)) {
        return true;
    } else {
        return false;
    }
};

