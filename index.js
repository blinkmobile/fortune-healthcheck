"use strict";

module.exports = function (db, model, url, failedMsg) {
  return function (req, res, next) {
    url = url || '/v1/healthcheck';
    failedMsg = failedMsg || 'Service Healthcheck Failed';
    if (req.originalUrl !== url) {
      return next();
    }
    db.find(model, {}).then(
      function () {
        res.send(200);
      },
      function (err) {
        if (err) {
          return next(failedMsg);
        }
        res.send(200);
      }
    );
  };
};
