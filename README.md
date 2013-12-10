fortune-healthcheck
===================

A healthcheck middleware for Fortune

Usage
----

    var healthcheck = require('fortune-healthcheck');
    app.use(healthcheck(app.adapter, 'nameOfAResource'));

Healthcheck takes four parameters:

1. Fortune.adapter object
2. The name of one of the resources defined in Fortune as a string
3. A URL that the healthcheck is available on (defaults to /v1/healthcheck)
4. An error message that is passed to error handling middleware (defaults to Service Healthcheck Failed)

