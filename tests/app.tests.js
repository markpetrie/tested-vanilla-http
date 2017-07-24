
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('vanilla http server', () => {

    it('GET/coder path returns a static json object', () => {
        request.get('/coder')
        .then(res => {
            assert.ok(res.body);

        })
    });
});