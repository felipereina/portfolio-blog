(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,t,A){"use strict";A.r(t);var a=A(202),r=A(0),i=A.n(r),n=A(190),s=(A(191),A(203)),c=A.n(s),o=A(194),d=A.n(o),l=A(192),u=function(e){var t=e.post,A=t.frontmatter,a=A.title,r=A.date,n=A.author,s=A.slug,o=t.frontmatter.image.childImageSharp.fluid;return i.a.createElement("article",{className:c.a.card},i.a.createElement("div",{className:c.a.image},i.a.createElement(d.a,{fluid:o})),i.a.createElement("div",{className:c.a.info},i.a.createElement("div",null,i.a.createElement("h2",null,a),i.a.createElement("h6",null,i.a.createElement("span",null,"by ",n)," /",i.a.createElement("span",null,r)),i.a.createElement("p",null,t.excerpt),i.a.createElement(l.a,{to:s,className:c.a.link},"read more"))))},f=A(204),g=A.n(f),p=function(e){var t=e.posts;return i.a.createElement("section",{className:g.a.posts},i.a.createElement("h1",null,"Felipe Reina"),i.a.createElement("h4",null,"personal blog"),i.a.createElement("div",{className:g.a.center},t.map(function(e,t){var A=e.node;return i.a.createElement(u,{key:t,post:A})})))};t.default=function(){var e=a.data.allMdx.edges;return i.a.createElement(n.a,null,i.a.createElement(p,{posts:e}))}},188:function(e,t,A){var a=A(4),r=A(10),i=A(37),n=/"/g,s=function(e,t,A,a){var r=String(i(e)),s="<"+t;return""!==A&&(s+=" "+A+'="'+String(a).replace(n,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var A={};A[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",A)}},189:function(e,t,A){var a;e.exports=(a=A(193))&&a.default||a},190:function(e,t,A){"use strict";var a=A(0),r=A.n(a);A(196);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,t))}},191:function(e,t,A){"use strict";A(188)("link",function(e){return function(t){return e(this,"a","href",t)}})},192:function(e,t,A){"use strict";var a=A(0),r=A.n(a),i=A(60),n=A.n(i);A.d(t,"a",function(){return n.a});A(189),A(9).default.enqueue,r.a.createContext({})},193:function(e,t,A){"use strict";A.r(t);A(47),A(16),A(13),A(14),A(7),A(20);var a=A(0),r=A.n(a),i=A(87);function n(e,t){var A=Object.keys(e);return Object.getOwnPropertySymbols&&A.push.apply(A,Object.getOwnPropertySymbols(e)),t&&(A=A.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),A}function s(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}t.default=function(e){var t=e.location,A=e.pageResources;return A?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?n(A,!0).forEach(function(t){s(e,t,A[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):n(A).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))})}return e}({location:t,pageResources:A},A.json)):null}},194:function(e,t,A){"use strict";A(13),A(14),A(7),A(86),A(129),A(195);var a=A(17);t.__esModule=!0,t.default=void 0;var r,i=a(A(62)),n=a(A(63)),s=a(A(131)),c=a(A(132)),o=a(A(0)),d=a(A(64)),l=function(e){var t=(0,c.default)({},e),A=t.resolutions,a=t.sizes,r=t.critical;return A&&(t.fixed=A,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.fluid,A=e.fixed;return(t&&t[0]||A&&A[0]).src},f=Object.create({}),g=function(e){var t=l(e),A=u(t);return f[A]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,h=new WeakMap;function E(e){return e.map(function(e){var t=e.src,A=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},a&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),o.default.createElement("source",{media:r,srcSet:A,sizes:i}))})}function w(e){var t=[],A=[];return e.forEach(function(e){return(e.media?t:A).push(e)}),t.concat(A)}function B(e){return e.map(function(e){var t=e.src,A=e.media,a=e.tracedSVG;return o.default.createElement("source",{key:t,media:A,srcSet:a})})}function j(e){return e.map(function(e){var t=e.src,A=e.media,a=e.base64;return o.default.createElement("source",{key:t,media:A,srcSet:a})})}function Q(e,t){var A=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:A)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var S=function(e,t){var A=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return A&&(A.observe(e),h.set(e,t)),function(){A.unobserve(e),h.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?Q(e,!0):"")+Q(e)}).join("")+"<img "+o+n+s+A+a+t+i+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=function(e){var t=e.src,A=e.imageVariants,a=e.generateSources,r=e.spreadProps,i=o.default.createElement(R,(0,c.default)({src:t},r));return A.length>1?o.default.createElement("picture",null,a(A),i):i},R=o.default.forwardRef(function(e,t){var A=e.sizes,a=e.srcSet,r=e.src,i=e.style,n=e.onLoad,d=e.onError,l=e.loading,u=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:A,srcSet:a,src:r},f,{onLoad:n,onError:d,ref:t,loading:l,draggable:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var A;(A=e.call(this,t)||this).seenBefore=m&&g(t),A.addNoScript=!(t.critical&&!t.fadeIn),A.useIOSupport=!p&&b&&!t.critical&&!A.seenBefore;var a=t.critical||m&&(p||!A.useIOSupport);return A.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!A.seenBefore&&t.fadeIn},A.imageRef=o.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,n.default)((0,n.default)(A))),A.handleRef=A.handleRef.bind((0,n.default)((0,n.default)(A))),A}(0,i.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},A.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},A.handleImageLoaded=function(){var e,t,A;e=this.props,t=l(e),A=u(t),f[A]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=l(this.props),t=e.title,A=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,n=e.imgStyle,s=void 0===n?{}:n,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,h=e.Tag,w=e.itemProp,Q=e.loading,S=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,c.default)({opacity:N?1:0,transition:I?"opacity "+b+"ms":"none"},s),Y="boolean"==typeof m?"lightgray":m,D={transitionDelay:b+"ms"},P=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&D,s,u),O={title:t,alt:this.state.isVisible?"":A,style:P,className:f};if(g){var C=g,L=C[0];return o.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},o.default.createElement(h,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),Y&&o.default.createElement(h,{title:t,style:(0,c.default)({backgroundColor:Y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&D)}),L.base64&&o.default.createElement(y,{src:L.base64,spreadProps:O,imageVariants:C,generateSources:j}),L.tracedSVG&&o.default.createElement(y,{src:L.tracedSVG,spreadProps:O,imageVariants:C,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(C),o.default.createElement(R,{alt:A,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:Q,draggable:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,c.default)({alt:A,title:t,loading:Q},L,{imageVariants:C}))}}))}if(p){var M=p,G=M[0],F=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete F.display,o.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},Y&&o.default.createElement(h,{title:t,style:(0,c.default)({backgroundColor:Y,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},I&&D)}),G.base64&&o.default.createElement(y,{src:G.base64,spreadProps:O,imageVariants:M,generateSources:j}),G.tracedSVG&&o.default.createElement(y,{src:G.tracedSVG,spreadProps:O,imageVariants:M,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(M),o.default.createElement(R,{alt:A,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:Q,draggable:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,c.default)({alt:A,title:t,loading:Q},G,{imageVariants:M}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:I,sizes:x,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Y=N;t.default=Y},195:function(e,t,A){"use strict";A(188)("fixed",function(e){return function(){return e(this,"tt","","")}})},202:function(e){e.exports={data:{allMdx:{totalCount:3,edges:[{node:{frontmatter:{title:"third post",author:"Felipe Reina",slug:"third-post",date:"July 24th, 2019",image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAABTfRAZQsq/wD/xAAcEAACAQUBAAAAAAAAAAAAAAABAgMAERIhMTL/2gAIAQEAAQUClkYMLFXAyg2nqm7/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAREhAhCBof/aAAgBAQAGPwJJeGM9oZZD1//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQYH/2gAIAQEAAT8heVCvqYDuahLFgrkT6Jz1JmpP/9oADAMBAAIAAwAAABBPz//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxARLL//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhUf/aAAgBAgEBPxBJnBQ//8QAGxABAAMBAAMAAAAAAAAAAAAAAQARITFBUbH/2gAIAQEAAT8QrGG0mkvebFXeFVp9+JYaEAKC+QmLBex06F0Z8mnAJ//Z",aspectRatio:1.7761989342806395,src:"/static/ba209664c4b70146ddcb39243393fb9b/bc3a8/image-3.jpg",srcSet:"/static/ba209664c4b70146ddcb39243393fb9b/d278e/image-3.jpg 200w,\n/static/ba209664c4b70146ddcb39243393fb9b/8539d/image-3.jpg 400w,\n/static/ba209664c4b70146ddcb39243393fb9b/bc3a8/image-3.jpg 800w,\n/static/ba209664c4b70146ddcb39243393fb9b/2f7e7/image-3.jpg 1000w",srcWebp:"/static/ba209664c4b70146ddcb39243393fb9b/c6096/image-3.webp",srcSetWebp:"/static/ba209664c4b70146ddcb39243393fb9b/1932c/image-3.webp 200w,\n/static/ba209664c4b70146ddcb39243393fb9b/f4957/image-3.webp 400w,\n/static/ba209664c4b70146ddcb39243393fb9b/c6096/image-3.webp 800w,\n/static/ba209664c4b70146ddcb39243393fb9b/80349/image-3.webp 1000w",sizes:"(max-width: 800px) 100vw, 800px"}}}},excerpt:"Testing MDX Mussum Ipsum, cacilds vidis litro abertis.\n Nullam volutpat risus nec leo commodo ,\nut interdum diam laoreet. Sed non consequat…"}},{node:{frontmatter:{title:"second post",author:"Felipe Reina",slug:"second-post",date:"July 21st, 2019",image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG05oMFh//EABoQAQACAwEAAAAAAAAAAAAAAAEAAhESEzH/2gAIAQEAAQUC2KxRq+7s6Mzmf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAAQARFBIf/aAAgBAQAGPwLsFrDF/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIUExUYGR8P/aAAgBAQABPyFIZB6gsFXxcGzU+xAdekvm14J//9oADAMBAAIAAwAAABCwz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExUZGx/9oACAEBAAE/EGdAcQMGrB5CVQuVLjIq7AFG28l+y21HgBP/2Q==",aspectRatio:1.4992503748125936,src:"/static/1937aa189c77f92fdd1b368092edb435/bc3a8/image-2.jpg",srcSet:"/static/1937aa189c77f92fdd1b368092edb435/d278e/image-2.jpg 200w,\n/static/1937aa189c77f92fdd1b368092edb435/8539d/image-2.jpg 400w,\n/static/1937aa189c77f92fdd1b368092edb435/bc3a8/image-2.jpg 800w,\n/static/1937aa189c77f92fdd1b368092edb435/2f7e7/image-2.jpg 1000w",srcWebp:"/static/1937aa189c77f92fdd1b368092edb435/c6096/image-2.webp",srcSetWebp:"/static/1937aa189c77f92fdd1b368092edb435/1932c/image-2.webp 200w,\n/static/1937aa189c77f92fdd1b368092edb435/f4957/image-2.webp 400w,\n/static/1937aa189c77f92fdd1b368092edb435/c6096/image-2.webp 800w,\n/static/1937aa189c77f92fdd1b368092edb435/80349/image-2.webp 1000w",sizes:"(max-width: 800px) 100vw, 800px"}}}},excerpt:"Testing MDX Mussum Ipsum, cacilds vidis litro abertis.\n Nullam volutpat risus nec leo commodo ,\nut interdum diam laoreet. Sed non consequat…"}},{node:{frontmatter:{title:"first post",author:"Felipe Reina",slug:"first-post",date:"July 19th, 2019",image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeU0vdnIgH//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQISESEx/9oACAEBAAEFAl1tGRSiX1ZH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAARARACL/2gAIAQEABj8C3IgjlX//xAAcEAADAAIDAQAAAAAAAAAAAAAAARExYVGRofD/2gAIAQEAAT8hrAcTbtz0rllGZ2NYZItHzWf/2gAMAwEAAgADAAAAENvv/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EIV//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qp//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUXH/2gAIAQEAAT8Qvp23Ww2FGNl9xB7tt9jLVRyhSvcFAJz7kRzsP//Z",aspectRatio:1.3333333333333333,src:"/static/bdc5110824e98293e3ac44e8149ac3e6/bc3a8/image-1.jpg",srcSet:"/static/bdc5110824e98293e3ac44e8149ac3e6/d278e/image-1.jpg 200w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/8539d/image-1.jpg 400w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/bc3a8/image-1.jpg 800w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/2f7e7/image-1.jpg 1000w",srcWebp:"/static/bdc5110824e98293e3ac44e8149ac3e6/c6096/image-1.webp",srcSetWebp:"/static/bdc5110824e98293e3ac44e8149ac3e6/1932c/image-1.webp 200w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/f4957/image-1.webp 400w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/c6096/image-1.webp 800w,\n/static/bdc5110824e98293e3ac44e8149ac3e6/80349/image-1.webp 1000w",sizes:"(max-width: 800px) 100vw, 800px"}}}},excerpt:"Testing MDX Mussum Ipsum, cacilds vidis litro abertis.\n Nullam volutpat risus nec leo commodo ,\nut interdum diam laoreet. Sed non consequat…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-56737c7edb9dbfe014ca.js.map