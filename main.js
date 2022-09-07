const btn=document.querySelector('.switch')
const video=document.querySelector('.container')
const loaded=document.querySelector('.preloader')

window.addEventListener('load',function(){
    loaded.classList.add('no-preloader')
})

btn.addEventListener('click',function(){
if (!btn.classList.contains('slide')) {
    btn.classList.add('slide')
    video.pause()
} else {
    btn.classList.remove('slide')
    video.play()
}
})