import profilePage, { ProfileContent, Link } from "./profile_page";
import homePage from "./home_page";
import successPage from "./success_page";

// convert file to base64
const toBase64 = async (file: File) => {
  const buffer = await file.arrayBuffer();
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  return `data:${file.type};base64,${base64}`
};

// generate unique id
const generateId = () => {
  return btoa((Date.now() * Math.random() + ""));
}

export default {
  async fetch(request: Request, env: Record<string, any>): Promise<Response> {
    try {
      const LINK_IN_BIO = env.LINK_IN_BIO;
      // handle post request
      if (request.method.toLowerCase() === "post") {
        const formData = await request.formData();
        // map to store all links in the form
        const linkMap: Record<number, Link> = {}
        // the page content, will be stored on KV
        const content: ProfileContent = { name: '', picture: '', links: [] };

        // iterate over all entries in the form data 
        for (const [key, value] of formData) {
          // extract number from the field name
          const numberMatch = key.match(/\d+/)
          const number = numberMatch ? parseInt(numberMatch[0]) : undefined;
          // add link name to linkMap
          if (key.includes("link_name")) {
            if (number && typeof value === "string")
              linkMap[number] = { ...linkMap[number], name: value }
          }
          // add link url to linkMap
          else if (key.includes("link_url")) {
            if (number && typeof value === "string")
              linkMap[number] = { ...linkMap[number], url: value }
          }
          // add name and description to content
          else if ((key === "name" || key === "description") && typeof value === "string") {
            content[key] = value;
          }
        }
        // add profile picture to content
        const profilePicture = formData.get('picture');
        if (profilePicture && typeof profilePicture !== "string") {
          content.picture = await toBase64(profilePicture);
        }
        // add links to content from linkMap
        content.links = Object.values(linkMap);
        const id = generateId();
        await LINK_IN_BIO.put(id, JSON.stringify(content));
        return new Response(successPage(id), { headers: { 'Content-Type': 'text/html' } });
      }
      // handle get request
      if (request.method.toLowerCase() === "get") {
        const url = new URL(request.url);
        // home page route
        if (url.pathname === "/") {
          return new Response(homePage, { headers: { 'Content-Type': 'text/html' } });
        }

        // extract key from url
        const key = url.pathname.replaceAll("/", "");

        // render profile page
        const content = await LINK_IN_BIO.get(key);
        if (content) {
          return new Response(profilePage(JSON.parse(content)), { headers: { 'Content-Type': 'text/html' } });
        }
        return new Response("Page does not exist", { status: 404 });

      }

      return new Response("404 not found", { status: 404 });
    } catch (err) {
      return new Response(`Internal Server Error: ${err}`, { status: 500 });
    }

  },
};
