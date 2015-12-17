/**
 * Created by Phuc on 12/15/2015.
 */

import _ from 'lodash';
import makeCompile from '../../../src/compile'
import makeRepeatCompile from '../../../src/compile/repeat'
import makeValueGenerateCompile from '../../../src/compile/value-generate'
import makeContextFunctionCompile from '../../../src/compile/context-function'


describe('Compile with repeat generator', () => {
  var finalCompile = makeRepeatCompile()(makeCompile());

  it('should work with simple schema', () => {
    var data = finalCompile(require('../../resources/repeat/simple.jsample.txt'));

    console.log(JSON.stringify(data, null, 2));
    expect(typeof data).toEqual('object');

  });

  it('should with with value generating compile', () => {

    var finalCompile = _.flowRight(
        makeRepeatCompile(),
        makeValueGenerateCompile({
          objectId: require('../../../src/generator/object-id')
        })
    )(makeCompile());

    var data = finalCompile(require('../../resources/repeat/simple.jsample.txt'));

    var jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);
    expect(typeof data).toEqual('object');
    expect(jsonData).not.toContain('objectId');

  });

  it('should with with context function compile', () => {

    var finalCompile = _.flowRight(
        makeRepeatCompile(),
        makeContextFunctionCompile()
    )(makeCompile());

    var data = finalCompile(require('../../resources/repeat/function-context.jsample.txt'));

    var jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);
    expect(jsonData).toContain('Hello Phuc PNT');

  });

  it('should with with full compile', () => {

    var finalCompile = _.flowRight(
        makeRepeatCompile(),
        makeValueGenerateCompile({
          objectId: require('../../../src/generator/object-id')
        }),
        makeContextFunctionCompile()
    )(makeCompile());

    var data = finalCompile(require('../../resources/repeat/function-context.jsample.txt'));

    var jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);
    expect(typeof data).toEqual('object');
    expect(jsonData).toContain('Hello Phuc PNT');
    expect(jsonData).not.toContain('objectId');

  });

});