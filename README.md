# url-shortener

> 🙌 Build a URL Shortener with Node.js and MongoDB.

### Quick start

```bash
// Install dependencies
$ yarn

// Run server
$ cd server & yarn start

// Run client
$ cd client & yarn start
```
Config `nginx`: `/etc/nginx/sites-enabled/default`

```
server {
	listen 80 default_server;
	listen [::]:80 default_server;
	index index.html index.htm index.nginx-debian.html;

	server_name cuongw;

	location ~* "^/[0-9a-z@]{5,15}$"  {
  	rewrite ^/(.*)$ http://localhost:8080/api/item/$1 redirect;
	}
}
```

### License

![](https://img.shields.io/github/license/cuongw/url-shortener.svg?style=flat-square)
