# Introduction 
IndiaNIC: Bootstrap 4 + SCSS + Webp (jpg/png to webp) + gulp (minified: CSS & JS).

# Getting Started
Guide users through getting your code up and running on their own system. In this section you can talk about:
1. __Software dependencies__
   * [Node.js](https://nodejs.org) current version: ^10.14
   * [npm]
   * [gulp] current version: ^4.0.2

2. __Installation process__
   * Repo is located [here](http://git.indianic.com/).
   * `git clone` the repo. 
   * Work under the context `<REPO>\html`
   * `npm install` to pull latest packages. 
   * project run with command "gulp".

# Build and Test
Currently, there are no unit test.

# Knowledge Base
## Technology Stack
* Web Front End - HTML5 and SCSS

## GIT
1. __Pull Requests__
   All code merged to `staging` branch needs to go through the pull request process.

2. __Branch Names__
   Follow the branching name convention:
   * `<type>/<username>/<story_number>` where `<type>` can be "__feature__"
     * feature/name/taskName
3. gitignore
   - All complied file added in .gitignore file 
      - Local dev Branch: /css/style-min.css, /minify/javascript-lib-min.js
   - when take pull staging simple npm install after gulp install locally.
      - staging Branch: css/style-min.css, minify/javascript-lib-min.js
   - after gulp task run
        
## Folder Structure
``` bash
bootstrap-scss-gulp-webp/
    |-- assets/
        |-- css/
            # The Gulp compailed CSS file will generate here
        |-- fonts/
            # All the 3rd party fonts must be stored locally in here
        |-- images/
            # Need to add all images in this folder. after complied the same place generates new images here.
        |-- js/
            # Store all the JS file here
            # The Gulp compailed JS file will generate here
        |-- scss/
            |--  component
            # All components SCSS files
            |-- helpers
            # All helpers SCSS files
    |-- node_modules/
    |-- .gitignore
    |-- gulpfile.js
    |-- index.html
    |-- package.json
    |-- README.md
```

## Styles & Themes
## Bootstrap Style Guide
A coding style guide can be found [here](https://getbootstrap.com/).

# Vendor Dependencies
- [bootstrap](https://getbootstrap.com/)
- [popper.js](https://popper.js.org/docs/v2/)
	Why Popper?
	With the CSS drawbacks out of the way, we now move on to Popper in the JavaScript space itself.
	Naive JavaScript tooltip implementations usually have the following problems:
	Scrolling containers: They don't ensure the tooltip stays with the reference element while scrolling when inside any number of scrolling containers.
	DOM context: They often require the tooltip move outside of its original DOM context because they don't handle offsetParent contexts.
	Configurability: They often lack advanced configurability to suit any possible use case.
	Size: They are usually relatively large in size, or require an ancient jQuery dependency.
	Performance: They often have runtime performance issues and update the tooltip position too slowly.
- [boxicons](https://boxicons.com/usage/) 
   Note: gulpfile.js css path added and fonts folder add at assets/fonts/....