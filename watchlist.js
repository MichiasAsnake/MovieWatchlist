import {run} from './index.js'
import {watch} from './index.js'

let clickedmovies = [] 
              
const cat = JSON.parse(localStorage.getItem('movie'))
clickedmovies.push(cat)

document.querySelector('#moviesToo').innerHTML = clickedmovies

document.querySelector("#clearWatch").addEventListener('click', function(){
    
       localStorage.removeItem('movie') || "[]";
      window.location.reload()
    
})

console.log(clickedmovies)
