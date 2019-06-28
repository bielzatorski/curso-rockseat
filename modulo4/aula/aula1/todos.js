var xhr = new XMLHttpRequest();

xhr.open('GET' , 'https://github.com/users/bielzatorski')
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseTEXT));
    }
}