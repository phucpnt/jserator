/**
 * Created by Phuc on 12/11/2015.
 */

import makeCompile from '../../src/compile'

const compile = makeCompile();

describe('Basic compile', () => {

  it('should return an object', () => {

    var exampleStr = require('../resources/json-generator.jsample.txt');
    var generate= compile()(exampleStr);
    expect(typeof generate()).to.equal('object');

  })

});
