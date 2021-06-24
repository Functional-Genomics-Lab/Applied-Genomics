(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2509:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"scrnaseq",title:"scRNA-Seq",description:"",sidebar_label:"Jupyter on Slurm",sidebar_position:2},l={unversionedId:"week_05/scrnaseq",id:"week_05/scrnaseq",isDocsHomePage:!1,title:"[theislab/single-cell-tutorial](https://github.com/theislab/single-cell-tutorial)",description:"",source:"@site/docs/week_05/scRNA-seq.md",sourceDirName:"week_05",slug:"/week_05/scrnaseq",permalink:"/Applied-Genomics/docs/week_05/scrnaseq",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_05/scRNA-seq.md",version:"current",sidebar_label:"Jupyter on Slurm",sidebarPosition:2,frontMatter:{id:"scrnaseq",title:"scRNA-Seq",description:"",sidebar_label:"Jupyter on Slurm",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Running Jupyter Notebooks on Slurm Nodes",permalink:"/Applied-Genomics/docs/week_05/jupyter_slurm"},next:{title:"ChIP-Seq Preprocessing",permalink:"/Applied-Genomics/docs/week-6"}},s=[{value:"Adjustments to run it on sysbio",id:"adjustments-to-run-it-on-sysbio",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/31217225/"},"Current best practices in single-cell RNA-seq analysis: a tutorial")),(0,a.kt)("h2",{id:"adjustments-to-run-it-on-sysbio"},"Adjustments to run it on sysbio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ git clone https://github.com/theislab/single-cell-tutorial.git\nlogin $ cd single-cell-tutorial\n")),(0,a.kt)("p",null,"The example data has already been downloaded to save time and space. We need to soft link the data to our repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ ln -s /scratch/applied-genomics/scrnaseq/data data\n")),(0,a.kt)("p",null,"Start the container on a computer node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"login $ srun --pty bash\nsysbio-0 $ singularity exec /scratch/applied-genomics/scrnaseq/single-cell-analysis_210114.sif jupyter-lab\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Open another terminal and login to the compute node with port forwarding.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"login $ ssh sysbio-1 -L 8888:localhost:8888\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go back to the first terminal and copy the jupyterlab link into your local browser. It should look something like ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/lab?token=4d08d209468541b333109fc4f957c8b3d1c97bed59072148"))))}p.isMDXComponent=!0}}]);