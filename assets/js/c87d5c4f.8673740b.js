"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4254],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Vagrant",hide_title:!0,sidebar_label:"Vagrant"},s="Using the SynapseML Vagrant Image",c={unversionedId:"reference/vagrant",id:"version-0.9.4/reference/vagrant",title:"Vagrant",description:"Install Vagrant and Dependencies",source:"@site/versioned_docs/version-0.9.4/reference/vagrant.md",sourceDirName:"reference",slug:"/reference/vagrant",permalink:"/SynapseML/docs/0.9.4/reference/vagrant",tags:[],version:"0.9.4",frontMatter:{title:"Vagrant",hide_title:!0,sidebar_label:"Vagrant"},sidebar:"version-0.9.4/docs",previous:{title:"Datasets",permalink:"/SynapseML/docs/0.9.4/reference/datasets"}},p=[{value:"Install Vagrant and Dependencies",id:"install-vagrant-and-dependencies",children:[],level:2},{value:"Build the Vagrant Image",id:"build-the-vagrant-image",children:[],level:2},{value:"Connect to the Vagrant Image",id:"connect-to-the-vagrant-image",children:[],level:2},{value:"Stop the Vagrant Image",id:"stop-the-vagrant-image",children:[],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-synapseml-vagrant-image"},"Using the SynapseML Vagrant Image"),(0,o.kt)("h2",{id:"install-vagrant-and-dependencies"},"Install Vagrant and Dependencies"),(0,o.kt)("p",null,"You will need to a few dependencies before we get started. These instructions are for using Vagrant on Windows OS."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/"},"Hyper-V")," is enabled or install ",(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"Virtualbox")),(0,o.kt)("li",{parentName:"ol"},"Install a X Server for Windows, ",(0,o.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/vcxsrv/"},"VcXsrv")," is a lightweight option."),(0,o.kt)("li",{parentName:"ol"},"Install the Vagrant version for your OS ",(0,o.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/downloads.html"},"here"))),(0,o.kt)("h2",{id:"build-the-vagrant-image"},"Build the Vagrant Image"),(0,o.kt)("p",null,"Start powershell as Administrator and go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"synapseml/tools/vagrant")," directory and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vagrant up\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: you may need to select a network switch, try the Default Switch option if possible")),(0,o.kt)("h2",{id:"connect-to-the-vagrant-image"},"Connect to the Vagrant Image"),(0,o.kt)("p",null,"First start the X-Window server (XLaunch if using VcXsrv)."),(0,o.kt)("p",null,"From the same directory (with powershell as Administrator) run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$env:DISPLAY="localhost:0"\nvagrant ssh -- -Y\n\n# now you can start IntelliJ and interact with the GUI\n> idea\n')),(0,o.kt)("h2",{id:"stop-the-vagrant-image"},"Stop the Vagrant Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vagrant halt\n")),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"This guide covers the bare minimum for running a Vagrant image. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/intro/index.html"},"Vagrant Documentation"),"."))}d.isMDXComponent=!0}}]);