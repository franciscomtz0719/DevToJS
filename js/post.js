let idpost = window.location.search.substring(8)
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
      templateCover=""
        templateCover =`<a href="" class="devpost-story__cover__image__feed">
        <img class="devpost-story__cover__image__feed" src="${urlCoverImage}" alt="" width="650" height="275" >
    </a>
        
        `
        document.querySelector(".devpost-article__cover").innerHTML = templateCover
      templateHeader = ""      
        templateHeader =  `
        <div class="devpost-story__author-pic">
        <a href="" class="devpost-avatar">
            <img src="${avatarAuthor}" alt="" class="devpost-avatar__image">
        </a>
        
        </div>
        <div>
            <div><button class="devpost-story__secundary fw-medium m:hidden" href="">${author}</button></div>
            <div>${createdDate}</div>
        </div>
            `       
        document.querySelector(".devpost-story__meta").innerHTML = templateHeader

        templateBody = ""      
        templateBody =  `
            <h3 class="devpost-story__title">${title} </h3>
            <div class="devpost-story__tags">
                <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
                <a href="" class="devpost-tag"> <span class="devpost-tag__prefix">#</span> javascript</a>
            </div>
            <div class="devpost-story__bottom">
            <div class="devpost-sory__details">                                                
            </div>
            <div class="devpost-story__body">
                <p> ${content}</p>
            </div>        
            `       
        document.querySelector(".devpost-story__detail").innerHTML = templateBody
      
    })
    .catch((err) => {
      console.log(err)
  
    })
// //=======
// let bntPost = document.getElementById('sendPost')
// bntPost.addEventListener('click', () => {

    
    
//     title = document.getElementById('form__title').value
//     content = document.getElementById('form__content').value
//     tags = document.getElementById('form__tags').value 
//     urlCoverImage = document.getElementById('form__urlCoverImage').value 
//     author = document.getElementById('form__author').value 
//     minToRead = document.getElementById('form__mintoRead').value 
//     avatarAuthor = document.getElementById('form__avatar-author').value  
    
//     let today = new Date();
//     let createdDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()   
    
//     if(
//         title === '' ||
//         content === '' ||
//         tags === '' ||
//         urlCoverImage === '' ||
//         author === '' ||
//         createdDate === '' ||
//         minToRead === ''||
//         avatarAuthor === ''
//         ){
//             alert('Please fill all required fields')
//         }else{ 
//             let newPost = {
//                 title: title,
//                 content: content,
//                 tags: tags,
//                 urlCoverImage: urlCoverImage,
//                 author: author,
//                 createdDate: createdDate,
//                 minToRead: minToRead,
//                 avatarAuthor: avatarAuthor    
//             }

//     fetch( 'https://devto-9a074-default-rtdb.firebaseio.com/post/.json', {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         } 
//     })
//     .then(( response)=> {
//         return response.json()
//     })
//     .then( (finalResponse) => {
//     console.log(finalResponse)
    
//     })
//     .catch( (err) => {
//         console.log(err)
//     })
        
// }

// })

