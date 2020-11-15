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

   b. Reducing the network request

   - don't use bootstrap or just use flexbox and css
   - think about the library to import (especially the size)

   c. CRITICAL RENDER PATH

   - css first as soon as possible and then javascript

2. FRONTEND - Improve the client side

   - reducing the number of frequency of request to make
   - structure it more efficiently

3. BACKEND PROCCESSING
