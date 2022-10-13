const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function generatePost() {

    // create new article to contain new content
    let article = document.createElement('article')
    document.body.appendChild(article) 

    // post-header container div
    let postHeader = document.createElement('div')
    postHeader.classList.add('post-header')
    article.appendChild(postHeader) 

    // avatar image to represent the poster
    let posterAvatar = document.createElement('img')
    posterAvatar.classList.add('poster-avatar')
    posterAvatar.src = "images/avatar-vangogh.jpg"
    postHeader.appendChild(posterAvatar)

    // div to contain poster details
    let posterDetails = document.createElement('div')
    posterDetails.classList.add('poster-details')
    postHeader.appendChild(posterDetails)

    // name of the person posting the post
    let posterName = document.createElement('div')
    posterName.classList.add('poster-name')
    posterName.classList.add('emphasize')
    posterName.textContent = 'Vincent Van Gogh'
    posterDetails.appendChild(posterName)

    // location of the poster posting the post
    let posterLocation = document.createElement('div')
    posterLocation.classList.add('poster-location')
    posterLocation.textContent = 'Zudert, Netherlands'
    posterDetails.appendChild(posterLocation)

    // main post image
    let postImg = document.createElement('img')
    postImg.classList.add('post-img')
    postImg.src = 'images/post-vangogh.jpg'
    article.appendChild(postImg)

    // footer container for action buttons and comments and all that
    let postFooter = document.createElement('div')
    postFooter.classList.add('post-footer')
    article.appendChild(postFooter)

    // action buttons div
    let postActions = document.createElement('div')
    postActions.classList.add('post-actions')
    postFooter.appendChild(postActions)

    // heart icon
    let heartIcon = document.createElement('img')
    heartIcon.classList.add('action-icon')
    heartIcon.src = 'images/icon-heart.png'
    postActions.appendChild(heartIcon)

    // comment icon
    let commentIcon = document.createElement('img')
    commentIcon.classList.add('action-icon')
    commentIcon.src = 'images/icon-comment.png'
    postActions.appendChild(commentIcon)

    // share icon
    let shareIcon = document.createElement('img')
    shareIcon.classList.add('action-icon')
    shareIcon.src = 'images/icon-dm.png'
    postActions.appendChild(shareIcon)

    // post likes
    let postLikes = document.createElement('div')
    postLikes.classList.add('post-likes')
    postLikes.classList.add('emphasize')
    postLikes.textContent = '21,492 likes'
    postActions.appendChild(postLikes)

    // post text container div
    let post = document.createElement('div')
    post.classList.add('post')
    postFooter.appendChild(post)

    // post text div
    let postText = document.createElement('div')
    postText.classList.add('post-text')
    postFooter.appendChild(postText) 

    // poster span 
    let postHandle = document.createElement('span')
    postHandle.classList.add('post-handle')
    postHandle.classList.add('emphasize')
    postHandle.textContent = 'vincey1853'
    postText.appendChild(postHandle)

    // poster post
    let posterPost = document.createTextNode('just took a few mushrooms lol')
    postText.append(posterPost)

}

generatePost()