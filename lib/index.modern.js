import*as e from"cesium";const t=require("./mapbox-gl"),i=document.createElement("canvas");i.style.imageRendering="pixelated",i.addEventListener("webglcontextlost",()=>console.log("webglcontextlost"),!1),i.width=1024,i.height=1024;class s{constructor(s){var r,o;this.mapboxRenderer=void 0,this.ready=void 0,this.readyPromise=void 0,this.rectangle=void 0,this.tileSize=void 0,this.tileWidth=void 0,this.tileHeight=void 0,this.maximumLevel=void 0,this.minimumLevel=void 0,this.tileDiscardPolicy=void 0,this.credit=void 0,this.proxy=void 0,this.hasAlphaChannel=void 0,this.sourceFilter=void 0,this.tilingScheme=void 0,this.options=void 0,this.transformRequest=e=>this.options.headers?{url:e,headers:this.options.headers}:{url:e},this.options=s,this.mapboxRenderer=new t.BasicRenderer({style:s.style,transformRequest:e=>this.transformRequest(e)}),this.mapboxRenderer._canvas=i,this.mapboxRenderer._canvas.addEventListener("webglcontextrestored",()=>this.mapboxRenderer._createGlContext(),!1),this.mapboxRenderer._createGlContext(),s.showCanvas&&this.mapboxRenderer.showCanvasForDebug(),this.ready=!1,this.readyPromise=this.mapboxRenderer._style.loadedPromise.then(()=>{this.ready=!0}),this.tilingScheme=null!=(r=s.tilingScheme)?r:new e.WebMercatorTilingScheme,this.rectangle=this.tilingScheme.rectangle,this.tileSize=this.tileWidth=this.tileHeight=s.tileSize||1024,this.maximumLevel=s.maximumLevel||Number.MAX_SAFE_INTEGER,this.minimumLevel=s.minimumLevel||0,this.tileDiscardPolicy=void 0,this.credit=new e.Credit(s.credit||"",!1),this.proxy=new e.DefaultProxy(""),this.hasAlphaChannel=null==(o=s.hasAlphaChannel)||o,this.sourceFilter=s.sourceFilter}createTile(){const e=document.createElement("canvas");e.width=this.tileSize,e.height=this.tileSize,e.style.imageRendering="pixelated";const t=e.getContext("2d");return t&&(t.globalCompositeOperation="copy"),e}async canvasToImage(e){const t=new Image;return new Promise(i=>{t.onload=function(){i(t)},t.crossOrigin="",t.src=e.toDataURL("image/png")})}requestImage(e,t,i,s=!0){var r=this;if(i>this.maximumLevel||i<this.minimumLevel)return Promise.reject(void 0);this.mapboxRenderer.filterForZoom(i);const o=[];return this.mapboxRenderer.getVisibleSources(i).forEach(s=>{o.push({source:s,z:i,x:e,y:t,left:0,top:0,size:this.tileSize})}),new Promise((e,t)=>{const i=this.createTile(),n=this.mapboxRenderer.renderTiles(i.getContext("2d"),{srcLeft:0,srcTop:0,width:this.tileSize,height:this.tileSize,destLeft:0,destTop:0},o,async function(o){if(o)t(void 0);else if(s){var a,l;n.consumer.ctx=null;const t=await r.canvasToImage(i);e(t),r.mapboxRenderer.releaseRender(n),null==(a=r.mapboxRenderer._style.sourceCaches)||null==(l=a.origin)||l._tileCache.reset()}else e(n)})})}pickFeatures(t,i,s,r,o){var n;return null==(n=this.requestImage(t,i,s,!1))?void 0:n.then(t=>{var i,n;let a=this.mapboxRenderer.getVisibleSources(s);a=this.sourceFilter?this.sourceFilter(a):a;const l=[],h=e.Math.toDegrees(r),d=e.Math.toDegrees(o);return a.forEach(e=>{l.push({data:this.mapboxRenderer.queryRenderedFeatures({source:e,renderedZoom:s,lng:h,lat:d,tileZ:s})})}),console.log(l),t.consumer.ctx=void 0,this.mapboxRenderer.releaseRender(t),null==(i=this.mapboxRenderer._style.sourceCaches)||null==(n=i.origin)||n._tileCache.reset(),l})}}export{s as default};
//# sourceMappingURL=index.modern.js.map