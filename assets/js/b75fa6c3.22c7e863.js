"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[1619],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["CS","Network"]},s="Computer Networking Notes",p={unversionedId:"computerScience/network/networkBasicNotes",id:"computerScience/network/networkBasicNotes",title:"Computer Networking Notes",description:"Computer Network and Internet",source:"@site/notes/computerScience/network/networkBasicNotes.md",sourceDirName:"computerScience/network",slug:"/computerScience/network/networkBasicNotes",permalink:"/awesome-notes/computerScience/network/networkBasicNotes",editUrl:"https://github.com/sabertazimi/awesome-notes/edit/main/notes/computerScience/network/networkBasicNotes.md",tags:[{label:"CS",permalink:"/awesome-notes/tags/cs"},{label:"Network",permalink:"/awesome-notes/tags/network"}],version:"current",lastUpdatedBy:"sabertazimi",lastUpdatedAt:1649250539,formattedLastUpdatedAt:"4/6/2022",frontMatter:{author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["CS","Network"]},sidebar:"sidebar",previous:{title:"Math Basic Notes",permalink:"/awesome-notes/computerScience/math/mathBasicNotes"},next:{title:"Computer Systems: A Programmer's Perspective Basic Notes",permalink:"/awesome-notes/computerScience/operatingSystems/CSAPP"}},c={},u=[{value:"Computer Network and Internet",id:"computer-network-and-internet",level:2},{value:"What is Internet",id:"what-is-internet",level:3},{value:"Consist",id:"consist",level:4},{value:"Delay",id:"delay",level:4},{value:"Layer",id:"layer",level:4},{value:"Layering Principle",id:"layering-principle",level:4},{value:"Application Layer",id:"application-layer",level:2},{value:"Application Layer Protocol",id:"application-layer-protocol",level:3},{value:"HTTP",id:"http",level:3},{value:"Non-Persistent Connections and Persistent Connections",id:"non-persistent-connections-and-persistent-connections",level:4},{value:"HTTP Message Format",id:"http-message-format",level:4},{value:"Cookies",id:"cookies",level:4},{value:"Process",id:"process",level:3},{value:"Port to Transport Layer",id:"port-to-transport-layer",level:4},{value:"Address",id:"address",level:4},{value:"Transport Layer",id:"transport-layer",level:2},{value:"TCP(Transmission Control Protocol)",id:"tcptransmission-control-protocol",level:3},{value:"3-way handshake",id:"3-way-handshake",level:4},{value:"UDP",id:"udp",level:3},{value:"ICMP",id:"icmp",level:3},{value:"ICMP Message Type",id:"icmp-message-type",level:4},{value:"Error Detection",id:"error-detection",level:3},{value:"Slide Window and Retransmission",id:"slide-window-and-retransmission",level:3},{value:"Network Layer",id:"network-layer",level:2},{value:"IP Service Model",id:"ip-service-model",level:3},{value:"IPv4 Addresses",id:"ipv4-addresses",level:3},{value:"Address Structure",id:"address-structure",level:4},{value:"ARP(Address Resolution Protocol)",id:"arpaddress-resolution-protocol",level:3},{value:"Packet Format",id:"packet-format",level:3},{value:"Endian",id:"endian",level:4},{value:"WireShark",id:"wireshark",level:2},{value:"WireShark SetUp",id:"wireshark-setup",level:3},{value:"Other Tools",id:"other-tools",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"computer-networking-notes"},"Computer Networking Notes"),(0,o.kt)("h2",{id:"computer-network-and-internet"},"Computer Network and Internet"),(0,o.kt)("h3",{id:"what-is-internet"},"What is Internet"),(0,o.kt)("p",null,"end-to-end principle: implement features in the end-system/hosts where possible"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"congestion implemented on Transport Layer")),(0,o.kt)("h4",{id:"consist"},"Consist"),(0,o.kt)("p",null,"Internet Service Provider -> Packet Switch/Communication Link -> Host/End System"),(0,o.kt)("h4",{id:"delay"},"Delay"),(0,o.kt)("p",null,"nodal = proc + queue + trans + prop: \u603b\u65f6\u5ef6 = \u4ea7\u751f/\u5230\u8fbe\u65f6\u5ef6 + \u6392\u961f\u65f6\u5ef6 + \u4f20\u8f93\u65f6\u5ef6 + \u4f20\u64ad\u65f6\u5ef6"),(0,o.kt)("h4",{id:"layer"},"Layer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application Layer Protocol: HTTP SMTP (message, stream of data)"),(0,o.kt)("li",{parentName:"ul"},"Transport Layer Protocol: TCP UDP (segment, segment of data)"),(0,o.kt)("li",{parentName:"ul"},"Network Layer Protocol: IP (\u56e0\u7279\u7f51\u7684\u7c98\u5408\u5242) (",(0,o.kt)("strong",{parentName:"li"},"unreliable")," datagram, packet of data)"),(0,o.kt)("li",{parentName:"ul"},"Data Link Layer Protocol: WiFi PPP(\u70b9\u5bf9\u70b9) \u4ee5\u592a\u7f51 (frame)"),(0,o.kt)("li",{parentName:"ul"},"Physical Layer Protocol")),(0,o.kt)("h4",{id:"layering-principle"},"Layering Principle"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"modularity"),(0,o.kt)("li",{parentName:"ul"},"well defined service: simple service model provided by lower level,\nproviding for higher level"),(0,o.kt)("li",{parentName:"ul"},"reuse"),(0,o.kt)("li",{parentName:"ul"},"separation of concerns"),(0,o.kt)("li",{parentName:"ul"},"continuous improvement: change inner structure of layer independently")),(0,o.kt)("h2",{id:"application-layer"},"Application Layer"),(0,o.kt)("h3",{id:"application-layer-protocol"},"Application Layer Protocol"),(0,o.kt)("p",null,"defines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"types of messages exchanged"),(0,o.kt)("li",{parentName:"ul"},"syntax of various message types(fields definition)"),(0,o.kt)("li",{parentName:"ul"},"semantics of fields"),(0,o.kt)("li",{parentName:"ul"},"rules for when/how to send/respond to messages")),(0,o.kt)("h3",{id:"http"},"HTTP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP -> Socket Interface -> TCP"),(0,o.kt)("li",{parentName:"ul"},"stateless protocol")),(0,o.kt)("h4",{id:"non-persistent-connections-and-persistent-connections"},"Non-Persistent Connections and Persistent Connections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"non-persistent connections: 1 http request with 1 tcp connection"),(0,o.kt)("li",{parentName:"ul"},"persistent connections: multiple http request with 1 tcp connection")),(0,o.kt)("h4",{id:"http-message-format"},"HTTP Message Format"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"http request format")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"request line -> (method field, object url field, protocol version)\nheader lines -> Host/Connections(close -> non-persistent connection)/User-agent/Accept-language\n\\r\\n\nentity body\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"http response format")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"status line -> (protocol version, status code, corresponding status message)\nheader lines -> Connections/Date/Server/Last-Modified/Content-Length(bytes)/Content-Type\n\\r\\n\nentity body\n")),(0,o.kt)("h4",{id:"cookies"},"Cookies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"first request header -> without cookie"),(0,o.kt)("li",{parentName:"ul"},"first response header -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Set-Cookie: number")," to client"),(0,o.kt)("li",{parentName:"ul"},"client store identification number for specific site into cookies files"),(0,o.kt)("li",{parentName:"ul"},"second request header -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Cookie: number"),"\n(extract identification number for specific site from cookies files)"),(0,o.kt)("li",{parentName:"ul"},"function: create ",(0,o.kt)("strong",{parentName:"li"},"User Session Layer")," on top of stateless HTTP")),(0,o.kt)("h3",{id:"process"},"Process"),(0,o.kt)("h4",{id:"port-to-transport-layer"},"Port to Transport Layer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"bandwidth-sensitive application: UDP"),(0,o.kt)("li",{parentName:"ul"},"reliable-sensitive application: TCP")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"email                   - SMTP              - TCP\nremote terminal access  - Telnet            - TCP\nWeb                     - HTTP/HTTPS        - TCP\nfile transfer            - FTP               - TCP\nstreaming multimedia    - HTTP/HTTPS/RTP    - TCP/UDP\ninternet telephony      - SIP/RTP           - UDP\n")),(0,o.kt)("h4",{id:"address"},"Address"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(32 bits network layer )IP : find specific host/end-system"),(0,o.kt)("li",{parentName:"ul"},"(16 bits transport layer)port: find specific process")),(0,o.kt)("h2",{id:"transport-layer"},"Transport Layer"),(0,o.kt)("h3",{id:"tcptransmission-control-protocol"},"TCP(Transmission Control Protocol)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"connection-oriented service"),(0,o.kt)("li",{parentName:"ul"},"in-sequence stream of bytes service"),(0,o.kt)("li",{parentName:"ul"},"reliable delivery"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"congestion control"))),(0,o.kt)("h4",{id:"3-way-handshake"},"3-way handshake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SYN -> SYN/ACK -> ACK"),(0,o.kt)("li",{parentName:"ul"},"FIN(toB) -> ","[Data+]","ACK(toA) -> FIN(toA) -> ACK(toB)")),(0,o.kt)("h3",{id:"udp"},"UDP"),(0,o.kt)("p",null,"User Datagram Protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lightweight and connectionless"),(0,o.kt)("li",{parentName:"ul"},"datagram service"),(0,o.kt)("li",{parentName:"ul"},"unreliable delivery"),(0,o.kt)("li",{parentName:"ul"},"udp header: source port(16 bit), destination port(16 bit),\nchecksum(16 bit), length(16 bit)")),(0,o.kt)("h3",{id:"icmp"},"ICMP"),(0,o.kt)("p",null,"Internet Control Message Protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"report error conditions back"),(0,o.kt)("li",{parentName:"ul"},"help diagnose problems"),(0,o.kt)("li",{parentName:"ul"},"site above IP")),(0,o.kt)("h4",{id:"icmp-message-type"},"ICMP Message Type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 type 0 code: echo reply(by ping)"),(0,o.kt)("li",{parentName:"ul"},"3 type 0 code: destination network unreachable"),(0,o.kt)("li",{parentName:"ul"},"3 type 1 code: destination host unreachable"),(0,o.kt)("li",{parentName:"ul"},"3 type 3 code: destination port unreachable"),(0,o.kt)("li",{parentName:"ul"},"8 type 0 code: echo request(by ping)"),(0,o.kt)("li",{parentName:"ul"},"11 type 0 code: TTL(time to live) Expired(by ping)")),(0,o.kt)("h3",{id:"error-detection"},"Error Detection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TCP/IP: checksums(1 bit)"),(0,o.kt)("li",{parentName:"ul"},"Ethernet(Link Layer): cyclic redundancy code(2 bit/more)"),(0,o.kt)("li",{parentName:"ul"},"SSL(Secure Sockets Layer)/TLS(Transport Layer Security):\nmessage authentication code(",(0,o.kt)("strong",{parentName:"li"},"MAC"),")(cryptographic data) - prevent malicious attacks")),(0,o.kt)("h3",{id:"slide-window-and-retransmission"},"Slide Window and Retransmission"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SWZ N and RWS 1: go back N"),(0,o.kt)("li",{parentName:"ul"},"SWZ N and RWZ N: selective repeat")),(0,o.kt)("h2",{id:"network-layer"},"Network Layer"),(0,o.kt)("h3",{id:"ip-service-model"},"IP Service Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"prevent packets looping forever(TTL/time to live field in header):\nif TTL gets decreased to zero, then drop this datagram"),(0,o.kt)("li",{parentName:"ul"},"limit fragment packets size(Packet ID, Flags, Fragment Offset)"),(0,o.kt)("li",{parentName:"ul"},"reduce changes of wrong destination(Checksum, Destination Address)")),(0,o.kt)("h3",{id:"ipv4-addresses"},"IPv4 Addresses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"32 bits long: a.b.c.d")),(0,o.kt)("h4",{id:"address-structure"},"Address Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"historical: class A: 0-network(7 bits)-host(24 bits) class B:\n10-network(14 bits)-host(16 bits) class C: 110-network(21 bits)-host(8 bits)"),(0,o.kt)("li",{parentName:"ul"},"today: 171.64.0.0/16 means 171.64.0.0 to 171.64.255.255,\nA/24 describes 256 addresses, A/20 describes 4096 addresses"),(0,o.kt)("li",{parentName:"ul"},"longest prefix matching and netmask(A/16 e.g 0.0.0.0/0 => matching all addresses)")),(0,o.kt)("h3",{id:"arpaddress-resolution-protocol"},"ARP(Address Resolution Protocol)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"generates mappings between link layer and network layer addresses cached in nodes"),(0,o.kt)("li",{parentName:"ul"},"request-reply protocol: who has network address X => I have network address X"),(0,o.kt)("li",{parentName:"ul"},"request sent to link layer broadcast address, reply sent to requesting address"),(0,o.kt)("li",{parentName:"ul"},"when request to dest ARP packet header\nwith empty DEST HARDWARE ADDRESS field and opcode 1(request)"),(0,o.kt)("li",{parentName:"ul"},"when reply to src ARP packet header\nwith dest hardware address as SRC HARDWARE ADDRESS field,\nsrc hardware address as DEST HARDWARE ADDRESS field and opcode 2(reply)"),(0,o.kt)("li",{parentName:"ul"},"if A and B aren't in same sub-net,\nthey delivery ARP broadcast with third public gateway")),(0,o.kt)("h3",{id:"packet-format"},"Packet Format"),(0,o.kt)("h4",{id:"endian"},"Endian"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"network is big-endian"),(0,o.kt)("li",{parentName:"ul"},"in x86 processor, use ",(0,o.kt)("inlineCode",{parentName:"li"},"htons()/ntohs()/htonl()/ntohl()")," host:\nnetwork -short/long helper function to transform format")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <arpa/inet.h>\n\nuint16_t http_port = 80;\nuint16_t packet_port = ntohs(packet->port);\n\nif (packet_port == http_port) {\n    // OK\n}\n")),(0,o.kt)("h2",{id:"wireshark"},"WireShark"),(0,o.kt)("h3",{id:"wireshark-setup"},"WireShark SetUp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure wireshark-common\nsudo gpasswd -a $USER wireshark\n")),(0,o.kt)("h2",{id:"other-tools"},"Other Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ifconfig + egrep"),(0,o.kt)("li",{parentName:"ul"},"netstat + egrep"),(0,o.kt)("li",{parentName:"ul"},"tcpdump"),(0,o.kt)("li",{parentName:"ul"},"nslookup")))}m.isMDXComponent=!0}}]);