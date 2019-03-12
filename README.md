# url-shortener

> 🙌 Build a URL Shortener with Node.js and MongoDB.

### Quick start

```bash
// Install dependencies for server
$ cd server && yarn

// Install dependencies for client
$ cd client && yarn

// Run server
$ cd server && yarn start

// Run client
$ cd client && yarn start
```
Config `nginx`: `/etc/nginx/sites-enabled/default`

```
server {
  listen 80;
  index index.html;
  server_name cuongw;
  rewrite ^/(.*)$ https://github.com/cuongw/url-shortener redirect;
}
```

### License

![](https://img.shields.io/github/license/cuongw/url-shortener.svg?style=flat-square)
