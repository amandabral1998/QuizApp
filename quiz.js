const form = document.getElementById('onClicker')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const name = {...e.target}[0].value

    if(name== "") {
        alert('Enter your Name First')
    }
else {

    localStorage.setItem('player', name)
}
})