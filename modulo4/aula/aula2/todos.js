var minhaPromise = function(){
    return new Promice(function(resolve){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://github.com/users/bielzatorski');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });

    minhaPromise()
    .then(function(response) {
        console.log(response);
    })

    .catch(function(error){
        console.warn(error);
    });

    










}