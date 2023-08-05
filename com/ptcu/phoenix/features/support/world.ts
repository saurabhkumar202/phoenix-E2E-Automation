import chai = require("chai");
import chai_smoothie = require("chai-smoothie");

function World () {
    chai.use(chai_smoothie);
    this.expect = chai.expect;
}
export= World;