"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[8558],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},853:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["CS","System","Architecture","Graph Processing"]},c="Graph Processing Basic Notes",s={unversionedId:"computerScience/architecture/graphProcessingBasicNotes",id:"computerScience/architecture/graphProcessingBasicNotes",title:"Graph Processing Basic Notes",description:"Graph System",source:"@site/notes/computerScience/architecture/graphProcessingBasicNotes.md",sourceDirName:"computerScience/architecture",slug:"/computerScience/architecture/graphProcessingBasicNotes",permalink:"/awesome-notes/computerScience/architecture/graphProcessingBasicNotes",editUrl:"https://github.com/sabertazimi/awesome-notes/edit/main/notes/computerScience/architecture/graphProcessingBasicNotes.md",tags:[{label:"CS",permalink:"/awesome-notes/tags/cs"},{label:"System",permalink:"/awesome-notes/tags/system"},{label:"Architecture",permalink:"/awesome-notes/tags/architecture"},{label:"Graph Processing",permalink:"/awesome-notes/tags/graph-processing"}],version:"current",lastUpdatedBy:"sabertazimi",lastUpdatedAt:1649250539,formattedLastUpdatedAt:"4/6/2022",frontMatter:{author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["CS","System","Architecture","Graph Processing"]},sidebar:"sidebar",previous:{title:"Architecture Basic Notes",permalink:"/awesome-notes/computerScience/architecture/archBasicNotes"},next:{title:"Compiler Basic Notes",permalink:"/awesome-notes/computerScience/compilers/compilersBasicNotes"}},p={},m=[{value:"Graph System",id:"graph-system",level:2},{value:"NUMA Architecture",id:"numa-architecture",level:2},{value:"CPU Schedule",id:"cpu-schedule",level:3},{value:"Memory Schedule",id:"memory-schedule",level:3},{value:"Dataset",id:"dataset",level:2},{value:"Tools",id:"tools",level:2},{value:"Concurrency Lib",id:"concurrency-lib",level:3},{value:"Perf Tools",id:"perf-tools",level:3},{value:"Hardware Performance Counter",id:"hardware-performance-counter",level:3},{value:"Parallel Programming",id:"parallel-programming",level:3},{value:"Other Libs",id:"other-libs",level:3},{value:"DRAMSim2",id:"dramsim2",level:3},{value:"GCC",id:"gcc",level:3},{value:"strict-alias warnings",id:"strict-alias-warnings",level:4},{value:"Time Stamp Counter",id:"time-stamp-counter",level:3},{value:"RDTSC",id:"rdtsc",level:4},{value:"Clock Get Time",id:"clock-get-time",level:4},{value:"NUMA Tool",id:"numa-tool",level:3},{value:"NUMA Control",id:"numa-control",level:4},{value:"installation",id:"installation",level:5},{value:"usage",id:"usage",level:5},{value:"NUMA Status",id:"numa-status",level:4}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"graph-processing-basic-notes"},"Graph Processing Basic Notes"),(0,l.kt)("h2",{id:"graph-system"},"Graph System"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Classification"),(0,l.kt)("th",{parentName:"tr",align:"center"},"In-memory"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Out-of-core"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Single machine"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Ligra"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GraphChi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Polymer"),(0,l.kt)("td",{parentName:"tr",align:"center"},"X-Stream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Galois"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GridGraph")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Mosaic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Distributed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Pregel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Chaos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"PowerGraph"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"PowerLyra"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Gemini"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"numa-architecture"},"NUMA Architecture"),(0,l.kt)("p",null,"\u5f15\u5165\u4e86 Node \u548c Distance:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e CPU \u548c Memory \u8fd9\u4e24\u79cd\u6700\u5b9d\u8d35\u7684\u786c\u4ef6\u8d44\u6e90,\nNUMA \u7528\u8fd1\u4e4e\u4e25\u683c\u7684\u65b9\u5f0f\u5212\u5206\u4e86\u6240\u5c5e\u7684\u8d44\u6e90\u7ec4 (Node), \u800c\u6bcf\u4e2a\u8d44\u6e90\u7ec4\u5185\u7684 CPU \u548c Memory \u51e0\u4e4e\u76f8\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7ec4\u7684\u6570\u91cf\u53d6\u51b3\u4e8e\u7269\u7406 CPU \u7684\u4e2a\u6570"),(0,l.kt)("li",{parentName:"ul"},"Distance \u7528\u6765\u5b9a\u4e49\u5404\u4e2a Node \u4e4b\u95f4\u8c03\u7528\u8d44\u6e90\u7684\u5f00\u9500, \u4e3a\u8d44\u6e90\u8c03\u5ea6\u4f18\u5316\u7b97\u6cd5\u63d0\u4f9b\u6570\u636e\u652f\u6301")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8fdb\u7a0b(\u6216\u7ebf\u7a0b)\u90fd\u4f1a\u4ece\u7236\u8fdb\u7a0b\u7ee7\u627f NUMA \u7b56\u7565, \u5e76\u5206\u914d\u6709\u4e00\u4e2a\u4f18\u5148 node. \u5982\u679c NUMA \u7b56\u7565\u5141\u8bb8\u7684\u8bdd\uff0c\u8fdb\u7a0b\u53ef\u4ee5\u8c03\u7528\u5176\u4ed6 node \u4e0a\u7684\u8d44\u6e90."),(0,l.kt)("h3",{id:"cpu-schedule"},"CPU Schedule"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CPU Node Bind: \u89c4\u5b9a\u8fdb\u7a0b\u8fd0\u884c\u5728\u67d0\u51e0\u4e2a node \u4e4b\u4e0a"),(0,l.kt)("li",{parentName:"ul"},"Physical CPU Bind: \u7cbe\u7ec6\u5730\u89c4\u5b9a\u8fdb\u7a0b\u8fd0\u884c\u5728\u54ea\u4e9b\u6838\u4e0a")),(0,l.kt)("h3",{id:"memory-schedule"},"Memory Schedule"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local Allocation: \u4ece\u5f53\u524d Node \u4e0a\u8bf7\u6c42\u5206\u914d\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"Preferred: \u6bd4\u8f83\u5bbd\u677e\u5730\u6307\u5b9a\u4e86\u4e00\u4e2a\u63a8\u8350\u7684 node \u6765\u83b7\u53d6\u5185\u5b58, \u5982\u679c\u88ab\u63a8\u8350\u7684 node \u4e0a\u6ca1\u6709\u8db3\u591f\u5185\u5b58, \u8fdb\u7a0b\u53ef\u4ee5\u5c1d\u8bd5\u522b\u7684 node"),(0,l.kt)("li",{parentName:"ul"},"Memory Bind: \u53ef\u4ee5\u6307\u5b9a\u82e5\u5e72\u4e2a node,\u8fdb \u7a0b\u53ea\u80fd\u4ece\u8fd9\u4e9b\u6307\u5b9a\u7684 node \u4e0a\u8bf7\u6c42\u5206\u914d\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"Interleave: \u89c4\u5b9a\u8fdb\u7a0b\u4ece\u6307\u5b9a\u7684\u82e5\u5e72\u4e2a node \u4e0a\u4ee5 RR (Round Robin) \u4ea4\u7ec7\u5730\u8bf7\u6c42\u5206\u914d\u5185\u5b58")),(0,l.kt)("p",null,"NUMA \u9ed8\u8ba4\u7684\u5185\u5b58\u5206\u914d\u7b56\u7565\u662f\u4f18\u5148\u5728\u8fdb\u7a0b\u6240\u5728 CPU \u7684\u672c\u5730\u5185\u5b58\u4e2d\u5206\u914d, \u4f1a\u5bfc\u81f4 CPU \u8282\u70b9\u4e4b\u95f4\u5185\u5b58\u5206\u914d\u4e0d\u5747\u8861.\n\u5f53\u67d0\u4e2a CPU \u8282\u70b9\u7684\u5185\u5b58\u4e0d\u8db3\u65f6, \u4f1a\u5bfc\u81f4 swap \u4ea7\u751f, \u800c\u4e0d\u662f\u4ece\u8fdc\u7a0b\u8282\u70b9\u5206\u914d\u5185\u5b58, \u8fd9\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"swap insanity")," \u73b0\u8c61"),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://snap.stanford.edu/data/soc-LiveJournal1.html"},"LiveJournal social network")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://an.kaist.ac.kr/traces/WWW2010.html"},"twitter rv")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.dis.uniroma1.it/challenge9/download.shtml"},"us road"))),(0,l.kt)("h2",{id:"tools"},"Tools"),(0,l.kt)("h3",{id:"concurrency-lib"},"Concurrency Lib"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cpp-taskflow/cpp-taskflow"},"TaskFlow"))),(0,l.kt)("h3",{id:"perf-tools"},"Perf Tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/brendangregg/FlameGraph"},"FlameGraph"))),(0,l.kt)("h3",{id:"hardware-performance-counter"},"Hardware Performance Counter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://software.intel.com/en-us/articles/intel-performance-counter-monitor"},"Intel PCM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.icl.utk.edu/publications/papi-portable-interface-hardware-performance-counters"},"PAPI"))),(0,l.kt)("h3",{id:"parallel-programming"},"Parallel Programming"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.openmp.org"},"OpenMP"))),(0,l.kt)("h3",{id:"other-libs"},"Other Libs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.netlib.org/blas/"},"Lib BLAS"))),(0,l.kt)("h3",{id:"dramsim2"},"DRAMSim2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cinwell.wordpress.com/2013/09/25/general-overview-of-dramsim2s-memory-structure/"},"Overview of DRAMSim2\u2019s Memory Structure"))),(0,l.kt)("h3",{id:"gcc"},"GCC"),(0,l.kt)("h4",{id:"strict-alias-warnings"},"strict-alias warnings"),(0,l.kt)("p",null,"for strict-aliasing warnings:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"use a union to represent the memory need to reinterpret"),(0,l.kt)("li",{parentName:"ol"},"use a reinterpret_cast, cast via ",(0,l.kt)("inlineCode",{parentName:"li"},"char *")," at the point where reinterpret\nthe memory - ",(0,l.kt)("inlineCode",{parentName:"li"},"char *")," are defined as being able to alias anything"),(0,l.kt)("li",{parentName:"ol"},"use a type which has ",(0,l.kt)("inlineCode",{parentName:"li"},"__attribute__((__may_alias__))")),(0,l.kt)("li",{parentName:"ol"},"turn off the aliasing assumptions globally using -fno-strict-aliasing")),(0,l.kt)("h3",{id:"time-stamp-counter"},"Time Stamp Counter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Time_Stamp_Counter"},"definition"))),(0,l.kt)("h4",{id:"rdtsc"},"RDTSC"),(0,l.kt)("h4",{id:"clock-get-time"},"Clock Get Time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcc *.c -o *.o ... -lrt # link with librt\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <time.h>\n\nstruct timespec ts;\nclock_gettime(CLOCK_MONOTONIC, ts);\nprintf("%d %d", ts.tv_sec, ts.tv_nsec);\n')),(0,l.kt)("h3",{id:"numa-tool"},"NUMA Tool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grep -i numa /var/log/dmesg\n")),(0,l.kt)("h4",{id:"numa-control"},"NUMA Control"),(0,l.kt)("h5",{id:"installation"},"installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y numactl\n")),(0,l.kt)("h5",{id:"usage"},"usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"numactl --show\nnumactl --hardware\nnumactl --interleave=all\n")),(0,l.kt)("h4",{id:"numa-status"},"NUMA Status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"numastat\n")))}d.isMDXComponent=!0}}]);