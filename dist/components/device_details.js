define(function(){return function(e){var i={};function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(r,n,function(i){return e[i]}.bind(null,n));return r},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=6)}({6:function(e,i,t){"use strict";t.r(i),t.d(i,"DeviceDetailsCtrl",function(){return r});var r=function(){function e(e,i,t,r,n){this.$location=t,this.backendSrv=r,this.alertSrv=n,this.device={},this.deviceDTO={},this.pageReady=!1,this.getDevice(t.search().device)}return e.$inject=["$scope","$injector","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.other_ips.push({ip:""})},e.prototype.removeIP=function(e){this.other_ips.splice(e,1)},e.prototype.getDevice=function(e){var i=this;this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/device/"+e).then(function(e){i.device=e.device,i.updateDeviceDTO(),i.pageReady=!0})},e.prototype.gotoDashboard=function(e){this.$location.url("/dashboard/db/kentik-top-talkers?var-device="+e)},e.prototype.updateDeviceDTO=function(){this.deviceDTO={device_id:this.device.id,device_name:this.device.device_name,device_type:this.device.device_type,device_description:this.device.device_description,device_flow_type:this.device.device_flow_type,device_sample_rate:parseInt(this.device.device_sample_rate),minimize_snmp:this.device.minimize_snmp,device_snmp_ip:this.device.device_snmp_ip,device_snmp_community:this.device.device_snmp_community,device_bgp_type:this.device.device_bgp_type,device_bgp_password:this.device.device_bgp_password,device_bgp_neighbor_ip:this.device.device_bgp_neighbor_ip,device_bgp_neighbor_asn:parseInt(this.device.device_bgp_neighbor_asn)}},e.prototype.update=function(){var e=this;this.deviceDTO.device_snmp_ip||delete this.deviceDTO.device_snmp_ip,this.deviceDTO.device_snmp_community||delete this.deviceDTO.device_snmp_community;var i={device:this.deviceDTO};this.backendSrv.put("/api/plugin-proxy/kentik-app/api/v5/device/"+this.deviceDTO.device_id,i).then(function(i){if(!("err"in i))return e.alertSrv.set("Device Updated.",e.deviceDTO.device_name,"success",3e3),e.getDevice(e.deviceDTO.device_id);e.alertSrv.set("Device Update failed.",i.err,"error")},function(i){"error"in i.data?e.alertSrv.set("Device Update failed.",i.data.error,"error"):e.alertSrv.set("Device Update failed.",i,"error")})},e}();r.templateUrl="components/device_details.html"}})});
//# sourceMappingURL=device_details.js.map