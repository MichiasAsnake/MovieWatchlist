
 export function run(){


let movArr

document.querySelector("#search").addEventListener('click',async function(){
     
const movSearch = document.querySelector("#movieSearch").value

const res = await fetch(`https://www.omdbapi.com/?s=${movSearch}&type=Movie&apikey=3c746e2`)
    const data =  await res.json()

   movArr = data.Search
    
     let puppy=""
    for(let movie of movArr)
        {
            const rez = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&type=Movie&apikey=3c746e2`)
            const datatwo =  await rez.json()
        console.log(datatwo)
            puppy +=
        ` 
        <div class="movieInput" style="display:flex;align-items:center;padding:10px">
                <div> 
                <img src="${datatwo.Poster}" style="width:110px;margin:2px 0 0 24px">
                </div>
                <div></div>
                <div style="margin:0px 0 0 21px">
                <text style="font-weight:bold; font-size:18px">${datatwo.Title}</text>
              <i class="fa-solid fa-star" style="color:orange"></i>${datatwo.imdbRating}
                
                <div style="display:flex; gap:10px; font-size:13px"> 
                    <p>${datatwo.Runtime}</p> <p>${datatwo.Genre}</p> <p><i id ="addWatch" class="fa-solid fa-circle-plus" data-add="${datatwo.imdbID}"></i>&nbsp;Watchlist</p>
                </div>
                
                
                 
                <div style="margin:-20px 0 0 0;width:360px;color:grey">
                    <p>${datatwo.Plot}</p> 
                </div> 
                </div>
                </div>
                <hr />
        `}
                document.querySelector("#movies").innerHTML = puppy
             
                })  }
                                      
 export function watch(){  
 let movArray =[]
    let ID          
document.addEventListener('click', async function(e){
   
    if(e.target.dataset.add){
console.log('clicked!')
  
    let html = ""
    const movie = e.target.dataset.add
   const dez = await fetch(`https://www.omdbapi.com/?i=${movie}&type=Movie&apikey=3c746e2`)
            const datathree =  await dez.json()
        
          html +=
         ` 
        <div class="movieInput" style="display:flex;align-items:center;padding:10px">
                <div> 
                <img src="${datathree.Poster}" style="width:110px;margin:2px 0 0 24px">
                </div>
                <div></div>
                <div style="margin:0px 0 0 21px">
                <text style="font-weight:bold; font-size:18px">${datathree.Title}</text>
                <i class="fa-solid fa-star" style="color:orange"></i>${datathree.imdbRating}
              
                <div style="display:flex; gap:10px; font-size:13px"> 
                    <p>${datathree.Runtime}</p> <p>${datathree.Genre}</p> 
                </div>
                <div style="margin:-20px 0 0 0;width:345px;color: grey;">
                    <p>${datathree.Plot}</p> 
                </div> 
                </div>
                </div>
                <hr />
        `
                
        movArray = JSON.parse(localStorage.getItem("movie") || "[]");
        movArray.push(html)
        localStorage.setItem( 'movie' , JSON.stringify(movArray) ) 
                
                }
    
}) 

}       

run()
watch()


//(for watchlist ID) data-minus="${datathree.imdbID}