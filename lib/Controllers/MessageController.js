/**
 * releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class MessageController {
    /**
     * List all messages sent by the account.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAllMessages(callback) {
        _logger.info('getAllMessages being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAllMessages');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/message';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAllMessages');
        const _headers = {
            accept: 'application/json',
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'Releans',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for getAllMessages  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAllMessages...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAllMessages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAllMessages...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getAllMessages ');
                    errorResponse = _baseController.validateResponse(_context, 'getAllMessages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return cost of sending a message to the number.
     *
     * @param {string} mobileNumber Mobile number you want to know the price of sending a message.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getPriceOfMessage(mobileNumber, callback) {
        _logger.info('getPriceOfMessage being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for getPriceOfMessage');
        if (mobileNumber === null || mobileNumber === undefined) {
            const _err = { errorMessage: 'The parameter `mobileNumber` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for getPriceOfMessage');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/message/price';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            mobileNumber,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getPriceOfMessage');
        const _headers = {
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'Releans',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for getPriceOfMessage  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getPriceOfMessage...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getPriceOfMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    _logger.info('Validating response for getPriceOfMessage ');
                    errorResponse = _baseController.validateResponse(_context, 'getPriceOfMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the details of the message.
     *
     * @param {string} id Id of the message you need to return its details.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getViewMessage(id, callback) {
        _logger.info('getViewMessage being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getViewMessage');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/message/view';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getViewMessage');
        const _headers = {
            accept: 'application/json',
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'Releans',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for getViewMessage  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getViewMessage...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getViewMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getViewMessage...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getViewMessage ');
                    errorResponse = _baseController.validateResponse(_context, 'getViewMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Send a single message.
     *
     * @param {string} senderId Sender id to send the message from.
     * @param {string} mobileNumber The mobile number supposed to receive the message.
     * @param {string} message Message text.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendSMSMessage(senderId, mobileNumber, message, callback) {
        _logger.info('createSendSMSMessage being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createSendSMSMessage');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/message/send';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createSendSMSMessage');
        const _headers = {
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'Releans',
        };

        // prepare form data
        _logger.info('Preparing form data for createSendSMSMessage');
        const _form = {
            senderId,
            mobileNumber,
            message,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };
        _logger.debug(`'Raw request for createSendSMSMessage  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createSendSMSMessage...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createSendSMSMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    _logger.info('Validating response for createSendSMSMessage ');
                    errorResponse = _baseController.validateResponse(_context, 'createSendSMSMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = MessageController;
