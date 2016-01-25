require('./out/goog/bootstrap/nodejs')
require('./lib/drop-dot') // Name of the js ouput file
require('./out/drop_dot/core') // Path to compiled core file
drop_dot.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]) // appname.namespace._mainfunction
