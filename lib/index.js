const { XmlRpcClient } = require('@foxglove/xmlrpc');

function foo(x) {
    return x + 42;
}

module.exports = foo;