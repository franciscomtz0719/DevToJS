fetch("https://devto-9a074-default-rtdb.firebaseio.com/post/.json")
.then(response => {
    // convierte la respuesta a JSON
    // console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status}${response.statusText}${response.type}`)
    } else {
    return response.json()
  }
})
.then((posts)=> {
    // console.log(posts)
    let template =""
    for(onePost in posts){
        let {author, avatarAuthor, content, createdDate, minToRead, tags, title, urlCoverImage} = posts[onePost]
        template += `
        <!-- start post -->
        <article class="devpost-story cursor-pointer devpost-story--featured ">
            <!-- article cover -->
            <div class="devpost-article__cover devpost-story__cover__image__feed">
                <a href="" class="devpost-story__cover__image__feed">
                    <img class="devpost-story__cover__image__feed" src="${urlCoverImage}" alt="" width="650" height="275" >
                </a>
            </div>
            <div class="devpost-story__body">
                <!-- article top  -->
                <div class="devpost-story__top">
                    <div class="devpost-story__meta">
                        <div class="devpost-story__author-pic">
                            <a href="" class="devpost-avatar">
                                <img src="${avatarAuthor}" alt="" class="devpost-avatar__image">
                            </a>
                            
                        </div>
                        <div>
                            <div><button class="devpost-story__secundary fw-medium m:hidden" href="">${author}</button></div>
                            <div>${createdDate}</div>
                        </div>
                    </div>
                    
                </div>
                <!-- article detail -->
                <div class="devpost-story__detail">
                    <h3 class="devpost-story__title"><a href="/post.html?idPost=${onePost}">${title}</a> </h3>
                    <div class="devpost-story__tags">
                        <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                        <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                        <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                        <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                    </div>
                    <div class="devpost-story__bottom">
                        <div class="devpost-sory__details">
                            <a class="dev-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left" href="">
                                <svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                </path>
                                </svg>
                                <span title="Number of reactions">81<span class="hidden s:inline">&nbsp;Reactions</span></span>
                            </a>
                            <a class="crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left" href="">
                                <svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                </path>
                                </svg>
                                <span title="Number of comments">5<span class="hidden s:inline">&nbsp;Comments</span></span>
                            </a>
                        </div>
                        <div class="devpost-story__save">
                            <small class="devpost-story__tertiary mr-2">${minToRead} to min to read</small>
                            <button class="btn dev-btn__gray">save</button>
                        </div>

                    </div>
                </div>
            </div>
        </article>
        <!-- end post -->
        `
        
       document.querySelector(".all__posts").innerHTML = template
        
    }
    
})
.catch (err =>{
    console.log(err)
})