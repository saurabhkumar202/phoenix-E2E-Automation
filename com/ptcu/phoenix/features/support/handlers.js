// features/support/handlers.js
var myHandlers = function () {
    this.registerHandler('AfterStep', function () {
        // clean up!
        // There is no World instance available on `this`
        // because all scenarios are done and World instances are long gone.
        console.log('This is after step');
    });
    this.registerHandler('AfterFeatures', function () {
        // clean up!
        // There is no World instance available on `this`
        // because all scenarios are done and World instances are long gone.
       console.log('Done with all the features');
    });
}

module.exports = myHandlers;