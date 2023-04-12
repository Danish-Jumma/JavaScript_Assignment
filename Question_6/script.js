function info(key,val){
    let data = {
        key : val,
    }
    let stringify = (JSON.stringify(data))
    localStorage.setItem(key,val);
}
info('Name','Danish');