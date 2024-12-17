// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let dark = localStorage.getItem('dark');
const switchTheme = document.getElementById('toggle');


const enableDarkmode = function (){
  document.body.classList.add('dark');
  localStorage.setItem('dark', "active");
}

const disableDarkmode = function (){
  document.body.classList.remove('dark');
  localStorage.setItem('dark', null);
}

if (dark === "active"){
  enableDarkmode();
}

switchTheme.addEventListener("click", function(){
  dark = localStorage.getItem('dark');
  if (dark != "active"){
    enableDarkmode();
  }
  else{
    disableDarkmode();
  }
})

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function (){
  let blog = localStorage.getItem("blogs");
  return JSON.parse(blog) || [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (blogInfo){
  let storedBlogs = readLocalStorage();
  storedBlogs.push(blogInfo);
  localStorage.setItem("blogs", JSON.stringify(storedBlogs));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};