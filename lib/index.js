/**
  * @module releans
  *
  * The Releans SDK enables developers to use Releans Services in their code. You can get started
  * in minutes.
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const MessageController = require('./Controllers/MessageController');
const SenderController = require('./Controllers/SenderController');
const BalanceController = require('./Controllers/BalanceController');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of releans
    Configuration,
    Logger,
    // controllers of releans
    MessageController,
    SenderController,
    BalanceController,
    // models of releans
    // exceptions of releans
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
