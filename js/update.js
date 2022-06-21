let idPost = window.location.search.substring(3)
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
console.log(response)

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

    document.getElementById('form-content__title').value = title
    document.getElementById('form-content__content').value = content
    document.getElementById('form-content__tags').value = tags
    document.getElementById('form-content__url').value = urlCoverImage
    document.getElementById('form-content__author').value = author
    document.getElementById('form-content__min').value = minToRead 
    document.getElementById('form-content__avatarAuthor').value = avatarAuthor  

    }
}).catch(err => {
    alert(err.message)
})

let btnUpdate = document.getElementById('updatePost')
btnUpdate.addEventListener('click', () => {

    let today = new Date();
    let createdDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()   

    title = document.getElementById('form-content__title').value
    content = document.getElementById('form-content__content').value
    tags = document.getElementById('form-content__tags').value 
    urlCoverImage = document.getElementById('form-content__url').value 
    author = document.getElementById('form-content__author').value 
    minToRead = document.getElementById('form-content__min').value 
    avatarAuthor = document.getElementById('form-content__avatarAuthor').value  

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
            document.querySelector('#alert__success').classList.remove('d-none')
            setTimeout(() => {
                window.location.href = '/'
            },4000)
            
        }).catch((error) => {
            alert(`No fue posible actualiziar el post ${error}`)
        })
    }
})
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
        window.location.pathname ='/'
    }).catch( err => {
        console.log(err)
        errConection = document.querySelector('.form-content__alert')
        errConection.classList.remove('d-none')
    })
})