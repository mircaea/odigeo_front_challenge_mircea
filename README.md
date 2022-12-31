### Update codebase

Updated nodeJS to v18.12.1 & restart the system to make sure everything is reset.

```js
  npm install --save-dev bootstrap
  npm install --save-dev css-loader
  npm install --save-dev express
  npm install --save-dev node-sass sass-loader
  npm install --save-dev style-loader
  npm install --save-dev webpack webpack-cli
```

Install what's needed for react:

```js
  npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/preset-react
  npm install react react-dom react-router-dom
```

Create file **.babelrc** at project root level with content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Update webpack.config

Update **/src/index.js** with react specific.

Update **/public** folder with items specific to a PWA. Also **index.thml** with a div `root` & serve compiled script at **/public/bundle.js** after the _root_ div is accessible in the DOM (either by using defer or by using the script tab after the _root_ div); & other useful meta tags.

```html
<head>
  <script defer src="bundle.js"></script>
</head>

<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
```

### Scripts

Use project locally at [localhost:3000](http://localhost:3000/):

- `npm run start`

- run `npm run build` in order to recreate **/public/bundle.js** and see the updates in the browser

- run tests either by `npm run test` or in VSC by installing extension **Jest** from Orta

### Frontend development

- create React component named Header & move <nav> from index.html inside this - to fix loading issue: on first load the header details from index.html get their styles with a delay witch causes the ui to have an inconsistent look (first loading without styles)

- create Routing with react-router-dom v6 and 2 routes: /home & /results

- folders: /src/hoc (App, ErrorBoundary, Routing) **|** /src/hoc/layout (Header, Layout) **|** /src/routing (Home, Results)

- install **react-detepicker**:

`[https://www.npmjs.com/package/react-datepicker](https://www.npmjs.com/package/react-datepicker)\ 
All the available [props](https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md)`

- dev ++

- adding RTL
