const readline = require('readline')
const os = require('os')
const fs = require('fs')
const path = require("path")
const { exit } = require('process')
// const cam = path.join(__dirname,"/data/fluigs.json")
const cam2 = "C:\\Users\\rafael.santos\\Documents\\projects\\Desktop\\NodeJS\\NoteFluigCLI\\data\\fluigs.json"

const pathOS = {
  path: {
    linux: '/tmp',
    win: 'C:\\',
  },
  folder: 'fluigs',
  file: 'fluigs.json'
}

var flag = true
var status = ""

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Verify platform OS:
// Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
if (os.platform() == 'win32') {
  // Verify if exist path:
  if (fs.existsSync(path.join(pathOS.path.win, pathOS.folder))) {
    if (fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length >= 1) {
      console.log(`Diretório com ${fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length} arquivos!`)
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
    
              console.log(`Status do fluig atual?
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
      
    } else {
      console.log(`Diretório com ${fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length} arquivos!`)
      
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
    
              console.log(`Status do fluig atual?
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


    }

  } else {
    console.log(`Directory ${pathOS.path.win+pathOS.folder} Not exist!!!`)
    fs.mkdir(path.join(pathOS.path.win, pathOS.folder), { recursive: true }, (err) => {
      if(err) return console.log(err)
      
      console.log(`Creating ${pathOS.path.win+pathOS.folder} ...`)
      console.log(`Directory ${pathOS.path.win+pathOS.folder} criado com sucesso!`)

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
    
              console.log(`Status do fluig atual?
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


    })
  }
} 


function readWrite(content, status) {
  fs.readFile(path.join(pathOS.path.win, pathOS.file), (err, data) => {
    if(err) throw err

    const arq = JSON.parse(data)
    content.status = status
    arq.push(content)
    
    fs.writeFile(path.join(pathOS.path.win, pathOS.file), JSON.stringify(arq, null, 2), (err) => {
      if(err) throw err
      console.log('The file has been saved!')
      // rl.close()
      manFluigs()
    })
  })
}

var manFluigs = function(){
  return  rl.question('Numero do fluig? ', function(num_fluig){
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

          console.log(`Status do fluig atual?
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
}










// Working on:

// function readWrite(content, status) {
//   fs.readFile(cam2, (err, data) => {
//     if(err) throw err

//     const arq = JSON.parse(data)
//     content.status = status
//     arq.push(content)
    
//     fs.writeFile(cam2, JSON.stringify(arq, null, 2), (err) => {
//       if(err) throw err
//       console.log('The file has been saved!')
//       // rl.close()
//       manFluigs()
//     })
//   })
// }



// var manFluigs = function(){
//   rl.question('Numero do fluig? ', function(num_fluig){
//     rl.question('Descrição do fluig? ', function(desc_fluig){
      
//       const content = {
//         num_fluig: num_fluig,
//         desc_fluig: desc_fluig,
//         status: ""
//       }

//       rl.question(`Status da resolução \n
//         1 - Assumido
//         2 - Em aguardo
//         3 - Finalizado
//         \n>> `, function(status) {

//           console.log(`Status do fluig atual?
//           Fluig: ${num_fluig}
//           Descrição: ${desc_fluig}
//           Status: ${status}`)
          
//           if(status == 3) {

//           status = "Finalizado"
//           readWrite(content, status)
//         } else if(status == 2) {
          
//           status = "Em aguardo"
//           readWrite(content, status)
//         } else if(status == 1) {
          
//           status = "Assumido"
//           readWrite(content, status)
//         } else {
//           manFluigs()
//         }
//       })
//     })
//   })

  // rl.on('close', () => {
  //   console.log("\nApp finalizado!")
  //   process.exit(0)
  // })
// }

// manFluigs()



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

// else if (os.platform() == 'linux') {
//   // Verify if exist path:
//   if (fs.existsSync(path.join(pathOS.path.linux, pathOS.folder))) {
//     return console.log('The path exists!')
//   } else {
//     console.log('Path Not exist!')
//     console.log('Creating Folder in path...')
//     fs.mkdir(path.join(pathOS.path.linux, pathOS.folder), { recursive: true }, (err) => {
//       if(err) return console.log(err)

//       return console.log(`Diretório ${pathOS.path.win+pathOS.folder} criado com sucesso!`)
//     })
//   }
// } else {
//   console.log('Platform not found!')
// }