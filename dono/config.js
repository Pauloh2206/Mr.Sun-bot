//===================================== //

//TENHA CUIDADO AO ALTERAR AS COISAS
//NUNCA APAGUE OS " " 
//CASO CONTRÁRIO, O BOT NÃO IRÁ LIGAR 
//CASO TENHA INTERESSE EM TER O BOT DESCRIPTOGRAFADO 
//CHAMA NO WHATSAPP: wa.me/5538997282155
//CASO TENHA IDEIAS DE COMANDOS, CHAMA AI

//===================================== //

const fs = require("fs")
const chalk = require("chalk")

//===================================== //
// MUDANÇAS DE LOGOS:

global.log0 = "https://telegra.ph/file/69c4bd7f4c8e0e629adad.jpg" 

global.thumb = "https://telegra.ph/file/69c4bd7f4c8e0e629adad.jpg"

global.err4r = "https://telegra.ph/file/69c4bd7f4c8e0e629adad.jpg"

//=====================================\\
// ALTERAÇÕES DE DONO E BOT:

global.numerodonoa = ["553897282155"] //COLOQUE SEU NÚMERO DENTRO DAS ASPAS PARA DEFINIR

global.NomeDoBot = "•𝗠𝗿.Ꮥϋη-bot" //NICK DONO

global.linkgrupss = "https://chat.whatsapp.com" // LINK DO SEU GRUPO DO WHATSAPP

global.prefix = "/" //ALTERAÇÃO DO PREFIXO DO BOT

global.NickDono = "•𝗠𝗿.Ꮥϋη" //NICK DONO

global.websitex = "https://youtube.com/" //SEU CANAL DO YOUTUBE

global.lolhuman = "RelzzAPIs" // NÃO ALTERE AQUI...

global.banChats = false // NÃO ALTERE AQUI...

global.wlcm = [] // NÃO ALTERE AQUI...

global.banChats = false // NÃO ALTERE AQUI...

global.gcrevoke = [] // NÃO ALTERE AQUI...

global.packname = "© Copyright by Paulo" //MARCA D'ÁGUA 

global.packname2 = `https://youtube.com/` //SEU CANAL DO YOUTUBE 

global.author = "Paulo-editor" //SEU NOME AQUI

global.sessionName = "conexão akame" // NÃO ALTERE AQUI...

//=====================================\\
//EMOJIS DO BOT
//TROQUE OS EMOJIS APENAS

akameemoji1 = "🩸"

akameemoji2 = "♦️"

//=====================================\\
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//=====================================\\
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
