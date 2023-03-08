import myElementCreator from './tools/myElementCreator.js'

const allLtLettersArr = ['Aa', 'Ąą', 'Bb', 'Cc', 'Čč', 'Dd', 'Ee', 'Ęę', 'Ėė', 'Ff', 'Gg', 'Hh', 'Ii', 'Įį', 'Yy', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Rr', 'Ss', 'Šš', 'Tt', 'Uu', 'Ųų', 'Ūū', 'Vv', 'Zz', 'Žž']
const capsLTLettersArr = allLtLettersArr.toString().replace(/[a-ząčęėįšųūž]/g,'').split(',')
console.log(capsLTLettersArr)
const capsLatinLTLettersArr = allLtLettersArr.toString().replace(/[^A-Z]/g,'').split('')
console.log(capsLatinLTLettersArr)



myElementCreator('div', 'content-wrap')

let mainTitle = myElementCreator('h1', 'main-title','content-wrap')
mainTitle.textContent='KAJOS RAIDĖS'

let letterWrap = myElementCreator('ul', 'letter-wrap','content-wrap')

capsLatinLTLettersArr.map((element)=>{
    let oneElement = myElementCreator('li',[element,'letter'],'letter-wrap')
    oneElement.textContent = element
    console.log(element)

})

