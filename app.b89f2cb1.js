(function(e){function t(t){for(var a,n,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var a={},r={app:0},s=[];function n(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3dfd":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e._m(0),o("main",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-1 pr-1"},[o("div",{staticClass:"nav-side-menu"},[o("i",{staticClass:"fa fa-bars fa-2x toggle-btn",attrs:{"data-toggle":"collapse","data-target":"#menu-content"}}),o("div",{staticClass:"menu-list"},[o("ul",{staticClass:"menu-content collapse out",attrs:{id:"menu-content"}},[e._m(1),o("ul",{staticClass:"sub-menu collapsed collapse in",attrs:{"aria-expanded":"false",id:"add"}},[e._m(2),o("form",{attrs:{id:"add1"},on:{submit:function(t){return t.preventDefault(),e.criarProcesso(t)}}},[o("div",{staticStyle:{background:"rgb(218, 218, 218)"}},[o("div",{staticStyle:{"text-align":"center"}},[o("label",{attrs:{for:"checkGerador"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{click:function(t){return e.randomNumber()},change:function(t){var o=e.checked,a=t.target,r=!!a.checked;if(Array.isArray(o)){var s=null,n=e._i(o,s);a.checked?n<0&&(e.checked=o.concat([s])):n>-1&&(e.checked=o.slice(0,n).concat(o.slice(n+1)))}else e.checked=r}}}),e._v(" Gerar processo com valores aleatórios? "),1==e.checked?o("button",{staticClass:"btn btn-outline-primary",staticStyle:{float:"right","margin-right":"25px","margin-bottom":"15px","border-color":"rgb(92, 184, 92)",color:"rgb(92, 184, 92)"},attrs:{id:"btnCad"},on:{click:function(t){return e.randomNumber()}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:String.fromCharCode(e.aleatorio[0]),expression:"String.fromCharCode(aleatorio[0])"}],attrs:{type:"hidden",id:"processo"},domProps:{value:String.fromCharCode(e.aleatorio[0])},on:{input:function(t){t.target.composing||e.$set(String,"fromCharCode(aleatorio[0])",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.aleatorio[1],expression:"aleatorio[1]"}],attrs:{type:"hidden",id:"codigo"},domProps:{value:e.aleatorio[1]},on:{input:function(t){t.target.composing||e.$set(e.aleatorio,1,t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.aleatorio[2],expression:"aleatorio[2]"}],attrs:{type:"hidden",id:"dado"},domProps:{value:e.aleatorio[2]},on:{input:function(t){t.target.composing||e.$set(e.aleatorio,2,t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.aleatorio[3],expression:"aleatorio[3]"}],attrs:{type:"hidden",id:"pilha"},domProps:{value:e.aleatorio[3]},on:{input:function(t){t.target.composing||e.$set(e.aleatorio,3,t.target.value)}}}),o("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}}),o("b",[e._v(" Gerar Processo ")])]):e._e()])])]),0==e.checked?o("div",[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",staticStyle:{"text-transform":"capitalize"},attrs:{placeholder:"Processo:",type:"text",required:"",id:"processo",name:"processo",maxlength:"1"},on:{change:function(e){e.target.value=e.target.value.toUpperCase()}}})]),o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",staticStyle:{},attrs:{placeholder:"Código:",type:"number",required:"",id:"codigo",name:"codigo",min:"1",maxlength:"1"},on:{change:e.validaCampo}})]),o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{placeholder:"Dados:",type:"number",min:"1",required:"",id:"dado",name:"dado"},on:{change:e.validaCampo}})]),o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{placeholder:"Pilha:",type:"number",min:"1",required:"",id:"pilha",name:"pilha"},on:{change:e.validaCampo}})]),e._m(3)]):e._e()])]),o("ul",{staticClass:"sub-menu collapsed collapse in 2",attrs:{"aria-expanded":"true",id:"add3"}},[e._m(4),o("div",{staticClass:"row",attrs:{id:"add2"}},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},e._l(e.arrProcesso,(function(t,a){return o("span",{key:a,attrs:{item:t}},[o("button",{staticClass:"\n                              btn btn-secondary btn-sm\n                              distancia-botao-processos\n                            ",style:e.processoSelecionado==a?"font-weight: bold; text-decoration: underline":null,on:{click:function(o){e.processoSelecionado=a,e.processoSelecionado2=t.sig_processo}}},[e._v(" "+e._s(t.sig_processo)+" ")]),o("button",{staticClass:"\n                              glyphicon glyphicon-remove-sign\n                              btn btn-danger\n                            ",on:{click:function(t){e.removeProcesso(a),e.processoSelecionado=0}}}),o("br")])})),0)])])])])])])])]),o("div",{staticClass:"pr-1; left-page"},e._l(e.arrProcesso,(function(t,a){return o("span",{key:a,attrs:{item:t}},[o("button",{staticClass:"\n                              btn btn-secondary btn-sm\n                              distancia-botao-processos\n                            ",style:e.processoSelecionado==a?"font-weight: bold; text-decoration: underline":null,on:{click:function(o){e.processoSelecionado=a,e.processoSelecionado2=t.sig_processo}}},[e._v(" "+e._s(t.sig_processo)+" ")])])})),0),o("div",{staticClass:"left-page"},[o("div",{staticClass:"col-lg-2 pr-1; center"},[0===e.arrProcesso.length?o("h4",[e._v("Segmentos")]):e._e(),e.arrProcesso.length>0?o("span",[o("h4",[e._v("Segmento 00 - Código")]),o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(5),o("tbody",e._l(e.arrProcesso[e.processoSelecionado].codigo.segmentos,(function(t){return o("tr",{key:t,attrs:{bgcolor:e.arrProcesso[e.processoSelecionado].codigo.corFundo}},[o("td",[e._v(e._s(t.deslocamento))]),o("td",[e._v(e._s(t.bytes))])])})),0)]),o("h4",[e._v("Segmento 01 - Dados")]),o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(6),o("tbody",e._l(e.arrProcesso[e.processoSelecionado].dado.segmentos,(function(t){return o("tr",{key:t,attrs:{bgcolor:e.arrProcesso[e.processoSelecionado].dado.corFundo}},[o("td",[e._v(e._s(t.deslocamento))]),o("td",[e._v(e._s(t.bytes))])])})),0)]),o("h4",[e._v("Segmento 10 - Pilha")]),o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(7),o("tbody",e._l(e.arrProcesso[e.processoSelecionado].pilha.segmentos,(function(t){return o("tr",{key:t,attrs:{bgcolor:e.arrProcesso[e.processoSelecionado].pilha.corFundo}},[o("td",[e._v(e._s(t.deslocamento))]),o("td",[e._v(e._s(t.bytes))])])})),0)])]):e._e()]),o("div",{staticClass:"col-lg-2 pl-1 ; center"},[o("h4",[e._v("Tabela de Segmentos")]),e.arrTabelaSegmentos.length>0?o("span",[o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(8),e._l(e.arrTabelaSegmentos[e.processoSelecionado],(function(t,a){return o("tbody",{key:a,attrs:{bgcolor:t.corFundo}},["sig_processo"!=a?o("tr",[o("td",[e._v(e._s(t.segmento))]),o("td",[e._v(e._s(t.base))]),o("td",[e._v(e._s(t.limite))])]):e._e()])}))],2)]):e._e()]),o("div",{staticClass:"col-lg-2 pl-0; center"},[o("h4",{staticClass:"center-right"},[e._v("Memória")]),o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(9),o("tbody",e._l(e.arrMemoriaFisica,(function(t,a){return a<16?o("tr",{key:a,attrs:{bgcolor:""!==t.byte?t.corFundo:"#3b8c58"}},[o("td",[e._v(e._s(t.endereco))]),o("td",[e._v(e._s(t.byte))])]):e._e()})),0)])]),o("div",{staticClass:"col-lg-2"},[o("h4",[e._v("Física")]),o("table",{staticClass:"table table-borderless table-memoria-fisica"},[e._m(10),o("tbody",e._l(e.arrMemoriaFisica,(function(t,a){return a>=16?o("tr",{key:a,attrs:{bgcolor:""!==t.byte?t.corFundo:"#4db473"}},[o("td",[e._v(e._s(t.endereco))]),o("td",[e._v(e._s(t.byte))])]):e._e()})),0)])])])]),o("small",{staticClass:"form-text text-muted"},[e._v("*Tamanho da Memória Física Fixado: 32 Bytes")])])]),o("footer")])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h1",{staticClass:"center"},[e._v("Simulador de Gerenciamento de Memoria")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"active collapsed",attrs:{"data-toggle":"collapse","data-target":"#add, #add3","aria-controls":"add add3"}},[o("a",[o("i",{staticClass:"glyphicon glyphicon-cog"}),o("b",{staticStyle:{"font-size":"17px"}},[e._v("Á")]),e._v("rea de "),o("b",{staticStyle:{"font-size":"17px"}},[e._v("C")]),e._v("onfiguração "),o("span",{staticClass:"arrow"})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"active collapsed",attrs:{id:"criarProcessos","data-toggle":"collapse","data-target":"#add1","aria-expanded":"false"}},[o("b",{staticStyle:{"font-size":"15px"}},[e._v("C")]),e._v("riar "),o("b",{staticStyle:{"font-size":"15px"}},[e._v("P")]),e._v("rocesso ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"text-align":"center"},attrs:{id:"botoes"}},[o("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[o("i",{staticClass:"glyphicon glyphicon-plus-sign"}),e._v(" Cadastrar ")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[o("i",{staticClass:"glyphicon glyphicon-remove-sign"}),e._v(" Cancelar ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"active collapsed",attrs:{id:"ListaProcessos","data-toggle":"collapse","data-target":"#add2","aria-expanded":"false"}},[o("b",{staticStyle:{"font-size":"15px"}},[e._v("L")]),e._v("istas de "),o("b",{staticStyle:{"font-size":"15px"}},[e._v("P")]),e._v("rocessos ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Deslocamento")]),o("th",[e._v("Bytes")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Deslocamento")]),o("th",[e._v("Bytes")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Deslocamento")]),o("th",[e._v("Bytes")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Segmento")]),o("th",[e._v("Base")]),o("th",[e._v("Limite")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Endereço")]),o("th",[e._v("Byte")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Endereço")]),o("th",[e._v("Byte")])])])}],s=(o("a4d3"),o("e01a"),o("d28b"),o("4de4"),o("a434"),o("b0c0"),o("d3b7"),o("e25e"),o("3ca3"),o("ddb0"),{name:"paginacao",data:function(){return{checked:!1,processoSelecionado:0,aleatorio:[64],arrProcesso:[],arrTabelaSegmentos:[],arrMemoriaFisica:[{posicao:0,endereco:"00000",byte:""},{posicao:1,endereco:"00001",byte:""},{posicao:2,endereco:"00010",byte:""},{posicao:3,endereco:"00011",byte:""},{posicao:4,endereco:"00100",byte:""},{posicao:5,endereco:"00101",byte:""},{posicao:6,endereco:"00110",byte:""},{posicao:7,endereco:"00111",byte:""},{posicao:8,endereco:"01000",byte:""},{posicao:9,endereco:"01001",byte:""},{posicao:10,endereco:"01010",byte:""},{posicao:11,endereco:"01011",byte:""},{posicao:12,endereco:"01100",byte:""},{posicao:13,endereco:"01101",byte:""},{posicao:14,endereco:"01110",byte:""},{posicao:15,endereco:"01111",byte:""},{posicao:16,endereco:"10000",byte:""},{posicao:17,endereco:"10001",byte:""},{posicao:18,endereco:"10010",byte:""},{posicao:19,endereco:"10011",byte:""},{posicao:20,endereco:"10100",byte:""},{posicao:21,endereco:"10101",byte:""},{posicao:22,endereco:"10110",byte:""},{posicao:23,endereco:"10111",byte:""},{posicao:24,endereco:"11000",byte:""},{posicao:25,endereco:"11001",byte:""},{posicao:26,endereco:"11010",byte:""},{posicao:27,endereco:"11011",byte:""},{posicao:28,endereco:"11100",byte:""},{posicao:29,endereco:"11101",byte:""},{posicao:30,endereco:"11110",byte:""},{posicao:31,endereco:"11111",byte:""}]}},methods:{randomNumber:function(){90==this.aleatorio[0]&&(this.aleatorio[0]=64),this.aleatorio[0]=this.aleatorio[0]+1;for(var e=1;e<4;e++)this.aleatorio[e]=Math.floor(4*Math.random())+1},removeProcesso:function(e){console.log("Tabela Segmento",this.arrTabelaSegmentos),console.log("Tabela Segmento ID",this.arrTabelaSegmentos[e]),console.log("Tabela Segmento Sig_processo",this.arrTabelaSegmentos.sig_processo),console.log("Tabela Processo",this.arrProcesso);this.arrTabelaSegmentos[e].segmento00.base.length;for(var t=0,o=0;o<=this.arrTabelaSegmentos[e].segmento00.base.length-1;o++){var a=this.arrTabelaSegmentos[e].segmento00.base.length-1-o,r=this.arrTabelaSegmentos[e].segmento00.base.charAt(a);1==r&&(t+=Math.pow(2,o))}for(var s=0;s<this.arrTabelaSegmentos[e].segmento00.tamanho;s++)this.arrMemoriaFisica[t+s].byte="",this.arrMemoriaFisica[t+s].corFundo=null;console.log("Teste"),t=0;for(o=0;o<=this.arrTabelaSegmentos[e].segmento01.base.length-1;o++){var n=this.arrTabelaSegmentos[e].segmento01.base.length-1-o,i=this.arrTabelaSegmentos[e].segmento01.base.charAt(n);1==i&&(t+=Math.pow(2,o))}for(s=0;s<this.arrTabelaSegmentos[e].segmento01.tamanho;s++)this.arrMemoriaFisica[t+s].byte="",this.arrMemoriaFisica[t+s].corFundo=null;t=0;for(o=0;o<=this.arrTabelaSegmentos[e].segmento10.base.length-1;o++){var c=this.arrTabelaSegmentos[e].segmento10.base.length-1-o,l=this.arrTabelaSegmentos[e].segmento10.base.charAt(c);1==l&&(t+=Math.pow(2,o))}for(s=0;s<this.arrTabelaSegmentos[e].segmento10.tamanho;s++)this.arrMemoriaFisica[t+s].byte="",this.arrMemoriaFisica[t+s].corFundo=null;this.arrTabelaSegmentos.splice(e,1),console.log("TS",this.arrTabelaSegmentos),this.arrProcesso.splice(e,1),console.log("Pr",this.arrProcesso)},criarProcesso:function(e){var t=e.target.processo.value,o=e.target.codigo.value,a=e.target.dado.value,r=e.target.pilha.value,s=!0,n=!1,i=void 0;try{for(var c,l=this.arrProcesso[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var d=c.value;if(d.sig_processo===t)return void alert('Processo "'.concat(t,'" já cadastrado.'))}}catch(m){n=!0,i=m}finally{try{s||null==l.return||l.return()}finally{if(n)throw i}}if(parseInt(o)+parseInt(a)+parseInt(r)>this.arrMemoriaFisica.filter((function(e){return""===e.byte})).length)alert("Epaço insuficiente na memória física.");else{var u={id:this.arrProcesso.length,sig_processo:t,codigo:{tamanho:o,segmentos:this.criarSegmento(o,"codigo"),corFundo:this.geraCorAleatoria()},dado:{tamanho:a,segmentos:this.criarSegmento(a,"dado"),corFundo:this.geraCorAleatoria()},pilha:{tamanho:r,segmentos:this.criarSegmento(r,"pilha"),corFundo:this.geraCorAleatoria()}};this.arrProcesso.push(u),this.preencherMemoriaFisica(u),this.processoSelecionado=this.arrProcesso.length-1,this.limparCampos(e)}},criarSegmento:function(e,t){for(var o=[],a={},r=0;r<e;r++)"codigo"===t?a.bytes="C"+(r+1):"dado"===t?a.bytes="D"+(r+1):"pilha"===t&&(a.bytes="P"+(r+1)),a.deslocamento=this.arrMemoriaFisica[r].endereco,o.push(a),a={};return o},preencherMemoriaFisica:function(e){var t=this;function o(e,o,a){var r,s,n=0,i=0,c=t.arrMemoriaFisica.filter((function(e){return""===e.byte}));console.log("ML",c[0].posicao);for(var l=0;l<e-1;l++)c[l].posicao!=c[l+1].posicao-1&&(console.log(e,"entrou?"),i=l+1);for(i;i<c.length;i++){0===n&&(r=c[i].endereco);for(l=n;l<o.length;l++){c[i].byte=o[l].bytes,n++;break}if(c[i].corFundo=a,n==o.length){s=i===c.length-1?c[i].endereco:c[i+1].endereco;break}}return{base:r,limite:s}}var a=o(e.codigo.tamanho,e.codigo.segmentos,e.codigo.corFundo),r=o(e.dado.tamanho,e.dado.segmentos,e.dado.corFundo),s=o(e.pilha.tamanho,e.pilha.segmentos,e.pilha.corFundo),n={sig_processo:e.sig_processo,segmento00:{tamanho:e.codigo.tamanho,segmento:"00",base:a.base,limite:a.limite,corFundo:e.codigo.corFundo},segmento01:{tamanho:e.dado.tamanho,segmento:"01",base:r.base,limite:r.limite,corFundo:e.dado.corFundo},segmento10:{tamanho:e.pilha.tamanho,segmento:"10",base:s.base,limite:s.limite,corFundo:e.pilha.corFundo}};console.log(n),this.arrTabelaSegmentos.push(n)},geraCorAleatoria:function(){for(var e="01234567",t="#",o=0;o<6;o++)t+=e[Math.floor(8*Math.random())];return t},validaCampo:function(e){e.target.value<=0&&(alert('Campo "'.concat(e.target.name.toUpperCase(),'" deve ser maior que zero.')),e.target.value=e.target.value<=0?null:e.target.value)},limparCampos:function(e){e.target.processo.value=null,e.target.codigo.value=null,e.target.dado.value=null,e.target.pilha.value=null},recarregarPagina:function(){location.reload()}}}),n=s,i=o("2877"),c=Object(i["a"])(n,a,r,!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=o("3dfd"),s=(o("d3b7"),o("8c4f"));a["a"].use(s["a"]);var n=[{path:"/",name:"App",component:r["default"]},{path:"/App",redirect:"App",component:function(){return Promise.resolve().then(o.bind(null,"3dfd"))}}],i=new s["a"]({mode:"history",base:"",routes:n}),c=i;a["a"].config.productionTip=!1,a["a"].delete,new a["a"]({router:c,render:function(e){return e(r["default"])}}).$mount("#app")}});
//# sourceMappingURL=app.b89f2cb1.js.map