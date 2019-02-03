const express = require('express')
const getaddr = require('request-ip')

const pkg = require('./package');
const lib = require('./lib')

const app = express()

// Disable X-Powered-By header
app.disable('x-powered-by');

// Middlewares
app.use(lib.api)
app.use(getaddr.mw());

// Base route
app.get('/:val?/:key?', (req, res) => {
	const args = req.params
	const data = req.api
	const text = ['curl', 'wget'].indexOf(req.headers['user-agent'].split('/')[0].toLowerCase()) !== -1
	let result

	// Iterate over HE API items
	for (let i = 0; i < data.length; i++) {
		let item = data[i]
		let keys
		let vals

		// Normalize keys and values
    for (let key in item) {
			let val = item[key]

    	if (Array.isArray(val)) {
        item[key] = val.join(',')
      } else if (typeof val === 'object') {
        for (let key in val) {
          item[key] = val[key]
        }

        delete (item[key])
      }
		}

		keys = Object.keys(item)
		vals = Object.values(item)

		// Set default IP
		if (!args.val || (args.val && keys.indexOf(args.val) !== -1 && !args.key)) {
			args.key = args.val
			args.val = req.ip
		}

		// Value found
		if (vals.indexOf(args.val) !== -1) {
			result = item

	    if (args.key) {
				if (keys.indexOf(args.key) !== -1) {
	      	result = item[args.key]
				} else {
					result
				}
			} else if (text) {
	     	result = keys.map(key => [['he', key].join('_').toUpperCase(), ['"', result[key], '"'].join('')].join('=')).join('\n')
			}

			break
		}
	}

	res.send(result)
})

const srv = app.listen(process.env.PORT || 3000, () => {
  console.log(pkg.name + ' listening on port ' + srv.address().port);
});

module.exports = app;
