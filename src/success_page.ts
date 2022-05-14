export default (id: string) => {

  return `<!DOCTYPE html>
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
      max-width: 96%;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
    
    
    .box {
      background: #F9F9F9;
      padding: 25px;
      margin: 150px 0;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    
    .box h3 {
      display: block;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    
    .box h4 {
      margin: 5px 0 15px;
      display: block;
      font-size: 13px;
      font-weight: 400;
    }
        </style>
      </head>
      <body>
      <div class="container">  
      <div class="box">
        <h3>Congratulations, your page is now live!</h3>
        <h4><script> document.write(\`<a href="/${id}">\${window.location.host}/${id}</a>\`)</script></h4>
      </div>
    </div>
      </body>
    </html>`
}