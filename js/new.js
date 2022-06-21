

let bntPost = document.getElementById('publishPost')
bntPost.addEventListener('click', () => {

    title = document.getElementById('form-content__title').value
    content = document.getElementById('form-content__content').value
    tags = document.getElementById('form-content__tags').value 
    urlCoverImage = document.getElementById('form-content__url').value 
    author = document.getElementById('form-content__author').value 
    minToRead = document.getElementById('form-content__min').value 
    avatarAuthor = document.getElementById('form-content__avatarAuthor').value  
    
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
            alert('Please fill all fields are required ')
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
        alert(`el post con el tituo ${title} ha sido creado`  )
    console.log(finalResponse)
    
    })
    .catch( (err) => {
        console.log(err)
       errConection = document.querySelector('.form-content__alert')
       errConection.classList.remove('d-none')

    })
        
}

})
