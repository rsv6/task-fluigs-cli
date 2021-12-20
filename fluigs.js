const readline = require('readline')
const fs = require('fs')
const path = require("path")
const cam = path.join(__dirname,"/data/fluigs.json")
var log = console.log

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var pergunta = function() {
  rl.question('Numero do fluig', function(resp) {
    if(resp == 0) {
      return rl.close()
    }

    log(`Numero do fluig ${resp}`)
    pergunta()
  })
}

pergunta()