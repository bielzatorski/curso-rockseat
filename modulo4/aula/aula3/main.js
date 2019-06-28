axios.get('https://github.com/users/bielzatorski')
.then(function(response) {
    console.log(response);
})

.catch(function(error) {
    console.warm(error);
})