/**
 * Created by Phuc on 10/1/2015.
 */
var _ = require('lodash');

export default () => ({
  get $() {
    return _.uniqueId()
  }
})

