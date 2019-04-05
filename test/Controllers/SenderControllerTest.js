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

const controller = testerlib.SenderController;
const Response200 = testerlib.Response200;
const Response2001 = testerlib.Response2001;

describe("SenderController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Return the details of the sender name.
     */
    it("should testSenderNameDetails response", function testSenderNameDetailsTest(done) {
        // parameters for the API call
        let id = 'sender-id';
        let accept = '*/*';

        controller.getSenderNameDetails(id, accept, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

    /**
     * Create a new sender id to send messages using it
     */
    it("should testCreateSenderName response", function testCreateSenderNameTest(done) {
        // parameters for the API call
        let accept = 'text/plain';
        let contentType = 'text/plain';
        let body = 'Your sender name';

        controller.createSenderName(accept, contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.equal('{"id":"ABCDEF"}', context.response.body);
            done();
        }).catch(() => undefined);
    });

    /**
     * List all senders names associated with the account
     */
    it("should testGetAllSenders response", function testGetAllSendersTest(done) {
        // parameters for the API call
        let accept = '*/*';

        controller.getAllSenders(accept, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('[{"id":"xEYgLPQZOpnel5aKBzyVXvAWJ","senderName":"RELEANS","phoneNumber":"+15105607102","status":1}]', context.response.body);
            done();
        }).catch(() => undefined);
    });
});
