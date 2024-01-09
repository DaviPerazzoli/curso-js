const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt)=>{
    // window.location='../82/index.html'
    // window.location.replace('https://www.google.com') //* Deleta a corrente do historico
    // window.location.assign('https://www.google.com') 
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    console.log(window.history.length)
    // window.history.go(1)
    window.location.assign(url.value)
})