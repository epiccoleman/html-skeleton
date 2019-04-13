# html-skeleton

a minimal template for just makin a web page that does some stuff.

or at least, it _was_ that. Then I got the idea in my head that I wanted to be able to have opulent modern contrivances like a module system and a half decent way to be able to test my code. And because Javascript is ... Javascript, that outlandish fantasy led me down having to set up Webpack, Babel, and a node package.json. And, since minimalism went out the door the second I wanted to put code in more than one file, I installed webpack-dev-server too.

Still, this is a reasonably small and understandable template for small sites and experiments. And it's extendable too.

## Usage
Clone it, then probably `rm -rf .git` so you can start your own history.

`yarn start` will start the dev server, which you can hit at `http://localhost:8080`.

The `public` directory is where the files that will be served live. You write html and css directly in this dir, but Javascript you write in the `src` dir. Then Babel and Webpack do their thing and make it usable for the browser.

### Tests
I chose Jest as the testing framework because that seems to be the current hotness, idk. This project has a `test` directory, and you can put test files in there if you like. That's a mild pain in the ass because you'll have to go up two directories in every import (e.g. `import { myAdd } from ../../src/js/adder.js`). You can also just dump the test files in the src directory. My understanding is that jest doesn't care where they are, they just have to have a `.test.js` extension. 
