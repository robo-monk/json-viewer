import{S as g,i as h,s as j,e as u,a as p,b as c,c as f,d as b,n as m,f as d,g as y,j as v}from"./vendor.90caa9a6.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}};L();function O(l){let n,o,s,t,e,i;return{c(){n=u("link"),o=p(),s=u("link"),t=p(),e=u("pre"),i=u("code"),c(n,"rel","stylesheet"),c(n,"href","//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"),c(s,"rel","stylesheet"),c(s,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-dark.min.css"),c(i,"class","hljs svelte-13ipeta"),c(e,"class","svelte-13ipeta")},m(r,a){f(r,n,a),f(r,o,a),f(r,s,a),f(r,t,a),f(r,e,a),b(e,i),i.innerHTML=l[0]},p(r,[a]){a&1&&(i.innerHTML=r[0])},i:m,o:m,d(r){r&&d(n),r&&d(o),r&&d(s),r&&d(t),r&&d(e)}}}function _(l,n,o){y.registerLanguage("javascript",v);let{data:s}=n,{prettyHtml:t}=n;return navigator.clipboard.readText().then(e=>o(1,s=e)),l.$$set=e=>{"data"in e&&o(1,s=e.data),"prettyHtml"in e&&o(0,t=e.prettyHtml)},l.$$.update=()=>{if(l.$$.dirty&2){let e;try{e=JSON.stringify(JSON.parse(s),void 0,2)}catch(i){e=JSON.stringify({error:"not a valid json",clipboardData:s,status:500,app:"JSON Viewer",domain:"https://robo-monk.github.io/json-viewer/",by:"robomonk"},void 0,2),console.warn("not a json",s,i)}finally{o(0,t=y.highlight(e,{language:"json"}).value)}}},[t,s]}class k extends g{constructor(n){super();h(this,n,_,O,j,{data:1,prettyHtml:0})}}new k({target:document.getElementById("app")});
