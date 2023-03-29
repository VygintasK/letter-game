import myElementCreator from "../tools/myElementCreator.js"

let winScore=0
let looseScore=0
let header = myElementCreator('header','header')
let headerContentWrap = myElementCreator('div','headerContentWrap','header')
let ScoreElm = myElementCreator('div','score','headerContentWrap')
let looseElm = myElementCreator('span','loose','score')
looseElm.textContent = 0
looseElm.style.color='red'

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








export default letterValidation