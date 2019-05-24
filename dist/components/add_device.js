define(["lodash","angular"],function(e,n){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(n,t){n.exports=e},function(e,n,t){"use strict";function i(e){var n="default";for(var t in e)if("kentik-ds"===e[t].type)return"custom"===(n=e[t].jsonData.region)&&console.log("getRegion(): Custom Dynamic URL: "+e[t].jsonData.dynamicUrl),n;return n}t.d(n,"a",function(){return i})},,function(e,t){e.exports=n},,,,,,,,function(e,n,t){"use strict";t.r(n),t.d(n,"AddDeviceCtrl",function(){return s});var i=t(0),r=t(3),o=t.n(r),c=t(1),u={device_name:"",device_type:"router",device_description:"",device_flow_type:"sflow",device_sample_rate:5,sending_ips:"",minimize_snmp:!1,device_bgp_type:"none",device_snmp_ip:"",device_snmp_community:""},s=function(){function e(e,n,t,i,r){var s=this;this.$location=t,this.backendSrv=i,this.alertSrv=r,this.device=o.a.copy(u),this.sendingIps=[{ip:""}],i.get("/api/datasources").then(function(e){s.region=Object(c.a)(e)})}return e.$inject=["$scope","$injector","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.sendingIps.push({ip:""})},e.prototype.removeIP=function(e){this.sendingIps.splice(e,1)},e.prototype.addDevice=function(){var e=this,n=[];i.forEach(this.sendingIps,function(e){n.push(e.ip)}),this.device.sending_ips=n.join(),this.backendSrv.post("/api/plugin-proxy/kentik-app/"+this.region+"/api/v5/device",this.device).then(function(n){"err"in n?e.alertSrv.set("Device Add failed.",n.err,"error"):e.$location.url("/plugins/kentik-app/page/device-list")})},e}();s.templateUrl="components/add_device.html"}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9yZWdpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRkX2RldmljZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXyIsImdldFJlZ2lvbiIsImRhdGFzb3VyY2VzIiwiYVJlZ2lvbiIsImluZGV4IiwidHlwZSIsImpzb25EYXRhIiwicmVnaW9uIiwiY29uc29sZSIsImxvZyIsImR5bmFtaWNVcmwiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fM19fIiwiQWRkRGV2aWNlQ3RybCIsImxvZGFzaF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiYW5ndWxhcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiYW5ndWxhcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQiLCJfZGF0YXNvdXJjZV9yZWdpb25IZWxwZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyIsImRlZmF1bHRzIiwiZGV2aWNlX25hbWUiLCJkZXZpY2VfdHlwZSIsImRldmljZV9kZXNjcmlwdGlvbiIsImRldmljZV9mbG93X3R5cGUiLCJkZXZpY2Vfc2FtcGxlX3JhdGUiLCJzZW5kaW5nX2lwcyIsIm1pbmltaXplX3NubXAiLCJkZXZpY2VfYmdwX3R5cGUiLCJkZXZpY2Vfc25tcF9pcCIsImRldmljZV9zbm1wX2NvbW11bml0eSIsIiRzY29wZSIsIiRpbmplY3RvciIsIiRsb2NhdGlvbiIsImJhY2tlbmRTcnYiLCJhbGVydFNydiIsIl90aGlzIiwidGhpcyIsImRldmljZSIsImEiLCJjb3B5Iiwic2VuZGluZ0lwcyIsImlwIiwidGhlbiIsImFsbERTIiwiJGluamVjdCIsImFkZElQIiwicHVzaCIsInJlbW92ZUlQIiwic3BsaWNlIiwiYWRkRGV2aWNlIiwiaXBzIiwiam9pbiIsInBvc3QiLCJyZXNwIiwic2V0IiwiZXJyIiwidXJsIl0sIm1hcHBpbmdzIjoiNkRBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdBQUEsQ0FDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxRQUFBLElBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQTBEQSxPQXJEQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFB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LFFBQUFLLEtBQUEsU0FBQVcsR0FDakIsUUFBS0EsRUFDTmxCLEVBQUFELFNBQUFvQixJQUFBLHFCQUFBRCxFQUFBRSxJQUFBLFNBRUFwQixFQUFBSCxVQUFBd0IsSUFBQSwyQ0FHTjFDLEVBdkNEIiwiZmlsZSI6ImNvbXBvbmVudHMvYWRkX2RldmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXzsiLCIgLyoqXG4gICogUmV0dXJucyB0aGUgcmVnaW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUga2VudGlrLWtzXG5cbiAgKiBAcGFyYW0gZGF0YXNvdXJjZXMgXG4gICovXG5mdW5jdGlvbiBnZXRSZWdpb24oZGF0YXNvdXJjZXM6IGFueSk6IHN0cmluZyB7XG4gIGxldCBhUmVnaW9uID0gXCJkZWZhdWx0XCI7XG4gIGZvciAodmFyIGluZGV4IGluIGRhdGFzb3VyY2VzKSB7XG4gICAgaWYgKGRhdGFzb3VyY2VzW2luZGV4XS50eXBlID09PSBcImtlbnRpay1kc1wiKSB7XG4gICAgICBhUmVnaW9uID0gZGF0YXNvdXJjZXNbaW5kZXhdLmpzb25EYXRhLnJlZ2lvbjtcbiAgICAgIGlmIChhUmVnaW9uID09PSAnY3VzdG9tJykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldFJlZ2lvbigpOiBDdXN0b20gRHluYW1pYyBVUkw6IFwiICsgZGF0YXNvdXJjZXNbaW5kZXhdLmpzb25EYXRhLmR5bmFtaWNVcmwpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UmVnaW9uKCk6IEN1c3RvbSBEUyBJbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFzb3VyY2VzW2luZGV4XSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFSZWdpb247XG4gICAgfVxuICB9XG4gIHJldHVybiBhUmVnaW9uO1xufVxuXG5leHBvcnQgeyBnZXRSZWdpb24gfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zX187IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBnZXRSZWdpb24gfSBmcm9tIFwiLi4vZGF0YXNvdXJjZS9yZWdpb25IZWxwZXJcIjtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGRldmljZV9uYW1lOiAnJyxcbiAgZGV2aWNlX3R5cGU6ICdyb3V0ZXInLFxuICBkZXZpY2VfZGVzY3JpcHRpb246ICcnLFxuICBkZXZpY2VfZmxvd190eXBlOiAnc2Zsb3cnLFxuICBkZXZpY2Vfc2FtcGxlX3JhdGU6IDUsXG4gIHNlbmRpbmdfaXBzOiAnJyxcbiAgbWluaW1pemVfc25tcDogZmFsc2UsXG4gIGRldmljZV9iZ3BfdHlwZTogJ25vbmUnLFxuICBkZXZpY2Vfc25tcF9pcDogJycsXG4gIGRldmljZV9zbm1wX2NvbW11bml0eTogJycsXG59O1xuXG5leHBvcnQgY2xhc3MgQWRkRGV2aWNlQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuICBkZXZpY2U6IGFueTtcbiAgc2VuZGluZ0lwczogYW55W107XG4gIHJlZ2lvbjogc3RyaW5nO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaW5qZWN0b3IsIHB1YmxpYyAkbG9jYXRpb246IGFueSwgcHVibGljIGJhY2tlbmRTcnY6IGFueSwgcHVibGljIGFsZXJ0U3J2OiBhbnkpIHtcbiAgICB0aGlzLmRldmljZSA9IGFuZ3VsYXIuY29weShkZWZhdWx0cyk7XG4gICAgdGhpcy5zZW5kaW5nSXBzID0gW3sgaXA6ICcnIH1dO1xuICAgIC8vIGdldCByZWdpb24gZnJvbSBkYXRhc291cmNlXG4gICAgLy90aGlzLnJlZ2lvbiA9IFwiZGVmYXVsdFwiO1xuICAgIGJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVnaW9uID0gZ2V0UmVnaW9uKGFsbERTKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZElQKCkge1xuICAgIHRoaXMuc2VuZGluZ0lwcy5wdXNoKHsgaXA6ICcnIH0pO1xuICB9XG5cbiAgcmVtb3ZlSVAoaW5kZXgpIHtcbiAgICB0aGlzLnNlbmRpbmdJcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGFkZERldmljZSgpIHtcbiAgICBjb25zdCBpcHMgPSBbXTtcbiAgICBfLmZvckVhY2godGhpcy5zZW5kaW5nSXBzLCBpcCA9PiB7XG4gICAgICBpcHMucHVzaChpcC5pcCk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXZpY2Uuc2VuZGluZ19pcHMgPSBpcHMuam9pbigpO1xuICAgIHRoaXMuYmFja2VuZFNydi5wb3N0KGAvYXBpL3BsdWdpbi1wcm94eS9rZW50aWstYXBwLyR7dGhpcy5yZWdpb259L2FwaS92NS9kZXZpY2VgLCB0aGlzLmRldmljZSkudGhlbihyZXNwID0+IHtcbiAgICAgIGlmICgnZXJyJyBpbiByZXNwKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTcnYuc2V0KCdEZXZpY2UgQWRkIGZhaWxlZC4nLCByZXNwLmVyciwgJ2Vycm9yJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi51cmwoJy9wbHVnaW5zL2tlbnRpay1hcHAvcGFnZS9kZXZpY2UtbGlzdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkFkZERldmljZUN0cmwudGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9hZGRfZGV2aWNlLmh0bWwnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==