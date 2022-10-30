"use strict";(self.webpackChunkreact_pokeapi=self.webpackChunkreact_pokeapi||[]).push([[514],{9514:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var o={};n.r(o),n.d(o,{fetchPokemonSpecies:function(){return f},getPokemonDetails:function(){return h}});var r=n(8890),c=n(5770),i=n(83),s=n(6153),a=n(5883),l=n(6834),d=n(73),u=n(1895),m=n(2497),p=n(9531),h=(0,l.hg)("pokemonDetails/getPokemonDetails",function(){var e=(0,u.Z)((0,d.Z)().mark((function e(t,n){var o,r,c,i,s,a,l,u,h;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.dispatch,r=n.getState,c=n.signal,i=n.rejectWithValue,s=o((0,p.fetchPokemonInfo)(t)),c.addEventListener("abort",(function(){s.abort()})),e.next=5,s;case 5:if(a=r(),l=a.pokemonPage.info,u=(0,m.G0)(l,t.pokemonName)){e.next=9;break}return e.abrupt("return",i("species not found"));case 9:h=o(f({url:u})),c.addEventListener("abort",(function(){h.abort()}));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),f=(0,l.hg)("pokemonDetails/fetchPokemonSpecies",function(){var e=(0,u.Z)((0,d.Z)().mark((function e(t,n){var o,r,c;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.signal,r=n.rejectWithValue,e.next=3,fetch(t.url,{signal:o});case 3:if((c=e.sent).ok){e.next=10;break}return e.t0=r,e.next=8,c.text();case 8:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 10:return e.next=12,c.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(e,t){var n=t.getState,o=(0,m.Hz)(e.url);return!o||!n().pokemonDetails.species.data.ids.includes(Number(o))&&void 0}}),g=(0,l.HF)({selectId:function(e){return e.id},sortComparer:function(e,t){return e.order&&t.order?e.order-t.order:0}}),y={error:void 0,species:{loading:!0,error:!1,data:g.getInitialState()}},v=(0,l.oM)({name:"pokemonDetails",initialState:y,reducers:{},extraReducers:function(e){e.addCase(h.rejected,(function(e,t){e.error=t.payload})).addCase(f.pending,(function(e){e.error=void 0,e.species.loading=!0,e.species.error=!1})).addCase(f.rejected,(function(e,t){e.error=void 0,e.species.loading=!1,t.meta.aborted||(e.species.error=!0)})).addCase(f.fulfilled,(function(e,t){e.error=void 0,e.species.loading=!1,e.species.error=!1,g.setOne(e.species.data,t.payload)}))}}),k=v,x=(0,s.Z)((0,s.Z)({},v.actions),o),b=function(e){return e.pokemonDetails},P=(0,a.P1)(b,(function(e){return e.species})),j=(0,a.P1)(P,(function(e){return e.data})),E={sliceAvailable:(0,a.P1)(b,(function(e){return!!e})),error:(0,a.P1)(b,(function(e){return e.error})),species:(0,s.Z)((0,s.Z)({},g.getSelectors(j)),{},{isLoading:(0,a.P1)(P,(function(e){return e.loading})),isError:(0,a.P1)(P,(function(e){return e.error}))})},_=n(907);var N=n(9860),S=n(1097),w=n(7378);var C=n(6257),Z=n(3397),I=n(7466);function D(){var e;null===(e=document.querySelector("meta[name=theme-color]"))||void 0===e||e.setAttribute("content",getComputedStyle(document.documentElement).getPropertyValue("--accent-color"))}function L(e){var t;return t=e.color,c.useEffect((function(){if(t){var e=getComputedStyle(document.documentElement).getPropertyValue("--accent-color"),n=getComputedStyle(document.documentElement).getPropertyValue("--accent-text-color"),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-color-highlight");switch(t){case"black":document.documentElement.style.setProperty("--accent-text-color","white"),document.documentElement.style.setProperty("--accent-color","black"),document.documentElement.style.setProperty("--accent-color-highlight","grey");break;case"blue":document.documentElement.style.setProperty("--accent-color","#3a86ff"),document.documentElement.style.setProperty("--accent-color-highlight","#2366D1");break;case"brown":document.documentElement.style.setProperty("--accent-color","#a12727"),document.documentElement.style.setProperty("--accent-color-highlight","#831313");break;case"gray":document.documentElement.style.setProperty("--accent-color","#525252"),document.documentElement.style.setProperty("--accent-color-highlight","#362d2d");break;case"green":document.documentElement.style.setProperty("--accent-color","#77c360"),document.documentElement.style.setProperty("--accent-color-highlight","#498e35");break;case"pink":document.documentElement.style.setProperty("--accent-color","#ff8196"),document.documentElement.style.setProperty("--accent-color-highlight","#cc4c61");break;case"purple":document.documentElement.style.setProperty("--accent-color","#800080"),document.documentElement.style.setProperty("--accent-color-highlight","#620b62");break;case"red":document.documentElement.style.setProperty("--accent-color","#f53e2a"),document.documentElement.style.setProperty("--accent-color-highlight","#b72a1a");break;case"white":document.documentElement.style.setProperty("--accent-text-color","black"),document.documentElement.style.setProperty("--accent-color","white"),document.documentElement.style.setProperty("--accent-color-highlight","grey");break;case"yellow":document.documentElement.style.setProperty("--accent-text-color","#695f00"),document.documentElement.style.setProperty("--accent-color","#fffb10"),document.documentElement.style.setProperty("--accent-color-highlight","#d1cc3e")}return D(),function(){document.documentElement.style.setProperty("--accent-text-color",n),document.documentElement.style.setProperty("--accent-color",e),document.documentElement.style.setProperty("--accent-color-highlight",o),D()}}}),[t]),(0,w.jsx)("article",{className:"pokemon-details",children:(0,w.jsxs)("article",{className:"pokemon-details__content",children:[(0,w.jsxs)("header",{className:"pokemon-details__header",children:[(0,w.jsx)("h1",{className:"pokemon-details__name",children:e.pokemonName}),(0,w.jsxs)("aside",{title:"Pokemon ID",children:["#",e.pokemonId]})]}),(0,w.jsx)("section",{className:"pokemon-details__images",children:e.images}),(0,w.jsx)("section",{className:"pokemon-details__types",children:e.types}),(0,w.jsxs)("section",{className:"pokemon-details__description",children:[(0,w.jsx)("div",{className:"pokemon-details__section-title",children:e.descriptionTitle}),(0,w.jsx)("div",{className:"pokemon-details__descrition-text",children:e.description})]}),(0,w.jsxs)("section",{className:"pokemon-details__profile",children:[(0,w.jsx)("div",{className:"pokemon-details__section-title",children:"Profile"}),e.profile]}),(0,w.jsxs)("section",{className:"pokemon-details__abilities",children:[(0,w.jsx)("div",{className:"pokemon-details__section-title",children:"Abilities"}),e.abilities]}),(0,w.jsxs)("section",{className:"pokemon-details__stats",children:[(0,w.jsx)("div",{className:"pokemon-details__section-title",children:"Stats"}),e.stats]}),(0,w.jsx)("div",{className:"pokemon-details__background",style:{backgroundImage:"url(".concat(e.backgroundImageUrl,")")}})]})})}var V=function(e,t){return function(n){var o=(0,S.S)(),r=c.useState(!1),i=(0,N.Z)(r,2),a=i[0],l=i[1];return c.useEffect((function(){a||(o(t),l(!0))}),[o,a]),a?(0,w.jsx)(e,(0,s.Z)({},n)):null}}((function(){var e,t,n,o,s,a,l,d,u,m=function(e){var t,n=(0,i.T)(),o=(0,i.C)(E.error),r=c.useMemo((function(){return _.wl.makeInfoSelectors()}),[]),s=(0,i.C)((function(t){return e?r.speciesId(t,e):void 0})),a=(0,i.C)((function(e){return s?E.species.selectById(e,s):void 0})),l=(0,i.C)(E.species.isLoading),d=(0,i.C)(E.species.isError),u=(0,i.C)((function(t){return e?r.selectById(t,e):void 0})),m=(null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.sprites)&&Object.entries(u.data.sprites).filter((function(e){return"string"===typeof e[1]}));return c.useEffect((function(){if(e){var t=n(x.getPokemonDetails({pokemonName:e}));return function(){t.abort()}}}),[n,e]),{error:o,isSpeciesLoading:l,isSpeciesError:d,pokemonInfo:u,images:m,species:a}}((0,r.UO)().pokemonName),p=m.error,h=m.isSpeciesLoading,f=m.isSpeciesError,g=m.images,y=m.pokemonInfo,v=m.species;return"species not found"===p?(0,w.jsx)(C.Z,{message:"Not Found!"}):"unexpected error"===p||f?(0,w.jsx)(C.Z,{message:"Error!"}):h||null===y||void 0===y||!y.data?(0,w.jsx)(Z.Z,{}):(0,w.jsx)(L,{backgroundImageUrl:null===y||void 0===y||null===(e=y.data)||void 0===e||null===(t=e.sprites)||void 0===t||null===(n=t.other)||void 0===n||null===(o=n.dream_world)||void 0===o?void 0:o.front_default,pokemonName:y.data.name,pokemonId:y.data.id||0,images:(0,w.jsx)(w.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,w.jsx)("img",{src:e[1],alt:e[0]},e[0])}))}),color:null===v||void 0===v?void 0:v.color.name,types:(0,w.jsx)(w.Fragment,{children:null===(s=y.data.types)||void 0===s?void 0:s.map((function(e){return(0,w.jsx)(I.Z,{pokemonType:e.type.name},e.type.name)}))}),descriptionTitle:null===v||void 0===v||null===(a=v.genera.find((function(e){return"en"===e.language.name})))||void 0===a?void 0:a.genus,description:(0,w.jsx)(w.Fragment,{children:v&&Array.from(v.flavor_text_entries.filter((function(e){return"en"===e.language.name})).map((function(e){return e.flavor_text.replace(/\r?\n|\r|\u000c/gm," ")})).reduce((function(e,t){return e.set(t.toLowerCase().substring(0,10),t)}),new Map).values()).reduce((function(e,t,n){return e.push((0,w.jsxs)("span",{children:[e.length>0&&(0,w.jsx)("br",{}),t]},n)),e}),[])}),profile:(0,w.jsxs)("ul",{children:[y.data.height?(0,w.jsxs)("li",{children:["Height: ",y.data.height/10,"m"]}):null,y.data.weight?(0,w.jsxs)("li",{children:["Weight: ",y.data.weight/10,"kg"]}):null,(null===v||void 0===v?void 0:v.shape.name)&&(0,w.jsxs)("li",{children:["Shape: ",null===v||void 0===v?void 0:v.shape.name]}),(null===v||void 0===v||null===(l=v.habitat)||void 0===l?void 0:l.name)&&(0,w.jsxs)("li",{children:["Habitat: ",null===v||void 0===v?void 0:v.habitat.name]})]}),abilities:(0,w.jsx)("ul",{children:null===(d=y.data.abilities)||void 0===d?void 0:d.map((function(e){return(0,w.jsx)("li",{title:e.is_hidden?"Hidden ability":"Normal ability",children:e.ability.name},e.ability.name)}))}),stats:(0,w.jsx)("ul",{children:null===(u=y.data.stats)||void 0===u?void 0:u.map((function(e){return(0,w.jsxs)("li",{children:[e.stat.name,": ",e.base_stat]},e.stat.name)}))})})}),k)}}]);
//# sourceMappingURL=514.78fcfc1b.chunk.js.map