function info(key,val){
    let data = {
        key : val,
    }
    let stringify = (JSON.stringify(data))
    localStorage.setItem('Data',data);
    console.log(localStorage.getItem(key));
}
info('Name','Danish');