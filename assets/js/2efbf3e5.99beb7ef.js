"use strict";(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[8610],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=(n(7294),n(3905));const a={id:"jupyter",title:"Jupyter",description:"How to use Jupyter Notebooks",sidebar_label:"Jupyter",sidebar_position:4},i=void 0,l={unversionedId:"misc/jupyter",id:"misc/jupyter",title:"Jupyter",description:"How to use Jupyter Notebooks",source:"@site/docs/misc/jupyter.md",sourceDirName:"misc",slug:"/misc/jupyter",permalink:"/Applied-Genomics/docs/misc/jupyter",draft:!1,editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/misc/jupyter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"jupyter",title:"Jupyter",description:"How to use Jupyter Notebooks",sidebar_label:"Jupyter",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Xena Browser",permalink:"/Applied-Genomics/docs/misc/xena"}},p={},u=[{value:"Binder",id:"binder",level:2},{value:"Back to Binder",id:"back-to-binder",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last section we touched on ",(0,r.kt)("a",{parentName:"p",href:"./documentation#r-markdown"},"R Markdown"),",\nwhich was a great introduction to interactive computing in a reproducible way.\nAnother standard that people love to use for data analysis, are jupyter\nnotebooks. There are a lot of different ways to interact with Jupyter Notebooks\nand some pros and cons to them that we'll address."),(0,r.kt)("h1",{id:"try-it-in-the-browser"},"Try it in the Browser"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jupyter.org/try"},"mybinder")," allows you to run notebooks in the cloud and\nallows you to turn a git repo into a collection of interactive notebooks! Follow\nthe link and let's test out a few different notebooks they have. Try the Classic\nNotebook, JupyterLab and Jupyter with R, in that order preferably."),(0,r.kt)("h2",{id:"binder"},"Binder"),(0,r.kt)("p",null,"Once you're done getting a feel for Jupyter notebooks let's ",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/"},"add your GitHub\nrepo to binder"),"! Grab the binder badge to stick in your\nREADME as well. For example:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/hxf190002/ag-intro.git/HEAD"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge_logo.svg",alt:"Binder"}))),(0,r.kt)("h1",{id:"using-vs-code"},"Using VS Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up VS Code and connect to giant."),(0,r.kt)("li",{parentName:"ol"},"Make sure you have the ",(0,r.kt)("inlineCode",{parentName:"li"},"Jupyter")," extension installed on the remote host."),(0,r.kt)("li",{parentName:"ol"},"Search for the command ",(0,r.kt)("inlineCode",{parentName:"li"},"Python: Open Start Page")),(0,r.kt)("li",{parentName:"ol"},"Click the link to the ",(0,r.kt)("inlineCode",{parentName:"li"},"sample notebook")," and install the jupyter requirements\nwhen prompted.")),(0,r.kt)("p",null,"When you're down playing around with the tutorial:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new notebook in your git repo with the command ",(0,r.kt)("inlineCode",{parentName:"li"},"Jupyter: Create New Blank Notebook"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a code block with ",(0,r.kt)("inlineCode",{parentName:"li"},'print("Hello")')," and a markdown code block."),(0,r.kt)("li",{parentName:"ol"},"Commit your notebook to your git repo.")),(0,r.kt)("h2",{id:"back-to-binder"},"Back to Binder"),(0,r.kt)("p",null,"First, commit your notebook. If VS Code doesn't pick up the notebook ",(0,r.kt)("inlineCode",{parentName:"p"},"git add\nfirst-notebook.ipynb")," is the command. Push the changes up and let's check them\nout on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Emiller88/ag-intro/blob/make/first-notebook.ipynb"},"GitHub"),".\nNote that GitHub prints it in a pretty way, but let's check out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Raw"),"\nformat. Note how the it's a bunch of data, and not very human readable. You'll\nsee that this makes diffs difficult to process in the future and is a draw back\nof Jupyter Notebooks."),(0,r.kt)("p",null,"Now that you've added a Jupyter notebook to your repo try opening it in\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/"},"binder"),". This is a quick and easy way to share notebooks\nwith collaborators."),(0,r.kt)("h1",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can also use Google's flavor of Jupyter notebooks at ",(0,r.kt)("a",{parentName:"li",href:"https://colab.research.google.com/notebooks/intro.ipynb"},"Google\nCollab"))))}c.isMDXComponent=!0}}]);