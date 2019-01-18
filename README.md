# Getting started

The Releans SDK enables developers to use Releans Services in their code. You can get started in minutes.

## How to Build

The Releans SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Releans-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Releans-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `Releans ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Releans-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the Releans NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Releans-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Releans-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Releans-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Releans APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.


## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthAccessToken | OAuth 2.0 Access Token |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthAccessToken = "oAuthAccessToken"; // OAuth 2.0 Access Token

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MessageController](#message_controller)
* [SenderController](#sender_controller)
* [BalanceController](#balance_controller)

## <a name="message_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MessageController") MessageController

### Get singleton instance

The singleton instance of the ``` MessageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MessageController;
```

### <a name="get_all_messages"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.getAllMessages") getAllMessages

> List all messages sent by the account.


```javascript
function getAllMessages(callback)
```

#### Example Usage

```javascript


    controller.getAllMessages(function(error, response, context) {

    
    });
```



### <a name="get_price_of_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.getPriceOfMessage") getPriceOfMessage

> Return cost of sending a message to the number.


```javascript
function getPriceOfMessage(mobileNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobileNumber |  ``` Required ```  | Mobile number you want to know the price of sending a message. |



#### Example Usage

```javascript

    var mobileNumber = 'mobileNumber';

    controller.getPriceOfMessage(mobileNumber, function(error, response, context) {

    
    });
```



### <a name="get_view_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.getViewMessage") getViewMessage

> Return the details of the message.


```javascript
function getViewMessage(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | Id of the message you need to return its details. |



#### Example Usage

```javascript

    var id = 'id';

    controller.getViewMessage(id, function(error, response, context) {

    
    });
```



### <a name="create_send_sms_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.createSendSMSMessage") createSendSMSMessage

> Send a single message.


```javascript
function createSendSMSMessage(senderId, mobileNumber, message, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| senderId |  ``` Required ```  ``` DefaultValue ```  | Sender id to send the message from. |
| mobileNumber |  ``` Required ```  ``` DefaultValue ```  | The mobile number supposed to receive the message. |
| message |  ``` Required ```  ``` DefaultValue ```  | Message text. |



#### Example Usage

```javascript

    var senderId = 'senderId';
    var mobileNumber = 'mobileNumber';
    var message = 'message';

    controller.createSendSMSMessage(senderId, mobileNumber, message, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sender_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SenderController") SenderController

### Get singleton instance

The singleton instance of the ``` SenderController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SenderController;
```

### <a name="get_sender_name_details"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.getSenderNameDetails") getSenderNameDetails

> Return the details of the sender name.


```javascript
function getSenderNameDetails(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | The sender id you want its details |



#### Example Usage

```javascript

    var id = 'id';

    controller.getSenderNameDetails(id, function(error, response, context) {

    
    });
```



### <a name="create_sender_name"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.createSenderName") createSenderName

> Create a new sender id to send messages using it


```javascript
function createSenderName(senderName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| senderName |  ``` Required ```  ``` DefaultValue ```  | Name you want to register as Sender Name |



#### Example Usage

```javascript

    var senderName = 'senderName';

    controller.createSenderName(senderName, function(error, response, context) {

    
    });
```



### <a name="get_all_senders"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.getAllSenders") getAllSenders

> List all senders names associated with the account


```javascript
function getAllSenders(callback)
```

#### Example Usage

```javascript


    controller.getAllSenders(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="balance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BalanceController") BalanceController

### Get singleton instance

The singleton instance of the ``` BalanceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BalanceController;
```

### <a name="get_balance"></a>![Method: ](https://apidocs.io/img/method.png ".BalanceController.getBalance") getBalance

> Get your available balance


```javascript
function getBalance(callback)
```

#### Example Usage

```javascript


    controller.getBalance(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



