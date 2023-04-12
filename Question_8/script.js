
function info (){
    let name = prompt('Enter your name');
    let nameCtiy = prompt('Enter your city');
    let profession = prompt('Enter your occupation');
    let obj = {
        Name : name,
        City : nameCtiy,
        Occupation : profession
    }
    let string = JSON.stringify(obj);
    localStorage.setItem('Data',string)
}
info();