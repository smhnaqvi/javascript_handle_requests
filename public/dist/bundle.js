(()=>{"use strict";const e=new class{constructor({baseUrl:e,port:t,version:s}){this.config={baseUrl:"127.0.0.1",port:3005,version:1},this.routesList=[],e&&(this.config.baseUrl=e),(t||null===t)&&(this.config.port=t),s&&(this.config.version=s)}set({routeName:e,authenticate:t=!1,version:s}){this.routesList.push({path:this.generateRoute(e,s),route:e,authenticate:t,rest:this.generatePromisses(e)})}routes(){return this.routesList}URL(e){let t=this.config.baseUrl;return this.config.port&&(t+=`:${this.config.port}`),(e||this.config.version)&&(t+=`/v${this.config.version}/`),t}generateRoute(e,t){return this.URL(t)+e}generatePromisses(e){return{get:new Promise(((e,t)=>{})),post:new Promise(((e,t)=>{})),put:new Promise(((e,t)=>{})),delete:new Promise(((e,t)=>{}))}}}({port:5e3,version:5});e.set({routeName:"users",authenticate:!0,version:5}),e.set({routeName:"articals",authenticate:!0,version:5}),e.set({routeName:"posts",authenticate:!0,version:5}),e.set({routeName:"users",authenticate:!1,version:1}),e.set({routeName:"articals",authenticate:!1,version:1}),e.set({routeName:"posts",authenticate:!1,version:1}),console.log(e.routes())})();