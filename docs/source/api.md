---
title: API Docs Title v1.0.0
language_tabs:
  - javascript: JavaScript:request
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 3

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-docs-title">API Docs Title v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Your API Description here

Base URLs:

* <a href="/api">/api</a>

<h1 id="api-docs-title-user">User</h1>

## getAllUsers

<a id="opIdgetAllUsers"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /users`

*Returns a list of users.*

Optional extended description in CommonMark or HTML

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": [
    "email"
  ]
}
```

<h3 id="getallusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A JSON array of user names|Inline|
|default|Default|An unexpected error was encountered|Inline|

<h3 id="getallusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» username|string|false|none|none|
|» email|string(email)|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|false|none|none|
|» code|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "WebAPI",
  "description": "Your API Description here",
  
  
  
  "name": "API Docs Title"
}
</script>

