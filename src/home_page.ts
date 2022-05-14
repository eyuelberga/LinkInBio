export default `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Link in Bio</title>
    <style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: lightblue;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#create-page input[type="text"],
#create-page input[type="email"],
#create-page input[type="tel"],
#create-page input[type="url"],
#create-page textarea,
#create-page button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#create-page {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#create-page h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#create-page h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#create-page input[type="text"],
#create-page input[type="email"],
#create-page input[type="tel"],
#create-page input[type="url"],
#create-page textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#create-page input[type="text"]:hover,
#create-page input[type="email"]:hover,
#create-page input[type="tel"]:hover,
#create-page input[type="url"]:hover,
#create-page textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#create-page textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#create-page button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: dodgerblue;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}



#create-page button[type="submit"]:hover {
  background: steelblue;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#create-page button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


#create-page input:focus,
#create-page textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

#create-page .link-group {
  border: 1px solid #aaa;
  padding: 15px 10px 0px 10px;
  margin-bottom: 10px;
}

#create-page button {
  cursor: pointer;
  border: none;
  background: gray;
  color: #FFF;
  margin: 0 0 5px;
  padding: 5px;
  font-size: 15px;
  float: right;
}



#create-page button:hover {
  background: dimgray;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#create-page button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
    </style>
  </head>
  <body>
  <div class="container">  
  <form id="create-page"  method="post" enctype="multipart/form-data">
    <h3>Create Your Page</h3>
    <h4>Please fill out this form</h4>
    <fieldset>
      <input name="name" placeholder="Your name" type="text" required autofocus>
    </fieldset>
    <fieldset>
    <label for="avatar">Choose a profile picture:</label>
    <input id="profile_input" name="picture" type="file" accept="image/*" required>
  </fieldset>
    <fieldset>
    <textarea name="description" placeholder="Description (optional)" ></textarea>
  </fieldset>
  <h4>Links <button id="addLinkBtn"> Add Link</button></h4>
  <div id="link_1" class="link-group"> 
    <fieldset>
      <input name="link_name_1" placeholder="Link Name" type="tel" required>
    </fieldset>
    <fieldset>
      <input name="link_url_1" placeholder="Link URL" type="url" required>
    </fieldset>
  </div>
    <fieldset>
      <button type="submit" id="page-submit">Create Page</button>
    </fieldset>
  </form>
</div>
  </body>
  <script>
  document
  .querySelector("#profile_input")
  .addEventListener('change', (event) => {
    const target = event.target
      if (target.files && target.files[0]) {
        const maxAllowedSize = 1 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
           alert("Your image needs to be less than 1MB")
           target.value = ''
        }
    }
  })
  let count  = 1;
  document
  .querySelector("#addLinkBtn")
  .addEventListener("click",
  ()=>{
    count +=1;
    document.querySelector(\`#link_\${count-1}\`).insertAdjacentHTML('afterend',\`  <div id="link_\${count}" class="link-group"><fieldset>
    <input name="link_name_\${count}" placeholder="Link Name" type="tel" required>
  </fieldset>
  <fieldset>
    <input name="link_url_\${count}" placeholder="Link URL" type="url" required>
  </fieldset></div>\`)
  });

  </script>
</html>
`;