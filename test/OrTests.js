var carbon = require('carbon-io')
var __ = carbon.fibers.__(module)
var _o = carbon.bond._o(module)
var o = carbon.atom.o(module).main
var assert = require('assert')

/**************************************************************************
 * OrTests
 */
__(function() {
  module.exports = o({

    /**********************************************************************
     * _type
     */
    _type: carbon.testtube.Test,
    
    /**********************************************************************
     * name
     */
    name: 'OrTests',

    /**********************************************************************
     * description
     */
    description: 'Or tests',

    /**********************************************************************
     * doTest
     */
    doTest: function() {
      assert((true || true) == true)
      assert((true || false) == true)
      assert((false || true) == true)
      assert((false || false) == false)
    }
    
  })
})
