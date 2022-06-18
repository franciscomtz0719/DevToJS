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