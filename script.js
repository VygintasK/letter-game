import myElementCreator from './tools/myElementCreator.js'

const allLtLettersArr = ['Aa', 'Ąą', 'Bb', 'Cc', 'Čč', 'Dd', 'Ee', 'Ęę', 'Ėė', 'Ff', 'Gg', 'Hh', 'Ii', 'Įį', 'Yy', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Rr', 'Ss', 'Šš', 'Tt', 'Uu', 'Ųų', 'Ūū', 'Vv', 'Zz', 'Žž']
const capsLTLettersArr = allLtLettersArr.toString().replace(/[a-ząčęėįšųūž]/g,'').split(',')
const capsLatinLTLettersArr = allLtLettersArr.toString().replace(/[^A-Z]/g,'').split('')


myElementCreator('div', 'content-wrap')

let mainTitle = myElementCreator('h1', 'main-title','content-wrap')
mainTitle.textContent='KAJOS RAIDĖS'

myElementCreator('ul', 'letter-wrap','content-wrap')




mainTitle.addEventListener('click',()=>{
    let audio = myElementCreator('audio','letterA')
    audio.src='./audioLetter/A.mp3'
    audio.play()
})







const randomLetter = capsLatinLTLettersArr[Math.floor(Math.random() * capsLatinLTLettersArr.length)];
console.log('cia:',randomLetter)

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

