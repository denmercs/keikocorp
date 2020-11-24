# keikocorp

junior to senior software developer tutorial

### PROTOCOLS:

http: browsers to servers
ftp: allow to send files (uploading files) to hosting (host gator)
https: encrypted (can't read the files being transfer if they intercept the messages)
ssh (secure shell protocol): communicate 2 computers over the internet that allow users to share files or modify remote computer on internet

Advantage of SSH:
-secure transmission with host and client

#### SSH COMMANDS

- ssh root@IP_ADDRESS_HERE
- ssh {user} @ {host}

#### installing git at the server

sudo apt-get install git

git clone GIT_SSH_REPO_HERE

#### install npm

sudo apt-get isntall nodejs

#### to exit

exit

#### rsync

rsync -av . root@IP_ADDRESS_HERE:~/FOLDER_NAME

#### Techniques in SSH

1. Symmetrical Encryption
   computer --> hello --> key --> encrypted code --> key --> hello --> other computer

   - anyone who posses the key can discpher the code
   - warning: secure the key so that other people get it
   - key exchange algorithm

2. Asymmetrical Encryption

   (computer + private keys) --> public key --> public key --> (other computer + private key)

   - uses 2 separate keys for increption and decription
   - the private key cannot mathematically compute with the public key
   - Defiie Hellman key exchange

3. Hashing
   client --> secure shell protocol (internet) --> host
   - they generate a unique value
   - ssh root@IP_ADDRESS_HERE

### SETTING UP SSH IN GITHUB

1. ssh-keygen -C "test@gmail.com"
2. .ssh pbcopy ~/.ssh/id_rsa_digitalocean.pub
3. nano authorized_keys

### BEST PRACTICES INTERMS OF PERFORMANCE

- remember focus on the problem and solve it in an efficient way

1. Network Performance or transfer latency

   a. Shrink the files

   - minimize text

     1. UglifyJS

   - minimize images
     JPG

     - use for photos, images, and many colors like photographs but don't allow transparency
     - JPEG-optimizer (30 - 60%)

     GIF

     - grainy and color degraded which is good for animations

     PNG

     - limit the number of colors and smaller in size like logos
     - tinyPNG

     SVG - vector graphics format

     - display different sized images for different backgrounds can do with CSS media queries
     - CDN for the images like imgix.com
     - remove metatags of the photos

   b. Minimize Delivery - Reducing the network request

   - don't use bootstrap or just use flexbox and css
   - think about the library to import (especially the size)

   ##### Resources

   1. webpagetest
   2. pagespeed by Google

2. FRONTEND - Improve the client side

   a. CRITICAL RENDER PATH

   ##### FOR HTML

   1. css first as soon as possible and then javascript
   2. reducing the number of frequency of request to make
   3. structure it more efficiently (in html load the css first and then javascript at the bottom)`

   ##### FOR CSS

   1. Load only what is needed
   2. Above the fold loading
   3. Media attributes
   4. Less specificity

   ##### FOR JS

   1. Load scripts asynchronously
   2. Defer Loading of scripts
   3. Minimize DOM manipulation
   4. Avoid long running JS

   b. Optimize Code

   c. Progressive Web App

3. BACKEND PROCCESSING
   a. CDNs
   b. Caching
   c. Load balancing
   d. Db Scaling
   e. GZIP

#### Frameworks

- frameworks are only tools
- tool change and libraries evolve

#### Bundles

- npm i --save-dev webpack webpack-dev-server webpack-cli
- change the script from package.json to:
  "scripts": {
  "start": "webpack serve --config ./webpack.config.js --mode development"development"
  },

- touch webpack.config.js:
  module.exports = {
  entry: ["./src/index.js"],
  output: {
  path: \_\_dirname + "/dist",
  publicPath: "/",
  filename: "bundle.js",
  },

  devServer: {
  contentBase: "./dist",
  },
  };

- installing babel
  npm i --save-dev babel-core babel-loader babel-preset-env

#### CODE SPLITTING

#### SHOULDUPDATECOMPONENT AND PURECOMPONENT

https://medium.com/@francois.barrailla/re-implement-purecomponent-with-react-hooks-c0fb180c2feb
https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/using_should_component_update.html

- notes about pure components

#### PROGRESSIVE WEB APPS

- HTTPS - prevents bad actors
  letsencrypt.org
  cloudflare.com

- APP Manifest
  check the favicon: https://realfavicongenerator.net/

- Service Worker
  is a programmable proxy

- check list of PWA
  https://web.dev/pwa-checklist/

#### SINGLE PAGE APPLICATION VS SERVER SIDE

- SINGLE PAGE APPLICATION (CLIENT SIDE RENDERING)

  - ReactDOM.hydrate() <------ ReactDOMServer.renderToNodeStream(), ReactDOMServer.renderTostring()

  PROS:

  - rich interactions
  - faster response
  - web application

  CONS:

  - low SEO potential
  - longer initial load

#### SERVER SIDE (SERVER SIDE RENDERING)

PROS:

- static sites
- SEO
- initial page load

CONS:

- full page reloads
- slower page rendering
- number request to server
