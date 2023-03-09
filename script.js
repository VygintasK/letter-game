import myElementCreator from './tools/myElementCreator.js'




const allLtLettersArr = ['Aa', 'Ąą', 'Bb', 'Cc', 'Čč', 'Dd', 'Ee', 'Ęę', 'Ėė', 'Ff', 'Gg', 'Hh', 'Ii', 'Įį', 'Yy', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Rr', 'Ss', 'Šš', 'Tt', 'Uu', 'Ųų', 'Ūū', 'Vv', 'Zz', 'Žž']
// const capsLTLettersArr = allLtLettersArr.toString().replace(/[a-ząčęėįšųūž]/g,'').split(',')
// const capsLatinLTLettersArr = allLtLettersArr.toString().replace(/[^A-Z]/g,'').split('')
const capsLatinLTLettersArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z']

let header = myElementCreator('header','header')

let headerContentWrap = myElementCreator('div','headerContentWrap','header')

let mainTitle = myElementCreator('h2', 'main-title','headerContentWrap')
mainTitle.textContent='PASPAUSK'

let soundSVG = myElementCreator('img','soundSVG','headerContentWrap')
soundSVG.src ='./sound.svg'


const randomLetter = capsLatinLTLettersArr[Math.floor(Math.random() * capsLatinLTLettersArr.length)];
console.log('cia:',randomLetter)



let audioStorage = myElementCreator('div', 'audioStorage')

headerContentWrap.addEventListener('click',()=>{
    audioStorage.innerHTML =``
    let audio = myElementCreator('audio','letterA','audioStorage')
    audio.src=`./audioLetter/${randomLetter}.mp3`
    audio.play()
})

myElementCreator('div', 'content-wrap')
myElementCreator('ul', 'letter-wrap','content-wrap')


capsLatinLTLettersArr.map((letter)=>{
    let oneLetter = myElementCreator('li',[letter,'letter'],'letter-wrap')
    oneLetter.textContent = letter

    oneLetter.addEventListener('click',()=>{
        console.log('click '+ letter)

        if (randomLetter === letter){
            console.log('hit')
            oneLetter.classList.add('hit')
        } else {
            console.log('miss')
            oneLetter.classList.add('miss')
        }
    })
})

let test = myElementCreator('button','button')
test.textContent='scan viewport'
test.addEventListener('click',()=>{
    console.log(document.defaultView.window.screen.height,'x',document.defaultView.window.screen.width)
    alert('Ekrano dydis:'+document.defaultView.window.screen.width+'x'+document.defaultView.window.screen.height)
})
