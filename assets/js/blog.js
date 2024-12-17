// TODO: Create a variable that selects the main element, and a variable that selects the back button element
// TODO: Create a function that builds an element and appends it to the DOM
const mainBlogs = document.getElementById('blogs');

// TODO: Create a function that handles the case where there are no blog posts to display
const noPostFound = function (){
  const noPost = document.createElement('h2');
  noPost.textContent = "No blog post found";
  mainBlogs.append(noPost);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function (){
  let blogData = readLocalStorage();
  if (!blogData.length){
    noPostFound();
    return;
  }

   blogData.forEach(blog => {
     const uName = document.createElement('p');
     const t = document.createElement('h2');
     const c = document.createElement('blockquote');
     let blogPost = document.createElement('article');
    
     uName.textContent = blog.username;
     t.textContent = blog.title;
     c.textContent = blog.content;

     blogPost.append(uName, t, c);
     blogPost.setAttribute('class', 'card');
     mainBlogs.append(blogPost);
   });
  console.log(blogData);
}
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
const backButton = document.getElementById('back');
backButton.addEventListener("click", function (){
    redirectPage('index.html');
})
