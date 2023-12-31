(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))B(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&B(g)}).observe(document,{childList:!0,subtree:!0});function m(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function B(s){if(s.ep)return;s.ep=!0;const c=m(s);fetch(s.href,c)}})();const y=9,d="draw",t="",I="new game",R=" ",w="o",f="o".toUpperCase(),h="o-turn",l="turn",E="x",u="x-turn",i="x".toUpperCase(),Q="/Tic-Tac-Toe/assets/eye-e50fcfe6.svg",D="/Tic-Tac-Toe/assets/figma-72ef3644.svg",M="/Tic-Tac-Toe/assets/github-39ddabc3.svg",v="/Tic-Tac-Toe/assets/star-be371edc.svg",x=[{ariaLabel:"Star DAShaikh10/Tic-Tac-Toe on GitHub",href:"https://github.com/DAShaikh10/Tic-Tac-Toe",src:v,text:"Star"},{ariaLabel:"Watch DAShaikh10/Tic-Tac-Toe on GitHub",href:"https://github.com/DAShaikh10/Tic-Tac-Toe/subscription",src:Q,text:"Watch"},{ariaLabel:"Follow @DAShaikh10 on GitHub",href:"https://github.com/DAShaikh10",src:M,text:"Follow @DAShaikh10"},{ariaLabel:"Figma by @anuj_uchil",href:"https://www.figma.com/community/file/1254192154560627135",src:D,text:"Figma by @anuj_uchil"}],N=document.getElementById("actions");N.innerHTML=x.map(e=>`<a
    class="action-button github"
    href=${e.href}
    aria-label=${e.ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src=${e.src} />
    <span>${e.text}</span>
  </a>`).join(t);const k=document.getElementsByClassName("action-button");Array.from(k).forEach(e=>{e.addEventListener("mouseenter",()=>e.classList.add("hovered")),e.addEventListener("mouseleave",()=>e.classList.remove("hovered"))});function S(e){a[e].score++;const{index:n,score:m}=a[e];J[n].innerHTML=m.toString()}const a={[i]:{index:0,score:0},[d]:{index:1,score:0},[f]:{index:2,score:0}},F=document.getElementById("score-board");F.innerHTML=`
  <div class="score-card">
    <p>player x</p>
    <p class="score">${a[i].score}</p>
  </div>

  <div class="score-card">
    <p>draw</p>
    <p class="score">${a[d].score}</p>
  </div>

  <div class="score-card">
    <p>player o</p>
    <p class="score">${a[f].score}</p>
  </div>
`;const J=document.getElementsByClassName("score");function Y(e){return e[0]===e[1]&&e[1]===e[2]&&e[0]!==t||e[3]===e[4]&&e[4]===e[5]&&e[3]!==t||e[6]===e[7]&&e[7]===e[8]&&e[6]!==t||e[0]===e[3]&&e[3]===e[6]&&e[0]!==t||e[1]===e[4]&&e[4]===e[7]&&e[1]!==t||e[2]===e[5]&&e[5]===e[8]&&e[2]!==t||e[0]===e[4]&&e[4]===e[8]&&e[0]!==t||e[2]===e[4]&&e[4]===e[6]&&e[2]!==t}function b(e){for(let n=0;n<e.length;n++)if(e[n]===t)return!1;return!0}const G="data:image/webp;base64,UklGRpwBAABXRUJQVlA4WAoAAAAQAAAARAAATAAAQUxQSKEAAAAJcFZte5Y8Ed4IiwANWANIICTQBoMGmgBNoA1cBBrwRFgG/76P33pORChs27aRbMAPdNwAwNoAR5mJm9t1Tp7OawLQ7w3Ojjsgwd9kTRDAWoOCgZBwKRoZNLhMGhlF5vHzkq5onLyokeXzkpoSYXx1UzRyEPkfaFA0MA02Gn/AXqJXk2j4kyvOEm0qjR8HHoeUIOessDMG/8kIMJ58B6eaAABWUDgg1AAAAFAHAJ0BKkUATQA+kUScSiWkIqGnqNiwEglAGkZCB53ElsQbbncRf+y+PQIiJlUbY2+e0j5EKteMKU/yrGelfSVrjkAA/vCwNNaDu3/J/r/1tQFfdmSXjDpYfp9H3BGZT6atUrTW5/o/Gf4OTEmPsTEVWUc7KxxlKAe8VTYMrqKGmhtX75o/3kZSF60MEXifeAfwlA+pqftn9C//+Js4AZf6DMrOJCoLCn+XKwyVVAmc/FMvegFOd4OhEWvCnJRvCIGeMYXAkkvxMybGBfcI0c01AAAA",O="data:image/webp;base64,UklGRs4BAABXRUJQVlA4WAoAAAAQAAAAQwAATAAAQUxQSN0AAAABf0AgCJligSaIiAjcagdAimzbtXLq3B+IEpKBU18A0QES7pTZRwYzJCAhz7+EXyg4Eu6IHM547UJARP8nwJ7/Ch1HdlX47JVbfHO3xa8FVgJ3AguBGbc0bsp146ZcN27KdeOmXDduyp0aNhp3atho3Klho3Gnho3GnRqWjQvD0rkwLJ0Lw9K5btyuwNa/sCNwIZDOVQikcxUC6VyFQDpXIZDOVQikcxUC6VyFQDpXIZDOVQikcxUC6VyFQDpXIZDOVQikc7UncCOQCr/c+oNbvnBx+Eut3M6v2cuJAQBWUDggygAAANAHAJ0BKkQATQA+kUKdSiWjoqGnuqlAsBIJYwDR9do+a/DOAbeDn//QtvFe8hAKkjrMGNbeN7E4woMa6gCJv4RVsoRRZjuwAP7wsDPcfJM/i3oVzXO47x7WE/6KgC0BRdflaQKVk7NjWXiWpNX3mr3IoxdMiuujJJuRBLacznyD/UcZID5gFPk3w4vzwZDz2b5cYNP6ZwH3u8QA6qSFrXG4U4lC6SQJ5qSWX/QFOY4dxb8kSHCUnl+PMiOr0ll9v8WDnec3X4m0gAA=",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABNCAYAAADw3qlEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKvSURBVHgB7dy9btNQGMbx5xyDhJjMHTisIAF3kN5B2RCtRHMF3EK5hG6MDCViQKJcAWVjRKgDE/XIaAYWwH45j0NM0uY7tuPz8R8SJ44U6Sd/xPLJUZhsP4lxG/saSOBJCkjzAud4k6YT743Sh3efK8gxBDE8TEQdF8NvL7gclQ9PkyOj89Is3oKnKYW+uh//kIvsU7mlRAe9S3i0yywoy29KT+Mw6SOAjIujX+aYavYfL48h8xKzgWhz5E0RmkpjmH42zxlCVbp8VDJAqKo8JcuX7Gv0IDZnItVH6KMeL/05Tc0Pt7DFMD35Ih+mrwLMFRQWYGagMN9h9LwVPsPoRSt9hdHLPuAjzFIU5hvMSijMJ5iVUVgJo+QxHL9WWguF5afpmRbZg8Mwa6Ow3+bK2mWYjVCYyzAbozBXYbZCYS7CbI3CXIOpBYW5BFMbCnMFplYU5gJM7SiMMHkuj8w9lBQW1ghKmbmLX+SyZyNMcyjMUphmUZiFMM2jMMtg2kFhFsG0h8L+waDjp+t2UZiBESUn6HDto5iKAmfocDtBQRF2n1nf2unRUztBuRHpZ+hw7aM8SRIROUKHaxfFgESR+tD1AcztoYxBLBie2g6KRSCseRTLQFizKBaCsOZQLAVhzaBYDMLqR7EchNWL4gAIqw/FERBWD4pDIGx7FMdA2HYoDoKwzVEcBWGboTgMwtZHcRyErYfiAQhbHcUTELYaikcgbDmKZyBsMYqHIGw+iqcgbDaKxyDsOornIGwaJYCU/UcJIFUjlAAyVYmiI/UOAaSqnGlHAQ8RqtJREbaQq+1m0E7H00qH6Ycm0wXOFReigx7PPH14Hsf4Fq8ve+Xuk+cysPUfF3VVgozG+I6mH8JFlsm9+L3WuCNQnIfIm2nOBJJqhZP8JwZ4m37ne38BXdUsWkcB5SEAAAAASUVORK5CYII=",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABNCAYAAAAfHMJ6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKMSURBVHgB7dxPbtNAFMfx3xsHiWWP4LJmEU5AuEUElQo7lnCCqjfoDZpKUCGx4QZkyTILDjBHCNsW+zFv0pQ2/Wc39tQzb75S29TJJh859njGCmHdtJwUBR2AMAZjBxoiLN17XVRn/Bnf7UI2FfLL7L04MISZe1i6n+fQk7zX0hT0kV7u/OHfy19UvC3fg+gYOVQV7xqHsY+czxh8Mu7vBLlVRK8NcpcReJlBrmVsBrlSVdWHGeQiAzcW+WbzHiIJxvlXeySPR1CeYf5wfmpnl/9DcZsYfhuUdhuG3w6F3YXhn4Oy7sPwz0NRD2H410BJTTD866Cgphj+tUi8NhhSsgMzdtODdc1vqtPV1GDTktxD1hhoiSElB7INhpQUyLYYUjIgXWBISYB0hSFFD9IlhhQ1SNcYUrQgfWBIUYIwYPvAkKIbqXqMymG4CWH0UFR7SN8YUjQgITCkKEBCYUiDBwmJIQ0aJDSGNGgQYj4MiSEN9rTr944WM11dNdg9hJjmeILyYvdGgwVh4jGeoOF+ZIDxaFpOELhhn3YLOsa0LBGwoR9DyqKgnyFRYjioBkWJ5SwTDCWm024QlNjGIb2jxDgw6xUl1pFqbygxD917QYn9WqZzlBQu7jpFSeVqtzOUlC7/O0FJbT5ka5QUJ4i2Qkl1xuzRKClPIT4KJfU51dYoGiaZW6FomXVvjKJpGaIRirZ1mQdRNC5U3YuideXuThTNS5m3omhf272Bkhe7N1CoeLfLyEm2esav8h7yv9Kcrb5hJncREe1nkI0Mgy1yPncwXRoQTpBbVfOJqUc4kjv+oDx/1yPjh8HMLuXmWN0oPF/fIExXN4/2ykldK/peM3LHDMLi7xc7X2/6B5JgNz02XTW1AAAAAElFTkSuQmCC";function T(e=null){L.innerHTML=`
    <picture>
      <source srcset=${G} />
      <img src=${W} alt="" />
    </picture>
    ${e!==null?`<p>Game Over. Player ${e} Wins!</p>`:"<p>Game Over. Its a Draw!</p>"}
    <picture>
      <source srcset=${O} />
      <img src=${H} alt="" />
    </picture>
  `}function K(){L.innerHTML=t}const L=document.getElementById("toast");function X(e,n){r[e]=n}function j(){r.fill(t)}function V(){p.forEach(e=>e.disabled=!0)}function P(){p.forEach(e=>{e.disabled=!1,e.innerText=t,e.classList.remove(w,E)})}function Z(){o.innerText=i+R+l,o.classList.add(l,u),P(),j(),K()}function q(){o.addEventListener("click",Z,{once:!0})}function C(){o.innerText=I,o.classList.remove(l,h,u),q()}function z(){o.innerText=A+R+l,o.classList.remove(h,u),o.classList.add(A===i?u:h)}function $(){A=A===i?f:i}function _(){A=i}function U(){_(),V(),C()}function ee(){return Y(r)?(T(A),S(A===i?i:f),U(),!0):b(r)?(T(),S(d),U(),!0):!1}function te(){p.forEach((e,n)=>e.addEventListener("click",()=>{X(n,A),e.innerText=A,e.disabled=!0,e.classList.add(A===i?E:w),ee()||($(),z())}))}let A=i;const r=new Array(y).fill(t),se=document.getElementById("board");se.innerHTML=`
  <table>
    <tbody>
      <tr>
        ${r.slice(0,3).map(e=>`
          <td>
            <button disabled=${!0}>${e}</button>
          </td>
        `).join(t)}
      </tr>

      <tr>
        ${r.slice(3,6).map(e=>`
          <td>
            <button disabled=${!0}>${e}</button>
          </td>
        `).join(t)}
      </tr>

      <tr>
        ${r.slice(6).map(e=>`
          <td>
            <button disabled=${!0}>${e}</button>
          </td>
        `).join(t)}
      </tr>
    </tbody>
  </table>
`;const p=document.querySelectorAll("td > button");te();const o=document.getElementById("game-button");C();
