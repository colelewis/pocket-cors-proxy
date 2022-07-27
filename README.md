# pocket-cors-proxy

## Usage

### Server-Side
* `git clone https://github.com/colelewis/pocket-cors-rss-proxy`
* `cd pocket-cors-rss-proxy/`
* `node index.js`
* Open localhost:8001/source/*your RSS URL* in a new tab in your web browser.

### Client-Side
The server returns an [XMLDocument](https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument) element. 
Fetch calls can be made to retrieve and use the XML data as follows:

```
fetch('SERVER_IP/source/' + RSS_URL)
      .then(data => data.json())
      .then(contents => contents.rawHTML)
      .then(runner => new window.DOMParser().parseFromString(runner, "text/xml"))
      .then(result => {
        console.log(result)
        // use XML data
      }
);
```

[![npm version](https://badge.fury.io/js/pocket-cors-rss-proxy.svg)](https://badge.fury.io/js/pocket-cors-rss-proxy)

