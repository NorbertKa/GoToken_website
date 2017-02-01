<template>
  <div id="example">
      <div id="authExample" class="wrap">
        <div class="column-2">
            <pre><code class="http">POST /authenticate HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "message": "User authenticated",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
  "lastLogin" : "2017.01.01 17:33 GMT +0:00"
}</code></pre>
        </div>
        <div class="column-2">
            <h3>Authentication</h3>
            <p> Pass in the login credentials to receive JWT token.</p>
            <img class="diagram" src="/static/diagramAuth.svg" />
        </div>
      </div>
            <div class="wrap">
        <div class="column-2">
            <div class="right">
                <h3>Registration</h3>
                <p> Pass in identificator (username) and password to register.</p>
                <img class="diagram" src="/static/diagramRegister.svg" />
            </div>
        </div>
        <div class="column-2">
            <pre><code class="http">POST /register HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "message": "User created",
  "user": {
      "identificator" : "norbertka",
      "passwordHash" : "$2a$06$Qv6ZZXSMEol92H5N0lCVx.FsASloIOhwH/ebSRCN/stKDEO4Cztci",
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
      "safePassword" : true
  }
}</code></pre>
        </div>
      </div>
  </div>
</template>

<style>
    .http {
        margin: 1em;
    }
    #example {
        padding-top: 4em;
        background-color: hsl(0, 0%, 10%);
    }
    #authExample {
        border-bottom: 1px solid hsl(0, 0%, 15%);
    }
</style>
