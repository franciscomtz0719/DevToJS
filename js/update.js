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

    document.getElementById(/**title*/).value = title
    document.getElementById(/**content*/).value = content
    document.getElementById(/**tags*/).value = tags
    document.getElementById(/**urlCoverImage*/).value = urlCoverImage
    document.getElementById(/**author*/).value = author
    document.getElementById(/**createDate*/).value = createdDate
    document.getElementById(/**minToRead*/).value = minToRead
    document.getElementById(/**avatarAuthor*/).value = avatarAuthor 


}
})