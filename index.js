const readline = require('readline')
const fs = require('fs')
const path = require("path")
const { exit } = require('process')
// const cam = path.join(__dirname,"/data/fluigs.json")
const cam2 = "C:\\Users\\rafael.santos\\Documents\\projects\\Desktop\\NodeJS\\NoteFluigCLI\\data\\fluigs.json"

// console.log(cam)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function readWrite(content, status) {
  fs.readFile(cam2, (err, data) => {
    if(err) throw err

    const arq = JSON.parse(data)
    content.status = status
    arq.push(content)

    fs.writeFile(cam2, JSON.stringify(arq, null, 2), (err) => {
      if(err) throw err
      console.log('The file has been saved!')
      // rl.close()
      manFluigs()
    })
  })
}


var flag = true
var status = ""

var manFluigs = function(){
  rl.question('Numero do fluig? ', function(num_fluig){
    rl.question('Descrição do fluig? ', function(desc_fluig){

      const content = {
        num_fluig: num_fluig,
        desc_fluig: desc_fluig,
        status: ""
      }

      rl.question(`Status da resolução \n
        1 - Assumido
        2 - Em aguardo
        3 - Finalizado
        \n>> `, function(status) {

        console.log(`Status do fluig atual:
          Fluig: ${num_fluig}
          Descrição: ${desc_fluig}
          Status: ${status}`)

        if(status == 3) {

          status = "Finalizado"
          readWrite(content, status)
        } else if(status == 2) {
          
          status = "Em aguardo"
          readWrite(content, status)
        } else if(status == 1) {

          status = "Assumido"
          readWrite(content, status)
        } else {
          manFluigs()
        }
      })
    })
  })

  // rl.on('close', () => {
  //   console.log("\nApp finalizado!")
  //   process.exit(0)
  // })
}

manFluigs()

// rl.question(`######### Gerenciamento de resolução de chamados de fluigs diários ##########
//   Digite a opção abaixo para executar:
//   1 - Adicionar atendimento de fluig em nota:
//   2 - Listar todos os atendimentos:
//   0 - Sair do sistem
// `, function(op) {

//   if(op == 1) {
//     manFluigs()
//   } else if (op == 0) {
//     flag = false
//     console.log("Aplicação finalizada!")
//     exit(0)
//   } else {
//     console.log("Opção incorreta!")
//     return
//   }
// })
