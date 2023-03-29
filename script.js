import myElementCreator from './tools/myElementCreator.js'

import innerScreenScan from './js/innerScreenScan.js'
import makeRandomLetter from './js/makeRandomLetter.js'
import playAudioOnClick from './js/playAudioOnClick.js'
import winOrLooseOnClick from './js/winOrLooseOnClick.js'

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



function renderLetters(){

    const randomLetter = makeRandomLetter(capsLatinLTLettersArr)

    playAudioOnClick(randomLetter,headerContentWrap)


    // LETTERS
    let contentWrap = myElementCreator('div', 'content-wrap')
    myElementCreator('ul', 'letter-wrap','content-wrap')
    
    capsLatinLTLettersArr.map((oneLetter)=>{
        let oneLetterElm = myElementCreator('li',[oneLetter,'letter'],'letter-wrap')
        oneLetterElm.textContent = oneLetter

       
        oneLetterElm.addEventListener('click',()=>{
            if (randomLetter === oneLetter){
                oneLetterElm.classList.add('hit')
                winScore++
                winElm.textContent = winScore
                let screenBlock = myElementCreator('div','screenBlock')
                let screenBlockImg = myElementCreator('img','screenBlockImg','screenBlock')
                screenBlockImg.src = './img/ryder.png'
                setTimeout(function() {
                    contentWrap.remove()
                    screenBlock.remove()
                    renderLetters()
                }, 2000);
            } else {
                oneLetterElm.classList.add('miss')
                looseScore++
                looseElm.textContent = looseScore
            }
        })
        
    })
}
renderLetters()


//  SCREEN
innerScreenScan()