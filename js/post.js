<<<<<<< HEAD
let idpost = window.location.search.substring(3)
console.log(idpost)

fetch(`https://devto-9a074-default-rtdb.firebaseio.com/post/${idpost}.json`)
  .then(response => {
    // console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
      return response.json()
    }
  })
    .then((post) => {
      console.log(post)

      let {author, avatarAuthor, content, createdDate, minToRead, tags, title, urlCoverImage} = post
      templateHeader = ""      
        templateHeader =  `
            <div >
                <img class="dev-main__image"src="${urlCoverImage}" alt="foto principal">
            </div>
            <div class="dev-main__usuario">
                <div class="dev-main__usuario">
                    <img src="${avatarAuthor}" alt="foto usuario">
                </div>
                <a href="#"><strong>${author}</strong> </a>
                <p class="fs__xs">${createdDate}</p>
            </div>
            `       
        document.querySelector(".dev-main__header-post").innerHTML = templateHeader

        templateBody = ""      
        templateBody =  `
        <div class="container" >
        <h1>${title}</h1>
        <ul class="nav nav-pills">
            
            <li><a href="#" class="btn btn-sm  dev-link__on--green"><span>#</span>${tags}</a></li>
            <li><a href="#" class="btn btn-sm  dev-link__on--green"><span>#</span>${tags}</a></li>
            <li><a href="#" class="btn btn-sm  dev-link__on--green"><span>#</span>${tags}</a></li>
            <li><a href="#" class="btn btn-sm  dev-link__on--green"><span>#</span>${tags}</a></li>
     
        </ul>
        <div><p> ${content}<p></div>
        
            `       
        document.querySelector(".dev-main__body-post").innerHTML = templateBody
      
    })
    .catch((err) => {
      console.log(err)
  
    })
=======
let bntPost = document.getElementById('sendPost')
bntPost.addEventListener('click', () => {

    
    
    title = document.getElementById('form__title').value
    content = document.getElementById('form__content').value
    tags = document.getElementById('form__tags').value 
    urlCoverImage = document.getElementById('form__urlCoverImage').value 
    author = document.getElementById('form__author').value 
    minToRead = document.getElementById('form__mintoRead').value 
    avatarAuthor = document.getElementById('form__avatar-author').value  
    
    let today = new Date();
    let createdDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()   
    
    if(
        title === '' ||
        content === '' ||
        tags === '' ||
        urlCoverImage === '' ||
        author === '' ||
        createdDate === '' ||
        minToRead === ''||
        avatarAuthor === ''
        ){
            alert('Please fill all required fields')
        }else{ 
            let newPost = {
                title: title,
                content: content,
                tags: tags,
                urlCoverImage: urlCoverImage,
                author: author,
                createdDate: createdDate,
                minToRead: minToRead,
                avatarAuthor: avatarAuthor    
            }

    fetch( 'https://devto-9a074-default-rtdb.firebaseio.com/post/.json', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        } 
    })
    .then(( response)=> {
        return response.json()
    })
    .then( (finalResponse) => {
    console.log(finalResponse)
    
    })
    .catch( (err) => {
        console.log(err)
    })
        
}

})
>>>>>>> 2056e33e8ef260ef751daea93891ed0f6cff0f0e
