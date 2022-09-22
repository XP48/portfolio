let API_key = "mQsvyPbHl1tdGM31XDUxhiKexgZe92DR"

document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("go").addEventListener("click", ev => {
            ev.preventDefault();
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_key}&limit=10&q=`;
            let valeur = document.getElementById("search").value.trim();
            url = url.concat(valeur);
            fetch(url)
            .then((response)=> {
                return response.json();
            })
            .then((content) => {
                console.log(content.data);
                console.log("META", content.meta);
                
                for (let num = 0; num < 10; num++){
                    let result = content.data[num].images.downsized.url;
                    document.getElementById(num).src = `${result}`;
                }
                
                document.getElementById("go").value = "";
            })
            .catch(err => {
            console.error(err);
            });
        });
      }