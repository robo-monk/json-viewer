<script>
  import hljs from 'highlight.js/lib/core';
  import jayson from 'highlight.js/lib/languages/json';
  hljs.registerLanguage('json', jayson);

  export let data; 
  export let prettyHtml; 

  navigator.clipboard.readText().then(d => data = d);
  $: {
    let json;
    try {
      json = JSON.stringify(JSON.parse(data), undefined, 2);
    } catch(e) {
      json = JSON.stringify({
        error: "not a valid json",
        clipboardData: data,
        status: 500,
        app: "JSON Viewer",
        domain: "https://robo-monk.github.io/json-viewer/",
        by: "robomonk"
      }, undefined, 2)
      console.warn('not a json', data, e)
    } finally {
      prettyHtml = hljs.highlight(json, {language: 'json'}).value
    }
  }

</script>

<link rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-dark.min.css">

<pre>
  <code class='hljs'>
    { @html prettyHtml }
  </code>
</pre>

<style>
  
  pre {
    margin: 0;
  }

  code {
    margin: 0;
    min-height: 100vh;
  }

  :global(body) {
    margin: 0;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>
