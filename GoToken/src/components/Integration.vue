<template>
  <div id="integration">
      <div class="wrap">
          <h3 class="center">Seamless integration</h3>
      </div>
      <div class="wrap">
          <div class="column-2">
              <h6>Supported languages</h6>
              <div class="text-button">
                <button>Go</button>
                <div id="goLink" class="text">
                    go get https://github.com/NorbertKa/gotokenclient
                </div>
              </div>
              <div class="text-button">
                <button>Python</button>
                <div id="goLink" class="disabled">
                    pip install gotokenclient
                </div>
              </div>
              <div class="text-button">
                <button>PhP</button>
                <div id="goLink" class="disabled">
                    composer install gotokenclient
                </div>
              </div>
              <div class="text-button">
                <button>Go</button>
                <div id="goLink" class="disabled">
                    npm install gotokenclient
                </div>
              </div>
              <div class="text-button">
                <button>C++</button>
                <div id="goLink" class="disabled">
                    https://github.com/NorbertKa/cppgotoken
                </div>
              </div>
          </div>
          <div class="column-2">
              <pre><code class="go">package main

import (
	"fmt"
	"github.com/NorbertKa/gotokenclient"
)

func main() {
	client := gotokenclient.NewClient(username, password)
	
	res, err := client.Route.Register(username, password)
	if err != nil {
	    panic(err)
	}
	
	fmt.Println(res)
}
</code></pre>
          </div>
      </div>
  </div>
</template>

<style>
  #integration div h3 {
      padding-top: 0.7em;
      padding-bottom: 0.5em;
  }
</style>
