const apiKey = '328bc6a382e8406986bd4c77b6194c4c'

const blockContainer = document.getElementById('block-container');
const search = document.getElementById('search-input');
const searchbtn = document.getElementById('search-btn');

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
        // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;


    } catch (error) {
        console.error('error fatching random news', error)
        return []
    }
};
////click on search buttton////
searchbtn.addEventListener('click', async () => {
    const query = search.value.trim();
    if (query !== '') {
        try {
            const articles = await fetchnewsquery(query)
            displayBlogs(articles)

        } catch (error) {
            console.log('error fetching news by query', error);


        }
    }

})

async function fetchnewsquery(query){
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;


    } catch (error) {
        console.error('error fatching random news', error)
        return []
    }
}
//////
function displayBlogs(articles) {
    blockContainer.innerHTML = '';
    articles.forEach(article => {
        const newsCards = document.createElement('div');
        newsCards.classList.add('news-cards');

        const img = document.createElement('img')
        img.src = article.urlToImage
        img.alt = article.title

        const title = document.createElement('h2')
        const truncatedTitle = article.title.length > 30 
        ? article.title.slice(0, 30) + '....'
         : article.title;
        title.textContent = truncatedTitle;

        const description = document.createElement('p')
        const truncatedDes = article.title.length > 120
         ? article.title.slice(0, 120) + '....' 
         : article.title;
        title.textContent = truncatedDes;
        description.textContent = article.description

        newsCards.appendChild(img);
        newsCards.appendChild(title);
        newsCards.appendChild(description);
        newsCards.addEventListener('click', () => {
            window.open(article.url, '_blank')
        })
        blockContainer.appendChild(newsCards);

    });

};

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles)


    } catch (error) {
        console.error('error fatching randonnews', error)

    }
})();   