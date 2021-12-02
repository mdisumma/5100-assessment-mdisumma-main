let response = await fetch('mydomain.com/currentTime/Dave').data
if(response){
    let body = document.querySelector('body')
    body.innerHTML = `Hi ${response.name}, the current time is ${response.currentTime}`
}