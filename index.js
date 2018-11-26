'use strict';
const HttpRequestModule = require('./modules/HttpRequestModule'),
      MemchachedModule = require('./modules/MemcachedModule'),
      MerchandiseService = require('./service/merchandise.service');


exports.HttpRequestModule = HttpRequestModule;
exports.MemchachedModule = MemchachedModule;
exports.MerchandiseService = MerchandiseService;