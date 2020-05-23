!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=16)}([function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _$=window.jQuery;exports.$=_$},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var FetchingData=function(){function FetchingData(key){_classCallCheck(this,FetchingData),this.key=key,this.map={},this.queue=0,this.resolves=[]}return FetchingData.prototype.add=function(data,resolve){for(var _iterator=data,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var d=_ref,k=this.key(d),arr=this.map[k];arr||(arr=this.map[k]=[]),arr.push(d)}return this.resolves.push(resolve),++this.queue,this},FetchingData.prototype.resolve=function(){this.resolves.forEach(function(r){return r()})},FetchingData.prototype.set=function(key,name,value){for(var _iterator2=this.map[key],_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++]}else{if(_i2=_iterator2.next(),_i2.done)break;_ref2=_i2.value}_ref2[name]=value}},FetchingData.prototype.forEach=function(f){for(var _iterator3=Object.values(this.map),_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++]}else{if(_i3=_iterator3.next(),_i3.done)break;_ref3=_i3.value}for(var arr=_ref3,_iterator4=arr,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[Symbol.iterator]();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++]}else{if(_i4=_iterator4.next(),_i4.done)break;_ref4=_i4.value}f(_ref4)}}return this},FetchingData}();exports.default=FetchingData},function(module,exports,__webpack_require__){"use strict";Array.prototype.fill||(Array.prototype.fill=function(value){if(null==this)throw new TypeError("this is null or not defined");for(var O=Object(this),len=O.length>>>0,start=arguments[1],relativeStart=start>>0,k=relativeStart<0?Math.max(len+relativeStart,0):Math.min(relativeStart,len),end=arguments[2],relativeEnd=void 0===end?len:end>>0,final=relativeEnd<0?Math.max(len+relativeEnd,0):Math.min(relativeEnd,len);k<final;)O[k]=value,k++;return O}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(predicate){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof predicate)throw new TypeError("predicate must be a function");for(var value,list=Object(this),length=list.length>>>0,thisArg=arguments[1],i=0;i<length;i++)if(value=list[i],predicate.call(thisArg,value,i,list))return value}}),Array.prototype.findIndex||(Array.prototype.findIndex=function(predicate){if(null==this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof predicate)throw new TypeError("predicate must be a function");for(var value,list=Object(this),length=list.length>>>0,thisArg=arguments[1],i=0;i<length;i++)if(value=list[i],predicate.call(thisArg,value,i,list))return i;return-1}),Object.values||(Object.values=function(O){return Object.keys(O).map(function(name){return O[name]})||[]}),RegExp.escape||(RegExp.escape=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}),String.prototype.replaceAll||(String.prototype.replaceAll=function(search,replace){return this.replace(new RegExp(RegExp.escape(search),"g"),replace)})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function render(instance){function update(){autoHeight&&instance.node.height(Math.round(.75*instance.node.width())),widget.height(instance.node.height()-(widget.offset().top-instance.node.offset().top))}var autoHeight=instance.node.height()<100;instance.node.html(""),instance.title&&instance.node.append('<div class="book-heading"><h3>'+instance.post.title+"</h3></div>"),instance.node.append('<div class="book-widget"><div class="full-size"></div></div>');var widget=instance.node.find(".book-widget");(0,_libs.$)(window).on("resize",update),update(),(0,_libs.$)(function(){return instance.node.find(".book-widget div").FlipBook((0,_buildOptions2.default)(instance))})}for(var _libs=__webpack_require__(0),_createInstance=__webpack_require__(8),_createInstance2=_interopRequireDefault(_createInstance),_fetchBookCtrlProps=__webpack_require__(9),_fetchBookCtrlProps2=_interopRequireDefault(_fetchBookCtrlProps),_fetchPosts=__webpack_require__(11),_fetchPosts2=_interopRequireDefault(_fetchPosts),_fetchPages=__webpack_require__(10),_fetchPages2=_interopRequireDefault(_fetchPages),_buildOptions=__webpack_require__(7),_buildOptions2=_interopRequireDefault(_buildOptions),_renderInstances=__webpack_require__(14),_renderInstances2=_interopRequireDefault(_renderInstances),nodes=(0,_libs.$)("."+FB3D_CLIENT_LOCALE.key),instances=[],i=0;i<nodes.length;++i){var node=(0,_libs.$)(nodes[i]);"fullscreen"===node.attr("data-mode")&&instances.push((0,_createInstance2.default)(node))}Promise.all([(0,_fetchBookCtrlProps2.default)(instances),(0,_fetchPosts2.default)(instances),(0,_fetchPages2.default)(instances)]).then(function(){return(0,_renderInstances2.default)(instances,render)})},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.default=void 0;var _libs=__webpack_require__(6),_Utils=__webpack_require__(5),_Utils2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_Utils);_libs.PDFJS.GlobalWorkerOptions.workerSrc=(window.PDFJS_LOCALE?PDFJS_LOCALE:GLOBAL_PATHS).pdfJsWorker,_libs.PDFJS.cMapUrl=(window.PDFJS_LOCALE?PDFJS_LOCALE:GLOBAL_PATHS).pdfJsCMapUrl,_libs.PDFJS.cMapPacked=!0,_libs.PDFJS.disableAutoFetch=!0,_libs.PDFJS.disableStream=!0,_libs.PDFJS.imageResourcesPath="images/pdfjs/",_libs.PDFJS.externalLinkTarget=_libs.PDFJS.LinkTarget.BLANK;var Pdf=function(){function Pdf(src,loadingProgress){var _this=this;_classCallCheck(this,Pdf),this.src=_Utils2.default.normalizeUrl(src),this.handlerQueue=[],this.progresData={loaded:-1,total:1},this.loadingProgress=loadingProgress,this.task=_libs.PDFJS.getDocument({url:this.src,rangeChunkSize:524288,cMapUrl:_libs.PDFJS.cMapUrl,cMapPacked:_libs.PDFJS.cMapPacked,disableAutoFetch:_libs.PDFJS.disableAutoFetch,disableStream:_libs.PDFJS.disableStream,imageResourcesPath:_libs.PDFJS.imageResourcesPath,externalLinkTarget:_libs.PDFJS.externalLinkTarget}),this.task.onProgress=function(data){if(_this.loadingProgress){var cur=Math.floor(100*data.loaded/data.total),old=Math.floor(100*_this.progresData.loaded/_this.progresData.total);cur!==old&&(cur=isNaN(cur)?0:cur,cur=cur>100?100:cur,Promise.resolve().then(function(){_this.loadingProgress(cur)}))}_this.progresData=data},this.task.promise.then(function(handler){handler.numPages>1?Promise.all([handler.getPage(1),handler.getPage(2)]).then(function(pages){_this.init(handler,pages)}):_this.init(handler)}).catch(function(e){return console.error(e)})}return Pdf.prototype.init=function(handler,pages){this.handler=handler,this.doubledPages=!!pages&&Math.abs(2*Pdf.getPageSize(pages[0]).width-Pdf.getPageSize(pages[1]).width)/Pdf.getPageSize(pages[0]).width<.01;for(var done=Promise.resolve(handler),_iterator=this.handlerQueue.reverse(),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if("break"===function(){if(_isArray){if(_i>=_iterator.length)return"break";_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)return"break";_ref=_i.value}var clb=_ref;done=done.then(function(handler){return clb(handler),handler})}())break}},Pdf.prototype.getPageType=function(n){return this.doubledPages&&0!==n&&n!==this.getPagesNum()-1?1&n?"left":"right":"full"},Pdf.prototype.getPage=function(n){return this.handler.getPage(this.doubledPages?Math.ceil(n/2)+1:n+1)},Pdf.prototype.dispose=function(){this.handlerQueue.splice(0,this.handlerQueue.length),delete this.handler},Pdf.prototype.setLoadingProgressClb=function(clb){this.loadingProgress=clb},Pdf.prototype.getPagesNum=function(){return this.handler?this.doubledPages?2*(this.handler.numPages-1):this.handler.numPages:void 0},Pdf.getPageSize=function(page){return{width:page.view[2]-page.view[0],height:page.view[3]-page.view[1]}},Pdf.prototype.getHandler=function(clb){this.handler?clb(this.handler):this.handlerQueue.push(clb)},Pdf}();exports.default=Pdf},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var Utils=function(){function Utils(){_classCallCheck(this,Utils)}return Utils.normalizeUrl=function(url){function split(s){return s.replace(/\\/g,"/").split("/")}var base=split(window.location.href);return url=split(url),base[2]===url[2]&&(url[0]=base[0]),url.join("/")},Utils.extends=function(der,base){for(var name in base)der.hasOwnProperty(name)||(der[name]=base[name])},Utils.defaultCmp=function(a,b){return a-b},Utils.lowerBound=function(a,x,cmp){cmp=cmp||Utils.defaultCmp;for(var l=0,h=a.length-1;h-l>1;){var mid=Math.floor((l+h)/2);cmp(x,a[mid])<0?h=mid:l=mid}return cmp(x,a[h])>=0?h:l},Utils}();exports.default=Utils},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _$=window.jQuery,_html2canvas=window.html2canvas,_THREE=window.THREE,_React=window.React,_ReactDOM=window.ReactDOM,_PDFJS=window.pdfjsLib,_tr=function(s){return(window.iberezansky||{}).tr&&window.iberezansky.tr(s)||s};exports.$=_$,exports.html2canvas=_html2canvas,exports.THREE=_THREE,exports.React=_React,exports.ReactDOM=_ReactDOM,exports.PDFJS=_PDFJS,exports.tr=_tr},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function parseValue(v){var f=parseFloat(v);return isNaN(f)?v:f}function customiseProps(props,customs){props=props||{};for(var customised=_extends({},props),_iterator=Object.keys(customs),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var name=_ref;"auto"!==customs[name]&&(customised[name]="object"===_typeof(customs[name])?customiseProps(props[name],customs[name]):parseValue(customs[name]))}return customised}function convertProps(props){for(var res={},_iterator2=Object.keys(props),_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++]}else{if(_i2=_iterator2.next(),_i2.done)break;_ref2=_i2.value}var name=_ref2,prop=props[name];"auto"!==prop&&("object"===(void 0===prop?"undefined":_typeof(prop))?res[name]=convertProps(prop):res[name]=parseValue(prop))}return res}function mergeProps(props0,props1){props0=props0||{};for(var merged=_extends({},props0,props1),_iterator3=Object.keys(props1),_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++]}else{if(_i3=_iterator3.next(),_i3.done)break;_ref3=_i3.value}var name=_ref3;"auto"===props1[name]&&void 0!==props0[name]?merged[name]=props0[name]:"object"===_typeof(props1[name])&&(merged[name]=mergeProps(props0[name],props1[name]))}return merged}function pseudoPages(postID,size){for(var pages=[],number=0;number<size;++number)pages.push((0,_pseudoPage2.default)(postID,number));return pages}function buildPrebuiltOptions(instance){var type=instance.post.type,pages="pdf"===instance.post.type&&"none"===instance.post.data.pages_customization?pseudoPages(instance.post.ID,instance.post.data.pdf_pages):instance.pages,pdf="pdf"===type?{get:function(){return this.instnce||(this.instnce=new _Pdf2.default(instance.post.data.guid)),this.instnce}}:void 0,pageCallback=function(n){var page=pages[n];return page?{type:page.page_source_type,src:"pdf"===type?pdf.get():page.page_source_data.guid,interactive:"1"===page.page_source_data.interactive,number:parseInt("pdf"===type?page.page_source_data.number:page.page_number)}:{type:"blank"}},bookCtrlProps=instance.bookCtrlProps;return instance.post.controlProps&&(bookCtrlProps=mergeProps(bookCtrlProps,instance.post.controlProps)),bookCtrlProps=convertProps(bookCtrlProps),"default"===instance.template&&(instance.template=(bookCtrlProps.skin||{}).default||"short-white-book-view"),{ready:""===instance.post.ready_function?function(){}:eval(instance.post.ready_function),pageCallback:pageCallback,pages:pages.length,controlsProps:_extends({},bookCtrlProps,{downloadURL:"pdf"===type?instance.post.data.guid:void 0}),autoNavigation:autoNavigation(instance),propertiesCallback:function(props){return props=customiseProps(props,instance.post.props),props.cssLayersLoader=function(n,clb){var layer=((pages[n]||{}).page_meta_data||{css_layer:{css:"",html:"",js:""}}).css_layer;clb(""!==layer.html?[layer]:[])},props},template:FB3D_CLIENT_LOCALE.templates[instance.template]}}function autoNavigation(instance){return{urlParam:instance.urlparam,navigates:999,pageN:instance.pageN}}function buildPdfUrlOptions(instance){var bookCtrlProps=convertProps(instance.bookCtrlProps);return"default"===instance.template&&(instance.template=(bookCtrlProps.skin||{}).default||"short-white-book-view"),{pdf:instance.pdf,controlsProps:_extends({},bookCtrlProps,{downloadURL:instance.pdf}),autoNavigation:autoNavigation(instance),template:FB3D_CLIENT_LOCALE.templates[instance.template]}}function buildOptions(instance){return"prebuilt"===instance.type?buildPrebuiltOptions(instance):buildPdfUrlOptions(instance)}exports.__esModule=!0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};exports.default=buildOptions;var _Pdf=__webpack_require__(4),_Pdf2=_interopRequireDefault(_Pdf),_pseudoPage=__webpack_require__(12),_pseudoPage2=_interopRequireDefault(_pseudoPage)},function(module,exports,__webpack_require__){"use strict";function createInstance(node){var id=parseInt(node.attr("data-id")),title="true"===node.attr("data-title"),template=node.attr("data-template"),lightbox=node.attr("data-lightbox"),urlparam=node.attr("data-urlparam"),pageN=node.attr("data-page-n"),pdf=node.attr("data-pdf"),thumbnail=node.attr("data-thumbnail");return{type:0!==id||""===pdf?"prebuilt":"pdfurl",id:id,title:title,template:template,node:node,lightbox:lightbox,urlparam:urlparam,pageN:pageN,pdf:pdf,thumbnail:thumbnail}}exports.__esModule=!0,exports.default=createInstance},function(module,exports,__webpack_require__){"use strict";function fetchBookCtrlProps(instances){return new Promise(function(resolve,reject){function setProps(props){instances.forEach(function(instance){return instance.bookCtrlProps=props})}var fb3d=window.fb3d=window.fb3d||{};fb3d.bookCtrlProps?fb3d.bookCtrlProps.props?(setProps(fb3d.bookCtrlProps.props),resolve()):fb3d.bookCtrlProps.queue.push(function(props){setProps(props),resolve()}):(fb3d.bookCtrlProps={queue:[]},_libs.$.ajax({url:FB3D_CLIENT_LOCALE.ajaxurl,data:{action:"fb3d_send_book_control_props"},type:"GET",success:function(r){return(0,_testCode2.default)(r,function(r){setProps(r.props),fb3d.bookCtrlProps.props=r.props;for(var _iterator=fb3d.bookCtrlProps.queue,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}_ref(r.props)}resolve()},reject)},error:reject}))})}exports.__esModule=!0,exports.default=fetchBookCtrlProps;var _libs=__webpack_require__(0),_testCode=__webpack_require__(15),_testCode2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_testCode)},function(module,exports,__webpack_require__){"use strict";function fetchPages(instances){instances=instances.filter(function(i){return 0!==i.id});var data=fb3d.fetchPagesData=fb3d.fetchPagesData||new _FetchingData2.default(function(i){return i.id});return new Promise(function(resolve){data.add(instances,resolve);var queue=data.queue;setTimeout(function(){queue===data.queue&&(_libs.$.ajax({url:FB3D_CLIENT_LOCALE.ajaxurl,data:{action:"fb3d_send_posts_in_pages",ids:Object.keys(data.map)},type:"GET",success:function(r){for(var map={},_iterator=r.pages||[],_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var page=_ref;map[page.page_post_ID]||(map[page.page_post_ID]=[]),map[page.page_post_ID].push(page)}data.forEach(function(instance){map[instance.id]?instance.pages=map[instance.id].sort(function(p1,p2){return p1.page_number-p2.page_number}):instance.pages=[]}),data.resolve()},error:function(e){return data.forEach(function(instance){return instance.error=e})}}),delete fb3d.fetchPagesData)},500)})}exports.__esModule=!0,exports.default=fetchPages;var _libs=__webpack_require__(0),_FetchingData=__webpack_require__(1),_FetchingData2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_FetchingData),fb3d=window.fb3d=window.fb3d||{}},function(module,exports,__webpack_require__){"use strict";function fetchPosts(instances){var thumbnailUrl=arguments.length>1&&void 0!==arguments[1]&&arguments[1];instances=instances.filter(function(i){return 0!==i.id});var data=fb3d.fetchPostsData=fb3d.fetchPostsData||new _FetchingData2.default(function(i){return i.id});return data.ids=data.ids||{},new Promise(function(resolve){data.add(instances,resolve);var queue=data.queue;instances.forEach(function(instance){return data.ids[instance.id]=data.ids[instance.id]||thumbnailUrl}),setTimeout(function(){queue===data.queue&&(_libs.$.ajax({url:FB3D_CLIENT_LOCALE.ajaxurl,data:{action:"fb3d_send_posts_in",tus:Object.keys(data.ids).filter(function(id){return data.ids[id]}),ntus:Object.keys(data.ids).filter(function(id){return!data.ids[id]})},type:"GET",success:function(r){for(var _iterator=r.posts||[],_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var post=_ref;data.set(post.ID,"post",post)}data.forEach(function(instance){instance.post||(instance.error=!0)}),data.resolve(),data.ids={}},error:function(e){return data.forEach(function(instance){return instance.error=e})}}),delete fb3d.fetchPostsData)},500)})}exports.__esModule=!0,exports.default=fetchPosts;var _libs=__webpack_require__(0),_FetchingData=__webpack_require__(1),_FetchingData2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_FetchingData),fb3d=window.fb3d=window.fb3d||{}},function(module,exports,__webpack_require__){"use strict";function pseudoPage(postID,number){return{page_ID:0,page_number:number,page_post_ID:postID,page_source_data:{number:number,interactive:"1"},page_source_type:"pdf",page_thumbnail_data:{post_ID:0},page_thumbnail_type:"auto",page_title:""}}exports.__esModule=!0,exports.default=pseudoPage},function(module,exports,__webpack_require__){"use strict";function renderError(node,instance,r){console.error(r),node.html('\n    <div class="alert alert-danger">\n      <span class="fa fa-exclamation-circle"></span> Item is not found\n    </div>\n  ')}exports.__esModule=!0,exports.default=renderError},function(module,exports,__webpack_require__){"use strict";function renderInstances(instances,render){for(var _iterator=instances,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var instance=_ref;instance.error?(0,_renderError2.default)(instance.node,instance,instance.error):render(instance)}}exports.__esModule=!0,exports.default=renderInstances;var _renderError=__webpack_require__(13),_renderError2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_renderError)},function(module,exports,__webpack_require__){"use strict";function testCode(r,resolve,reject){r.code?reject(r):resolve(r)}exports.__esModule=!0,exports.default=testCode},function(module,exports,__webpack_require__){__webpack_require__(2),module.exports=__webpack_require__(3)}]);