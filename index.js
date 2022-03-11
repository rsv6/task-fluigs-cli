const readline = require('readline')
const os = require('os')
const fs = require('fs')
const path = require("path")
const { exit } = require('process')
// const cam = path.join(__dirname,"/data/fluigs.json")
// const cam2 = "C:\\Users\\rafael.santos\\Documents\\projects\\Desktop\\NodeJS\\NoteFluigCLI\\data\\fluigs.json"

const pathOS = {
  path: {
    linux: '/tmp',
    win: 'C:\\',
  },
  folder: 'fluigs',
  file: 'fluigs.json'
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const content = {
  num_fluig: "",
  desc_fluig: "",
  status: ""
}

const questionRL = () => {
  return rl.question('Digite o numero do fluig? ', function(num_fluig){
    rl.question('Descrição do fluig? ', function(desc_fluig){
      
      content.num_fluig = num_fluig
      content.desc_fluig = desc_fluig

      rl.question(`Status da resolução \n
        1 - Assumido
        2 - Em aguardo
        3 - Finalizado
        \n>> `, function(status) {

          // content.status = status

          console.log(`Status do fluig atual?
          Fluig: ${num_fluig}
          Descrição: ${desc_fluig}
          Status: ${status}`)
          
          if(status == 3) {

          content.status = "Finalizado"
          readWrite(content)
        } else if(status == 2) {
          
          content.status = "Em aguardo"
          readWrite(content)
        } else if(status == 1) {
          
          content.status = "Assumido"
          readWrite(content)
        } else {
          manFluigs()
        }
      })
    })
  })
}


function readWrite(content) {
  console.log(content)
  console.log(path.join(pathOS.path.win, pathOS.folder.concat('\\', pathOS.file) ))
  if (fs.existsSync(path.join(pathOS.path.win, pathOS.folder.concat('\\', pathOS.file)))) {
    console.log("File Exist!")
  } else {
    console.log("Not found file!!!")
  }





  // fs.readFile(path.join(pathOS.path.win, pathOS.file), (err, data) => {
  //   if(err) throw err

  //   const arq = JSON.parse(data)
  //   content.status = status
  //   arq.push(content)
    
  //   fs.writeFile(path.join(pathOS.path.win, pathOS.file), JSON.stringify(arq, null, 2), (err) => {
  //     if(err) throw err
  //     console.log('The file has been saved!')
  //     // rl.close()
  //     manFluigs()
  //   })
  // })
}


// Verify platform OS:
// Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
if (os.platform() == 'win32') {
  // Verify if exist path:
  if (fs.existsSync(path.join(pathOS.path.win, pathOS.folder))) {
    if (fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length >= 1) {
      console.log(`Diretório com ${fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length} arquivos!`)
      
      questionRL()
    } else {
      console.log(`Diretório com ${fs.readdirSync(path.join(pathOS.path.win, pathOS.folder)).length} arquivos!`)
      
      questionRL()
    }

  } else {
    console.log(`Directory ${pathOS.path.win+pathOS.folder} Not exist!!!`)
    fs.mkdir(path.join(pathOS.path.win, pathOS.folder), { recursive: true }, (err) => {
      if(err) return console.log(err)
      
      console.log(`Creating ${pathOS.path.win+pathOS.folder} ...`)
      console.log(`Directory ${pathOS.path.win+pathOS.folder} criado com sucesso!`)

      questionRL()
    })
  }
} 



// var manFluigs = function(){
//   return  rl.question('Numero do fluig? ', function(num_fluig){
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
// }










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