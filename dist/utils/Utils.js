"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static phonenumber(inputtxt) {
        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map