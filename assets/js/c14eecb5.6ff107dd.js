"use strict";(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[5223],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={id:"jupyter_slurm",title:"Running Jupyter Notebooks on Slurm Nodes",description:"",sidebar_label:"Jupyter on Slurm",sidebar_position:2},i=void 0,l={unversionedId:"misc/jupyter_slurm",id:"misc/jupyter_slurm",title:"Running Jupyter Notebooks on Slurm Nodes",description:"",source:"@site/docs/misc/jupyter_slurm.md",sourceDirName:"misc",slug:"/misc/jupyter_slurm",permalink:"/Applied-Genomics/docs/misc/jupyter_slurm",draft:!1,editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/misc/jupyter_slurm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"jupyter_slurm",title:"Running Jupyter Notebooks on Slurm Nodes",description:"",sidebar_label:"Jupyter on Slurm",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Conda",permalink:"/Applied-Genomics/docs/misc/conda"},next:{title:"scRNA-Seq",permalink:"/Applied-Genomics/docs/misc/scrnaseq"}},s={},p=[{value:"Setup the Conda Environment",id:"setup-the-conda-environment",level:2},{value:"What just happened?",id:"what-just-happened",level:3},{value:"Handling Other Kernels for Jupyter",id:"handling-other-kernels-for-jupyter",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So we want to crunch some big numbers, but we also want the flexibility and\nquick iterations that ",(0,a.kt)("a",{parentName:"p",href:"../week_02/jupyter"},"Jupyter")," gives us."),(0,a.kt)("h2",{id:"setup-the-conda-environment"},"Setup the Conda Environment"),(0,a.kt)("p",null,"Using VS Code, login to sysbio."),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"Create a conda environment with jupyter-lab")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You don't need to recreate the environment everytime, you can just activate it in step 1"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ ml load anaconda3\nlogin $ conda create -n ag-jupyter -c conda-forge jupyterlab\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Login to an interactive job")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ srun --ntasks-per-node 2 --pty bash\ncompute-1 $ ml load anaconda3\ncompute-1 $ source activate ag-jupyter\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Launch Jupyterlab")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"compute-1 $ jupyter-lab --no-browser --port 8888\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Open another terminal and login to the compute node with port forwarding.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ ssh sysbio-1 -L 8888:localhost:8888\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go back to the first terminal and copy the jupyterlab link into your local browser. It should look something like ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/lab?token=4d08d209468541b333109fc4f957c8b3d1c97bed59072148"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Alternatively you can paste the url in VS Code to connect to it as well."))),(0,a.kt)("h3",{id:"what-just-happened"},"What just happened?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"compute node port 8888 -> login node port 8888 -> local computer port 8888\n")),(0,a.kt)("h2",{id:"handling-other-kernels-for-jupyter"},"Handling Other Kernels for Jupyter"))}u.isMDXComponent=!0}}]);