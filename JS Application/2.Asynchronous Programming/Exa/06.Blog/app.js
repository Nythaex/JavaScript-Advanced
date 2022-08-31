function attachEvents() {
     let loadElement=document.getElementById('btnLoadPosts');
     let btnViewPost=document.getElementById('btnViewPost');
     loadElement.addEventListener('click',()=>{
             loadPosts();
     })
     btnViewPost.addEventListener('click',()=>{
        getComments();
})


}

attachEvents();


async function loadPosts(){
           let response=await fetch('http://localhost:3030/jsonstore/blog/posts');
  
           let posts=await response.json();

           console.log(posts);
           let postsSelectElements=document.getElementById('posts');

           for (const element in posts) {
               console.log(posts[element]);
            let optionElement=document.createElement('option');  
            optionElement.value=element;
            optionElement.textContent=posts[element].title;
              postsSelectElements.appendChild(optionElement)  
           }

}
async function getComments() {
    const postID = document.getElementById('posts').value;

    if (postID) {
        const postsURL = 'http://localhost:3030/jsonstore/blog/posts/' + postID;
        const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

        const [postResponse, commentsResponse] = await Promise.all([
            fetch(postsURL), 
            fetch(commentsURL)
        ])

        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();

        const postTitle = document.getElementById('post-title');
        postTitle.textContent = postData.title;

        const postBody = document.getElementById('post-body');
        postBody.textContent = postData.body;

        const commentsUl = document.getElementById('post-comments');

        const comments = Object.values(commentsData).filter((p) => p.postId == postID);

        comments.map(createComment).forEach(c => commentsUl.appendChild(c));
    } else {
        alert('No post.');
    }
}
function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}