import { createElement } from "./dom.js";

const publicButton = document.querySelector(".public");
const cancelButton = document.querySelector(".cancel");
const topicContainerElement = document.querySelector(".topic-container");
const containerElement = document.querySelector(".container main");
const homeButtonElement = document.querySelector("nav a");

const topicNameElement = document.getElementById("topicName");
const usernameElement = document.getElementById("username");
const postTextElement = document.getElementById("postText");

homeButtonElement.addEventListener("click", () => {
  containerElement.children[0].style.display = "block";
  containerElement.children[1].style.display = "block";
  containerElement.children[2].remove();
});

publicButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    topicNameElement.value != "" &&
    usernameElement.value != "" &&
    postTextElement.value != ""
  ) {
    fetch("http://localhost:3030/jsonstore/collections/myboard/posts", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        topicName: topicNameElement.value,
        username: usernameElement.value,
        postText: postTextElement.value,
        time: new Date(),
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);

        topicNameElement.value = "";
        (usernameElement.value = ""), (postTextElement.value = "");
        loadPosts();
      });
  }
});
cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  topicNameElement.value = "";
  usernameElement.value = "";
  postTextElement.value = "";
});

async function loadPosts() {
  topicContainerElement.innerHTML = "";

  try {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/myboard/posts"
    );
    if (response.status === 200) {
      const posts = await response.json();

      for (const post in posts) {
        let newTopic = createElement("div", undefined, topicContainerElement);
        newTopic.addEventListener("click", () => {
          containerElement.children[0].style.display = "none";
          containerElement.children[1].style.display = "none";

          let commentElement = createElement(
            "div",
            undefined,
            containerElement
          );
          commentElement.classList.add("comment");

          commentElement.innerHTML = `
          <div class="header">
              <img src="./static/profile.png" alt="avatar">
              <p><span>${posts[post].topicName}</span> posted on <time>${posts[post].time}</time></p>
      
              <p class="post-content">${posts[post].postText}</p>
          </div>`;

          loadComments();

          let answerCommentElement = createElement(
            "div",
            undefined,
            containerElement
          );
          answerCommentElement.classList.add("answer-comment");
          answerCommentElement.innerHTML = ` <p><span>currentUser</span> comment:</p>
          <div class="answer">
              <form>
                  <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                  <div>
                      <label for="username">Username <span class="red">*</span></label>
                      <input type="text" name="username" id="username">
                  </div>
                  <button>Post</button>
              </form>
          </div>
      `;
          let form = document.querySelector(".answer form");
          form.addEventListener('submit',(e)=>{
              e.preventDefault();
          })

          let comentElement = answerCommentElement.querySelector("#comment");
          let usernameComentElement =
            answerCommentElement.querySelector("#username");
          let postComentButtonElement =
            answerCommentElement.querySelector("button");
          postComentButtonElement.addEventListener("click", async () => {
            if (comentElement.value != "" && usernameComentElement != "") {
              const response = await fetch(
                "http://localhost:3030/jsonstore/collections/myboard/comments",
                {
                  method: "post",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify({
                    username: usernameComentElement.value,
                    coment: comentElement.value,
                    time: new Date(),
                  }),
                }
              );
              if (response.status == 200) {
                loadComments();
              }
            }
          });
        });
        newTopic.classList.add("topic-name-wrapper");
        newTopic.innerHTML = `<div class="topic-name">
        <a href="#" class="normal">
            <h2>${posts[post].topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${posts[post].time}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${posts[post].username}</span></p>
                </div>
            </div>
        </div>
    </div>`;
      }
    }
  } catch (error) {
    alert(error);
  }
}
async function loadComments() {
 
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/comments"
  );
  if (response.status == 200) {
    const comments = await response.json();
    let commentsElement = document.querySelector(".comment");

    for (const comment in comments) {
      let commentElement = createElement("div", undefined, commentsElement);
      commentElement.id = "user-comment";
      commentElement.innerHTML = `
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${comments[comment].username}</strong> commented on <time>${comments[comment].time}</time></p>
                        <div class="post-content">
                            <p>${comments[comment].coment}</p>
                        </div>
                    </div>
                </div>
            `;
    }
    console.log(comments);
  }
}

loadPosts();
