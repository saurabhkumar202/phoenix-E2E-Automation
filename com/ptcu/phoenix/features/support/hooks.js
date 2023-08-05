"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specHelper_1 = require("../../utils/specHelper");
const scenario_context_1 = require("../../utils/scenario.context");
function hooks() {
    this.Before(function () {
        //console.log("");
        scenario_context_1.ScenarioContext.clearAll();
    });
    this.After(function () {
        var spec = new specHelper_1.SpecHelper();
        return spec.cleanUp();
    });
}
exports.hooks = hooks;
module.exports = hooks;
// export = hooks;
