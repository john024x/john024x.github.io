const API = "https://gnews.io/api/v4/top-headlines?token=fbceae1008e3cf9c8c1f606bb16f74bd&lang=en";
fetch("https://gnews.io/api/v4/top-headlines?token=fbceae1008e3cf9c8c1f606bb16f74bd&lang=en")
    .then(res => res.json())
    .then(data => {
        console.log(data.articles);
        let data_articles = data.articles;
        data_articles.forEach(element => {
            console.log('//////////////////');
            console.log(element.title);
            let titulo = element.title
            console.log(element.description);
            let description = element.description;
            console.log(element.url);
            console.log(element.publishedAt);
            console.log(element.source['name']);
            console.log(element.image);
            console.log('//////////////////');
        });
    })
