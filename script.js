import myElementCreator from './tools/myElementCreator.js'

import innerScreenScan from './js/innerScreenScan.js'
import makeRandomLetter from './js/makeRandomLetter.js'
import playAudioOnClick from './js/playAudioOnClick.js'
// import letterClickHandler from './js/letterClickHandler.js'


const allLtLettersArr = ['Aa', 'Ąą', 'Bb', 'Cc', 'Čč', 'Dd', 'Ee', 'Ęę', 'Ėė', 'Ff', 'Gg', 'Hh', 'Ii', 'Įį', 'Yy', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Rr', 'Ss', 'Šš', 'Tt', 'Uu', 'Ųų', 'Ūū', 'Vv', 'Zz', 'Žž']
//removes small and LT
// const capsLTLettersArr = allLtLettersArr.toString().replace(/[a-ząčęėįšųūž]/g,'').split(',')
const capsLatinLTLettersArr = allLtLettersArr.toString().replace(/[^A-Z]/g, '').split('')


// HEADER
myElementCreator('header', 'header')
const headerContentWrap = myElementCreator('div', 'headerContentWrap', 'header')

myElementCreator('div', 'score', 'headerContentWrap')
let winElm = myElementCreator('span', 'win', 'score')
let winScore = 0
winElm.textContent = winScore
winElm.style.color = '#66ff00'
let separatorElm = myElementCreator('span', 'separator', 'score')
separatorElm.textContent = '-'
let looseElm = myElementCreator('span', 'loose', 'score')
let looseScore = 0
looseElm.textContent = looseScore
looseElm.style.color = 'red'

const mainTitle = myElementCreator('h2', 'main-title', 'headerContentWrap')
mainTitle.textContent = 'PASPAUSK'

const soundSVG = myElementCreator('img', 'soundSVG', 'headerContentWrap')
soundSVG.src = './img/sound.svg'


renderLetters()
innerScreenScan()


function renderLetters() {
    const randomLetter = makeRandomLetter(capsLatinLTLettersArr)
    playAudioOnClick(randomLetter, headerContentWrap)

    // LETTERS
    const contentWrap = myElementCreator('div', 'content-wrap')
    myElementCreator('ul', 'letter-wrap', 'content-wrap')

    capsLatinLTLettersArr.forEach((oneLetter) => {
        const oneLetterElm = myElementCreator('li', [oneLetter, 'letter'], 'letter-wrap')
        oneLetterElm.textContent = oneLetter
        const clickHandlerOBJ={
            oneLetterElm,
            randomLetter,
            oneLetter,
            contentWrap
        }
        letterClickHandler(clickHandlerOBJ)
    })
}
function letterClickHandler(clickHandlerOBJ) {
    const {oneLetterElm,randomLetter,oneLetter,contentWrap} = clickHandlerOBJ
    oneLetterElm.addEventListener('click', () => {

        const isCorrect = randomLetter === oneLetter
        winElm.textContent = isCorrect ? ++winScore : winScore;
        looseElm.textContent = isCorrect ? looseScore : ++looseScore;
        oneLetterElm.classList.add(isCorrect ? 'hit' : 'miss')
        if (isCorrect) {
            let screenBlock = myElementCreator('div', 'screenBlock')
            let screenBlockImg = myElementCreator('img', 'screenBlockImg', 'screenBlock')
            screenBlockImg.src = './img/ryder.png'
            setTimeout(() => {
                contentWrap.remove()
                screenBlock.remove()
                renderLetters()
            }, 2000);
        }
    })
}
