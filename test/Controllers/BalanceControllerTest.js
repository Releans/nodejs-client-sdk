/**
 * ReleansAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.BalanceController;
const Response2002 = testerlib.Response2002;

describe("BalanceController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Get your available balance
     */
    it("should testBalance response", function testBalanceTest(done) {
        // parameters for the API call
        let accept = 'text/plain';

        controller.getBalance(accept, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.equal('{"balance":100}', context.response.body);
            done();
        }).catch(() => undefined);
    });
});
