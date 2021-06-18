export const createnode = (article) =>{
  let div = document.createElement('div');
  let img = document.createElement('img');
  let div1 = document.createElement('div');
  let p = document.createElement('p');
  let p1 = document.createElement('p');
  let hr = document.createElement('hr');
  let p2 = document.createElement('p');
  let hr1 = document.createElement('hr');
  let p3 = document.createElement('p');
  let p4 = document.createElement('a');
  let parend = document.getElementById('news-container')
  let publish_date = new Date(article.publishedAt);
  let today =  new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();
  
  today = month + '/' + day + '/' + year;
  
  div.classList.add('news-card');
  img.src = article.urlToImage;
  div1.classList.add('news_text-container');
  p.classList.add('news-source-name');
  p.textContent = article.source.name;
  p1.classList.add('news-title');
  p1.textContent = article.title;
  p2.classList.add('news-description')
  p2.textContent = article.description.substring(100,length);
  p4.setAttribute('target', '_blank');
  p4.textContent = 'view more...';
  p4.href = article.url;
  p3.classList.add('news-date')
  p3.textContent = publish_date - today;
  
  div.appendChild(img);
  div1.appendChild(p);
  div1.appendChild(p1);
  div1.appendChild(hr);
  div1.appendChild(p2);
  div1.appendChild(p4);
  div1.appendChild(hr1);
  div1.appendChild(p3)
  div.appendChild(div1);
  parend.appendChild(div);
}