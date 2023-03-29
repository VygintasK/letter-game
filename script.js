import myElementCreator from './tools/myElementCreator.js'

import innerScreenScan from './js/innerScreenScan.js'

const allLtLettersArr = ['Aa', 'Ąą', 'Bb', 'Cc', 'Čč', 'Dd', 'Ee', 'Ęę', 'Ėė', 'Ff', 'Gg', 'Hh', 'Ii', 'Įį', 'Yy', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Rr', 'Ss', 'Šš', 'Tt', 'Uu', 'Ųų', 'Ūū', 'Vv', 'Zz', 'Žž']
// const capsLTLettersArr = allLtLettersArr.toString().replace(/[a-ząčęėįšųūž]/g,'').split(',')
const capsLatinLTLettersArr = allLtLettersArr.toString().replace(/[^A-Z]/g,'').split('')
// const capsLatinLTLettersArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z']

// HEADER
let header = myElementCreator('header','header')
let headerContentWrap = myElementCreator('div','headerContentWrap','header')

let winScore=0
let looseScore=0
let ScoreElm = myElementCreator('div','score','headerContentWrap')
let winElm = myElementCreator('span','win','score')
let separatorElm = myElementCreator('span','separator','score')
let looseElm = myElementCreator('span','loose','score')
winElm.textContent = winScore
separatorElm.textContent = '-'
looseElm.textContent = looseScore
winElm.style.color='#66ff00'
looseElm.style.color='red'


let mainTitle = myElementCreator('h2', 'main-title','headerContentWrap')
let soundSVG = myElementCreator('img','soundSVG','headerContentWrap')
mainTitle.textContent='PASPAUSK'
soundSVG.src ='./img/sound.svg'






function renderLetters(lettersArr,randomLetter){
    let contentWrap = myElementCreator('div', 'content-wrap')
    myElementCreator('ul', 'letter-wrap','content-wrap')
    lettersArr.map((letter)=>{
        let oneLetterElm = myElementCreator('li',[letter,'letter'],'letter-wrap')
        oneLetterElm.textContent = letter

        function letterValidation(oneLetterElm,randomLetter,letter){
            oneLetterElm.addEventListener('click',()=>{
                if (randomLetter === letter){
                    oneLetterElm.classList.add('hit')
                    winScore++
                    winElm.textContent = winScore
                    console.log(winScore,looseScore)
                    let screenBlock = myElementCreator('div','screenBlock')
                    let screenBlockImg = myElementCreator('img','screenBlockImg','screenBlock')
                    screenBlockImg.src = './img/ryder.png'
                    setTimeout(function() {
                        contentWrap.remove()
                        audioStorage.remove()
                        screenBlock.remove()
                        renderLetters()
                    }, 2000);
                } else {
                    oneLetterElm.classList.add('miss')
                    looseScore++
                    looseElm.textContent = looseScore
                    console.log(winScore,looseScore)
                }
            })
        }
        letterValidation()



    })

    
}
renderLetters()



// MATH
const randomLetter = capsLatinLTLettersArr[Math.floor(Math.random() * capsLatinLTLettersArr.length)];
console.log('cia:',randomLetter)





// AUDIO
let audioStorage = myElementCreator('div', 'audioStorage')
headerContentWrap.addEventListener('click',()=>{
    audioStorage.innerHTML =``
    let audio = myElementCreator('audio',['letter', `${randomLetter}`],'audioStorage')
    audio.src=`./audioLetter/${randomLetter}.mp3`
    audio.play()
})


renderLetters(capsLatinLTLettersArr)
innerScreenScan()

