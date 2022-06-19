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
        <!--Start card-->
        <div class="card">
            <div class="card-header">
                <div class="dev-aside__card-header">
                    <img src="${urlCoverImage}">
                </div>

                <div class="card-header__info d-flex">
                    <div class="card-header__image-user flex-shrink-0">
                        <img src="${avatarAuthor}">
                    </div>
                    <!--Aqui el over despliega ventanita-->
                    <div class="card-header__text flex-grow-1 ms-3">
                        <a href="#">${author}</a>
                        <p>${createdDate}</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <a class="d-flex flex-grow-1 ms-5" href="post.html?id${onePost}">
                    <h2>${title}</h2>
                </a>
                <div class="card-body__tags d-flex flex-grow-1 ms-4">

                    <ul class="nav nav-pills">

                        <li class="nav-item">
                            <a class="btn dev-link__on--orange" href="#"><span>#</span>dfgdg</a>
                        </li>
                       
                    </ul>
                </div>
                <div class="card-body__interactions d-flex justify-content-between">
                    <div class="card-body__heart d-flex justify-content-start">
                        <ul class="nav nav-pills">
                            <li class="nav-item"><a class="nav-link btn p-2 " href="#"><span class="icon icon-heard"></span> 65 reactions</a></li>
                            <li class="nav-item"><a class="nav-link p-2" href="#"><span class="icon icon-message"></span> 20 comments</a></li>
                        </ul>
                    </div>
                    <div class="card-body__save d-flex justify-content-end">
                        <p class="d-flex justify-content-between align-items-center"><span>${minToRead} min read</span><a class="nav-link dev-btn__gray ms-3" href="#">Save</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!--end card-->
        `
        
        document.querySelector("#all__posts").innerHTML = template
        
    }
    
})
.catch (err =>{
    console.log(err)
})