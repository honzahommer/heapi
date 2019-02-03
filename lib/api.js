const parse = require('xml2js').parseString
const fetch = require('got-retry')

const api = (req, res, next) => {
  let user = process.env.HE_USERNAME
	let pass = process.env.HE_PASSWORD

  if (!user || !pass) {
		res.status(401)
		next()
	} else {
		fetch('https://tunnelbroker.net/tunnelInfo.php', { auth: [user, pass].join(':'), headers: { 'user-agent': 'Happy Kittens' } })
			.then(res => { parse(res.body, (err, res) => {
				req.api = res.tunnels.tunnel
				next()
			})
		})
	}
}

module.exports = api
