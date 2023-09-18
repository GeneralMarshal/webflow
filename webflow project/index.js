//database

let articles=[
    {
        order:1,
        Title:"How to choose the best management software",
        articleImage:"./photos/articles/01-article-image.jpg",
        Filter:"Tips",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"John carter",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 18, 2022",
        viewers:25,
    },
    {
        order:2,
        Title:"10 productivity tools that are worth checking out",
        articleImage:"./photos/articles/02-article-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Sophie Moore",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 16, 2022",
        viewers:27,
    },
    {
        order:3,
        Title:"3 tips to avoid internet distraction at work",
        articleImage:"./photos/articles/03-article-image.jpg",
        Filter:"Tips",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"John Carter",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 16, 2022",
        viewers:18,
    },
    {
        order:4,
        Title:"7 great productivity apps for your new ipad",
        articleImage:"./photos/articles/04-article-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"John Carter",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 16, 2022",
        viewers:45,
    },
    {
        order:5,
        Title:"How to create an organized productivity plan for the year",
        articleImage:"./photos/articles/05-article-image.jpg",
        Filter:"Guide",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Marshal Agbi",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 19, 2022",
        viewers:27,
    },
    {
        order:6,
        Title:"How time tracking can improve team project management",
        articleImage:"./photos/articles/06-article-image.jpg",
        Filter:"Guide",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Princess Inlaw",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 19, 2022",
        viewers:29,
    },
    {
        order:7,
        Title:"10 best collaboration software for your team",
        articleImage:"./photos/articles/07-article-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Princess Inlaw",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 19, 2022",
        viewers:25,
    },
    {
        order:8,
        Title:"A complete guide to learn project management",
        articleImage:"./photos/articles/08-article-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Princess Inlaw",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 19, 2022",
        viewers:23 ,
    } 
]

let premuimArticles =[
        {
        order:1,
        Title:"A comprehensive guide on agile development",
        articleImage:"./photos/premium articles/01-premium-image.jpg",
        Filter:"Tips",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"John carter",
        authorImage:"./photos/authors/02-author.jpg",
        date:"june 18, 2022",
        viewers:25,
    },
    {
        order:2,
        Title:"10 productivity tools that are worth checking out",
        articleImage:"./photos/premium articles/02-premium-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"Sophie Moore",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 16, 2022",
        viewers:27,
    },
    {
        order:3,
        Title:"Top 7 must have management tools for productivity",
        articleImage:"./photos/premium articles/03-premium-image.jpg",
        Filter:"Resources",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
        authorName:"John Carter",
        authorImage:"./photos/authors/01-author.jpg",
        date:"june 16, 2022",
        viewers:18,
    },
    // {
    //     order:4,
    //     Title:"7 great productivity apps for your new ipad",
    //     articleImage:"./photos/premium articles/04-premium-image.jpg",
    //     Filter:"Resources",
    //     description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eosexpedita,accusantium modi?",
    //     authorName:"John Carter",
    //     authorImage:"./photos/authors/01-author.jpg",
    //     date:"june 16, 2022",
    //     viewers:45,
    // },
]
function displayArticles(article){
let displayMenu = article.map(function (item){

    return`
                <div class="latest">
                    <div class="articles-images">
                        <img src=${item.articleImage} alt="article-image">
                    </div>
                    <div class="latest-articles ">
                        <h2>${item.Filter}</h2>
                        <h3>${item.Title}</h3>
                        <p class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reprehenderit pariatur eos
                            expedita,accusantium modi?</p>
                        <div class="publish">
                            <div class="author">
                                <div class="author-image">
                                    <img src=${item.authorImage} alt="author-image">
                                </div>
                                <p>${item.authorName}</p>
                            </div>
                            <div class="publish-time">
                                <p><i class="fa-regular fa-clock"></i></p>
                                <p>${item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
    `
})
    articlesContainer.innerHTML = ` <h2 class="block">Latest Articles</h2>` +   displayMenu.join()

}

function latestArticles(){
    if(articles.length > 4){
        for(i = articles.length-4; i < articles.length; i++){
        latestMenu.push(articles[i])
        }
    }
    else {latestMenu = articles}
}
function popularArticles(){
    articles.sort(  function(a,b){
        return b.viewers - a.viewers
    })

    articles =  articles.slice(0,3)

    let popularMenu = articles.map(function(item){
        return ` <div class="popular-articles">
                        <div class="popular-image ">
                            <img src=${item.articleImage}
                            alt="img">
                        </div>
                        <div class="popular-text ">
                            <h3>
                                ${item.Title}
                            </h3>
                        </div>
                    </div>`
    })
    popularArticlesContainer.innerHTML = popularMenu.join("")
}




const invisibleMenu= document.querySelector(".invisible.menu")
const nav = document.querySelector(".nav")
const logMenu = document.querySelector(".log-menu")
const log = document.querySelector(".log")
const suscribeBtn = document.querySelector(".suscribe-btn")
const get = document.querySelectorAll(".get")



let articlesContainer = document.querySelector(".articles-container")
let popularArticlesContainer = document.querySelector(".popular-container")
let premiumContent = document.querySelector(".premium-content")
let latestMenu = []



invisibleMenu.addEventListener("click", function(){
    nav.classList.toggle("toggle")
})
log.addEventListener("click", function(){
    logMenu.classList.toggle("show-log-menu")

    setTimeout(function () {
    
        logMenu.classList.remove("show-log-menu");
    }, 5000)

})


window.addEventListener("DOMContentLoaded",function(){
    latestArticles()
    displayArticles(latestMenu)
    popularArticles()
    
})


