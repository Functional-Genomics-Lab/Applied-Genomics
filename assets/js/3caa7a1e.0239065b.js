(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[38],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3503:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),l={id:"hpc",title:"High Performance Computing",description:"How to use big computers",sidebar_label:"HPC",sidebar_position:3},i={unversionedId:"week_03/hpc",id:"week_03/hpc",isDocsHomePage:!1,title:"High Performance Computing",description:"How to use big computers",source:"@site/docs/week_03/hpc.md",sourceDirName:"week_03",slug:"/week_03/hpc",permalink:"/Applied-Genomics/docs/week_03/hpc",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_03/hpc.md",version:"current",sidebar_label:"HPC",sidebarPosition:3,frontMatter:{id:"hpc",title:"High Performance Computing",description:"How to use big computers",sidebar_label:"HPC",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Conda",permalink:"/Applied-Genomics/docs/week_03/conda"},next:{title:"Assignment 3",permalink:"/Applied-Genomics/docs/week_03/assignment_03"}},s=[{value:"What&#39;s a cluster?",id:"whats-a-cluster",children:[]},{value:"Slurm",id:"slurm",children:[]},{value:"Tutorial",id:"tutorial",children:[{value:"Instant Gratification",id:"instant-gratification",children:[]},{value:"<code>scratch</code>",id:"scratch",children:[]},{value:"Let&#39;s get some data",id:"lets-get-some-data",children:[]},{value:"Back to the Tutorial",id:"back-to-the-tutorial",children:[]},{value:"<code>sbatch</code>",id:"sbatch",children:[]},{value:"Commit your Changes!",id:"commit-your-changes",children:[]}]}],u={toc:s};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the era of big data, we need big computers. Just like other expensive\nresources these are shared among many researchers, however this also makes them\neasy to get access to. At UT Dallas alone we have a few clusters you can\nutilize:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sysbio, for training"),(0,r.kt)("li",{parentName:"ul"},"Ganymede, for ",(0,r.kt)("strong",{parentName:"li"},"H"),"igh ",(0,r.kt)("strong",{parentName:"li"},"P"),"erformance ",(0,r.kt)("strong",{parentName:"li"},"C"),"omputing"),(0,r.kt)("li",{parentName:"ul"},"Europa(Public access coming soon), for ",(0,r.kt)("strong",{parentName:"li"},"H"),"igh ",(0,r.kt)("strong",{parentName:"li"},"T"),"hroughput ",(0,r.kt)("strong",{parentName:"li"},"C"),"omputing")),(0,r.kt)("p",null,"Just for comparison, a node in the genomics queue on Ganymede has 16 cores, 32GB\nof RAM, and is connected to a petabyte of storage. There's also 16 nodes.\nThey're free for you to use as well! You just need to know how to use them."),(0,r.kt)("h2",{id:"whats-a-cluster"},"What's a cluster?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://portal.tacc.utexas.edu/documents/10157/1181317/Login+and+compute+nodes/dd6fa98c-1695-4e62-8b7b-66f0c83ceba3?t=1436213020000",alt:"TACC Graphic"}),(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You login to the login node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Login nodes are a prep area"),(0,r.kt)("li",{parentName:"ul"},"Transferring files"),(0,r.kt)("li",{parentName:"ul"},"Compiling code"),(0,r.kt)("li",{parentName:"ul"},"Submitting jobs"))),(0,r.kt)("li",{parentName:"ul"},"The compute nodes are where actual computations occur and where research is\ndone. All batch jobs and executables, as well as development and debugging\nsessions, are run on the compute nodes.",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.ycrc.yale.edu/img/clusters.png",alt:"Yale Shared File System"}),(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The nodes all have access to a shared filesystem")),(0,r.kt)("h2",{id:"slurm"},"Slurm"),(0,r.kt)("p",null,"SLURM - Simple Linux Utility for Resource Management"),(0,r.kt)("p",null,"Provides a way for users to schedule jobs. There are plenty of alternatives but\nSlurm is pretty common. Checkout this ",(0,r.kt)("a",{parentName:"p",href:"https://bihealth.github.io/bih-cluster/slurm/cheat-sheet/"},"Slurm\nCheatsheet")," if you\nneed to reference the commands to control it."),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before we start with our first steps tutorial, we would like to introduce the following convention that we use throughout the series:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ Commands are prefixed with a little dollar sign\nlogin $ The host name is put infront of the dollar sign\ncompute $\n")))),(0,r.kt)("h3",{id:"instant-gratification"},"Instant Gratification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ srun -p normal --time 1-00 --mem=8G --ntasks=8 --pty bash -i\n# Once you're logged into a node\ncompute $ exit\n")),(0,r.kt)("h3",{id:"scratch"},(0,r.kt)("inlineCode",{parentName:"h3"},"scratch")),(0,r.kt)("p",null,"All users on the system have a file system quota. You'll see it every time you\nlogin. There's a ",(0,r.kt)("strong",{parentName:"p"},"soft")," limit, that if you go over you'll get the warning: ",(0,r.kt)("inlineCode",{parentName:"p"}," dm-0: warning, user block quota exceeded."),". There's also a Hard limit, which if\nyou exceed it the process will be killed. You can check your quota with ",(0,r.kt)("inlineCode",{parentName:"p"},"quota -s")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://docs.oithpc.utdallas.edu/#ganymede-space-constraints"},"See Ganymede Space Constraints for more info")),(0,r.kt)("p",null,"But you should notice in your home directory you have a symbolic link called\n",(0,r.kt)("inlineCode",{parentName:"p"},"scratch"),". This is connected to a large storage system and is unmetered."),(0,r.kt)("p",null,"Here's a quick table comparing the two:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Home Space"),(0,r.kt)("th",{parentName:"tr",align:null},"Scratch Space"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Purpose of the Space"),(0,r.kt)("td",{parentName:"tr",align:null},"To house scripts, source code and output data."),(0,r.kt)("td",{parentName:"tr",align:null},"To have a large area for working with data or trying ideas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backed Up"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("h3",{id:"lets-get-some-data"},"Let's get some data"),(0,r.kt)("p",null,"So how do we get data from our browser, to the computer? How do we avoid\ndownloading it locally(to our laptops, which have limited space)?"),(0,r.kt)("h4",{id:"wget-the-non-interactive-network-downloader"},"wget-The non-interactive network downloader"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wget allows us to download files from the web via the command line"),(0,r.kt)("li",{parentName:"ul"},"It supports http, https and ftp")),(0,r.kt)("p",null,"Let's use it!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Let's clone our project into the scratch directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ cd scratch\nlogin $ git clone https://github.com/github-username/ag-intro.git\nlogin $ cd ag-intro\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download the data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ wget https://github.com/nf-core/test-datasets/raw/modules/data/genomics/homo_sapiens/genome/genome.gtf\nlogin $ wget https://github.com/nf-core/test-datasets/raw/modules/data/genomics/homo_sapiens/illumina/bam/test.paired_end.sorted.bam\n")),(0,r.kt)("p",null,"While we're at it, let's through these commands into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," so we don't forget the commands!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Makefile"},"download_data: genome.gtf test.paired_end.sorted.bam\n\ngenome.gtf:\n    wget https://github.com/nf-core/test-datasets/raw/modules/data/genomics/homo_sapiens/genome/genome.gtf\n\ntest.paired_end.sorted.bam:\n    wget https://github.com/nf-core/test-datasets/raw/modules/data/genomics/homo_sapiens/illumina/bam/test.paired_end.sorted.bam\n")),(0,r.kt)("p",null,"Don't forget to add the data to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," before you commit!"),(0,r.kt)("h5",{id:"what-did-we-just-download"},"What did we just download?"),(0,r.kt)("p",null,"These files are two different formats that are common:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The GFF/GTF/BED formats are the so-called \u201cinterval\u201d formats that retain only the coordinate positions for a region in a genome. Each is tab delimited and will contain information on the chromosomal coordinate, start, end, strand, value and other attributes, though the order of the columns will depend on the feature.",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")))),(0,r.kt)("p",null,"The GFF/GTF formats are 9 column tab-delimited formats. The coordinates start at value 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsv"},"chr1 . mRNA            1300  9000  .  +  .  ID=mrna0001;Name=sonichedgehog\nchr1 . exon            1300  1500  .  +  .  ID=exon00001;Parent=mrna0001\nchr1 . exon            1050  1500  .  +  .  ID=exon00002;Parent=mrna0001\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The SAM/BAM formats are so-called Sequence Alignment Maps. These files typically represent the results of aligning a FASTQ file to a reference FASTA file and describe the individual, pairwise alignments that were found. Different algorithms may create different alignments (and hence BAM files).",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsv"},"SRR1553425.13617    163 AF086833.2  46  60  101M    =   541 596 GAATAACTATGAGGAAGATTAATAATTTTCCTCTCATTGAAATTTATATCGGAATTTAAATTGAAATTGTTACTGTAATCATACCTGGTTTGTTTCAGAGC   @<@FFFDDHHGHHJIJJIJJJJJJJJJJJJJJIIJJJJGIJJJJJJEIEIGIIJJJJJIIIIGIIIGGEGIIIGIIJJJGGGHHFHGFDDFDEEDDEDCDCNM:i:1 MD:Z:81C19  MC:Z:101M   AS:i:96 XS:i:0\nSRR1553425.13755    99  AF086833.2  46  60  101M    =   46  101 GAATAACTATGAGGAAGATTAATAATTTTCCTCTCATTGAAATTTATATCGGAATTTAAATTGAAATTGTTACTGTAATCATACCTGGTTTGTTTCAGAGC   ?:@DBDDDFHGDHGIGEGAFGGHDHIIIIIIIGGGGIGEBHHGHFGHIDCHIIIIII<G@FGHDFGGHH@FGGEGGGEHIE@HHHGHF;?BC@CECFC:@>NM:i:1 MD:Z:81C19  MC:Z:101M   AS:i:96 XS:i:0\nSRR1553425.13755    147 AF086833.2  46  60  101M    =   46  -101    GAATAACTATGAGGAAGATTAATAATTTTCCTCTCATTGAAATTTATATCGGAATTTAAATTGAAATTGTTACTGTAATCATACCTGGTTTGTTTCAGAGC   DDDDCDDDDDECEEDEDFFFEFFGHHHHIGGHG@=@@=GIIJHIIHFDIIIIIIHHGJIFAJJJIGIJIIIJHHGGIGEGGHFHHJIIHHHGHFFFFFCCCNM:i:1 MD:Z:81C19  MC:Z:101M   AS:i:96 XS:i:0\nSRR1553425.11219    2227    AF086833.2  47  60  71H30M  =   146 171 AATAACTATGAGGAAGATTAATAATTTTCC  IGHF@GHEHIIHE>IIGHFDHDDDFFF@@@  NM:i:0  MD:Z:30 MC:Z:101M   AS:i:30 XS:i:0  SA:Z:AF086833.2,68,+,30S71M,60,1;\n")),(0,r.kt)("p",null,"You can find more info at ",(0,r.kt)("a",{parentName:"p",href:"https://www.biostarhandbook.com/common-data-types.html"},"Biostars handbook Common data types")),(0,r.kt)("h5",{id:"some-other-ways-to-get-data-onto-the-cluster"},"Some other ways to get data onto the cluster"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wget")," isn't the only way to get things to the cluster. It's great for stuff that's on the internet, but what about local files?",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))),(0,r.kt)("h6",{id:"scp---secure-copy"},"SCP - secure copy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local file to remote server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp filename.txt hostname:/path/to/filename/filename.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remote server to local file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp hostname:filename.txt .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recursive copies on directories also work with ",(0,r.kt)("inlineCode",{parentName:"li"},"-r"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp \u2013r hbar.ices.utexas.edu:public_html ~/tmp\n")),(0,r.kt)("h5",{id:"rsync---a-fast-versatile-remote-and-local-file-copying-tool"},"rsync - a fast, versatile, remote (and local) file-copying tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 1. Synchronize Two Directories in a Local Server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -zvr /path/to/source /path/to/copy\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"z")," - enable compression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v")," - verbose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"r")," -recursive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Example 2. Preserve timestamps during Sync using rsync ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2013a")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -azv /path/to/source /path/to/copy\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-a")," enters archive mode"),(0,r.kt)("li",{parentName:"ul"},"Archive mode does the following:"),(0,r.kt)("li",{parentName:"ul"},"Recursive mode"),(0,r.kt)("li",{parentName:"ul"},"Preserves symbolic links"),(0,r.kt)("li",{parentName:"ul"},"Preserves permissions"),(0,r.kt)("li",{parentName:"ul"},"Preserves timestamp"),(0,r.kt)("li",{parentName:"ul"},"Preserves owner and group")),(0,r.kt)("h3",{id:"back-to-the-tutorial"},"Back to the Tutorial"),(0,r.kt)("p",null,"So we've got the data. But how do we get the software we need to do anything with it?"),(0,r.kt)("p",null,"We'll first use ",(0,r.kt)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/"},"Lmod: A New Environment Module System")),(0,r.kt)("p",null,"Some helpful commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ module list # What modules do I currently have enabled?\nlogin $ module load subread # Load the subread module\nlogin $ module unload subread  # Unload the subread module\nlogin $ module unload anaconda3  # Load the anaconda3 module\nlogin $ module save default # Save the current module stack to the default stack\n")),(0,r.kt)("p",null,"So let's actually run ",(0,r.kt)("inlineCode",{parentName:"p"},"featurecounts")," and get the counts for our genes!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ srun -p normal --time 1-00 --mem=8G --ntasks=8 --pty bash -i\ncompute $ ml load subread\ncompute $ featureCounts -t exon -g gene_id -a genome.gtf -o counts.txt test.paired_end.sorted.bam\n")),(0,r.kt)("p",null,"Pop open ",(0,r.kt)("inlineCode",{parentName:"p"},"counts.txt")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"cat counts.txt")," and check out the data!"),(0,r.kt)("h3",{id:"sbatch"},(0,r.kt)("inlineCode",{parentName:"h3"},"sbatch")),(0,r.kt)("p",null,"So the interactive login for jobs is great, when no one else is using the cluster! Why should we have to wait around in line all day to get our time on a compute node? What if we could tell the cluster what we wanted to do and it would schedule the jobs for us?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You use the sbatch command in front of the script you actually want to run. sbatch then puts your job into the job queue. The job scheduler looks at the current status of the whole system and will assign the first job in the queue to a node that is free in terms of computational load. If all machines are busy, yours will wait. But your job will sooner or later get assigned to a free node. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")))),(0,r.kt)("h4",{id:"example-script"},"Example script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\n# Set a name for the job (-J or --job-name).\n#SBATCH --job-name=tutorial\n\n# Set the file to write the stdout and stderr to (if -e is not set; -o or --output).\n#SBATCH --output=logs/%x-%j.log\n\n# Set the number of cores (-n or --ntasks).\n#SBATCH --ntasks=8\n\n# Force allocation of the two cores on ONE node.\n#SBATCH --nodes=1\n\n# Set the total memory. Units can be given in T|G|M|K.\n#SBATCH --mem=8G\n\n# Optionally, set the partition to be used (-p or --partition).\n#SBATCH --partition=medium\n\n# Set the expected running time of your job (-t or --time).\n# Formats are MM:SS, HH:MM:SS, Days-HH, Days-HH:MM, Days-HH:MM:SS\n#SBATCH --time=30:00\n\nexport TMPDIR=/fast/users/${USER}/scratch/tmp\nmkdir -p ${TMPDIR}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The lines starting with #SBATCH are actually setting parameters for a sbatch command, so #SBATCH --job-name=tutorial is equal to sbatch --job-name=tutorial."))),(0,r.kt)("h4",{id:"turning-our-featurecount-command-into-a-script"},"Turning our featurecount command into a script"),(0,r.kt)("p",null,"Open up a new file in your text editor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="submit_job.sh"',title:'"submit_job.sh"'},"#!/bin/bash\n\n#SBATCH --job-name=featurecounts\n#SBATCH --ntasks=8\n#SBATCH --nodes=1\n#SBATCH --mem=8G\n#SBATCH --partition=normal\n#SBATCH --time=30:00\n\nml load subread\nfeatureCounts -t exon -g gene_id -a genome.gtf -o counts.txt test.paired_end.sorted.bam\n")),(0,r.kt)("p",null,"And then submit it to the cluster with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"login $ sbatch submit_job.sh\nlogin $ cat *.out\n")),(0,r.kt)("h3",{id:"commit-your-changes"},"Commit your Changes!"),(0,r.kt)("p",null,"Make sure to gitignore your input data and any results you produced! Along with\nany log files from sbatch.\nIt's up to you whether you want to create a make rule for ",(0,r.kt)("inlineCode",{parentName:"p"},"sbatch")," or just include it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")),(0,r.kt)("h1",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bihealth.github.io/bih-cluster/slurm/cheat-sheet/"},"Slurm Cheatsheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.oithpc.utdallas.edu/"},"UTDallas HPC Cluster Users Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ycrc.yale.edu/clusters-at-yale/"},"Yale HPC Docs"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://portal.tacc.utexas.edu/user-guides/lonestar5"},"TACC Lonestar5 User guide"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ycrc.yale.edu/clusters-at-yale/"},"Yale HPC Docs"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"http://docs.oithpc.utdallas.edu/"},"UTDallas HPC Cluster Users Guide"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},(0,r.kt)("a",{parentName:"li",href:"https://www.biostarhandbook.com/common-data-types.html"},"Biostars handbook Common data types"),(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"[HPC Class SSH and Slurm lecture]",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-6"},(0,r.kt)("a",{parentName:"li",href:"https://bihealth.github.io/bih-cluster/first-steps/"},"BIH HPC Docs"),(0,r.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);