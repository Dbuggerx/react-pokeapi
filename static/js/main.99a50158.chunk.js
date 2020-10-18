(this["webpackJsonpreact-pokeapi"]=this["webpackJsonpreact-pokeapi"]||[]).push([[0],{62:function(e,t,a){e.exports=a(98)},75:function(e,t,a){},78:function(e,t,a){var o={"./de.json":79,"./en.json":54,"./fr.json":80,"./ja.json":81,"./ko.json":82,"./ru.json":83,"./zh-hans.json":84,"./zh-hant.json":85};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=r,e.exports=n,n.id=78},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(34),c=a(14),l=a(22),s=a(6),i=(a(71),a(4)),d=a(17),m=(a(75),e=>n.a.createElement("form",{onSubmit:t=>{e.onChoose(),t.preventDefault()},className:"search"},n.a.createElement("input",{type:"search",list:"pokemonNames",placeholder:"Search",value:e.selectedName,onChange:t=>{e.onType(t.target.value)},className:"search__input"}),n.a.createElement("datalist",{id:"pokemonNames"},e.suggestions.map(e=>n.a.createElement("option",{key:e,value:e}))),n.a.createElement("button",{type:"submit",className:"search__button"},"Go"))),p=c.c,u=a(21),g=a(56),h=a.n(g),v=a(33),f=a.n(v),k=a(27);class y{constructor(e){this.val=void 0,this.children=void 0,this.isWord=void 0,this.val=e,this.children={},this.isWord=!1}insert(e){var t,a=this,o=Object(k.a)(e);try{for(o.s();!(t=o.n()).done;){var n=t.value;a.children[n]=a.children[n]||new y(n),a=a.children[n]}}catch(r){o.e(r)}finally{o.f()}a.isWord=!0}remove(e){var t,a=this,o=[a],n=Object(k.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,c=a.children[r];if(!c)return!1;a=c,o.push(a)}}catch(d){n.e(d)}finally{n.f()}var l=o.pop();for(l&&(l.isWord=!1);o.length;){var s,i=o.pop();(null===(s=l)||void 0===s?void 0:s.val)&&!l.isWord&&0===Object.keys(l.children).length&&(null===i||void 0===i||delete i.children[l.val]),l=i}return!0}searchNode(e){var t,a=this,o=Object(k.a)(e);try{for(o.s();!(t=o.n()).done;){var n=t.value,r=a.children[n];if(!r)return!1;a=r}}catch(c){o.e(c)}finally{o.f()}return a}search(e,t){var a=this.searchNode(e);return!!a&&(!!t||a.isWord)}startsWith(e){return this.search(e,!0)}getAllWords(e="",t=this){var a=this;return f.a.mark((function o(){var n,r,c;return f.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}return o.abrupt("return");case 2:if(!t.isWord){o.next=5;break}return o.next=5,e;case 5:n=0,r=Object.keys(t.children);case 6:if(!(n<r.length)){o.next=12;break}return c=r[n],o.delegateYield(a.getAllWords("".concat(e).concat(c),t.children[c]),"t0",9);case 9:n++,o.next=6;break;case 12:case"end":return o.stop()}}),o)}))()}autocomplete(e=""){var t=this;return f.a.mark((function a(){var o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(o=t.searchNode(e))){a.next=3;break}return a.delegateYield(t.getAllWords(e,o),"t0",3);case 3:case"end":return a.stop()}}),a)}))()}}var b=h.a.all("en").reduce((e,t)=>(e.insert(t.toLowerCase()),e),new y),E=Object(u.b)({name:"filteredPokemonNames",initialState:{name:"",suggestions:[]},reducers:{updateSuggestions:(e,t)=>{var a;(null===(a=t.payload)||void 0===a?void 0:a.length)?(e.name=t.payload,e.suggestions=Array.from(b.autocomplete(t.payload.toLowerCase())).sort()):(e.name="",e.suggestions=[])}}}),N=E.actions,_=E.reducer,P=a(61),j="/list",O={path:"/pokemon/:pokemonName",generate(e){return Object(s.f)(this.path,Object(P.a)({},e))}};var w=()=>{!function(){var e=Object(c.b)();n.a.useEffect(()=>{e(N.updateSuggestions())},[e])}();var e=function(){var e=Object(c.b)();return n.a.useCallback(t=>{e(N.updateSuggestions(t))},[e])}(),t=function(){var e=Object(s.h)(),t=p(e=>e.filteredPokemonNames);return()=>{t.name.trim().length>0&&e.push(O.generate({pokemonName:t.name}))}}(),a=p(e=>e.filteredPokemonNames);return n.a.createElement("div",null,n.a.createElement(m,{selectedName:a.name,suggestions:a.suggestions,onType:e,onChoose:t}))},x=a(60);a(88);var C=e=>{var t=function(){var e=n.a.useState(!1),t=Object(x.a)(e,2),a=t[0],o=t[1];return n.a.useLayoutEffect(()=>{function e(e){o(e.target.scrollTop>0)}return document.addEventListener("scroll",e,!0),()=>{document.removeEventListener("scroll",e,!0)}},[]),n.a.useLayoutEffect(()=>{var e=new MutationObserver((e,t)=>{o(!1)});return e.observe(document.body,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[]),a}();return n.a.createElement("header",{className:"header ".concat(t?"header--scrolled":"")},n.a.createElement("a",{href:"https://github.com/PokeAPI/pokeapi",target:"_blank",rel:"noopener noreferrer",className:"header__logo"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true",alt:"PokeAPI"})),n.a.createElement("div",{className:"header__search"},n.a.createElement(s.b,{path:O.path},n.a.createElement("button",{title:"Go back",className:"header__back-button",onClick:e.goBack},n.a.createElement(d.a,{icon:i.a,size:"2x"}))),n.a.createElement(w,null)))};function S(){var e;null===(e=document.querySelector("meta[name=theme-color]"))||void 0===e||e.setAttribute("content",getComputedStyle(document.documentElement).getPropertyValue("--accent-color"))}a(89);var D=e=>{var t;return t=e.color,n.a.useEffect(()=>{if(t){var e=getComputedStyle(document.documentElement).getPropertyValue("--accent-color"),a=getComputedStyle(document.documentElement).getPropertyValue("--accent-text-color"),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-color-highlight");switch(t){case"black":document.documentElement.style.setProperty("--accent-text-color","white"),document.documentElement.style.setProperty("--accent-color","black"),document.documentElement.style.setProperty("--accent-color-highlight","grey");break;case"blue":document.documentElement.style.setProperty("--accent-color","#3a86ff"),document.documentElement.style.setProperty("--accent-color-highlight","#2366D1");break;case"brown":document.documentElement.style.setProperty("--accent-color","#a12727"),document.documentElement.style.setProperty("--accent-color-highlight","#831313");break;case"gray":document.documentElement.style.setProperty("--accent-color","#525252"),document.documentElement.style.setProperty("--accent-color-highlight","#362d2d");break;case"green":document.documentElement.style.setProperty("--accent-color","#77c360"),document.documentElement.style.setProperty("--accent-color-highlight","#498e35");break;case"pink":document.documentElement.style.setProperty("--accent-color","#ff8196"),document.documentElement.style.setProperty("--accent-color-highlight","#cc4c61");break;case"purple":document.documentElement.style.setProperty("--accent-color","#800080"),document.documentElement.style.setProperty("--accent-color-highlight","#620b62");break;case"red":document.documentElement.style.setProperty("--accent-color","#f53e2a"),document.documentElement.style.setProperty("--accent-color-highlight","#b72a1a");break;case"white":document.documentElement.style.setProperty("--accent-text-color","black"),document.documentElement.style.setProperty("--accent-color","white"),document.documentElement.style.setProperty("--accent-color-highlight","grey");break;case"yellow":document.documentElement.style.setProperty("--accent-text-color","#695f00"),document.documentElement.style.setProperty("--accent-color","#fffb10"),document.documentElement.style.setProperty("--accent-color-highlight","#d1cc3e")}return S(),()=>{document.documentElement.style.setProperty("--accent-text-color",a),document.documentElement.style.setProperty("--accent-color",e),document.documentElement.style.setProperty("--accent-color-highlight",o),S()}}},[t]),n.a.createElement("div",{className:"pokemon-details"},n.a.createElement("article",{className:"pokemon-details__content"},n.a.createElement("header",{className:"pokemon-details__header"},n.a.createElement("h1",{className:"pokemon-details__name"},e.pokemonName),n.a.createElement("aside",{title:"Pokemon ID"},"#",e.pokemonId)),n.a.createElement("section",{className:"pokemon-details__images"},e.images),n.a.createElement("section",{className:"pokemon-details__types"},e.types),n.a.createElement("section",{className:"pokemon-details__description"},n.a.createElement("div",{className:"pokemon-details__section-title"},e.descriptionTitle),n.a.createElement("div",{className:"pokemon-details__descrition-text"},e.description)),n.a.createElement("section",{className:"pokemon-details__profile"},n.a.createElement("div",{className:"pokemon-details__section-title"},"Profile"),e.profile),n.a.createElement("section",{className:"pokemon-details__abilities"},n.a.createElement("div",{className:"pokemon-details__section-title"},"Abilities"),e.abilities),n.a.createElement("section",{className:"pokemon-details__stats"},n.a.createElement("div",{className:"pokemon-details__section-title"},"Stats"),e.stats),n.a.createElement("div",{className:"pokemon-details__background",style:{backgroundImage:"url(".concat(e.backgroundImageUrl,")")}})))},F=(a(90),({pokemonType:e,compact:t})=>{var a=null,o="";switch(e){case"fighting":a=i.l,o="pokemon-type-pill--fighting";break;case"flying":a=i.g,o="pokemon-type-pill--flying";break;case"poison":a=i.v,o="pokemon-type-pill--poison";break;case"ground":a=i.s,o="pokemon-type-pill--ground";break;case"rock":a=i.m,o="pokemon-type-pill--rock";break;case"bug":a=i.c,o="pokemon-type-pill--bug";break;case"ghost":a=i.n,o="pokemon-type-pill--ghost";break;case"steel":a=i.i,o="pokemon-type-pill--steel";break;case"fire":a=i.k,o="pokemon-type-pill--fire";break;case"water":a=i.x,o="pokemon-type-pill--water";break;case"grass":a=i.u,o="pokemon-type-pill--grass";break;case"electric":a=i.b,o="pokemon-type-pill--electric";break;case"psychic":a=i.o,o="pokemon-type-pill--psychic";break;case"ice":a=i.p,o="pokemon-type-pill--ice";break;case"dragon":a=i.h,o="pokemon-type-pill--dragon";break;case"dark":a=i.e,o="pokemon-type-pill--dark";break;case"fairy":a=i.q,o="pokemon-type-pill--fairy";break;case"unknown":a=i.t,o="pokemon-type-pill--unknown";break;case"shadow":a=i.r,o="pokemon-type-pill--shadow";break;default:a=i.f}return n.a.createElement("div",{className:"pokemon-type-pill ".concat(t?"pokemon-type-pill--compact":""," ").concat(o),title:t?e:void 0},a&&n.a.createElement("div",{className:"pokemon-type-pill__icon"},n.a.createElement(d.a,{icon:a})),!t&&e)}),z=(a(91),({message:e})=>n.a.createElement("div",{className:"error-message","data-testid":"error"},n.a.createElement(d.a,{icon:i.j,size:"2x"}),e)),L=(a(92),()=>n.a.createElement("div",{className:"loading-spinner","data-testid":"loading"},n.a.createElement(d.a,{icon:i.w,size:"4x"}))),I=({state:e})=>e?e.error?n.a.createElement(z,{message:e.error}):e.loading?n.a.createElement(L,null):e.data?null:n.a.createElement(z,{message:"No data"}):n.a.createElement(z,{message:"No data"}),T=Object(u.b)({name:"pokemonData",initialState:{loading:!1,error:void 0,data:void 0,species:{loading:!1,error:void 0,data:void 0}},reducers:{fetchData:(e,t)=>({loading:!0,error:void 0,data:void 0,species:{loading:!1,error:void 0,data:void 0}}),dataFetched:(e,t)=>{e.loading=!1,e.error=void 0,e.data=t.payload},setError:(e,t)=>{e.loading=!1,e.error=t.payload,e.data=void 0},clearData:()=>({loading:!1,data:void 0,error:void 0,species:{loading:!1,error:void 0,data:void 0}}),fetchSpecies:(e,t)=>{e.species={loading:!0,error:void 0,data:void 0}},speciesFetched:(e,t)=>{e.species={loading:!1,error:void 0,data:t.payload}},setSpeciesError:(e,t)=>{e.species={loading:!1,error:t.payload,data:void 0}}}}),A=a(106),W=a(3),M=a(58),B=a(101),U=a(102),H=a(57),V=a(103),R=a(42);class q extends Error{constructor(e){super(e.status.toString())}}var G=Object(A.a)((e,t,{observableFetch:a})=>e.pipe(Object(B.a)(J.fetchData.match),Object(U.a)(e=>{var t="url"in e.payload?e.payload.url:"https://pokeapi.co/api/v2/pokemon/".concat(e.payload.name.toLowerCase(),"/");return a(t).pipe(Object(H.a)(e=>new W.a(t=>{t.next(J.dataFetched(e)),t.next(J.fetchSpecies(e.species.url))})),Object(V.a)(e=>Object(M.a)(J.setError(e instanceof q&&"404"===e.message?"Nothing found":e.message||e))))})),(e,t,{observableFetch:a})=>e.pipe(Object(B.a)(J.fetchSpecies.match),Object(U.a)(e=>a(e.payload).pipe(Object(R.a)(e=>J.speciesFetched(e)),Object(V.a)(e=>Object(M.a)(J.setSpeciesError(e instanceof q&&"404"===e.message?"Nothing found":e.message||e))))))),J=T.actions,Y=T.reducer;var K=()=>{var e,t,a,o,r,l,i,d,m;!function(){var e=Object(c.b)(),t=Object(s.j)().pokemonName;n.a.useEffect(()=>{e(J.fetchData({name:t.toLowerCase()}))},[e,t])}();var u=p(e=>e.pokemonData),g=u.data&&Object.entries(u.data.sprites).filter(e=>"string"===typeof e[1]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,{state:u}),u.data&&n.a.createElement(D,{backgroundImageUrl:null===u||void 0===u||null===(e=u.data)||void 0===e?void 0:e.sprites.other.dream_world.front_default,pokemonName:u.data.name,pokemonId:u.data.id,images:n.a.createElement(n.a.Fragment,null,null===g||void 0===g?void 0:g.map(e=>n.a.createElement("img",{src:e[1],alt:e[0],key:e[0]}))),color:null===(t=u.species.data)||void 0===t?void 0:t.color.name,types:n.a.createElement(n.a.Fragment,null,u.data.types.map(e=>n.a.createElement(F,{pokemonType:e.type.name,key:e.type.name}))),descriptionTitle:null===(a=u.species.data)||void 0===a||null===(o=a.genera.find(e=>"en"===e.language.name))||void 0===o?void 0:o.genus,description:n.a.createElement(n.a.Fragment,null,u.species.data&&Array.from(u.species.data.flavor_text_entries.filter(e=>"en"===e.language.name).map(e=>e.flavor_text.replace(/\r?\n|\r|\u000c/gm," ")).reduce((e,t)=>e.set(t.toLowerCase().substring(0,10),t),new Map).values()).reduce((e,t,a)=>(e.push(n.a.createElement("span",{key:a},e.length>0&&n.a.createElement("br",null),t)),e),[])),profile:n.a.createElement("ul",null,n.a.createElement("li",null,"Height: ",u.data.height/10,"m"),n.a.createElement("li",null,"Weight: ",u.data.weight/10,"kg"),(null===(r=u.species.data)||void 0===r?void 0:r.shape.name)&&n.a.createElement("li",null,"Shape: ",null===(l=u.species.data)||void 0===l?void 0:l.shape.name),(null===(i=u.species.data)||void 0===i||null===(d=i.habitat)||void 0===d?void 0:d.name)&&n.a.createElement("li",null,"Habitat: ",null===(m=u.species.data)||void 0===m?void 0:m.habitat.name)),abilities:n.a.createElement("ul",null,u.data.abilities.map(e=>n.a.createElement("li",{key:e.ability.name,title:e.is_hidden?"Hidden ability":"Normal ability"},e.ability.name))),stats:n.a.createElement("ul",null,u.data.stats.map(e=>n.a.createElement("li",{key:e.stat.name},e.stat.name,": ",e.base_stat)))}))},Q=(a(93),n.a.forwardRef(({children:e},t)=>n.a.createElement("div",{className:"card-layout",ref:t},n.a.createElement("article",{className:"card-layout__content"},n.a.Children.map(e,e=>n.a.cloneElement(e)))))),X=(a(94),({children:e})=>n.a.createElement("footer",{className:"footer"},e,n.a.createElement("a",{className:"footer__info",href:"https://www.linkedin.com/in/danilocestari",target:"_blank",rel:"noopener noreferrer"},"Developed by ",n.a.createElement("strong",null,"Danilo Cestari")))),Z=(a(95),e=>n.a.createElement("div",{className:"pagination"},n.a.createElement("div",{className:"pagination__button-left",onClick:e.onPrev,"data-testid":"pagination-button-left"},n.a.createElement(d.a,{icon:i.d,size:"2x"})),n.a.createElement("span",{"data-testid":"pagination-values"},"page ",e.currentPage," of ",e.pageCount),n.a.createElement("div",{className:"pagination__button-right",onClick:e.onNext,"data-testid":"pagination-button-right"},n.a.createElement(d.a,{icon:i.d,size:"2x"})))),$=(a(96),({images:e,alt:t})=>{if(!e)return null;var a=e.other["official-artwork"].front_default;return a&&n.a.createElement("img",{src:a,alt:t,"data-testid":"pokemon-image",className:"pokemon-card__image"})}),ee=()=>n.a.createElement("svg",{style:{display:"none"}},n.a.createElement("defs",null,n.a.createElement("path",{id:"circlePath",d:"M 0, 25 a 25,25 0 1,1 50,0"}))),te=e=>{var t,a,o,r,c,l,s=null===(t=e.details)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.sprites.other["official-artwork"].front_default;return n.a.createElement("section",{className:"pokemon-card",onClick:e.onClick,"data-testid":"card"},n.a.createElement("svg",{viewBox:"0 0 50 50",className:"pokemon-card__curved-text"},n.a.createElement("text",{textAnchor:"middle"},n.a.createElement("textPath",{xlinkHref:"#circlePath",startOffset:"50%","data-testid":"pokemon-name"},e.pokemonName))),n.a.createElement("div",{className:"pokemon-card__status"},n.a.createElement(I,{state:e.details})),n.a.createElement($,{images:null===(o=e.details)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.sprites,alt:e.pokemonName}),n.a.createElement("div",{className:"pokemon-card__types"},null===(c=e.details)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.types.map(e=>n.a.createElement(F,{compact:!0,pokemonType:e.type.name,key:e.type.name}))),n.a.createElement("div",{className:"pokemon-card__background",style:{backgroundImage:"url(".concat(s,")")}}))},ae={loading:!1,error:void 0,pageCount:0,currentPage:0,data:void 0,details:{}},oe=Object(u.b)({name:"pokemonPage",initialState:ae,reducers:{fetchPage:(e,t)=>{e.loading=!0,e.data=void 0,e.error=void 0,e.details={}},pageFetched:(e,t)=>{e.loading=!1,e.data=t.payload.page,e.pageCount=Math.ceil(t.payload.page.count/t.payload.size),e.currentPage=e.pageCount-Math.ceil((t.payload.page.count-t.payload.offset)/t.payload.size)+1},setError:(e,t)=>{e.error=t.payload},fetchDetails:(e,t)=>{e.details[t.payload]={loading:!0,error:void 0,data:void 0}},setDetailsError:(e,t)=>{e.details[t.payload.pokemonName]={loading:!1,error:t.payload.error,data:void 0}},detailsFetched:(e,t)=>{e.details[t.payload.pokemonName]={loading:!1,error:void 0,data:t.payload.data}}}}),ne=Object(A.a)((e,t,{observableFetch:a})=>e.pipe(Object(B.a)(re.fetchPage.match),Object(U.a)(e=>{var t,o,n="url"in e.payload?(e=>{var t=new URL(e);return{url:e,size:parseInt(t.searchParams.get("limit"),10),offset:parseInt(t.searchParams.get("offset"),10)}})(e.payload.url):(t=e.payload.offset,o=e.payload.size,{url:"https://pokeapi.co/api/v2/pokemon?offset=".concat(t,"&limit=").concat(o),size:o,offset:t});return a(n.url).pipe(Object(H.a)(e=>new W.a(t=>{t.next(re.pageFetched({page:e,size:n.size,offset:n.offset}));var a,o=Object(k.a)(e.results);try{for(o.s();!(a=o.n()).done;){var r=a.value;t.next(re.fetchDetails(r.name))}}catch(c){o.e(c)}finally{o.f()}})),Object(V.a)(e=>Object(M.a)(re.setError(e instanceof q&&"404"===e.message?"Nothing found":e.message||e))))})),(e,t,{observableFetch:a})=>e.pipe(Object(B.a)(re.fetchDetails.match),Object(H.a)(e=>{var t="https://pokeapi.co/api/v2/pokemon/".concat(e.payload.toLowerCase(),"/");return a(t).pipe(Object(R.a)(t=>re.detailsFetched({pokemonName:e.payload,data:t})),Object(V.a)(t=>Object(M.a)(re.setDetailsError({pokemonName:e.payload,error:t instanceof q&&"404"===t.message?"Nothing found":t.message||t}))))}))),re=oe.actions,ce=oe.reducer;var le=()=>{var e=n.a.useRef(null);!function(){var e=Object(c.b)(),t=p(e=>e.pokemonPage);n.a.useEffect(()=>{0===t.currentPage&&e(re.fetchPage({offset:0,size:20}))},[e,t.currentPage]),n.a.useEffect(()=>{e(J.clearData())},[e])}();var t=p(e=>e.pokemonPage),a=function(e){var t=Object(s.h)(),a=Object(s.i)();return n.a.useLayoutEffect(()=>{var t,o=null===a||void 0===a?void 0:a.state;(null===o||void 0===o?void 0:o.scrollTop)&&(null===(t=e.current)||void 0===t||t.scrollBy(0,null===o||void 0===o?void 0:o.scrollTop))},[a,e]),o=>{var n;t.replace(a.pathname,{scrollTop:null===(n=e.current)||void 0===n?void 0:n.scrollTop}),t.push(O.generate({pokemonName:o}))}}(e),o=function(){var e=Object(c.b)(),t=p(e=>e.pokemonPage);return{fetchPrevPage:()=>{var a;(null===(a=t.data)||void 0===a?void 0:a.previous)&&e(re.fetchPage({url:t.data.previous}))},fetchNextPage:()=>{var a;(null===(a=t.data)||void 0===a?void 0:a.next)&&e(re.fetchPage({url:t.data.next}))}}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,{state:t}),t.data&&n.a.createElement(n.a.Fragment,null,n.a.createElement(ee,null),n.a.createElement(Q,{ref:e},t.data.results.map(e=>n.a.createElement(te,{key:e.name,pokemonName:e.name,details:t.details[e.name],onClick:()=>{a(e.name)}})))),n.a.createElement(X,null,n.a.createElement(Z,{currentPage:t.currentPage,pageCount:t.pageCount,onPrev:o.fetchPrevPage,onNext:o.fetchNextPage})))};a(97);function se(){var e=Object(s.h)();return o.createElement("div",{className:"App"},o.createElement(C,{goBack:()=>{e.length>2?e.goBack():e.push(j)}}),o.createElement(s.d,null,o.createElement(s.b,{path:O.path,component:K}),o.createElement(s.b,{path:j,component:le}),o.createElement(s.a,{exact:!0,to:j})))}var ie=a(105),de=a(11),me=Object(de.c)({pokemonPage:ce,pokemonData:Y,filteredPokemonNames:_}),pe=[ne,G],ue=(e,t,a)=>Object(A.a)(...pe)(e,t,a).pipe(Object(V.a)((e,t)=>(console.error(e),t))),ge=a(104),he=a(59),ve=(...e)=>ge.a.apply(void 0,e).pipe(Object(U.a)(e=>e.ok?e.json():Object(he.a)(new q(e))));var fe=document.getElementById("root");Object(r.render)(o.createElement(o.StrictMode,null,o.createElement(l.a,{basename:"/react-pokeapi"},o.createElement(c.a,{store:function(e,t=!1){var a=Object(ie.a)({dependencies:{observableFetch:ve}}),o=[a],n=Object(u.a)({reducer:me,middleware:t?[]:o,preloadedState:e});return t||a.run(ue),n}()},o.createElement(se,null)))),fe)}},[[62,1,2]]]);
//# sourceMappingURL=main.99a50158.chunk.js.map