/**
  * @module ReleansAPILib
  *
  * The Releans SDK enables developers to use Releans Services in their code. You can get started
  * in minutes.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MessageController = require('./Controllers/MessageController');
const SenderController = require('./Controllers/SenderController');
const BalanceController = require('./Controllers/BalanceController');
const Response2001 = require('./Models/Response2001');
const Response200 = require('./Models/Response200');
const Response2002 = require('./Models/Response2002');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of ReleansAPILib
    Configuration,
    Environments,
    // controllers of ReleansAPILib
    MessageController,
    SenderController,
    BalanceController,
    // models of ReleansAPILib
    Response2001,
    Response200,
    Response2002,
    // exceptions of ReleansAPILib
    APIException,
};

module.exports = initializer;
