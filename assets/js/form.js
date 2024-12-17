const sumbitForm = document.querySelector('form');
const errorTag = document.getElementById('mainForm');
let formArray = [];

const navPage = function (event){
  // localStorage.setItem("username", JSON.stringify(username));
  // localStorage.setItem("title", JSON.stringify(title));
  // localStorage.setItem("content", JSON.stringify(content));
  event.preventDefault();
  let blogInfo = {
    username: document.getElementById('username').value,
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
  }
if (blogInfo.username === "" || blogInfo.title === "" || blogInfo.content === ""){
  // errorTag.textContent = "One or more of the input boxes are empty";
  // errorTag.append('submitBtn');
  let error = document.createElement('p');
  error.setAttribute('id', 'error');
  error.textContent = "One or more fields are empty";
  errorTag.append('error');
  return;
}

  formArray.push(blogInfo);
  storeLocalStorage(blogInfo);
  redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
sumbitForm.addEventListener("submit", navPage);
