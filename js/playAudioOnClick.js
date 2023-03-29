let audio = new Audio()

function playAudioOnClick(randomLetter,headerContentWrap){
    audio.src = `./audioLetter/${randomLetter}.mp3`
    headerContentWrap.addEventListener('click',()=>{
        audio.play()
    })
}
export default playAudioOnClick