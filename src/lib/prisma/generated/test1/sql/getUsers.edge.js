"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getUsers = /*#__PURE__*/ $mkFactory("SELECT\nid,\nname\nFROM\n\"Test1User\"")
