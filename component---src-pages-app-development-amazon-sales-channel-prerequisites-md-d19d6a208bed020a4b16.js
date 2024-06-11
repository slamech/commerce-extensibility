"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[4598],{87011:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return s}});var n=a(87462),r=a(45987),m=(a(35776),a(3905)),o=a(91515);const l=["components"],d={},p={_frontmatter:d},i=o.Z;function s(e){let{components:t}=e,a=(0,r.Z)(e,l);return(0,m.mdx)(i,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"prerequisites"},"Prerequisites"),(0,m.mdx)("p",null,"This topic describes how to set up your local development environment so that you can install the Adobe Sales Channel reference app on an Adobe Commerce 2.4.5+ instance."),(0,m.mdx)("p",null,"To install the reference app, you must:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Have an Adobe Developer account with System Administrator or Developer Role permissions. ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/getting-started/"},"Getting started with Adobe Developer Console")," describes how to enroll in the Adobe developer program.")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Be familiar with ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/getting-started/"},"Adobe I/O Runtime")," and ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/"},"Adobe IO Events"),".")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Install the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/getting-started/setup/"},(0,m.mdx)("inlineCode",{parentName:"a"},"aio CLI")))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Have access to an Adobe Commerce 2.4.5+ on cloud infrastructure or to an on-premises instance.")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"(Recommended) Install ",(0,m.mdx)("a",{parentName:"p",href:"../../admin-ui-sdk/index.md"},"Adobe Commerce Admin UI SDK"),", which enables you to attach the App Builder application to the Adobe Commerce Admin.")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Install ",(0,m.mdx)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"nodeJS 16.13+")," as your JavaScript runtime."))),(0,m.mdx)("p",null,"In addition to these software requirements, you must have access to the Commerce environment from an external network. You must also have the ability to add API integrations."),(0,m.mdx)("h2",{id:"adobe-commerce-configuration-and-setup"},"Adobe Commerce configuration and setup"),(0,m.mdx)("p",null,"Before you begin the process of installing the Adobe Sales Channel reference app, you must configure I/O Events for Adobe Commerce and add custom attributes to the Admin."),(0,m.mdx)("h3",{id:"configure-io-events-for-adobe-commerce"},"Configure I/O Events for Adobe Commerce"),(0,m.mdx)("p",null,"Follow the instructions in ",(0,m.mdx)("a",{parentName:"p",href:"../../events/configure-commerce.md/"},"Configure Adobe Commerce")," to enable communication with Adobe I/O and create an event provider. Specifically, follow these procedures:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"../../events/configure-commerce.md#configure-the-adobe-io-connection"},"Configure the Adobe I/O connection"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"../../events/configure-commerce.md#create-an-event-provider"},"Create an event provider and complete the Commerce configuration")))),(0,m.mdx)("p",null,"Do not perform the ",(0,m.mdx)("strong",{parentName:"p"},"Subscribe and register events")," procedure. The Amazon Sales Channel app ",(0,m.mdx)("a",{parentName:"p",href:"installation.md"},"installation")," instructions describe the process for this app."),(0,m.mdx)("h3",{id:"create-custom-attributes"},"Create custom attributes"),(0,m.mdx)("p",null,"To subscribe to catalog update events from Adobe Commerce, you must create the following custom attributes in ",(0,m.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,m.mdx)("strong",{parentName:"p"},"Attributes")," > ",(0,m.mdx)("strong",{parentName:"p"},"Product")," > ",(0,m.mdx)("strong",{parentName:"p"},"Add New Attribute"),":"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Default label"),(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute Code"),(0,m.mdx)("th",{parentName:"tr",align:null},"Scope"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"ASIN"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"asin")),(0,m.mdx)("td",{parentName:"tr",align:null},"Global"),(0,m.mdx)("td",{parentName:"tr",align:null})),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Amazon Condition"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"amazon_condition")),(0,m.mdx)("td",{parentName:"tr",align:null},"Global"),(0,m.mdx)("td",{parentName:"tr",align:null},"Condition of the listing item. The ",(0,m.mdx)("a",{parentName:"td",href:"https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-reference#conditiontype"},"Amazon docs")," list the possible values.")))),(0,m.mdx)("h2",{id:"amazon-sp-api"},"Amazon SP API"),(0,m.mdx)("p",null,"Amazon Sales Channel uses ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/amz-tools/amazon-sp-api"},"Amazon SP API")," to communicate with Amazon Seller Central."),(0,m.mdx)("p",null,"To properly configure Amazon SP API, you must have:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Admin access to ",(0,m.mdx)("a",{parentName:"li",href:"https://sellercentral.amazon.com/"},"Amazon Seller Central")),(0,m.mdx)("li",{parentName:"ul"},"Permissions to add Developer Applications")),(0,m.mdx)("p",null,"You must perform configuration tasks for Amazon Web Services and Amazon Seller Central."),(0,m.mdx)("h3",{id:"amazon-web-services"},"Amazon Web Services"),(0,m.mdx)("p",null,"Create an IAM policy per ",(0,m.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities"},"Amazon SPI Guide"),"."),(0,m.mdx)("h3",{id:"amazon-seller-central"},"Amazon Seller Central"),(0,m.mdx)("p",null,"The app type of Amazon Sales Channel is ",(0,m.mdx)("strong",{parentName:"p"},"Private Seller"),". Specify this integration type when you configure your instance. See ",(0,m.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/determine-app-type"},"Determine app type")," for more information."),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-as-a-developer#to-register-as-a-private-developer-for-private-seller-applications"},"Register yourself as a private developer"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-your-application"},"Registering your Application"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/self-authorization"},"Self authorize")," your application to generate access keys."))),(0,m.mdx)("p",null,"When you create an account from the App Builder application UI, you will need the following set of Amazon credentials:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Field"),(0,m.mdx)("th",{parentName:"tr",align:null},"Where to get"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Client ID"),(0,m.mdx)("td",{parentName:"tr",align:null},"In ",(0,m.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Client secret"),(0,m.mdx)("td",{parentName:"tr",align:null},"In ",(0,m.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Client refresh token"),(0,m.mdx)("td",{parentName:"tr",align:null},"In ",(0,m.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com/marketplacedeveloper/applications"},"Developer Central")," > ",(0,m.mdx)("strong",{parentName:"td"},"Authorize"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"AWS access key"),(0,m.mdx)("td",{parentName:"tr",align:null},"In ",(0,m.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," > ",(0,m.mdx)("strong",{parentName:"td"},"IAM")," > ",(0,m.mdx)("strong",{parentName:"td"},"User with access to IAM role"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"AWS secret access key"),(0,m.mdx)("td",{parentName:"tr",align:null},"In ",(0,m.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," > ",(0,m.mdx)("strong",{parentName:"td"},"IAM")," > ",(0,m.mdx)("strong",{parentName:"td"},"User with access to IAM role"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"AWS Role ARN"),(0,m.mdx)("td",{parentName:"tr",align:null},"Create ",(0,m.mdx)("a",{parentName:"td",href:"https://aws.amazon.com/"},"AWS")," IAM role")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Target marketplace"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://developer-docs.amazon.com/sp-api/docs/marketplace-ids"},"ASC Marketplace IDs"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Unique Seller ID"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://sellercentral.amazon.com"},"Amazon Seller Central")," > ",(0,m.mdx)("strong",{parentName:"td"},"Account Info")," > ",(0,m.mdx)("strong",{parentName:"td"},"Merchant Token"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-app-development-amazon-sales-channel-prerequisites-md-d19d6a208bed020a4b16.js.map