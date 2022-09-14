//Carregar interface / animação

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo_header')
let logoSpan = document.querySelectorAll('.logo')


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
    })

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    }, 2000)

    setTimeout(() =>{
        intro.style.top = "-100vh";
    }, 2300)
    

})

//SDK spotify

window.onSPotifyWebPlaybackSDKReady = () =>{
    const token =' BQBZoHTFwteYso3GlJjJefTNQn1aEzreZStOFDxhJS0PJ0-VF83lKHjVHwZ--IoEysBbbeytGVgM5RUQDpPYOkKrh9SBRi9W7iC58GI04jr6QXwDffFDWT2AMqpO4AQZtL2qhjq_sjHLPg0KxUgHP9ZzdC1WB2R9kaaQZNhs134gtws6CWvAfk1GHhSOsAT51Xq6V7GbGQylglmSwIxlGJk'

    const player = new Spotify.Player({
        getOAuthToken: cb => { cb(token);},
        volume: 0.5
    })

    player.addListener('ready', ({device_id}) =>{
        console.log('[+]Emparelhado com novo id : ', device_id )
    })

    player.addListener('not_ready', ({device_id}) =>{
        console.log("[-]Dispositivo desconectado!")
    })
    player.connect();
}