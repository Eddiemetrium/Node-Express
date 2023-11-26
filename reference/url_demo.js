const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized url
console.log(myUrl.href)
console.log(myUrl.toString());

// host (root Domain)
console.log(myUrl.host);

// host (root Domain no port )
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search)

// search params
console.log(myUrl.searchParams)

// add params
myUrl.searchParams.append('xxy', "404")
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.forEach((value,name)=> console.log(`${name}:${value}`))



