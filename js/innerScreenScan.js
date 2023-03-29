import myElementCreator from "../tools/myElementCreator.js"

function innerScreenScan(){
    let innerScreen = myElementCreator('button','button')
    innerScreen.textContent='scan viewport'
    innerScreen.addEventListener('click',()=>{
        let {innerWidth,innerHeight} = document.defaultView.window
        console.log(innerWidth,'x',innerHeight)
        alert('Ekrano dydis:'+innerWidth+'x'+innerHeight)
    })
}
export default innerScreenScan