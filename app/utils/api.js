var axios = require('axios'); 

module.exports = {
  fetchPopularRepos: function(language){
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stras&order=desc&type=Respositories');  
     
    return axios.get(encodedURI)
      .then(function(response){
        return response.data.items; 
      })
 }
}

