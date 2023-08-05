"use strict";
const chai = require("chai");
const chai_smoothie = require("chai-smoothie");
function World() {
    chai.use(chai_smoothie);
    this.expect = chai.expect;
}
module.exports = World;
