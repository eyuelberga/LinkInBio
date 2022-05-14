export interface Link {
  name: string;
  url: string;
}
export interface ProfileContent {
  name: string;
  picture: string;
  description?: string;
  links: Link[];
}

export default ({ picture, name, description, links: l }: ProfileContent) => {
  const links = l.map(({ name, url }) => { return `<li><a href="${url}" class="link">${name}</a></li>` }).reduce((prev, current) => prev + "\n" + current)
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Link in Bio</title>
    <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 15px;
      background-color: #2f2f43;
    }
    .wrap {
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
    }
    .profile {
      text-align: center;
      color: #FFF;
    }
    .photo {
      border-radius: 50%;
    }
    .profile_name {
      font-weight: bold;
      display: block;
    }
    .description {
      font-size: 13px;
    }
    .links ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .links ul li {
      margin: 14px 0;
    }
    .link {
      padding: 14px;
      display: block;
      background-color: steelblue;
      text-align: center;
      text-decoration: none;
      border-radius: 4px;
      transition: ease all 0.3s;
      color: #FFF;
    }
    .link:hover {
      opacity: 0.9;
    }
    </style>
  </head>
  <body>
  <div class="wrap">
  <div class="profile">
  <img src="${picture}" class="photo" width="80" height="80">
    <span class="profile_name">${name}</span>
    <span class="description">${description}</span>
  </div>
  <div class="links">
    <ul>
    ${links}
    </ul>
  </div>
</div>
  </body>
</html>
`};