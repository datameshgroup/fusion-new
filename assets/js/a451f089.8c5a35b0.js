"use strict";(self.webpackChunkfusion_doc=self.webpackChunkfusion_doc||[]).push([[913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,c=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Fusion App",o={unversionedId:"api-reference/fusion-app",id:"api-reference/fusion-app",title:"Fusion App",description:"Fusion App is a DataMesh middleware that is installed in the PC as the Sale System.",source:"@site/docs/api-reference/fusion-app.md",sourceDirName:"api-reference",slug:"/api-reference/fusion-app",permalink:"/fusion/docs/api-reference/fusion-app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/fusion/docs/category/api-reference"},next:{title:"Fusion Cloud",permalink:"/fusion/docs/api-reference/fusion-cloud"}},p={},s=[{value:"Getting started with Fusion App",id:"getting-started-with-fusion-app",level:2},{value:"Install Fusion App",id:"install-fusion-app",level:3},{value:"Configure Fusion App",id:"configure-fusion-app",level:3},{value:"Send your first payment request",id:"send-your-first-payment-request",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Perform a purchase",id:"perform-a-purchase",level:2},{value:"Perform a refund",id:"perform-a-refund",level:2},{value:"Methods",id:"methods",level:2},{value:"Login",id:"login",level:3},{value:"Payments",id:"payments",level:3},{value:"Error handling",id:"error-handling",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fusion-app"},"Fusion App"),(0,r.kt)("p",null,"Fusion App is a DataMesh middleware that is installed in the PC as the Sale System. "),(0,r.kt)("p",null,"Fusion App wraps the Fusion Cloud API and handles many of the interactions between the Sale System and the POI terminal (web socket, security, pairing, error handling, UI etc)."),(0,r.kt)("p",null,"To initiate a payment, the Sale System sends a HTTP POST to a local endpoint, and waits for a response. "),(0,r.kt)("p",null,"In case of an error (timeout, system crash etc), the Sale System sends a HTTP GET request to request the status of the payment."),(0,r.kt)("h2",{id:"getting-started-with-fusion-app"},"Getting started with Fusion App"),(0,r.kt)("h3",{id:"install-fusion-app"},"Install Fusion App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contact the DataMesh Integrations team (",(0,r.kt)("a",{parentName:"p",href:"mailto:integrations@datameshgroup.com"},"integrations@datameshgroup.com"),") and request the latest Fusion App installer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the installer and select the ",(0,r.kt)("em",{parentName:"p"},"Development")," install type"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7870).Z,width:"499",height:"392"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wait for the installation to complete and click ",(0,r.kt)("em",{parentName:"p"},"Finish")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(565).Z,width:"499",height:"392"})))),(0,r.kt)("h3",{id:"configure-fusion-app"},"Configure Fusion App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Launch Fusion App from the icon in the system tray."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6186).Z,width:"123",height:"59"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From version 3.0.0, the ",(0,r.kt)("em",{parentName:"p"},"Status")," tab displays the terminal pairing status."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the Fusion App is not yet paired with a terminal, you can pair it with a terminal by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Pair with terminal")," button.  Doing this will launch the pairing dialog, which will ask you to scan a pairing QR Code using the DataMesh terminal."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4045).Z,width:"622",height:"432"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the Fusion App has been paired with a terminal, the paired terminal's POI ID will be displayed.  You can unpair from the terminal by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Unpair from terminal")," option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4758).Z,width:"626",height:"430"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After pairing is successful, Fusion App will complete a login to validate the stored SaleID, POIID, and KEK."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3959).Z,width:"629",height:"395"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("em",{parentName:"p"},"Util")," tab will allow you to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"update the POS Name (which is used during ",(0,r.kt)("a",{parentName:"li",href:"/fusion/docs/getting-started/#qr-pos-pairing"},"QR POS Pairing"),").     ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the Fusion App has been paired with a terminal ",(0,r.kt)("em",{parentName:"li"},"before")," the POS name was updated, you'll need to unpair from the terminal and then, pair with the terminal again to use the updated POS name."))),(0,r.kt)("li",{parentName:"ul"},"perform a login"),(0,r.kt)("li",{parentName:"ul"},"access log files ")))),(0,r.kt)("p",null,"DataMesh may ask for log files to diagnose issues during development. "),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:a(2879).Z,width:"620",height:"427"})),(0,r.kt)("h3",{id:"send-your-first-payment-request"},"Send your first payment request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and install ",(0,r.kt)("a",{parentName:"li",href:"https://www.postman.com/downloads"},"Postman")),(0,r.kt)("li",{parentName:"ul"},"Import the Fusion App postman script:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In Postman, select Menu(\u2630) \u2192 File \u2192 Import..."),(0,r.kt)("li",{parentName:"ul"},"Browse to ",(0,r.kt)("inlineCode",{parentName:"li"},"%PROGRAMFILES(X86)%\\DataMeshGroup\\FusionApp\\FusionApp.postman_collection.json")," and import"))),(0,r.kt)("li",{parentName:"ul"},"Select Collections \u2192 Payment, and click ",(0,r.kt)("em",{parentName:"li"},"Send"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8484).Z,width:"1150",height:"602"})),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you've read ",(0,r.kt)("a",{parentName:"li",href:"../getting-started"},"Getting Started")," and scoped your integration requirements"),(0,r.kt)("li",{parentName:"ul"},"Read ",(0,r.kt)("a",{parentName:"li",href:"#perform-a-purchase"},"Perform a purchase")," and ",(0,r.kt)("a",{parentName:"li",href:"#perform-a-refund"},"Perform a refund")," and implement this functionality in your Sale System"),(0,r.kt)("li",{parentName:"ul"},"Implement other required features based on this API specification"),(0,r.kt)("li",{parentName:"ul"},"On the PC you've installed Fusion App, you can also view the locally installed ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:4242/swagger"},"Swagger docs"))),(0,r.kt)("h2",{id:"perform-a-purchase"},"Perform a purchase"),(0,r.kt)("p",null,"To perform a purchase the Sale System will need to POST a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload to the ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/fusion/v1/payments"),") endpoint."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construct a ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload including all required fields",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#paymenttype"},"PaymentData.PaymentType"),' to "Normal"'),(0,r.kt)("li",{parentName:"ul"},"Set the purchase amount in ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#requestedamount"},"PaymentTransaction.AmountsReq.RequestedAmount")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#saletransactionid"},"SaleTransactionID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SaleTransactionID.TransactionID")," should be the ID which identifies the sale on your system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SaleTransactionID.Timestamp")," should be the current time formatted as ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO8601")))),(0,r.kt)("li",{parentName:"ul"},"Populate the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#saleitem"},"SaleItem")," array with the product basket for the purchase"))),(0,r.kt)("li",{parentName:"ul"},"Create a globally unique UUIDv4 ",(0,r.kt)("inlineCode",{parentName:"li"},"SessionId"),". This will be used to uniquely identify the payment and perform error recovery."),(0,r.kt)("li",{parentName:"ul"},"POST the JSON payload to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:4242/fusion/v1/payments/{{SessionId}}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," header to ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json")),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Application-Name")," header to the name of your Sale System"),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Software-Version")," header to the software version of your Sale System"),(0,r.kt)("li",{parentName:"ul"},"Set the message body to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload"))),(0,r.kt)("li",{parentName:"ul"},"Await the POST result (this could take as long as 5 minutes). Fusion App will return a ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-response"},"Payment response")," in the message body",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#result"},"Response.Result")," for the transaction result "),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#result"},"Response.Result"),' is "Success", record the following to enable future matched refunds: ',(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#poitransactionid"},"POITransactionID")),(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"#authorizedamount"},"PaymentResult.AmountsResp.AuthorizedAmount")," (it may not equal the ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestedAmount")," in the payment request)"),(0,r.kt)("li",{parentName:"ul"},"If the Sale System is handling tipping or surcharge, check the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#tipamount"},"PaymentResult.AmountsResp.TipAmount"),", and ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#surchargeamount"},"PaymentResult.AmountsResp.SurchargeAmount")),(0,r.kt)("li",{parentName:"ul"},"Print the receipt contained in ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentReceipt")))),(0,r.kt)("li",{parentName:"ul"},"If the Sale System does not receive a POST result (i.e. timeout, socket dropped, system crash etc) implement error handling outlined in ",(0,r.kt)("a",{parentName:"li",href:"#error-handling"},"error handling"))),(0,r.kt)("h2",{id:"perform-a-refund"},"Perform a refund"),(0,r.kt)("p",null,"To perform a purchase the Sale System will need to POST a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload to the ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4242/fusion/v1/payments"),") endpoint."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If refunding a previous purchase, the Sale System should include details of the original purchase. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construct a ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload including all required fields",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#paymenttype"},"PaymentData.PaymentType"),' to "Refund"'),(0,r.kt)("li",{parentName:"ul"},"Set the refund amount in ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#requestedamount"},"PaymentTransaction.AmountsReq.RequestedAmount")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#saletransactionid"},"SaleTransactionID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SaleTransactionID.TransactionID")," should be the ID which identifies the sale on your system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SaleTransactionID.Timestamp")," should be the current time formatted as ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO8601")))),(0,r.kt)("li",{parentName:"ul"},"If refunding a previous purchase, set the following fields in ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#originalpoitransaction"},"PaymentTransaction.OriginalPOITransaction")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#poitransactionid"},"POITransactionID")," to the value returned in ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#poitransactionid"},"POIData.POITransactionID")," of the original purchase payment response "),(0,r.kt)("li",{parentName:"ul"},"Follow the refund rules outlined in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#refunds"},"Sale Item")," documentation to populate the Sale Item array"))),(0,r.kt)("li",{parentName:"ul"},"Create a globally unique UUIDv4 ",(0,r.kt)("inlineCode",{parentName:"li"},"SessionId"),". This will be used to uniquely identify the payment and perform error recovery."),(0,r.kt)("li",{parentName:"ul"},"POST the JSON payload to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:4242/fusion/v1/payments/{{SessionId}}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," header to ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json")),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Application-Name")," header to the name of your Sale System"),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Software-Version")," header to the software version of your Sale System"),(0,r.kt)("li",{parentName:"ul"},"Set the message body to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-request"},"Payment request")," JSON payload"))),(0,r.kt)("li",{parentName:"ul"},"Await the POST result (this could take as long as 5 minutes). Fusion App will return a ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#payment-response"},"Payment response")," in the message body",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#result"},"Response.Result")," for the transaction result ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"#authorizedamount"},"PaymentResult.AmountsResp.AuthorizedAmount")," (it may not equal the ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestedAmount")," in the payment request)"))),(0,r.kt)("li",{parentName:"ul"},"Print the receipt contained in ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentReceipt")))),(0,r.kt)("li",{parentName:"ul"},"If the Sale System does not receive a POST result (i.e. timeout, socket dropped, system crash etc) implement error handling outlined in ",(0,r.kt)("a",{parentName:"li",href:"#error-handling"},"error handling"))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Login")," endpoint is a useful method for validating connectivity with DataMesh without sending a financial request. The Sale System is not required to implement this functionality. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Endpoint "),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"POST http://localhost:4242/fusion/v1/login/{{SessionId}}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Query Parameters ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionId"),(0,r.kt)("td",{parentName:"tr",align:null},"A globally unique UUIDv4 which identifies this request")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Headers ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accept"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Application-Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your Sale System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Software-Version"),(0,r.kt)("td",{parentName:"tr",align:null},"The software version of your Sale System")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Request Body ")),(0,r.kt)("p",null,"Empty."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Response Body ")),(0,r.kt)("p",null,"A JSON payload based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#login-response"},"Login response")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Login response"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "LoginResponse": {\n        "Response": {\n            "Result": "xxx",\n            "ErrorCondition": "xxx",\n            "AdditionalResponse": "xxx"\n        },\n        "POISystemData": {\n            "DateTime": "xxx",\n            "POISoftware": {\n                "ProviderIdentification": "xxx",\n                "ApplicationName": "xxx",\n                "SoftwareVersion": "xxx"\n            },\n            "POITerminalData": {\n                "TerminalEnvironment": "xxx",\n                "POICapabilities": [\n                    "xxx",\n                    "xxx",\n                    "xxx"\n                ],\n                "POIProfile": {\n                    "GenericProfile": "Custom"\n                },\n                "POISerialNumber": "xxx"\n            },\n            "POIStatus": {\n                "GlobalStatus": "xxx",\n                "PEDOKFlag": "true or false",\n                "CardReaderOKFlag": "true or false",\n                "PrinterStatus": "xxx",\n                "CommunicationOKFlag": "true or false",\n                "FraudPreventionFlag": "true or false"\n            },\n            "TokenRequestStatus": "true or false"\n        }\n    }\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Response HTTP Status Codes ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App processed the request. Check ",(0,r.kt)("inlineCode",{parentName:"td"},"LoginResponse.Response.Result")," for the result of the login request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4xx"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App was unable to process the request. Check the required headers and try again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5xx"),(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App was unable to process the request. Try again.")))),(0,r.kt)("h3",{id:"payments"},"Payments"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Payments")," endpoint is used to perform purchase, purchase + cash out, cash out only, and refund requests. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Endpoint "),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"POST http://localhost:4242/fusion/v1/payments/{{SessionId}}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Query Parameters ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionId"),(0,r.kt)("td",{parentName:"tr",align:null},"A globally unique UUIDv4 which identifies this request")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Headers ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accept"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Application-Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your Sale System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Software-Version"),(0,r.kt)("td",{parentName:"tr",align:null},"The software version of your Sale System")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Request Body ")),(0,r.kt)("p",null,"A JSON payload based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#payment-request"},"Payment request")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Payment request"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "PaymentRequest": {\n        "SaleData": {\n            "SaleTransactionID": {\n                "TransactionID": "X_SALE_ID",\n                "TimeStamp": "X_ISO8601_FORMAT"\n            }\n        },\n        "PaymentTransaction": {\n            "AmountsReq": {\n                "Currency": "AUD",\n                "RequestedAmount": 10.42\n            },\n           "SaleItem":[\n               {\n                  "ItemID":"0",\n                  "ProductCode":"X_PRODUCT_CODE",\n                  "UnitOfMeasure":"Other",\n                  "Quantity":"1",\n                  "UnitPrice":"10.42",\n                  "ItemAmount":"10.42",\n                  "ProductLabel":"Big Kahuna Burger"\n               }\n            ]            \n        },\n        "PaymentData": {\n            "PaymentType": "Normal"\n        }\n    }\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Response Body ")),(0,r.kt)("p",null,"A JSON payload based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#payment-response"},"Payment response")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Payment response"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "PaymentResponse": {\n        "Response": {\n            "Result": "Success| Partial | Failure",\n            "ErrorCondition": "xxx",\n            "AdditionalResponse": "xxx"\n        },\n        "SaleData": {\n            "SaleTransactionID": {\n                "TransactionID": "xxx",\n                "TimeStamp": "xxx"\n            },\n            "SaleReferenceID": "xxxx"\n        },\n        "POIData": {\n            "POITransactionID": {\n                "TransactionID": "xxx",\n                "TimeStamp": "xxx"\n            },\n            "POIReconciliationID": "xxx"\n        },\n        "PaymentResult": {\n            "PaymentType": "xxx",\n            "PaymentInstrumentData": {\n                "PaymentInstrumentType": "xxx",\n                "CardData": {\n                    "EntryMode": "xxx",\n                    "PaymentBrand": "xxx",\n                    "Account": "xxx",\n                    "MaskedPAN": "xxxxxx\u2026xxxx",\n                    "PaymentToken": {\n                        "TokenRequestedType": "xxx",\n                        "TokenValue": "xxx",\n                        "ExpiryDateTime": "xxx"\n                    }\n                }\n            },\n            "AmountsResp": {\n                "Currency": "AUD",\n                "AuthorizedAmount": "x.xx",\n                "TotalFeesAmount": "x.xx",\n                "CashBackAmount": "x.xx",\n                "TipAmount": "x.xx",\n                "SurchargeAmount": "x.xx"\n            },\n            "OnlineFlag": true,\n            "PaymentAcquirerData": {\n                "AcquirerID": "xxx",\n                "MerchantID": "xxx",\n                "AcquirerPOIID": "xxx",\n                "AcquirerTransactionID": {\n                    "TransactionID": "xxx",\n                    "TimeStamp": "xxx"\n                },\n                "ApprovalCode": "xxx",\n                "ResponseCode": "xxx",\n                "HostReconciliationID": "xxx"\n            }\n        },\n        "AllowedProductCodes": [\n            "1",\n            "2",\n            "3"\n        ],\n        "PaymentReceipt": [\n            {\n                "DocumentQualifier": "xxx",\n                "RequiredSignatureFlag": true,\n                "OutputContent": {\n                    "OutputFormat": "XHTML",\n                    "OutputXHTML": "xxx"\n                }\n            }\n        ]\n    }\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Response HTTP Status Codes ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App processed the request. Check ",(0,r.kt)("inlineCode",{parentName:"td"},"PaymentResponse.Response.Result")," for the result of the payment request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4xx"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App was unable to process the request. Check the required headers and request body and try again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5xx"),(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion App was unable to process the request. The Sale System should perform ",(0,r.kt)("a",{parentName:"td",href:"#error-handling"},"error handling")," to retreive the payment result.")))),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"When the Sale System POSTs ",(0,r.kt)("a",{parentName:"p",href:"#payment_request"},"payment request")," it will receive a ",(0,r.kt)("a",{parentName:"p",href:"#payment-response"},"payment response"),"."),(0,r.kt)("p",null,"The Sale System should verify the result of the transaction by checking the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/data-model#result"},"Response.Result")," field in the response."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#result"},"Response.Result"),' is "Success", the payment transaction was successful.'),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#result"},"Response.Result"),' is "Failure", the payment transaction failed.  The Sale System may check for any errors specified in the ',(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/data-model#errorcondition"},"Response.ErrorCondition")," field in the same response message and handle the error accordingly.")),(0,r.kt)("p",null,"In the event the Sale System does not receive a response (for example, due to network error, timeout, or any other unexpected error) it must enter error handling."),(0,r.kt)("p",null,"To perform error handling the Sale System should send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.kt)("a",{parentName:"p",href:"#payments"},"payments")," endpoint using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionId")," of the failed request. Fusion App will return a ",(0,r.kt)("a",{parentName:"p",href:"#payment-response"},"payment response")," containing the result of the payment."))}d.isMDXComponent=!0},6186:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-install-1-7d7e5e8f74517524c0a568af63b88f72.png"},565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-install-2-03374da2cd23e03ac26d5289b3a1f018.png"},3959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-login-915f3564e2e04ef09b624fb4f81637db.png"},8484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-postman-906e3ea221189752a696445be4730d7c.png"},4045:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-settings-not-paired-2b83db1b61e7872b5e390f8ed4a227a6.png"},4758:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-settings-paired-321fb776a65c32fadec4b5e63fd7c788.png"},2879:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fusion-app-util-5e83d8e60cfbd1d90bc83fad7fb660c6.png"}}]);