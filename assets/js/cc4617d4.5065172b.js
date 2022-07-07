"use strict";(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[98],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6729:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(3117),i=(r(7294),r(3905));const a={id:"ucsc",title:"UCSC Genome Browser",description:"",sidebar_label:"UCSC Genome Browser",sidebar_position:1},o=void 0,c={unversionedId:"misc/ucsc",id:"misc/ucsc",title:"UCSC Genome Browser",description:"",source:"@site/docs/misc/ucsc_genome_browser.md",sourceDirName:"misc",slug:"/misc/ucsc",permalink:"/Applied-Genomics/docs/misc/ucsc",draft:!1,editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/misc/ucsc_genome_browser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ucsc",title:"UCSC Genome Browser",description:"",sidebar_label:"UCSC Genome Browser",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VS Code Alternatives",permalink:"/Applied-Genomics/docs/misc/code_alternatives"},next:{title:"Conda",permalink:"/Applied-Genomics/docs/misc/conda"}},l={},s=[{value:"Basics",id:"basics",level:2},{value:"Track Hubs",id:"track-hubs",level:2},{value:"Hub Connect",id:"hub-connect",level:3},{value:"WIP: Creating a Track Hub",id:"wip-creating-a-track-hub",level:3},{value:"Steps to Reproduce",id:"steps-to-reproduce",level:4}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NBDMNv2KFik"},"UCSC Genome Browser Basics. Part 1: Getting around in the Browser")),(0,i.kt)("p",null,"Not going to be covered in depth but still a good reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cYys5iXN0NY"},"UCSC Genome Browser Basics, Part 2: Configuring the Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I25Q136d6NU"},"UCSC Genome Browser Basics. Part 3: Configuration + DNA navigation"))),(0,i.kt)("h2",{id:"track-hubs"},"Track Hubs"),(0,i.kt)("h3",{id:"hub-connect"},"Hub Connect"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://genome.ucsc.edu/cgi-bin/hgHubConnect?redirect=manual&source=genome-euro.ucsc.edu"},"Hub Connect Link"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mhalushka/UCSC_miRNA_barchart"},"Example Hub repo")),(0,i.kt)("h3",{id:"wip-creating-a-track-hub"},"WIP: Creating a Track Hub"),(0,i.kt)("p",null,"We're going to connect to our own track hub as a GitHub repo using the ",(0,i.kt)("a",{parentName:"p",href:"https://nf-co.re/chipseq/results#chipseq/results-048fd6854fcc85b355c61dfc2e21da0bcc6399ea/bwa/mergedLibrary/bigwig/"},"nf-core\nchipseq full test\nresults"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://genome-euro.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Hosting"},"Track Hub help documentation")),(0,i.kt)("h4",{id:"steps-to-reproduce"},"Steps to Reproduce"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=UvHihNbyCh8"},"The Secrets Of Custom Tracks")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the Test data"),(0,i.kt)("li",{parentName:"ol"},"Move it to a new directory\n",(0,i.kt)("inlineCode",{parentName:"li"},"~/Downloads/*.bigWig ~/chip-seq-data-hub")),(0,i.kt)("li",{parentName:"ol"},"Initialize the git repo\n",(0,i.kt)("inlineCode",{parentName:"li"},"git init")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://git-lfs.github.com/"},"Setup git lfs")),(0,i.kt)("li",{parentName:"ol"},"Track the bigWig files ",(0,i.kt)("inlineCode",{parentName:"li"},'git lfs track "*.bigWig"')),(0,i.kt)("li",{parentName:"ol"},"Commit the changes ",(0,i.kt)("inlineCode",{parentName:"li"},"git add .")," and commit"),(0,i.kt)("li",{parentName:"ol"},"Push the changes up."),(0,i.kt)("li",{parentName:"ol"},"Create a file name ",(0,i.kt)("inlineCode",{parentName:"li"},"hub.txt"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="hub.txt"',title:'"hub.txt"'},"")))}p.isMDXComponent=!0}}]);