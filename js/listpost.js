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
         let arrTags = tags.split('#')
         console.log(arrTags)

         function cleanArray(actual) {
            let newArray = new Array();
            for (let i = 0; i < actual.length; i++) {
               if (actual[i]) {
                  newArray.push(actual[i])
               }
            }
            return newArray
         }
          
         let cleanTagArr= cleanArray(arrTags)
         console.log(cleanTagArr)

         if (contador === 1){

            template += `
            <!--Start card-->
            <div class="card card-body"> 
            <section class="container">
               <div class="row">
                  <div class="col-12 col-lg-12">
                     <div class="cover-container">
                     <a href="/post.html?id${onePost}"><img class="cover-container__image" src="${urlCoverImage}" alt=""></a>  
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
                           <a class="card__green-bg" href="">${cleanTagArr[0] === undefined ? '' : '#' + cleanTagArr[0]}</a>
                           <a href="">${cleanTagArr[1] === undefined ? '' : '#' + cleanTagArr[1]}</a>
                           <a href="">${cleanTagArr[2] === undefined ? '' : '#' + cleanTagArr[2]}</a>
                           <a href="">${cleanTagArr[3] === undefined ? '' : '#' + cleanTagArr[3]}</a>
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                              </div>
                              <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <a type="button" href="update.html?id${onePost}" class="card__save-button text-center me-0" >Edit</a>
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
                           <a class="card__green-bg" href="">${cleanTagArr[0] === undefined ? '' : '#' + cleanTagArr[0]}</a>
                           <a href="">${cleanTagArr[1] === undefined ? '' : '#' + cleanTagArr[1]}</a>
                           <a href="">${cleanTagArr[2] === undefined ? '' : '#' + cleanTagArr[2]}</a>
                           <a href="">${cleanTagArr[3] === undefined ? '' : '#' + cleanTagArr[3]}</a>
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                               </div>
                               <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <a type="button" href="update.html?id${onePost}" class="card__save-button text-center me-0">Edit</a>
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
