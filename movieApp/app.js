const input = document.querySelector(".input");

input.addEventListener("click",function(){
    fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
        // let result = `<div>
        // <h1>Pic : ${data[0]["show"].name}</h1>
        // <h1>Name : ${data.name}</h1>
        // </div>`
        // let movieContainer = document.querySelector(".movieContainer")
        // movieContainer.innerHTML = result  
       
        data.map((item)=>{
            console.log(item)
            const x = item.show.name;
            const date = item.show.premiered;
            const genres = item.show.genres;
            const language = item.show.language;
            const image = item.show.image.original;
            const summary = item.show.summary;
            // console.log(name)
            const movie = `<div>${x}</div>
            <div>${date}</div>
            <div>${genres}</div>
            <div>${language}</div>
            <div><img src="${image}" alt="" ></div>
            <div>${summary}</div> `
            let movieContainer = document.querySelector(".movieContainer")
             movieContainer.innerHTML  =  movie;
            
        })       
              
          }).catch(error => alert("Invalid  Name"))
      });
        
        
       


