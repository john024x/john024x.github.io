import {createnode} from './functions/createnode.js'
import {fetchdata} from './functions/api.js'

let button = document.getElementById('btn-reload');
let i = 0;
let n = 1;
let parend = document.getElementById('news-container');
var datas = []
fetchdata().then((data) => {
  datas = data.articles.map(article =>{
    if(i < n){
        createnode(article);
        i++
      }
      })
  })

button.addEventListener('click', () =>{
  n += 3
  call_data();
})

const call_data = () =>{
  parend.innerHTML = '';
  fetchdata().then((data) => {
  let newData = data.articles.map(article =>{
    if(i < n){
        createnode(article)
        i++
      }
      })
    })
}

  
 
