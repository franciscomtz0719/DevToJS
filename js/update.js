

/**
 * let post = {
    title: 'titulo del post',
    content: 'contenido del post ....',
    tags: 'lorem, lorem, lorem',
    urlCoverImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--f9PeJcAd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/52ohyn4pzhpehxxq2s55.jpg',
    author: 'Cris',
    createdDate: '2022-06-16',
    mintoread: 3,
    avatarAuthor: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3xRt7osW--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/395121/4dd73e99-88c7-4886-b485-cd246beaaf92.jpg'
}
*/

let idPost = window.location.search.substring(10)
console.log (idPost)

//TODO: trial object with full structure to update

fetch(`https://devto-9a074-default-rtdb.firebaseio.com/post/${idPost}.json`)
.then (response => {
//* validates if the conection with firebase is ok
    if (!response.ok){
        throw new Error (`Algo anda mal! status: ${response.status} type: ${response.type}`)
//* if ok then return the response json object
    }else{
        return response.json()
    }
})
.then ((response) => {
//! validate if the response is not an empty object

if (!response){
    alert('Error: Tienes campos vacíos por llenar')
}else{


    let {title, 
        content, 
        tags, 
        urlCoverImage, 
        author, 
        createdDate, 
        minToRead, 
        avatarAuthor
    } = response  

    document.getElementById('form__update-title').value = title
    document.getElementById('form__update-content').value = content
    document.getElementById('form__update-tags').value = tags
    document.getElementById('form__update-urlCoverImage').value = urlCoverImage
    document.getElementById('form__update-author').value = author
    document.getElementById('form__update-mintoRead').value = minToRead
    document.getElementById('form__update-avatar-author').value = avatarAuthor 

    }
}).catch(err => {
    alert(err.message)
})

let btnUpdate = document.getElementById('updatePost')
btnUpdate.addEventListener('click', () => {

    let today = new Date();
    let createdDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()   

    title = document.getElementById('form__update-title').value
    content = document.getElementById('form__update-content').value
    tags = document.getElementById('form__update-tags').value 
    urlCoverImage = document.getElementById('form__update-urlCoverImage').value 
    author = document.getElementById('form__update-author').value 
    minToRead = document.getElementById('form__update-mintoRead').value 
    avatarAuthor = document.getElementById('form__update-avatar-author').value  

    if(
        title === '' ||
        content === '' ||
        tags === '' ||
        urlCoverImage === '' ||
        author === '' ||
        minToRead === ''||
        avatarAuthor === ''
    ){
        alert('It looks you left some empty spaces')
    } else {
        let updatedPost = {
            title: title,
            content: content,
            tags: tags,
            urlCoverImage: urlCoverImage,
            author: author,
            createdDate: createdDate,
            minToRead: minToRead,
            avatarAuthor: avatarAuthor 
        }

        fetch(`https://devto-9a074-default-rtdb.firebaseio.com/post/${idPost}.json`,{
            method: 'PATCH',
            body: JSON.stringify(updatedPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            return response.json()
        }) 
        .then((response) => {
            alert(`El post ${response.title} con el id ${idPost} ha sido actualizado`)
        }).catch((error) => {
            alert(`No fue posible actualiziar el post ${error}`)
        })
    }
})
git 
let btnDelete = document.getElementById('deletePost')
btnDelete.addEventListener('click', () => {

    fetch(`https://devto-9a074-default-rtdb.firebaseio.com/post/${idPost}.json`, {
        method: 'DELETE'
    })
    .then (response => {       
      // comprobamos que el estatus de la respuesta es falso
    if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
        throw err
    } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json()
    }
    })
    .then((response) => {
        console.log(response) 
        winndow.location.pathname = '/index.html'
    }).catch( err => {
        console.log(err)
    })
})