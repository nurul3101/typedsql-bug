"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getUsers = /*#__PURE__*/ $mkFactory("SELECT\nid,\nname\nFROM\n\"Test1User\"")
