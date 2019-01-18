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

class SenderController {
    /**
     * Return the details of the sender name.
     *
     * @param {string} id The sender id you want its details
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSenderNameDetails(id, callback) {
        _logger.info('getSenderNameDetails being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getSenderNameDetails');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/sender/view/';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getSenderNameDetails');
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
        _logger.debug(`'Raw request for getSenderNameDetails  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getSenderNameDetails...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getSenderNameDetails');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getSenderNameDetails...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getSenderNameDetails ');
                    errorResponse = _baseController.validateResponse(_context, 'getSenderNameDetails');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Create a new sender id to send messages using it
     *
     * @param {string} senderName Name you want to register as Sender Name
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSenderName(senderName, callback) {
        _logger.info('createSenderName being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createSenderName');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/sender/create';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createSenderName');
        const _headers = {
            'content-type': 'text/plain; charset=utf-8',
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'Releans',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: senderName,
        };
        _logger.debug(`'Raw request for createSenderName  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createSenderName...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createSenderName');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    _logger.info('Validating response for createSenderName ');
                    errorResponse = _baseController.validateResponse(_context, 'createSenderName');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List all senders names associated with the account
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAllSenders(callback) {
        _logger.info('getAllSenders being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAllSenders');
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/sender';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAllSenders');
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
        _logger.debug(`'Raw request for getAllSenders  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAllSenders...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAllSenders');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAllSenders...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getAllSenders ');
                    errorResponse = _baseController.validateResponse(_context, 'getAllSenders');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = SenderController;
