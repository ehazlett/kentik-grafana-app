define(["lodash","angular","app/core/core","app/plugins/sdk","moment","app/core/table_model"],(function(t,e,n,r,i,o){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(3),i=n(0);function o(t){var e="";e+=t.status?"("+t.status+") ":"",e+=t.statusText?t.statusText+": ":"",t.data&&t.data.error?e+=t.data.error:t.err?e+=t.err:i.isString(t)&&(e+=t),r.appEvents.emit("alert-error",["Can't connect to Kentik API",e])}function s(t,e,n){var o="";o+=e.status?"("+e.status+") ":"",o+=e.statusText?e.statusText+": ":"",e.data&&e.data.error?o+=e.data.error:e.err?o+=e.err:i.isString(e)&&(o+=e),r.appEvents.emit("alert-"+n,[t,o])}},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(1),i=n(2),o=n.n(i),s=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},u=function(){function t(t,e){this.backendSrv=t,this.$http=e,this.baseUrl="/api/plugin-proxy/kentik-app"}return t.$inject=["backendSrv","$http"],t.prototype.getDevices=function(){return s(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return[4,this._get("/api/v5/devices")];case 1:return(t=e.sent()).data&&t.data.devices?[2,t.data.devices]:[2,[]]}}))}))},t.prototype.getUsers=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){return!0,[2,this._get("/api/v5/users",!0)]}))}))},t.prototype.getFieldValues=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(n){return e="SELECT DISTINCT "+t+" FROM all_devices ORDER BY "+t+" ASC",[2,this.invokeSQLQuery(e)]}))}))},t.prototype.getCustomDimensions=function(){return s(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),!0,[4,this._get("/api/v5/customdimensions",!0)];case 1:return[2,e.sent().data.customDimensions];case 2:if(403===(t=e.sent()).status)return[2,[]];throw t;case 3:return[2]}}))}))},t.prototype.getSavedFilters=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this._get("/api/v5/saved-filters")];case 1:return[2,t.sent().data]}}))}))},t.prototype.invokeTopXDataQuery=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(n){return e={queries:[{query:t,bucketIndex:0}]},[2,this._post("/api/v5/query/topXdata",e)]}))}))},t.prototype.invokeSQLQuery=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(n){return e={query:t},[2,this._post("/api/v5/query/sql",e)]}))}))},t.prototype._get=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var n;return a(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.$http({method:"GET",url:this.baseUrl+t})];case 1:return[2,i.sent()];case 2:throw 403===(n=i.sent()).status&&!1!==e||Object(r.a)(n),n.err?n.err:n;case 3:return[2]}}))}))},t.prototype._post=function(t,e){return s(this,void 0,void 0,(function(){var n,i;return a(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.$http({method:"POST",url:this.baseUrl+t,data:e})];case 1:return(n=o.sent()).data?[2,n.data]:[2,[]];case 2:throw i=o.sent(),Object(r.a)(i),i.err?i.err:i;case 3:return[2]}}))}))},t}();o.a.module("grafana.services").service("kentikAPISrv",u)},function(t,e){t.exports=r},function(t,e){t.exports=i},,function(t,e){t.exports=o},,,function(t,e,n){"use strict";n.r(e);n(4);var r=n(2),i=n.n(r),o=n(0),s=n(6),a=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function l(){var t=new Date;return t.getTime()+60*t.getTimezoneOffset()*1e3}function c(t){var e=o.cloneDeep(t);return e.starting_time=null,e.ending_time=null,JSON.stringify(e)}var f=function(){function t(t){this.kentikAPISrv=t,this.cache={},this.cacheUpdateInterval=3e5,this.requestCachingIntervals={"1d":0},this.getDevices=this.kentikAPISrv.getDevices.bind(this.kentikAPISrv)}return t.$inject=["kentikAPISrv"],t.prototype.invokeTopXDataQuery=function(t){return a(this,void 0,void 0,(function(){var e,n,r,i;return u(this,(function(s){switch(s.label){case 0:return t.hostname_lookup=this.hostnameLookupToBoolean(t.hostname_lookup),e=o.cloneDeep(t),n=c(e),this.shouldInvoke(t)?[4,this.kentikAPISrv.invokeTopXDataQuery(t)]:[3,2];case 1:return r=s.sent(),i=l(),t.hostname_lookup&&r.results[0].data.forEach((function(t){void 0!==t.lookup&&(t.key=t.lookup)})),this.cache[n]={timestamp:i,query:e,result:r},[2,r];case 2:return[2,this.cache[n].result]}}))}))},t.prototype.shouldInvoke=function(t){var e=t,n=c(e),r=l(),i=Date.parse(e.starting_time),o=Date.parse(e.ending_time),a=o-i,u=this.cache[n]?Date.parse(this.cache[n].query.starting_time):null,f=this.cache[n]?Date.parse(this.cache[n].query.ending_time):null,d=f-u,p=function(t){var e=Date.parse(t.ending_time)-Date.parse(t.starting_time);return e>s.duration(1,"months")?36e5:e>s.duration(1,"day")?9e5:3e5}(e);return!this.cache[n]||r-o>p||this.cache[n]&&(r-f>p||i<u||Math.abs(a-d)>6e4)},t.prototype.getFieldValues=function(t){return a(this,void 0,void 0,(function(){var e,n;return u(this,(function(r){switch(r.label){case 0:return e=l(),this.cache[t]&&e-this.cache[t].ts<this.cacheUpdateInterval?[2,this.cache[t].value]:[3,1];case 1:return[4,this.kentikAPISrv.getFieldValues(t)];case 2:return n=r.sent(),e=l(),this.cache[t]={ts:e,value:n},[2,n]}}))}))},t.prototype.getCustomDimensions=function(){return a(this,void 0,void 0,(function(){var t,e=this;return u(this,(function(n){switch(n.label){case 0:return void 0!==this.cache.customDimensions?[3,2]:[4,this.kentikAPISrv.getCustomDimensions()];case 1:t=n.sent(),this.cache.customDimensions=t.map((function(t){return{values:e._getDimensionPopulatorsValues(t),text:"Custom "+t.display_name,value:t.name,field:t.name}})),n.label=2;case 2:return[2,this.cache.customDimensions]}}))}))},t.prototype.getSavedFilters=function(){return a(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return void 0!==this.cache.savedFilters?[3,2]:[4,this.kentikAPISrv.getSavedFilters()];case 1:t=e.sent(),this.cache.savedFilters=o.map(t,(function(t){return{text:"Saved "+t.filter_name,field:t.filter_name,id:t.id}})),e.label=2;case 2:return[2,this.cache.savedFilters]}}))}))},t.prototype._getDimensionPopulatorsValues=function(t){return t.populators.reduce((function(t,e){return t.push(e.value),t}),[])},t.prototype.hostnameLookupToBoolean=function(t){return"enabled"===t},t}();i.a.module("grafana.services").service("kentikProxySrv",f);var d=[{text:"Traffic",value:"Traffic",field:"traffic"},{text:"TopFlow",value:"TopFlow",field:"TopFlow"},{text:"Top flow IP",value:"TopFlowsIP",field:"TopFlowsIP"},{text:"Source Country",value:"Geography_src",field:"src_geo"},{text:"Source Geo Region",value:"src_geo_region",field:"src_geo_region"},{text:"Source Geo City",value:"src_geo_city",field:"src_geo_city"},{text:"Source As Number",value:"AS_src",field:"src_as"},{text:"Source Interface",value:"InterfaceID_src",field:"input_port"},{text:"Source Port",value:"Port_src",field:"l4_src_port"},{text:"Source VLAN",value:"VLAN_src",field:"vlan_in"},{text:"Source IP/CIDR",value:"IP_src",field:"ipv4_src_addr"},{text:"Source MAC Address",value:"src_eth_mac",field:"src_eth_mac"},{text:"Source Route Prefix/LEN",value:"src_route_prefix_len",field:"src_route_prefix_len"},{text:"Source Route LEN",value:"src_route_length",field:"src_route_length"},{text:"Source BGP Community",value:"src_bgp_community",field:"src_bgp_community"},{text:"Source BGP AS_Path",value:"src_bgp_aspath",field:"src_bgp_aspath"},{text:"Source BGP Next Hop IP/CIDR",value:"src_nexthop_ip",field:"ipv4_src_next_hop"},{text:"Source Next Hop AS Number",value:"src_nexthop_asn",field:"src_nexthop_as"},{text:"Source 2nd BGP_HOP AS Number",value:"src_second_asn",field:"src_second_asn"},{text:"Source 3nd BGP_HOP AS Number",value:"src_third_asn",field:"src_third_asn"},{text:"Source Protocol:IP Port",value:"src_proto_port",field:"src_proto_port"},{text:"Destination Country",value:"Geography_dst",field:"dst_geo"},{text:"Destination Region",value:"dst_geo_region",field:"dst_geo_region"},{text:"Destination City",value:"dst_geo_city",field:"dst_geo_city"},{text:"Destination As Number",value:"AS_dst",field:"dst_as"},{text:"Destination Interface",value:"InterfaceID_dst",field:"output_port"},{text:"Destination Port",value:"Port_dst",field:"l4_dst_port"},{text:"Destination VLAN",value:"VLAN_dst",field:"vlan_out"},{text:"Destination IP/CIDR",value:"IP_dst",field:"ipv4_dst_addr"},{text:"Destination MAC Address",value:"dst_eth_mac",field:"dst_eth_mac"},{text:"Destination Route Prefix/LEN",value:"dst_route_prefix_len",field:"dst_route_prefix_len"},{text:"Destination Route LEN",value:"dst_route_length",field:"dst_route_length"},{text:"Destination BGP Community",value:"dst_bgp_community",field:"dst_bgp_community"},{text:"Destination BGP AS_Path",value:"dst_bgp_aspath",field:"dst_bgp_aspath"},{text:"Destination BGP Next Hop IP/CIDR",value:"dst_nexthop_ip",field:"ipv4_dst_next_hop"},{text:"Destination Next Hop AS Number",value:"dst_nexthop_asn",field:"dst_nexthop_as"},{text:"Destination 2nd BGP_HOP AS Number",value:"dst_second_asn",field:"dst_second_asn"},{text:"Destination 3nd BGP_HOP AS Number",value:"dst_third_asn",field:"dst_third_asn"},{text:"Destination Protocol:IP Port",value:"dst_proto_port",field:"dst_proto_port"},{text:"Full Device",value:"i_device_id",field:"i_device_id"},{text:"Full Site",value:"i_device_site_name",field:"i_device_site_name"},{text:"Full Protocol",value:"Proto",field:"protocl"},{text:"Full INET Family",value:"inet_family",field:"inet_family"},{text:"Full TOS",value:"TOS",field:"tos"},{text:"Full TCP flags",value:"tcp_flags",field:"tcp_flags"},{text:"AS Top Talkers",value:"ASTopTalkers",field:"ASTopTalkers"},{text:"Interface Top Talkers",value:"InterfaceTopTalkers",field:"InterfaceTopTalkers"},{text:"Port to Port Talkers",value:"PortPortTalkers",field:"PortPortTalkers"},{text:"Region Top Talkers",value:"RegionTopTalkers",field:"RegionTopTalkers"}];var p=[{text:"Bits/s",value:"bytes",field:"f_sum_both_bytes",outsort:"avg_both",gfUnit:"bps",gfAxisLabel:"Bits/s",transform:function(t,e){return 8*t/e.i_duration},tableFields:[{text:"Avg",field:"avg_both",unit:"bps",transform:function(t,e,n){return 8*t/n}},{text:"95th Percentile",field:"p95th_both",unit:"bps"},{text:"Max",field:"max_both",unit:"bps"}]},{text:"Packets/s",value:"packets",field:"f_sum_both_pkts",outsort:"avg_both",gfUnit:"pps",gfAxisLabel:"Packets/s",transform:function(t,e){return t/e.i_duration},tableFields:[{text:"Avg",field:"avg_both",unit:"pps",transform:function(t,e,n){return t/n}},{text:"95th Percentile",field:"p95th_both",unit:"pps"},{text:"Max",field:"max_both",unit:"pps"}]},{text:"Unique Src IPs",value:"unique_src_ip",field:"f_hll(inet_src_addr,0.0001)",outsort:"avg_ips",gfUnit:"short",gfAxisLabel:"Unique Src IPs",tableFields:[{text:"Average",field:"avg_ips",unit:"none"},{text:"p95th",field:"p95th_ips",unit:"none"},{text:"Max",field:"max_ips",unit:"none"},{text:"p95th mbps",field:"p95th_bits_per_sec",unit:"bps"},{text:"p95th pps",field:"p95th_pkts_per_sec",unit:"pps"}]},{text:"Unique Dst IPs",value:"unique_dst_ip",field:"f_hll(inet_dst_addr,0.0001)",outsort:"avg_ips",gfUnit:"short",gfAxisLabel:"Unique Dst IPs",tableFields:[{text:"Average",field:"avg_ips",unit:"none"},{text:"p95th",field:"p95th_ips",unit:"none"},{text:"Max",field:"max_ips",unit:"none"},{text:"p95th mbps",field:"p95th_bits_per_sec",unit:"bps"},{text:"p95th pps",field:"p95th_pkts_per_sec",unit:"pps"}]}],h=[{text:"Source City",field:"src_geo_city"},{text:"Source Region",field:"src_geo_region"},{text:"Source Country",field:"src_geo"},{text:"Source AS Number",field:"src_as"},{text:"Source Flow Tag",field:"src_flow_tags",unequatable:!0},{text:"Source IP Port",field:"l4_src_port"},{text:"Source MAC Address",field:"src_eth_mac"},{text:"Source VLAN",field:"vlan_in"},{text:"Source IP Address",field:"inet_src_addr",unequatable:!0},{text:"Source Interface ID",field:"input_port"},{text:"Source Interface Name",field:"i_input_interface_description"},{text:"Source Interface Description",field:"i_input_snmp_alias"},{text:"Source Route LEN",field:"src_route_length"},{text:"Source BGP AS_PATH",field:"src_bgp_aspath"},{text:"Source BGP Community",field:"src_bgp_community"},{text:"Source Next Hop AS Number",field:"src_nexthop_as"},{text:"Source 2nd BGP_HOP AS Number",field:"src_second_asn"},{text:"Source 3nd BGP_HOP AS Number",field:"src_third_asn"},{text:"Destination City",field:"dst_geo_city"},{text:"Destination Region",field:"dst_geo_region"},{text:"Destination Country",field:"dst_geo"},{text:"Destination AS Number",field:"dst_as"},{text:"Destination Flow Tag",field:"dst_flow_tags",unequatable:!0},{text:"Destination IP Port",field:"l4_dst_port"},{text:"Destination MAC Address",field:"dst_eth_mac"},{text:"Destination VLAN",field:"vlan_out"},{text:"Destination IP Address",field:"inet_dst_addr",unequatable:!0},{text:"Destination Interface ID",field:"output_port"},{text:"Destination Interface Name",field:"i_output_interface_description"},{text:"Destination Interface Description",field:"i_output_snmp_alias"},{text:"Destination Route LEN",field:"dst_route_length"},{text:"Destination BGP AS_PATH",field:"dst_bgp_aspath"},{text:"Destination BGP Community",field:"dst_bgp_community"},{text:"Destination Next Hop AS Number",field:"dst_nexthop_as"},{text:"Destination 2nd BGP_HOP AS Number",field:"dst_second_asn"},{text:"Destination 3nd BGP_HOP AS Number",field:"dst_third_asn"},{text:"TCP Flags",field:"tcp_flags"},{text:"TCP Flags (raw)",field:"tcp_flags_raw"},{text:"Protocol",field:"protocol"},{text:"INET Family",field:"inet_family"},{text:"Device Name",field:"i_device_name"},{text:"TOS/Diffserv",field:"tos"}];function v(t){return"unique_src_ip"===t.value||"unique_dst_ip"===t.value?function(t){return[{name:"avg_ips",column:t.field,fn:"average",raw:!0,sample_rate:1},{name:"p95th_ips",column:t.field,fn:"percentile",rank:95,sample_rate:1},{name:"max_ips",column:t.field,fn:"max",sample_rate:1,raw:!0},{name:"p95th_bits_per_sec",column:"f_sum_both_bytes",fn:"percentile",rank:95,sample_rate:1},{name:"p95th_pkts_per_sec",column:"f_sum_both_pkts",fn:"percentile",rank:95,sample_rate:1}]}(t):function(t){return[{name:"avg_both",column:t.field,fn:"average",raw:!0,sample_rate:1},{name:"p95th_both",column:t.field,fn:"percentile",rank:95,sample_rate:1},{name:"max_both",column:t.field,fn:"max",sample_rate:1}]}(t)}function _(t,e){var n=t.operator;return e.unequatable&&"="===n&&(n="ILIKE"),"!="===n&&(n="<>"),{filterField:e.field,operator:n,filterValue:t.value}}var m,g={buildTopXdataQuery:function(t){var e,n,r=o.find(p,{value:t.unit}),i=t.range.from.utc().format("YYYY-MM-DD HH:mm:ss"),s=t.range.to.utc().format("YYYY-MM-DD HH:mm:ss");return{dimension:[t.metric],metric:t.unit,matrixBy:[],cidr:32,cidr6:128,topx:"8",depth:100,fastData:"Auto",lookback_seconds:0,time_format:"UTC",starting_time:i,ending_time:s,device_name:t.deviceNames,outsort:r.outsort,aggregates:v(r),filters_obj:(e=t.kentikFilterGroups,n={connector:"All",filterGroups:[]},e.length&&(n.filterGroups=e),n),saved_filters:t.kentikSavedFilters,hostname_lookup:t.hostnameLookup}},formatAggs:v,convertToKentikFilterGroup:function(t,e,n){var r,i=[],s=[];if(t.length){for(var a=o.concat(h,e),u=0,l=t;u<l.length;u++){var c=l[u],f=o.find(a,{text:c.key});if(void 0===f){var d=o.find(n,{text:c.key});s.push((r=c,{filter_id:d.id,is_not:"exclude"===r.value}))}else i.push(_(c,f))}if(i.length>0){var p="All";!t[0].condition||"or"!==t[0].condition.toLowerCase()&&"any"!==t[0].condition.toLowerCase()||(p="Any"),i=[{connector:p,filters:i,not:!1}]}}return{kentikFilters:i,savedFilters:s}}},x=n(8),b=n.n(x),y=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},S=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},k=function(){function t(t,e,n){this.instanceSettings=t,this.templateSrv=e,this.name=t.name,this.kentik=n}return t.$inject=["instanceSettings","templateSrv","kentikProxySrv"],t.prototype.interpolateDeviceField=function(t,e){return e.multi||e.includeAll?"string"==typeof t?t:t.join(","):t},t.prototype.query=function(t){return y(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,u,l;return S(this,(function(c){switch(c.label){case 0:return t.targets&&0!==t.targets.length?(e=t.targets[0],n=this.templateSrv.replace(e.device,t.scopedVars,this.interpolateDeviceField.bind(this)),r=this.templateSrv.getAdhocFilters(this.name),[4,this.kentik.getCustomDimensions()]):[2,Promise.resolve({data:[]})];case 1:return i=c.sent(),[4,this.kentik.getSavedFilters()];case 2:return o=c.sent(),s=g.convertToKentikFilterGroup(r,i,o),a={deviceNames:n,range:{from:t.range.from,to:t.range.to},metric:this.templateSrv.replace(e.metric),unit:this.templateSrv.replace(e.unit),kentikFilterGroups:s.kentikFilters,kentikSavedFilters:s.savedFilters,hostnameLookup:this.templateSrv.replace(e.hostnameLookup)},u=g.buildTopXdataQuery(a),[4,this.kentik.invokeTopXDataQuery(u)];case 3:return l=c.sent(),[4,this.processResponse(u,e.mode,t,l)];case 4:return[2,{data:c.sent()}]}}))}))},t.prototype.processResponse=function(t,e,n,r){return y(this,void 0,void 0,(function(){var n,i,s,a;return S(this,(function(u){switch(u.label){case 0:return r.results?0===(n=r.results[0].data).length?[2,[]]:[4,this._getExtendedDimensionsList(d)]:[2,Promise.reject({message:"no kentik data"})];case 1:return i=u.sent(),s=o.find(i,{value:t.dimension[0]}),a=o.find(p,{value:t.metric}),"table"===e?[2,this.processTableData(n,s,a)]:[2,this.processTimeSeries(n,t)]}}))}))},t.prototype.processTimeSeries=function(t,e){var n=[],r=e.topx;t.length<r&&(r=t.length);for(var i=0;i<r;i++){var s=t[i],a=o.find(s.timeSeries,(function(t){return t.flow&&t.flow.length})),u=s.key;if(a){var l={target:u,datapoints:o.map(a.flow,(function(t){return[t[1],t[0]]}))};n.push(l)}}return n},t.prototype.processTableData=function(t,e,n){var r=new b.a;r.columns.push({text:e.text});for(var i=0,s=n.tableFields;i<s.length;i++){var a=s[i];r.columns.push({text:a.text,unit:a.unit})}return o.forEach(t,(function(t){for(var e=[t.key],i=0,s=n.tableFields;i<s.length;i++){var a=t[s[i].field];o.isString(a)&&(a=parseFloat(a)),e.push(a)}r.rows.push(e)})),[r]},t.prototype.metricFindQuery=function(t){return y(this,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return"metrics()"===t?[2,this._getExtendedDimensionsList(d)]:"units()"===t?[2,p]:[4,this.kentik.getDevices()];case 1:return[2,e.sent().map((function(t){return{text:t.device_name,value:t.device_name}}))]}}))}))},t.prototype.findMetric=function(t){if(void 0===t.text&&void 0===t.value)throw new Error("At least one of text / value must be defined");var e=o.find(d,t);return void 0===e?null:e},t.prototype.findUnit=function(t){if(void 0===t.text&&void 0===t.value)throw new Error("At least one of text / value must be defined");var e=o.find(p,t);return void 0===e?null:e},t.prototype.getTagKeys=function(){return y(this,void 0,void 0,(function(){var t,e;return S(this,(function(n){switch(n.label){case 0:return[4,this._getExtendedDimensionsList(h)];case 1:return t=n.sent(),[4,this.kentik.getSavedFilters()];case 2:return e=n.sent(),[2,o.concat(t,e)]}}))}))},t.prototype.getTagValues=function(t){return y(this,void 0,void 0,(function(){var e,n,r,i;return S(this,(function(s){switch(s.label){case 0:return t?void 0!==(e=o.find(h,{text:t.key}))?[3,5]:[4,this.kentik.getSavedFilters()]:[3,8];case 1:return n=s.sent(),void 0!==(e=o.find(n,{text:t.key}))?[3,3]:[4,this.kentik.getCustomDimensions()];case 2:return r=s.sent(),[2,o.find(r,{text:t.key}).values.map((function(t){return{text:t}}))];case 3:return[2,[{text:"include"},{text:"exclude"}]];case 4:return[3,7];case 5:return i=e.field,[4,this.kentik.getFieldValues(i)];case 6:return[2,s.sent().rows.map((function(t){return{text:t[i].toString()}}))];case 7:return[3,9];case 8:return[2,[]];case 9:return[2]}}))}))},t.prototype._getExtendedDimensionsList=function(t){return y(this,void 0,void 0,(function(){var e;return S(this,(function(n){switch(n.label){case 0:return[4,this.kentik.getCustomDimensions()];case 1:return e=n.sent(),[2,o.concat(t,e)]}}))}))},t}(),P=function(){function t(){}return t.templateUrl="datasource/config.html",t}(),w=n(1),D=n(5),T=(m=function(t,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),A=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},I=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},F=function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},C=["enabled","disabled"],L=function(t){function e(e,n,r,i){var o=t.call(this,e,n)||this;if(o.templateSrv=r,o.uiSegmentSrv=i,o.target.mode=o.target.mode||"graph",o.queryModes=[{value:"graph",text:"Graph"},{value:"table",text:"Table"}],void 0===o.target.metric)o.metricSegment=o.uiSegmentSrv.newSegment({value:"select metric",fake:!0});else{var s=o.datasource.findMetric({value:o.target.metric});o.metricSegment=null!==s?o.uiSegmentSrv.newSegment({value:s.text}):o.uiSegmentSrv.newSegment({value:o.target.metric})}if(void 0===o.target.device?o.deviceSegment=o.uiSegmentSrv.newSegment({value:"select device",fake:!0}):o.deviceSegment=o.uiSegmentSrv.newSegment({value:o.target.device}),void 0===o.target.unit)o.unitSegment=o.uiSegmentSrv.newSegment({value:"select unit",fake:!0});else{var a=o.datasource.findUnit({value:o.target.unit});o.unitSegment=null!==a?o.uiSegmentSrv.newSegment({value:a.text}):o.uiSegmentSrv.newSegment({value:o.target.unit})}return void 0===o.target.hostnameLookup?(o.target.hostnameLookup="$dns_lookup",o.hostnameLookup=o.uiSegmentSrv.newSegment({value:"$dns_lookup"})):o.hostnameLookup=o.hostnameLookup=o.uiSegmentSrv.newSegment({value:o.target.hostnameLookup}),o}return T(e,t),e.$inject=["$scope","$injector","templateSrv","uiSegmentSrv"],e.prototype.getMetricSegments=function(t,e,n){return void 0===n&&(n=!1),A(this,void 0,void 0,(function(){var r;return I(this,(function(i){switch(i.label){case 0:return[4,this.datasource.metricFindQuery(t)];case 1:return r=i.sent(),this.templateSrv.variableExists(e)&&(r=F([{text:e}],r)),[2,this.uiSegmentSrv.transformToSegments(n)(r)]}}))}))},e.prototype.getMetrics=function(){return A(this,void 0,void 0,(function(){return I(this,(function(t){return[2,this.getMetricSegments("metrics()","$metric")]}))}))},e.prototype.getDevices=function(){return A(this,void 0,void 0,(function(){return I(this,(function(t){return[2,this.getMetricSegments("devices()","$device")]}))}))},e.prototype.getUnits=function(){return A(this,void 0,void 0,(function(){return I(this,(function(t){return[2,this.getMetricSegments("units()","$unit")]}))}))},e.prototype.getHostnameLookupOptionValues=function(){return A(this,void 0,void 0,(function(){var t;return I(this,(function(e){return t=C,this.templateSrv.variableExists("$dns_lookup")&&(t=F(["$dns_lookup"],t)),[2,this.uiSegmentSrv.transformToSegments(!1)(t.map((function(t){return{text:t}})))]}))}))},e.prototype.onMetricChange=function(){return A(this,void 0,void 0,(function(){var t;return I(this,(function(e){switch(e.label){case 0:return[4,this.datasource.findMetric({text:this.metricSegment.value})];case 1:return t=e.sent(),this.target.metric=null!==t?t.value:this.metricSegment.value,this.panelCtrl.refresh(),[2]}}))}))},e.prototype.onDeviceChange=function(){return A(this,void 0,void 0,(function(){return I(this,(function(t){return this.target.device=this.deviceSegment.value,this.panelCtrl.refresh(),[2]}))}))},e.prototype.onUnitChange=function(){return A(this,void 0,void 0,(function(){var t;return I(this,(function(e){switch(e.label){case 0:return[4,this.datasource.findUnit({text:this.unitSegment.value})];case 1:return t=e.sent(),this.target.unit=null!==t?t.value:this.unitSegment.value,this.panelCtrl.refresh(),[2]}}))}))},e.prototype.onHostnameLookupChange=function(){return A(this,void 0,void 0,(function(){var t;return I(this,(function(e){return F(["$dns_lookup"],t=C).includes(this.hostnameLookup.value)?(this.target.hostnameLookup=this.hostnameLookup.value,this.panelCtrl.refresh()):t.includes(this.hostnameLookup.value)||Object(w.a)(this.hostnameLookup.value+" isn't valid hostname lookup value. Use one of "+["enable","disable"]),[2]}))}))},e}(D.QueryCtrl);L.templateUrl="datasource/query_editor.html",n.d(e,"Datasource",(function(){return k})),n.d(e,"ConfigCtrl",(function(){return P})),n.d(e,"QueryCtrl",(function(){return L}))}])}));