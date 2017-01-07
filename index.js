'use strict';
var jsforce = require('jsforce');

var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl: 'https://login.salesforce.com'
});
conn.login(process.env.sf_user, process.env.sf_password, function(err, res) {
    if (err) { return console.error(err); }
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    conn.query('SELECT Id, Name FROM Account', function(err, res) {
        if (err) { return console.error(err); }
        console.log(res.records);
    });
});