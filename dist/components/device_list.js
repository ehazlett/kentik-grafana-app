define(["lodash","angular","app/core/core"],function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){var e="default";for(var n in t)if("kentik-ds"===t[n].type)return"custom"===(e=t[n].jsonData.region)&&console.log("getRegion(): Custom Dynamic URL: "+t[n].jsonData.dynamicUrl),e;return e}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var r=n(5),i=n(0);function o(t){var e="";e+=t.status?"("+t.status+") ":"",e+=t.statusText?t.statusText+": ":"",t.data&&t.data.error?e+=t.data.error:t.err?e+=t.err:i.isString(t)&&(e+=t),r.appEvents.emit("alert-error",["Can't connect to Kentik API",e])}function a(t,e,n){var o="";o+=e.status?"("+e.status+") ":"",o+=e.statusText?e.statusText+": ":"",e.data&&e.data.error?o+=e.data.error:e.err?o+=e.err:i.isString(e)&&(o+=e),r.appEvents.emit("alert-"+n,[t,o])}},function(t,n){t.exports=e},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(3),i=n.n(r),o=n(1),a=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})},s=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},u=function(){function t(t){var e=this;this.backendSrv=t,this.apiReady=!1,this.baseUrl="/api/plugin-proxy/kentik-app",t.get("/api/datasources").then(function(t){e.region=Object(o.a)(t),e.setRegion(e.region),e.apiReady=!0})}return t.$inject=["backendSrv"],t.prototype.setRegion=function(t){this.region=t},t.prototype.getDevices=function(){return a(this,void 0,void 0,function(){var t,e=this;return s(this,function(n){switch(n.label){case 0:return this.backendSrv.get("/api/datasources").then(function(t){e.region=Object(o.a)(t),e.setRegion(e.region),e.apiReady=!0}),[4,this._get("/api/v5/devices")];case 1:return(t=n.sent()).data&&t.data.devices?[2,t.data.devices]:[2,[]]}})})},t.prototype.getUsers=function(){return a(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._get("/api/v5/users")];case 1:return[2,t.sent()]}})})},t.prototype.getFieldValues=function(t){var e="SELECT DISTINCT "+t+" FROM all_devices ORDER BY "+t+" ASC";return this.invokeSQLQuery(e)},t.prototype.getCustomDimensions=function(){return a(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._get("/api/v5/customdimensions")];case 1:return[2,t.sent().data.customDimensions]}})})},t.prototype.getSavedFilters=function(){return a(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._get("/api/v5/saved-filters")];case 1:return[2,t.sent().data]}})})},t.prototype.invokeTopXDataQuery=function(t){var e={queries:[{query:t,bucketIndex:0}]};return this._post("/api/v5/query/topXdata",e)},t.prototype.invokeSQLQuery=function(t){var e={query:t};return this._post("/api/v5/query/sql",e)},t.prototype._get=function(t){return a(this,void 0,void 0,function(){var e=this;return s(this,function(n){switch(n.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(t){e.setRegion(Object(o.a)(t))})];case 1:n.sent(),n.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"GET",url:this.baseUrl+"/"+this.region+t}).catch(function(t){return console.error(t),t.err?Promise.reject(t.err):Promise.reject(t)})]}})})},t.prototype._post=function(t,e){return a(this,void 0,void 0,function(){var n=this;return s(this,function(r){switch(r.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(t){n.setRegion(Object(o.a)(t))})];case 1:r.sent(),r.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"POST",url:this.baseUrl+"/"+this.region+t,data:e}).then(function(t){return t.data?t.data:[]}).catch(function(t){return console.error(t),t.err?Promise.reject(t.err):Promise.reject(t)})]}})})},t}();i.a.module("grafana.services").service("kentikAPISrv",u)},function(t,e){t.exports=n},,,,function(t,e,n){"use strict";n.r(e),n.d(e,"DeviceListCtrl",function(){return o});var r=n(4),i=n(2),o=function(){function t(t,e,n,i){this.$scope=t,this.$location=n,this.backendSrv=i,this.devices=[],this.pageReady=!1,this.kentik=new r.a(this.backendSrv),this.getDevices()}return t.$inject=["$scope","$injector","$location","backendSrv"],t.prototype.getDevices=function(){var t=this;try{this.kentik.getDevices().then(function(e){t.devices=e,t.pageReady=!0,t.$scope.$apply()})}catch(t){Object(i.a)(t)}},t.prototype.refresh=function(){this.getDevices()},t.prototype.gotoDashboard=function(t){this.$location.path("/dashboard/db/kentik-top-talkers").search({"var-device":t.device_name})},t.prototype.gotoDeviceDetail=function(t){this.$location.url("/plugins/kentik-app/page/device-details?device="+t.id)},t}();o.templateUrl="components/device_list.html"}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9yZWdpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9hbGVydEhlbHBlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9rZW50aWtBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kZXZpY2VfbGlzdC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXyIsImdldFJlZ2lvbiIsImRhdGFzb3VyY2VzIiwiYVJlZ2lvbiIsImluZGV4IiwidHlwZSIsImpzb25EYXRhIiwicmVnaW9uIiwiY29uc29sZSIsImxvZyIsImR5bmFtaWNVcmwiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwic2hvd0FsZXJ0Iiwic2hvd0N1c3RvbUFsZXJ0IiwiZ3JhZmFuYV9hcHBfY29yZV9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJsb2Rhc2hfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiZXJyIiwiZW1pdCIsImV4Y2VwdGlvbkRhdGEiLCJleGNlcHRpb25UeXBlIiwiZXJyTWVzc2FnZSIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzNfXyIsIktlbnRpa0FQSSIsImJhY2tlbmRTcnYiLCJfdGhpcyIsInRoaXMiLCJhcGlSZWFkeSIsImJhc2VVcmwiLCJ0aGVuIiwiYWxsRFMiLCJfcmVnaW9uSGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJzZXRSZWdpb24iLCIkaW5qZWN0IiwicmVzcCIsIl9hIiwic2VudCIsImRldmljZXMiLCJnZXRGaWVsZFZhbHVlcyIsImZpZWxkIiwicXVlcnkiLCJpbnZva2VTUUxRdWVyeSIsImludm9rZVRvcFhEYXRhUXVlcnkiLCJrZW50aWtWNVF1ZXJ5IiwicXVlcmllcyIsImJ1Y2tldEluZGV4IiwiX3Bvc3QiLCJkYXRhc291cmNlUmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiRGV2aWNlTGlzdEN0cmwiLCJfZGF0YXNvdXJjZV9rZW50aWtBUElfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9kYXRhc291cmNlX2FsZXJ0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCIkc2NvcGUiLCIkaW5qZWN0b3IiLCIkbG9jYXRpb24iLCJwYWdlUmVhZHkiLCJrZW50aWsiLCJnZXREZXZpY2VzIiwiJGFwcGx5IiwiZSIsInJlZnJlc2giLCJnb3RvRGFzaGJvYXJkIiwiZGV2aWNlIiwicGF0aCIsInNlYXJjaCIsInZhci1kZXZpY2UiLCJkZXZpY2VfbmFtZSIsImdvdG9EZXZpY2VEZXRhaWwiLCJpZCJdLCJtYXBwaW5ncyI6IitFQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxF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RUFBQSxHQVVsRDhGLEVBQWdCLG9CQUM4QkEsRUFBQUcsRUFBY0MsRUFBQUMsRUFBQW5DLEdBQVNFLEtBQUErQixTQUNuRS9CLEtBQUtpQyxVQUFZQSxFQUNqQmpDLEtBQUtGLFdBQVlBLEVBQ2pCRSxLQUFLVyxRQUFTLEdBQ2RYLEtBQUtrQyxXQUFZLEVBQ2xCbEMsS0FBQW1DLE9BQUEsSUFBQU4sRUFBQSxFQUFBN0IsS0FBQUYsWUFFREUsS0FBQW9DLGFBeUJGLFNBaEM0QjdCLFFBQUEsa0RBUXBCekMsVUFBQXNFLFdBQUEsZUFDRnJDLEVBQUtDLGNBRUhtQyxPQUFLQyxhQUFZakMsS0FBSyxTQUFBUSxHQUN0QlosRUFBS1ksUUFBT0EsRUFDWFosRUFBQW1DLFdBQUEsRUFDSm5DLEVBQUFnQyxPQUFBTSxpQkFFQUMsR0FDRjFGLE9BQUFrRixFQUFBLEVBQUFsRixDQUFBMEYsS0FJRFYsRUFBQzlELFVBQUF5RSxRQUFBLFdBRUR2QyxLQUFBb0MsY0FFQVIsRUFBQzlELFVBQUEwRSxjQUFBLFNBQUFDLEdBRUR6QyxLQUFBaUMsVUFBQVMsS0FBQSxvQ0FBdUJDLE9BQUEsQ0FBQUMsYUFBQUgsRUFBQUksZUFFdkJqQixFQUFDOUQsVUFBQWdGLGlCQUFBLFNBQUFMLEdBQ0h6QyxLQUFBaUMsVUFBQVYsSUFBQyxrREFBQWtCLEVBQUFNLEtBRURuQixFQWpDa0IiLCJmaWxlIjoiY29tcG9uZW50cy9kZXZpY2VfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyIsIiAvKipcbiAgKiBSZXR1cm5zIHRoZSByZWdpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBrZW50aWsta3NcblxuICAqIEBwYXJhbSBkYXRhc291cmNlcyBcbiAgKi9cbmZ1bmN0aW9uIGdldFJlZ2lvbihkYXRhc291cmNlczogYW55KTogc3RyaW5nIHtcbiAgbGV0IGFSZWdpb24gPSBcImRlZmF1bHRcIjtcbiAgZm9yICh2YXIgaW5kZXggaW4gZGF0YXNvdXJjZXMpIHtcbiAgICBpZiAoZGF0YXNvdXJjZXNbaW5kZXhdLnR5cGUgPT09IFwia2VudGlrLWRzXCIpIHtcbiAgICAgIGFSZWdpb24gPSBkYXRhc291cmNlc1tpbmRleF0uanNvbkRhdGEucmVnaW9uO1xuICAgICAgaWYgKGFSZWdpb24gPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0UmVnaW9uKCk6IEN1c3RvbSBEeW5hbWljIFVSTDogXCIgKyBkYXRhc291cmNlc1tpbmRleF0uanNvbkRhdGEuZHluYW1pY1VybCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRSZWdpb24oKTogQ3VzdG9tIERTIEluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YXNvdXJjZXNbaW5kZXhdKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYVJlZ2lvbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFSZWdpb247XG59XG5cbmV4cG9ydCB7IGdldFJlZ2lvbiB9XG4iLCJpbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdncmFmYW5hL2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBzaG93QWxlcnQoZXJyb3IpIHtcbiAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgbWVzc2FnZSArPSBlcnJvci5zdGF0dXMgPyBgKCR7ZXJyb3Iuc3RhdHVzfSkgYCA6ICcnO1xuICBtZXNzYWdlICs9IGVycm9yLnN0YXR1c1RleHQgPyBlcnJvci5zdGF0dXNUZXh0ICsgJzogJyA6ICcnO1xuICBpZiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmVycm9yKSB7XG4gICAgbWVzc2FnZSArPSBlcnJvci5kYXRhLmVycm9yO1xuICB9IGVsc2UgaWYgKGVycm9yLmVycikge1xuICAgIG1lc3NhZ2UgKz0gZXJyb3IuZXJyO1xuICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcoZXJyb3IpKSB7XG4gICAgbWVzc2FnZSArPSBlcnJvcjtcbiAgfVxuXG4gIGFwcEV2ZW50cy5lbWl0KCdhbGVydC1lcnJvcicsIFtcIkNhbid0IGNvbm5lY3QgdG8gS2VudGlrIEFQSVwiLCBtZXNzYWdlXSk7XG59XG5cbmZ1bmN0aW9uIHNob3dDdXN0b21BbGVydChtZXNzYWdlLCBleGNlcHRpb25EYXRhLCBleGNlcHRpb25UeXBlKSB7XG4gIGxldCBlcnJNZXNzYWdlID0gJyc7XG4gIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5zdGF0dXMgPyBgKCR7ZXhjZXB0aW9uRGF0YS5zdGF0dXN9KSBgIDogJyc7XG4gIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5zdGF0dXNUZXh0ID8gZXhjZXB0aW9uRGF0YS5zdGF0dXNUZXh0ICsgJzogJyA6ICcnO1xuICBpZiAoZXhjZXB0aW9uRGF0YS5kYXRhICYmIGV4Y2VwdGlvbkRhdGEuZGF0YS5lcnJvcikge1xuICAgIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5kYXRhLmVycm9yO1xuICB9IGVsc2UgaWYgKGV4Y2VwdGlvbkRhdGEuZXJyKSB7XG4gICAgZXJyTWVzc2FnZSArPSBleGNlcHRpb25EYXRhLmVycjtcbiAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKGV4Y2VwdGlvbkRhdGEpKSB7XG4gICAgZXJyTWVzc2FnZSArPSBleGNlcHRpb25EYXRhO1xuICB9XG4gIGFwcEV2ZW50cy5lbWl0KGBhbGVydC0ke2V4Y2VwdGlvblR5cGV9YCwgW21lc3NhZ2UsIGVyck1lc3NhZ2VdKTtcbn1cblxuZXhwb3J0IHsgc2hvd0FsZXJ0LCBzaG93Q3VzdG9tQWxlcnQgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fM19fOyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgZ2V0UmVnaW9uIH0gZnJvbSBcIi4vcmVnaW9uSGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBLZW50aWtBUEkge1xuICBiYXNlVXJsOiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuICBhcGlSZWFkeTogYm9vbGVhbjtcbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFja2VuZFNydjogYW55KSB7XG4gICAgdGhpcy5hcGlSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuYmFzZVVybCA9IFwiL2FwaS9wbHVnaW4tcHJveHkva2VudGlrLWFwcFwiO1xuICAgIC8vIGdldCByZWdpb24gZnJvbSBkYXRhc291cmNlXG4gICAgYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKCAoYWxsRFM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWdpb24gPSBnZXRSZWdpb24oYWxsRFMpO1xuICAgICAgdGhpcy5zZXRSZWdpb24odGhpcy5yZWdpb24pO1xuICAgICAgdGhpcy5hcGlSZWFkeSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXRSZWdpb24ocmVnaW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgfVxuXG4gIGFzeW5jIGdldERldmljZXMoKSB7XG4gICAgdGhpcy5iYWNrZW5kU3J2LmdldCgnL2FwaS9kYXRhc291cmNlcycpLnRoZW4oIChhbGxEUzogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlZ2lvbiA9IGdldFJlZ2lvbihhbGxEUyk7XG4gICAgICB0aGlzLnNldFJlZ2lvbih0aGlzLnJlZ2lvbik7XG4gICAgICB0aGlzLmFwaVJlYWR5ID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9nZXQoJy9hcGkvdjUvZGV2aWNlcycpO1xuXG4gICAgaWYgKHJlc3AuZGF0YSAmJiByZXNwLmRhdGEuZGV2aWNlcykge1xuICAgICAgcmV0dXJuIHJlc3AuZGF0YS5kZXZpY2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcnMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldCgnL2FwaS92NS91c2VycycpXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBnZXRGaWVsZFZhbHVlcyhmaWVsZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcXVlcnkgPSBgU0VMRUNUIERJU1RJTkNUICR7ZmllbGR9IEZST00gYWxsX2RldmljZXMgT1JERVIgQlkgJHtmaWVsZH0gQVNDYDtcbiAgICByZXR1cm4gdGhpcy5pbnZva2VTUUxRdWVyeShxdWVyeSk7XG4gIH1cblxuICBhc3luYyBnZXRDdXN0b21EaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9nZXQoJy9hcGkvdjUvY3VzdG9tZGltZW5zaW9ucycpO1xuICAgIHJldHVybiBkYXRhLmRhdGEuY3VzdG9tRGltZW5zaW9ucztcbiAgfVxuXG4gIGFzeW5jIGdldFNhdmVkRmlsdGVycygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZ2V0KCcvYXBpL3Y1L3NhdmVkLWZpbHRlcnMnKTtcbiAgICByZXR1cm4gZGF0YS5kYXRhO1xuICB9XG5cbiAgaW52b2tlVG9wWERhdGFRdWVyeShxdWVyeTogYW55KSB7XG4gICAgY29uc3Qga2VudGlrVjVRdWVyeSA9IHtcbiAgICAgIHF1ZXJpZXM6IFt7IHF1ZXJ5OiBxdWVyeSwgYnVja2V0SW5kZXg6IDAgfV0sXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9wb3N0KCcvYXBpL3Y1L3F1ZXJ5L3RvcFhkYXRhJywga2VudGlrVjVRdWVyeSk7XG4gIH1cblxuICBpbnZva2VTUUxRdWVyeShxdWVyeTogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX3Bvc3QoJy9hcGkvdjUvcXVlcnkvc3FsJywgZGF0YSk7XG4gIH1cblxuICBhc3luYyBfZ2V0KHVybDogc3RyaW5nKSB7XG4gICAgLy8gaWYgdGhlIHJlZ2lvbiBpcyBub3Qgc2V0LCBnZXQgaXQgZnJvbSB0aGUgZGF0YXNvdXJjZVxuICAgIGlmICh0eXBlb2YgdGhpcy5yZWdpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiX2dldDogdGhpcy5yZWdpb24gVU5ERUZJTkVELCBmZXRjaGluZ1wiKTtcbiAgICAgIGF3YWl0IHRoaXMuYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKCAoYWxsRFM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldFJlZ2lvbihnZXRSZWdpb24oYWxsRFMpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImtlbnRpa0FQSTogX2dldDogRkVUQ0hFRCByZWdpb24gXCIgKyB0aGlzLnJlZ2lvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2XG4gICAgICAuZGF0YXNvdXJjZVJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArIFwiL1wiICsgdGhpcy5yZWdpb24gKyB1cmwsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5lcnIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IuZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9wb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAvLyBpZiB0aGUgcmVnaW9uIGlzIG5vdCBzZXQsIGdldCBpdCBmcm9tIHRoZSBkYXRhc291cmNlXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZ2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJrZW50aWtBUEkuX3Bvc3Q6IHRoaXMucmVnaW9uIFVOREVGSU5FRCwgZmV0Y2hpbmdcIik7XG4gICAgICBhd2FpdCB0aGlzLmJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRSZWdpb24oZ2V0UmVnaW9uKGFsbERTKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJrZW50aWtBUEkuX3Bvc3Q6IEZFVENIRUQgcmVnaW9uIFwiICsgdGhpcy5yZWdpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnZcbiAgICAgIC5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArIFwiL1wiICsgdGhpcy5yZWdpb24gKyB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IuZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLmVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ2dyYWZhbmEuc2VydmljZXMnKS5zZXJ2aWNlKCdrZW50aWtBUElTcnYnLCBLZW50aWtBUEkpO1xuIiwiaW1wb3J0IHsgS2VudGlrQVBJIH0gZnJvbSAnLi4vZGF0YXNvdXJjZS9rZW50aWtBUEknO1xuaW1wb3J0IHsgc2hvd0FsZXJ0IH0gZnJvbSBcIi4uL2RhdGFzb3VyY2UvYWxlcnRIZWxwZXJcIjtcblxuaW1wb3J0IHsgZ2V0UmVnaW9uIH0gZnJvbSBcIi4uL2RhdGFzb3VyY2UvcmVnaW9uSGVscGVyXCI7XG5jbGFzcyBEZXZpY2VMaXN0Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuICBkZXZpY2VzOiBhbnlbXTtcbiAgcGFnZVJlYWR5OiBib29sZWFuO1xuICBrZW50aWs6IEtlbnRpa0FQSTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlLCAkaW5qZWN0b3IsIHB1YmxpYyAkbG9jYXRpb246IGFueSwgcHVibGljIGJhY2tlbmRTcnY6IGFueSkge1xuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuICAgIHRoaXMucGFnZVJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5rZW50aWsgPSBuZXcgS2VudGlrQVBJKHRoaXMuYmFja2VuZFNydik7XG4gICAgdGhpcy5nZXREZXZpY2VzKCk7XG4gIH1cblxuICBnZXREZXZpY2VzKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmtlbnRpay5nZXREZXZpY2VzKCkudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLmRldmljZXMgPSBkZXZpY2VzO1xuICAgICAgICB0aGlzLnBhZ2VSZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMuJHNjb3BlLiRhcHBseSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2hvd0FsZXJ0KGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXREZXZpY2VzKCk7XG4gIH1cblxuICBnb3RvRGFzaGJvYXJkKGRldmljZSkge1xuICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9kYXNoYm9hcmQvZGIva2VudGlrLXRvcC10YWxrZXJzJykuc2VhcmNoKHsgJ3Zhci1kZXZpY2UnOiBkZXZpY2UuZGV2aWNlX25hbWUgfSk7XG4gIH1cblxuICBnb3RvRGV2aWNlRGV0YWlsKGRldmljZSkge1xuICAgIHRoaXMuJGxvY2F0aW9uLnVybCgnL3BsdWdpbnMva2VudGlrLWFwcC9wYWdlL2RldmljZS1kZXRhaWxzP2RldmljZT0nICsgZGV2aWNlLmlkKTtcbiAgfVxufVxuXG5EZXZpY2VMaXN0Q3RybC50ZW1wbGF0ZVVybCA9ICdjb21wb25lbnRzL2RldmljZV9saXN0Lmh0bWwnO1xuXG5leHBvcnQgeyBEZXZpY2VMaXN0Q3RybCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==