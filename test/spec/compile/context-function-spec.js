/**
 * Created by Phuc on 12/15/2015.
 */


import makeCompile from '../../../src/compile'
import makeContextFunctionCompile from '../../../src/compile/context-function'


fdescribe('Compile with context function generator', () => {
  var finalCompile = makeContextFunctionCompile()(makeCompile());

  it('should work with simple flat schema', () => {

    var generate = finalCompile(require('../../resources/context-function/static.jsample.txt'));
    var data = generate();

    console.log(data);
    expect(typeof data).toEqual('object');

  });

  it('should work with nested schema', () => {
    var generate = finalCompile(require('../../resources/context-function/static-nested.jsample.txt'));
    var data = generate();
    console.log(JSON.stringify(data, null, 2));
    expect(typeof data).toEqual('object');

  });


});