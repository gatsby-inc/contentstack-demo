const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/chrislarocque/Documents/GitHub/contentstack-demo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chrislarocque/Documents/GitHub/contentstack-demo/src/pages/404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/Users/chrislarocque/Documents/GitHub/contentstack-demo/src/pages/blogs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chrislarocque/Documents/GitHub/contentstack-demo/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/chrislarocque/Documents/GitHub/contentstack-demo/src/templates/blog-post.js")))
}

