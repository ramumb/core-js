var parent = require('./4');

require('../proposals/array-from-async-stage-2');
require('../proposals/array-grouping-stage-3-2');
require('../proposals/array-buffer-transfer');
require('../proposals/decorator-metadata-v2');
require('../proposals/explicit-resource-management');
require('../proposals/iterator-helpers-stage-3-2');
require('../proposals/json-parse-with-source');
require('../proposals/set-methods-v2');
// TODO: Obsolete versions, remove from `core-js@4`
require('../proposals/array-grouping-stage-3');
require('../proposals/change-array-by-copy');
require('../proposals/iterator-helpers-stage-3');

module.exports = parent;
