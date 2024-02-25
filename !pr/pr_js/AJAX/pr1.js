 fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
     .then((response) => { console.log(response); return response.json(); })
     .then((commits) => {
         console.log(commits);
         alert(commits[0].author.login)
     });