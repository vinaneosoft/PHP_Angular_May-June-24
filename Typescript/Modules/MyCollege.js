"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCollege = exports.collegeName = exports.Department = void 0;
// module name : MyCollege
var Department = /** @class */ (function () {
    // properties
    // methods
    function Department(departmentId) {
        if (departmentId === void 0) { departmentId = 0; }
        this.departmentId = departmentId;
    }
    return Department;
}());
exports.Department = Department;
exports.collegeName = "LT College";
function setCollege(colName) {
    exports.collegeName = colName;
}
exports.setCollege = setCollege;
