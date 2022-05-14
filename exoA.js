var unirest = require("unirest")
 unirest
 .delete('http://localhost:3000/authors/101')
 .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
 .then((response) => {
 console.log(response.body)
 })
