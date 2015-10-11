I cloned this repo from David Wells' [Isomorphic React Example](https://github.com/DavidWells/isomorphic-react-example) but added a little bit of extra flavor to it with: [Browser Sync](http://www.browsersync.io/), [nodemon](https://www.npmjs.com/package/gulp-nodemon) and [Less](https://github.com/plus3network/gulp-less).

Now you can just run:

```
gulp
```

to start up the `node server.js`, then browser-sync will listen and reload the browser automatically and gulp will watch your scripts and styles and re-run those tasks as needed.

### Install Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git@github.com:andersryanc/isomorphic-react.git`
2. Install packages: `npm install && bower install`
3. Launch: `gulp`
4. Browser Sync should automatically open your browser at: `http://localhost:3000`
5. To see serverside rendering, comment out main.js from the /views/index.ejs file. This will show what is rendered purely from the server side.
