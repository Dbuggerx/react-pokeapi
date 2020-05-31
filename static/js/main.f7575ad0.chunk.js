(this["webpackJsonpreact-pokeapi"]=this["webpackJsonpreact-pokeapi"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(36),i=t(14),c=t(19),l=(t(106),t(22)),s=t(113),u=t(11),d={loading:!1,error:void 0,pageCount:0,currentPage:0,data:void 0,details:{}},m=Object(l.b)({name:"pokemonPage",initialState:d,reducers:{fetchPage:function(e,a){e.loading=!0,e.data=void 0,e.error=void 0,e.details={}},pageFetched:function(e,a){e.loading=!1,e.data=a.payload.page,e.pageCount=Math.ceil(a.payload.page.count/a.payload.size),e.currentPage=e.pageCount-Math.ceil((a.payload.page.count-a.payload.offset)/a.payload.size)+1},setError:function(e,a){e.error=a.payload},fetchDetails:function(e,a){e.details[a.payload]={loading:!0,error:void 0,data:void 0}},setDetailsError:function(e,a){e.details[a.payload.pokemonName]={loading:!1,error:a.payload.error,data:void 0}},detailsFetched:function(e,a){e.details[a.payload.pokemonName]={loading:!1,error:void 0,data:a.payload.data}}}}),p=t(60),f=t(109),g=t(110),k=t(63),v=t(111),b=t(46),h=t(3),E=t(64),y=t(61),N=t(62),_=t(67),j=t(68),O=function(e){Object(N.a)(t,e);var a=Object(_.a)(t);function t(e){return Object(y.a)(this,t),a.call(this,e.status.toString())}return t}(Object(j.a)(Error)),P=t(114),w=Object(P.a)((function(e,a,t){var n=t.observableFetch;return e.pipe(Object(f.a)(x.fetchPage.match),Object(g.a)((function(e){var a,t,o="url"in e.payload?function(e){var a=new URL(e);return{url:e,size:parseInt(a.searchParams.get("limit"),10),offset:parseInt(a.searchParams.get("offset"),10)}}(e.payload.url):(a=e.payload.offset,t=e.payload.size,{url:"https://pokeapi.co/api/v2/pokemon?offset=".concat(a,"&limit=").concat(t),size:t,offset:a});return n(o.url).pipe(Object(k.a)((function(e){return new h.a((function(a){a.next(x.pageFetched({page:e,size:o.size,offset:o.offset}));var t,n=Object(p.a)(e.results);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.next(x.fetchDetails(r.name))}}catch(i){n.e(i)}finally{n.f()}}))})),Object(v.a)((function(e){return Object(E.a)(x.setError(e instanceof O&&"404"===e.message?"Nothing found":e.message||e))})))})))}),(function(e,a,t){var n=t.observableFetch;return e.pipe(Object(f.a)(x.fetchDetails.match),Object(k.a)((function(e){var a="https://pokeapi.co/api/v2/pokemon/".concat(e.payload.toLowerCase(),"/");return n(a).pipe(Object(b.a)((function(a){return x.detailsFetched({pokemonName:e.payload,data:a})})),Object(v.a)((function(a){return Object(E.a)(x.setDetailsError({pokemonName:e.payload,error:a instanceof O&&"404"===a.message?"Nothing found":a.message||a}))})))})))})),x=m.actions,C=m.reducer,D=Object(l.b)({name:"pokemonData",initialState:{loading:!1,error:void 0,data:void 0,species:{loading:!1,error:void 0,data:void 0}},reducers:{fetchData:function(e,a){return{loading:!0,error:void 0,data:void 0,species:{loading:!1,error:void 0,data:void 0}}},dataFetched:function(e,a){e.loading=!1,e.error=void 0,e.data=a.payload},setError:function(e,a){e.loading=!1,e.error=a.payload,e.data=void 0},clearData:function(){return{loading:!1,data:void 0,error:void 0,species:{loading:!1,error:void 0,data:void 0}}},fetchSpecies:function(e,a){e.species={loading:!0,error:void 0,data:void 0}},speciesFetched:function(e,a){e.species={loading:!1,error:void 0,data:a.payload}},setSpeciesError:function(e,a){e.species={loading:!1,error:a.payload,data:void 0}}}}),F=Object(P.a)((function(e,a,t){var n=t.observableFetch;return e.pipe(Object(f.a)(S.fetchData.match),Object(g.a)((function(e){var a="url"in e.payload?e.payload.url:"https://pokeapi.co/api/v2/pokemon/".concat(e.payload.name.toLowerCase(),"/");return n(a).pipe(Object(k.a)((function(e){return new h.a((function(a){a.next(S.dataFetched(e)),a.next(S.fetchSpecies(e.species.url))}))})),Object(v.a)((function(e){return Object(E.a)(S.setError(e instanceof O&&"404"===e.message?"Nothing found":e.message||e))})))})))}),(function(e,a,t){var n=t.observableFetch;return e.pipe(Object(f.a)(S.fetchSpecies.match),Object(g.a)((function(e){return n(e.payload).pipe(Object(b.a)((function(e){return S.speciesFetched(e)})),Object(v.a)((function(e){return Object(E.a)(S.setSpeciesError(e instanceof O&&"404"===e.message?"Nothing found":e.message||e))})))})))})),S=D.actions,z=D.reducer,I=t(65),L=t.n(I).a.all("en").reduce((function(e,a){var t=a[0].toLowerCase();return e[t]||(e[t]=[]),e[t].push(a),e}),{}),A=Object(l.b)({name:"filteredPokemonNames",initialState:{name:"",suggestions:[]},reducers:{updateSuggestions:function(e,a){var t,n;(null===(t=a.payload)||void 0===t?void 0:t.length)?(e.name=a.payload,e.suggestions=(null===(n=L[a.payload[0].toLowerCase()])||void 0===n?void 0:n.filter((function(e){return e.toLowerCase().startsWith(a.payload.toLowerCase())})).sort())||[]):(e.name="",e.suggestions=[])}}}),T=A.actions,M=A.reducer,U=Object(u.c)({pokemonPage:C,pokemonData:z,filteredPokemonNames:M}),H=[w,F],B=function(e,a,t){return P.a.apply(void 0,H)(e,a,t).pipe(Object(v.a)((function(e,a){return console.error(e),a})))},G=t(112),J=t(66),W=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return G.a.apply(void 0,a).pipe(Object(g.a)((function(e){return e.ok?e.json():Object(J.a)(new O(e))})))};var q=t(6),R=i.c;t(90);var K=function(e){var a="";switch(e.color){case"black":a="pokemon-details--black";break;case"blue":a="pokemon-details--blue";break;case"brown":a="pokemon-details--brown";break;case"gray":a="pokemon-details--gray";break;case"green":a="pokemon-details--green";break;case"pink":a="pokemon-details--pink";break;case"purple":a="pokemon-details--purple";break;case"red":a="pokemon-details--red";break;case"white":a="pokemon-details--white";break;case"yellow":a="pokemon-details--yellow"}return o.a.createElement("div",{className:"pokemon-details ".concat(a)},o.a.createElement("article",{className:"pokemon-details__content"},o.a.createElement("header",{className:"pokemon-details__header"},e.pokemonName,o.a.createElement("aside",{title:"Pokemon ID"},"#",e.pokemonId)),o.a.createElement("section",{className:"pokemon-details__images"},e.images),o.a.createElement("section",{className:"pokemon-details__types"},e.types),o.a.createElement("section",{className:"pokemon-details__description"},o.a.createElement("div",{className:"pokemon-details__section-title"},e.descriptionTitle),o.a.createElement("div",{className:"pokemon-details__descrition-text"},e.description)),o.a.createElement("section",{className:"pokemon-details__profile"},o.a.createElement("div",{className:"pokemon-details__section-title"},"Profile"),e.profile),o.a.createElement("section",{className:"pokemon-details__abilities"},o.a.createElement("div",{className:"pokemon-details__section-title"},"Abilities"),e.abilities),o.a.createElement("section",{className:"pokemon-details__stats"},o.a.createElement("div",{className:"pokemon-details__section-title"},"Stats"),e.stats),o.a.createElement("div",{className:"pokemon-details__background",style:{backgroundImage:"url(".concat(e.backgroundImageUrl,")")}})))},Q=t(16),V=t(4),X=(t(94),function(e){var a=e.message;return o.a.createElement("div",{className:"error-message","data-testid":"error"},o.a.createElement(Q.a,{icon:V.j,size:"2x"}),a)}),Y=(t(95),function(){return o.a.createElement("div",{className:"loading-spinner","data-testid":"loading"},o.a.createElement(Q.a,{icon:V.w,size:"4x"}))}),Z=function(e){var a=e.state;return a?a.error?o.a.createElement(X,{message:a.error}):a.loading?o.a.createElement(Y,null):a.data?null:o.a.createElement(X,{message:"No data"}):o.a.createElement(X,{message:"No data"})},$=(t(96),function(e){var a=e.pokemonType,t=e.compact,n=null,r="";switch(a){case"fighting":n=V.l,r="pokemon-type-pill--fighting";break;case"flying":n=V.g,r="pokemon-type-pill--flying";break;case"poison":n=V.v,r="pokemon-type-pill--poison";break;case"ground":n=V.s,r="pokemon-type-pill--ground";break;case"rock":n=V.m,r="pokemon-type-pill--rock";break;case"bug":n=V.c,r="pokemon-type-pill--bug";break;case"ghost":n=V.n,r="pokemon-type-pill--ghost";break;case"steel":n=V.i,r="pokemon-type-pill--steel";break;case"fire":n=V.k,r="pokemon-type-pill--fire";break;case"water":n=V.x,r="pokemon-type-pill--water";break;case"grass":n=V.u,r="pokemon-type-pill--grass";break;case"electric":n=V.b,r="pokemon-type-pill--electric";break;case"psychic":n=V.o,r="pokemon-type-pill--psychic";break;case"ice":n=V.p,r="pokemon-type-pill--ice";break;case"dragon":n=V.h,r="pokemon-type-pill--dragon";break;case"dark":n=V.e,r="pokemon-type-pill--dark";break;case"fairy":n=V.q,r="pokemon-type-pill--fairy";break;case"unknown":n=V.t,r="pokemon-type-pill--unknown";break;case"shadow":n=V.r,r="pokemon-type-pill--shadow";break;default:n=V.f}return o.a.createElement("div",{className:"pokemon-type-pill ".concat(t?"pokemon-type-pill--compact":""," ").concat(r),title:t?a:void 0},n&&o.a.createElement("div",{className:"pokemon-type-pill__icon"},o.a.createElement(Q.a,{icon:n})),!t&&a)}),ee=function(){var e,a,t,n,r,c,l,s;!function(){var e=Object(i.b)(),a=Object(q.i)().pokemonName;o.a.useEffect((function(){e(S.fetchData({name:a.toLowerCase()}))}),[e,a])}();var u=R((function(e){return e.pokemonData})),d=u.data&&Object.entries(u.data.sprites).filter((function(e){return e[1]}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{state:u}),u.data&&o.a.createElement(K,{backgroundImageUrl:d&&d[0][1],pokemonName:u.data.name,pokemonId:u.data.id,images:o.a.createElement(o.a.Fragment,null,null===d||void 0===d?void 0:d.map((function(e){return o.a.createElement("img",{src:e[1],alt:e[0],key:e[0]})}))),color:null===(e=u.species.data)||void 0===e?void 0:e.color.name,types:o.a.createElement(o.a.Fragment,null,u.data.types.map((function(e){return o.a.createElement($,{pokemonType:e.type.name,key:e.type.name})}))),descriptionTitle:null===(a=u.species.data)||void 0===a||null===(t=a.genera.find((function(e){return"en"===e.language.name})))||void 0===t?void 0:t.genus,description:o.a.createElement("div",null,u.species.data&&Array.from(u.species.data.flavor_text_entries.filter((function(e){return"en"===e.language.name})).map((function(e){return e.flavor_text.replace(/\r?\n|\r|\u000c/gm," ")})).reduce((function(e,a){return e.set(a.toLowerCase().substring(0,10),a)}),new Map).values()).reduce((function(e,a,t){return e.push(o.a.createElement("span",{key:t},e.length>0&&o.a.createElement("br",null),a)),e}),[])),profile:o.a.createElement("ul",null,o.a.createElement("li",null,"Height: ",u.data.height/10,"m"),o.a.createElement("li",null,"Weight: ",u.data.weight/10,"kg"),(null===(n=u.species.data)||void 0===n?void 0:n.shape.name)&&o.a.createElement("li",null,"Shape: ",null===(r=u.species.data)||void 0===r?void 0:r.shape.name),(null===(c=u.species.data)||void 0===c||null===(l=c.habitat)||void 0===l?void 0:l.name)&&o.a.createElement("li",null,"Habitat: ",null===(s=u.species.data)||void 0===s?void 0:s.habitat.name)),abilities:o.a.createElement("ul",null,u.data.abilities.map((function(e){return o.a.createElement("li",{key:e.ability.name,title:e.is_hidden?"Hidden ability":"Normal ability"},e.ability.name)}))),stats:o.a.createElement("ul",null,u.data.stats.map((function(e){return o.a.createElement("li",{key:e.stat.name},e.stat.name,": ",e.base_stat)})))}))},ae=t(69),te="/list",ne={path:"/pokemon/:pokemonName",generate(e){return Object(q.f)(this.path,Object(ae.a)({},e))}};t(97);var oe=function(e){var a=e.children;return o.a.createElement("div",{className:"card-layout"},o.a.createElement("article",{className:"card-layout__content"},o.a.Children.map(a,(function(e){return o.a.createElement(o.a.Fragment,null,e)}))))},re=(t(98),function(e){var a=e.images,t=e.alt;if(!a)return null;var n=a.front_default||Object.entries(a).filter((function(e){return e[1]}))[0][1];return n&&o.a.createElement("img",{src:n,alt:t,"data-testid":"pokemon-image"})}),ie=function(e){var a,t,n,r,i,c,l,s,u=(null===(a=e.details)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.sprites)&&Object.entries(null===(n=e.details)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.sprites).find((function(e){return e[1]}))[1];return o.a.createElement("section",{className:"pokemon-card",onClick:e.onClick,"data-testid":"card"},o.a.createElement("svg",{viewBox:"0 0 50 50",className:"pokemon-card__curved-text"},o.a.createElement("defs",null,o.a.createElement("path",{id:"circlePath",d:"M 0, 25 a 25,25 0 1,1 50,0"})),o.a.createElement("text",{textAnchor:"middle"},o.a.createElement("textPath",{xlinkHref:"#circlePath",startOffset:"50%","data-testid":"pokemon-name"},e.pokemonName))),o.a.createElement("div",{className:"pokemon-card__status"},o.a.createElement(Z,{state:e.details})),o.a.createElement("div",{className:"pokemon-card__image"},o.a.createElement(re,{images:null===(i=e.details)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.sprites,alt:e.pokemonName})),o.a.createElement("div",{className:"pokemon-card__types"},null===(l=e.details)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.types.map((function(e){return o.a.createElement($,{compact:!0,pokemonType:e.type.name,key:e.type.name})}))),o.a.createElement("div",{className:"pokemon-card__background",style:{backgroundImage:"url(".concat(u,")")}}))},ce=(t(99),function(e){return o.a.createElement("div",{className:"pagination"},o.a.createElement("div",{className:"pagination__button-left",onClick:e.onPrev,"data-testid":"pagination-button-left"},o.a.createElement(Q.a,{icon:V.d,size:"2x"})),o.a.createElement("span",{"data-testid":"pagination-values"},"page ",e.currentPage," of ",e.pageCount),o.a.createElement("div",{className:"pagination__button-right",onClick:e.onNext,"data-testid":"pagination-button-right"},o.a.createElement(Q.a,{icon:V.d,size:"2x"})))}),le=(t(100),function(e){var a=e.children;return o.a.createElement("footer",{className:"footer"},a,o.a.createElement("a",{className:"footer__info",href:"https://www.linkedin.com/in/danilocestari",target:"_blank",rel:"noopener noreferrer"},"Developed by ",o.a.createElement("strong",null,"Danilo Cestari")))}),se=function(){!function(){var e=Object(i.b)(),a=R((function(e){return e.pokemonPage}));o.a.useEffect((function(){0===a.currentPage&&e(x.fetchPage({offset:0,size:20}))}),[e,a.currentPage]),o.a.useEffect((function(){e(S.clearData())}),[e])}();var e=R((function(e){return e.pokemonPage})),a=function(){var e=Object(q.h)();return function(a){e.push(ne.generate({pokemonName:a}))}}(),t=function(){var e=Object(i.b)(),a=R((function(e){return e.pokemonPage}));return{fetchPrevPage:function(){var t;(null===(t=a.data)||void 0===t?void 0:t.previous)&&e(x.fetchPage({url:a.data.previous}))},fetchNextPage:function(){var t;(null===(t=a.data)||void 0===t?void 0:t.next)&&e(x.fetchPage({url:a.data.next}))}}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{state:e}),o.a.createElement(oe,null,e.data&&e.data.results.map((function(t){return o.a.createElement(ie,{key:t.name,pokemonName:t.name,details:e.details[t.name],onClick:function(){a(t.name)}})}))),o.a.createElement(le,null,o.a.createElement(ce,{currentPage:e.currentPage,pageCount:e.pageCount,onPrev:t.fetchPrevPage,onNext:t.fetchNextPage})))},ue=(t(101),function(e){return o.a.createElement("form",{onSubmit:function(a){e.onChoose(),a.preventDefault()},className:"search"},o.a.createElement("input",{type:"search",list:"pokemonNames",placeholder:"Search",value:e.selectedName,onChange:function(a){e.onType(a.target.value)},className:"search__input"}),o.a.createElement("datalist",{id:"pokemonNames"},e.suggestions.map((function(e){return o.a.createElement("option",{key:e,value:e})}))),o.a.createElement("button",{type:"submit",className:"search__button"},"Go"))});var de=function(){!function(){var e=Object(i.b)();o.a.useEffect((function(){e(T.updateSuggestions())}),[e])}();var e=function(){var e=Object(i.b)();return o.a.useCallback((function(a){e(T.updateSuggestions(a))}),[e])}(),a=function(){var e=Object(q.h)(),a=R((function(e){return e.filteredPokemonNames}));return function(){a.name.trim().length>0&&e.push(ne.generate({pokemonName:a.name}))}}(),t=R((function(e){return e.filteredPokemonNames}));return o.a.createElement("div",null,o.a.createElement(ue,{selectedName:t.name,suggestions:t.suggestions,onType:e,onChoose:a}))},me=(t(102),function(){return o.a.createElement("header",{className:"header"},o.a.createElement("a",{href:"https://github.com/PokeAPI/pokeapi",target:"_blank",rel:"noopener noreferrer",className:"header__logo"},o.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true",alt:"PokeAPI"})),o.a.createElement("div",{className:"header__search"},o.a.createElement(q.b,{path:ne.path},o.a.createElement(c.b,{to:te,title:"Go back",className:"header__back-button"},o.a.createElement(Q.a,{icon:V.a,size:"2x"}))),o.a.createElement(de,null)))});t(103),t(104);function pe(){return n.createElement("div",{className:"App"},n.createElement(me,null),n.createElement(q.d,null,n.createElement(q.b,{path:ne.path,component:ee}),n.createElement(q.b,{path:te,component:se}),n.createElement(q.a,{exact:!0,to:te})))}var fe=document.getElementById("root");Object(r.render)(n.createElement(n.StrictMode,null,n.createElement(c.a,{basename:"/react-pokeapi"},n.createElement(i.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.a)({dependencies:{observableFetch:W}}),n=[t],o=Object(l.a)({reducer:U,middleware:a?[]:n,preloadedState:e});return a||t.run(B),o}()},n.createElement(pe,null)))),fe)},70:function(e,a,t){e.exports=t(105)},81:function(e,a,t){var n={"./de.json":82,"./en.json":58,"./fr.json":83,"./ja.json":84,"./ko.json":85,"./ru.json":86,"./zh-hans.json":87,"./zh-hant.json":88};function o(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=81},90:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.f7575ad0.chunk.js.map