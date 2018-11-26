'use strict'
const HttpRequestModule = require('../modules/HttpRequestModule'),
      axios = require("axios") ,
      qs = require('qs') ;
      require("dotenv").config();

module.exports = class MerchandiseService extends HttpRequestModule {
    construct(performId = '') {
        this.performId = performId;
        this.memcacheKey = `LIST_MERCHANDISE_ZONE[${this.performId}]`;
        this.performZoneList = [];
    }
    async getMerchandiseZone() {
        let resp = null;
        try {
            resp = await this.getDataMemcached(this.memcachedKey);
            if (resp == null) {
                resp = await this.createHttp(process.env.URL_MERCHANDISE_ZONE, {
                    performId: this.performId
                }).post();
                this.performZoneList = (resp.data.code == 100) ? resp.data.data : [];
            } else {
                this.performZoneList = JSON.stringify(resp);
            }
            return this.performZoneList;
        } catch (e) {
            throw e;
        }
    }
}
