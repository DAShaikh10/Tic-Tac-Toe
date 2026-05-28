(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`draw`,t=`new game`,n=`o-turn`,r=`turn`,i=`x-turn`,a=[{ariaLabel:`Star DAShaikh10/Tic-Tac-Toe on GitHub`,href:`https://github.com/DAShaikh10/Tic-Tac-Toe`,src:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20style='stroke:none;fill-rule:nonzero;fill:%2324292f;fill-opacity:1'%20d='M10%20.207c.238%200%20.457.137.563.352l2.546%205.164%205.7.828a.622.622%200%200%201%20.343%201.062l-4.12%204.02.972%205.676a.627.627%200%200%201-.906.66L10%2015.289l-5.098%202.68a.622.622%200%200%201-.906-.657l.973-5.68L.848%207.614a.62.62%200%200%201-.16-.64.628.628%200%200%201%20.503-.426l5.7-.824L9.44.559A.622.622%200%200%201%2010%20.207zm0%202.04-2.133%204.32a.626.626%200%200%201-.472.343l-4.77.692%203.453%203.367a.624.624%200%200%201%20.18.554l-.817%204.75%204.27-2.242a.607.607%200%200%201%20.578%200l4.27%202.242-.817-4.75a.624.624%200%200%201%20.18-.554l3.453-3.367-4.77-.692a.622.622%200%200%201-.472-.34zm0%200'%20/%3e%3c/svg%3e`,text:`Star`},{ariaLabel:`Watch DAShaikh10/Tic-Tac-Toe on GitHub`,href:`https://github.com/DAShaikh10/Tic-Tac-Toe/subscription`,src:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20style='stroke:none;fill-rule:nonzero;fill:%2324292f;fill-opacity:1'%20d='M12.594%209.75a2.844%202.844%200%201%201-5.688%200%202.844%202.844%200%200%201%205.688%200zm0%200'%20/%3e%3cpath%20style='stroke:none;fill-rule:nonzero;fill:%2324292f;fill-opacity:1'%20d='M9.75%202.844c2.79%200%204.977%201.246%206.543%202.633a14.632%2014.632%200%200%201%202.937%203.625c.235.402.235.894%200%201.296a14.632%2014.632%200%200%201-2.937%203.625c-1.566%201.387-3.754%202.633-6.543%202.633-2.79%200-4.977-1.246-6.543-2.633A14.632%2014.632%200%200%201%20.27%2010.398a1.284%201.284%200%200%201%200-1.296%2014.704%2014.704%200%200%201%202.937-3.625C4.773%204.09%206.961%202.844%209.75%202.844zM1.328%209.707a.082.082%200%200%200-.016.043c0%20.016.004.031.016.047.356.629%201.258%202.05%202.688%203.312%201.421%201.258%203.332%202.329%205.734%202.329s4.313-1.07%205.734-2.329a13.428%2013.428%200%200%200%202.688-3.312.075.075%200%200%200%20.015-.047.075.075%200%200%200-.015-.047%2013.5%2013.5%200%200%200-2.688-3.312c-1.421-1.258-3.332-2.329-5.734-2.329S5.437%205.13%204.016%206.392a13.428%2013.428%200%200%200-2.688%203.316zm0%200'%20/%3e%3c/svg%3e`,text:`Watch`},{ariaLabel:`Follow @DAShaikh10 on GitHub`,href:`https://github.com/DAShaikh10`,src:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20style='stroke:none;fill-rule:nonzero;fill:%2324292f;fill-opacity:1'%20d='M9.992%201.492a8.733%208.733%200%200%200-8.742%208.735%208.743%208.743%200%200%200%205.855%208.25c.457.117.387-.211.387-.434v-1.512c-2.648.309-2.758-1.445-2.933-1.738-.36-.613-1.207-.77-.957-1.063.605-.308%201.218.079%201.933%201.13.516.765%201.52.636%202.031.507.11-.457.348-.867.676-1.187-2.742-.492-3.89-2.164-3.89-4.157%200-.968.32-1.859.945-2.574-.399-1.18.035-2.191.094-2.344%201.136-.101%202.316.813%202.406.887.648-.176%201.383-.265%202.207-.265.828%200%201.566.093%202.215.27.222-.169%201.316-.954%202.37-.856.056.148.481%201.136.106%202.304.633.72.957%201.614.957%202.582%200%201.996-1.152%203.676-3.906%204.16.477.465.746%201.106.742%201.778v2.195c.016.176%200%20.348.293.348%203.461-1.164%205.953-4.43%205.953-8.281%200-4.829-3.918-8.735-8.742-8.735zm0%200'%20/%3e%3c/svg%3e`,text:`Follow @DAShaikh10`},{ariaLabel:`Figma by @anuj_uchil`,href:`https://www.figma.com/community/file/1254192154560627135`,src:`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20style='fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:%2324292f;stroke-opacity:1;stroke-miterlimit:4'%20d='M5.002%205.498a3.497%203.497%200%200%201%203.496-3.496H12V9H8.498a3.498%203.498%200%200%201-3.496-3.502zM12%202.002h3.502a3.497%203.497%200%200%201%203.496%203.496A3.498%203.498%200%200%201%2015.502%209H12zm0%200'%20transform='scale(.83333)'%20/%3e%3cpath%20style='fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:%2324292f;stroke-opacity:1;stroke-miterlimit:4'%20d='M12%2012.502a3.499%203.499%200%201%201%206.998-.006%203.499%203.499%200%200%201-6.998.006zM5.002%2019.5a3.5%203.5%200%200%201%203.496-3.502H12V19.5a3.502%203.502%200%200%201-3.502%203.502A3.5%203.5%200%200%201%205.002%2019.5zm0%200'%20transform='scale(.83333)'%20/%3e%3cpath%20style='fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:%2324292f;stroke-opacity:1;stroke-miterlimit:4'%20d='M5.002%2012.502A3.498%203.498%200%200%201%208.498%209H12v6.998H8.498a3.497%203.497%200%200%201-3.496-3.496zm0%200'%20transform='scale(.83333)'%20/%3e%3c/svg%3e`,text:`Figma by @anuj_uchil`}],o=document.getElementById(`actions`);o.innerHTML=a.map(e=>`<a
    class="action-button github"
    href=${e.href}
    aria-label=${e.ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src=${e.src} />
    <span>${e.text}</span>
  </a>`).join(``);var s=document.getElementsByClassName(`action-button`);Array.from(s).forEach(e=>{e.addEventListener(`mouseenter`,()=>e.classList.add(`hovered`)),e.addEventListener(`mouseleave`,()=>e.classList.remove(`hovered`))});function c(e){l[e].score++;let{index:t,score:n}=l[e];d[t].innerHTML=n.toString()}var l={X:{index:0,score:0},[e]:{index:1,score:0},O:{index:2,score:0}},u=document.getElementById(`score-board`);u.innerHTML=`
  <div class="score-card">
    <p>player x</p>
    <p class="score">${l.X.score}</p>
  </div>

  <div class="score-card">
    <p>draw</p>
    <p class="score">${l[e].score}</p>
  </div>

  <div class="score-card">
    <p>player o</p>
    <p class="score">${l.O.score}</p>
  </div>
`;var d=document.getElementsByClassName(`score`);function f(e){return e[0]===e[1]&&e[1]===e[2]&&e[0]!==``||e[3]===e[4]&&e[4]===e[5]&&e[3]!==``||e[6]===e[7]&&e[7]===e[8]&&e[6]!==``||e[0]===e[3]&&e[3]===e[6]&&e[0]!==``||e[1]===e[4]&&e[4]===e[7]&&e[1]!==``||e[2]===e[5]&&e[5]===e[8]&&e[2]!==``||e[0]===e[4]&&e[4]===e[8]&&e[0]!==``||e[2]===e[4]&&e[4]===e[6]&&e[2]!==``}function p(e){for(let t=0;t<e.length;t++)if(e[t]===``)return!1;return!0}var m=`data:image/webp;base64,UklGRpwBAABXRUJQVlA4WAoAAAAQAAAARAAATAAAQUxQSKEAAAAJcFZte5Y8Ed4IiwANWANIICTQBoMGmgBNoA1cBBrwRFgG/76P33pORChs27aRbMAPdNwAwNoAR5mJm9t1Tp7OawLQ7w3Ojjsgwd9kTRDAWoOCgZBwKRoZNLhMGhlF5vHzkq5onLyokeXzkpoSYXx1UzRyEPkfaFA0MA02Gn/AXqJXk2j4kyvOEm0qjR8HHoeUIOessDMG/8kIMJ58B6eaAABWUDgg1AAAAFAHAJ0BKkUATQA+kUScSiWkIqGnqNiwEglAGkZCB53ElsQbbncRf+y+PQIiJlUbY2+e0j5EKteMKU/yrGelfSVrjkAA/vCwNNaDu3/J/r/1tQFfdmSXjDpYfp9H3BGZT6atUrTW5/o/Gf4OTEmPsTEVWUc7KxxlKAe8VTYMrqKGmhtX75o/3kZSF60MEXifeAfwlA+pqftn9C//+Js4AZf6DMrOJCoLCn+XKwyVVAmc/FMvegFOd4OhEWvCnJRvCIGeMYXAkkvxMybGBfcI0c01AAAA`,h=`data:image/webp;base64,UklGRs4BAABXRUJQVlA4WAoAAAAQAAAAQwAATAAAQUxQSN0AAAABf0AgCJligSaIiAjcagdAimzbtXLq3B+IEpKBU18A0QES7pTZRwYzJCAhz7+EXyg4Eu6IHM547UJARP8nwJ7/Ch1HdlX47JVbfHO3xa8FVgJ3AguBGbc0bsp146ZcN27KdeOmXDduyp0aNhp3atho3Klho3Gnho3GnRqWjQvD0rkwLJ0Lw9K5btyuwNa/sCNwIZDOVQikcxUC6VyFQDpXIZDOVQikcxUC6VyFQDpXIZDOVQikcxUC6VyFQDpXIZDOVQikc7UncCOQCr/c+oNbvnBx+Eut3M6v2cuJAQBWUDggygAAANAHAJ0BKkQATQA+kUKdSiWjoqGnuqlAsBIJYwDR9do+a/DOAbeDn//QtvFe8hAKkjrMGNbeN7E4woMa6gCJv4RVsoRRZjuwAP7wsDPcfJM/i3oVzXO47x7WE/6KgC0BRdflaQKVk7NjWXiWpNX3mr3IoxdMiuujJJuRBLacznyD/UcZID5gFPk3w4vzwZDz2b5cYNP6ZwH3u8QA6qSFrXG4U4lC6SQJ5qSWX/QFOY4dxb8kSHCUnl+PMiOr0ll9v8WDnec3X4m0gAA=`,g=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABNCAYAAADw3qlEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKvSURBVHgB7dy9btNQGMbx5xyDhJjMHTisIAF3kN5B2RCtRHMF3EK5hG6MDCViQKJcAWVjRKgDE/XIaAYWwH45j0NM0uY7tuPz8R8SJ44U6Sd/xPLJUZhsP4lxG/saSOBJCkjzAud4k6YT743Sh3efK8gxBDE8TEQdF8NvL7gclQ9PkyOj89Is3oKnKYW+uh//kIvsU7mlRAe9S3i0yywoy29KT+Mw6SOAjIujX+aYavYfL48h8xKzgWhz5E0RmkpjmH42zxlCVbp8VDJAqKo8JcuX7Gv0IDZnItVH6KMeL/05Tc0Pt7DFMD35Ih+mrwLMFRQWYGagMN9h9LwVPsPoRSt9hdHLPuAjzFIU5hvMSijMJ5iVUVgJo+QxHL9WWguF5afpmRbZg8Mwa6Ow3+bK2mWYjVCYyzAbozBXYbZCYS7CbI3CXIOpBYW5BFMbCnMFplYU5gJM7SiMMHkuj8w9lBQW1ghKmbmLX+SyZyNMcyjMUphmUZiFMM2jMMtg2kFhFsG0h8L+waDjp+t2UZiBESUn6HDto5iKAmfocDtBQRF2n1nf2unRUztBuRHpZ+hw7aM8SRIROUKHaxfFgESR+tD1AcztoYxBLBie2g6KRSCseRTLQFizKBaCsOZQLAVhzaBYDMLqR7EchNWL4gAIqw/FERBWD4pDIGx7FMdA2HYoDoKwzVEcBWGboTgMwtZHcRyErYfiAQhbHcUTELYaikcgbDmKZyBsMYqHIGw+iqcgbDaKxyDsOornIGwaJYCU/UcJIFUjlAAyVYmiI/UOAaSqnGlHAQ8RqtJREbaQq+1m0E7H00qH6Ycm0wXOFReigx7PPH14Hsf4Fq8ve+Xuk+cysPUfF3VVgozG+I6mH8JFlsm9+L3WuCNQnIfIm2nOBJJqhZP8JwZ4m37ne38BXdUsWkcB5SEAAAAASUVORK5CYII=`,_=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABNCAYAAAAfHMJ6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKMSURBVHgB7dxPbtNAFMfx3xsHiWWP4LJmEU5AuEUElQo7lnCCqjfoDZpKUCGx4QZkyTILDjBHCNsW+zFv0pQ2/Wc39tQzb75S29TJJh859njGCmHdtJwUBR2AMAZjBxoiLN17XVRn/Bnf7UI2FfLL7L04MISZe1i6n+fQk7zX0hT0kV7u/OHfy19UvC3fg+gYOVQV7xqHsY+czxh8Mu7vBLlVRK8NcpcReJlBrmVsBrlSVdWHGeQiAzcW+WbzHiIJxvlXeySPR1CeYf5wfmpnl/9DcZsYfhuUdhuG3w6F3YXhn4Oy7sPwz0NRD2H410BJTTD866Cgphj+tUi8NhhSsgMzdtODdc1vqtPV1GDTktxD1hhoiSElB7INhpQUyLYYUjIgXWBISYB0hSFFD9IlhhQ1SNcYUrQgfWBIUYIwYPvAkKIbqXqMymG4CWH0UFR7SN8YUjQgITCkKEBCYUiDBwmJIQ0aJDSGNGgQYj4MiSEN9rTr944WM11dNdg9hJjmeILyYvdGgwVh4jGeoOF+ZIDxaFpOELhhn3YLOsa0LBGwoR9DyqKgnyFRYjioBkWJ5SwTDCWm024QlNjGIb2jxDgw6xUl1pFqbygxD917QYn9WqZzlBQu7jpFSeVqtzOUlC7/O0FJbT5ka5QUJ4i2Qkl1xuzRKClPIT4KJfU51dYoGiaZW6FomXVvjKJpGaIRirZ1mQdRNC5U3YuideXuThTNS5m3omhf272Bkhe7N1CoeLfLyEm2esav8h7yv9Kcrb5hJncREe1nkI0Mgy1yPncwXRoQTpBbVfOJqUc4kjv+oDx/1yPjh8HMLuXmWN0oPF/fIExXN4/2ykldK/peM3LHDMLi7xc7X2/6B5JgNz02XTW1AAAAAElFTkSuQmCC`;function v(e=null){b.innerHTML=`
    <picture>
      <source srcset=${m} />
      <img src=${g} alt="" />
    </picture>
    ${e===null?`<p>Game Over. Its a Draw!</p>`:`<p>Game Over. Player ${e} Wins!</p>`}
    <picture>
      <source srcset=${h} />
      <img src=${_} alt="" />
    </picture>
  `}function y(){b.innerHTML=``}var b=document.getElementById(`toast`);function x(e,t){F[e]=t}function S(){F.fill(``)}function C(){L.forEach(e=>e.disabled=!0)}function w(){L.forEach(e=>{e.disabled=!1,e.innerText=``,e.classList.remove(`o`,`x`)})}function T(){R.innerText=`X `+r,R.classList.add(r,i),w(),S(),y()}function E(){R.addEventListener(`click`,T,{once:!0})}function D(){R.innerText=t,R.classList.remove(r,n,i),E()}function O(){R.innerText=P+` `+r,R.classList.remove(n,i),R.classList.add(P===`X`?i:n)}function k(){P=P===`X`?`O`:`X`}function A(){P=`X`}function j(){A(),C(),D()}function M(){return f(F)?(v(P),c(P===`X`?`X`:`O`),j(),!0):p(F)?(v(),c(e),j(),!0):!1}function N(){L.forEach((e,t)=>e.addEventListener(`click`,()=>{x(t,P),e.innerText=P,e.disabled=!0,e.classList.add(P===`X`?`x`:`o`),M()||(k(),O())}))}var P=`X`,F=Array(9).fill(``),I=document.getElementById(`board`);I.innerHTML=`
  <table>
    <tbody>
      <tr>
        ${F.slice(0,3).map(e=>`
          <td>
            <button disabled=true>${e}</button>
          </td>
        `).join(``)}
      </tr>

      <tr>
        ${F.slice(3,6).map(e=>`
          <td>
            <button disabled=true>${e}</button>
          </td>
        `).join(``)}
      </tr>

      <tr>
        ${F.slice(6).map(e=>`
          <td>
            <button disabled=true>${e}</button>
          </td>
        `).join(``)}
      </tr>
    </tbody>
  </table>
`;var L=document.querySelectorAll(`td > button`);N();var R=document.getElementById(`game-button`);D();