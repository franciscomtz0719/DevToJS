fetch("https://devto-9a074-default-rtdb.firebaseio.com/post/.json")
.then(response => {
    // convierte la respuesta a JSON
    console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status}${response.statusText}${response.type}`)
   } else {
      return response.json()
  }
})
.then((posts)=> {
   
   arrPost = Object.entries(posts).reverse()
   console.log(arrPost)
   objPost = Object.fromEntries(arrPost)
   console.log(objPost)

   let template =""
   let contador = 0
   for(onePost in objPost){

         console.log(onePost)
      let {author, avatarAuthor, content, createdDate, minToRead, tags, title, urlCoverImage} = posts[onePost]
         contador += 1
         console.log(contador)
         console.log(tags)

         if (contador === 1){

            template += `
            <!--Start card-->
            <div class="card card-body"> 
            <section class="container">
               <div class="row">
                  <div class="col-12 col-lg-12">
                     <div class="cover-container">
                        <img class="cover-container__image" src="${urlCoverImage}" alt="">
                     </div>
                     <div class="d-inline-flex">
                        <img src="${avatarAuthor}" alt="image user profile" height="50px"
                           style="border-radius: 360px; display: inline-flex;">
                        <div>
                           <h6 class="m-0 ms-2">${author}</h6>
                           <p class="m-0 ms-2">${createdDate}</p>
                        </div>
                     </div>
                     <div class="ps-5 ms-2">
                        <h3> <a class="card__tittle" href="post.html?id${onePost}" target="_blank">${title}</a></h3>
                        <div>
                           <a class="card__green-bg" href="">#discuss</a>
                           <a href="">#beginners</a>
                           <a href="">#programming</a>
                           <a href="">#computerscience</a>
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                              </div>
                              <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <button class="card__save-button">Save</button>
                              </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div> 
            <!--end card-->
            `    
         } else{

            template += `
            <!--Start card-->
            <div class="card card-body"> 
            <section class="container">
               <div class="row">
                  <div class="col-12 col-lg-12">
                     <div class="d-inline-flex">
                        <img src="${avatarAuthor}" alt="image user profile" height="50px"
                           style="border-radius: 360px; display: inline-flex;">
                        <div>
                           <h6 class="m-0 ms-2">${author}</h6>
                           <p class="m-0 ms-2">${createdDate}</p>
                        </div>
                     </div>
                     <div class="ps-5 ms-2">
                        <h3> <a class="card__tittle" href="post.html?id${onePost}" target="_blank">${title}</a></h3>
                        <div>
                           <a class="card__green-bg" href="">#discuss</a>
                           <a href="">#beginners</a>
                           <a href="">#programming</a>
                           <a href="">#computerscience</a>
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                               </div>
                               <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <button class="card__save-button">Save</button>
                               </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div> 
            <!--end card-->
            ` 

         }


       
        
        document.getElementById("relevant").innerHTML = template
        
    }
    
})
.catch (err =>{
    console.log(err)
})