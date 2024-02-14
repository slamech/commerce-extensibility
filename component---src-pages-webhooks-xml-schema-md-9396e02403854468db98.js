"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[1084],{6409:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var a=n(87462),l=n(45987),d=(n(35776),n(3905)),r=n(91515);const m=["components"],i={},o={_frontmatter:i},p=r.Z;function u(e){let{components:t}=e,n=(0,l.Z)(e,m);return(0,d.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"webhook-configuration-reference"},"Webhook configuration reference"),(0,d.mdx)("p",null,"Webhooks are configured in a ",(0,d.mdx)("inlineCode",{parentName:"p"},"webhooks.xml")," file. This file can be placed in the system ",(0,d.mdx)("inlineCode",{parentName:"p"},"<install_directory>/app/etc")," directory or in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"etc")," directory of an enabled Adobe Commerce module."),(0,d.mdx)("p",null,"Run the ",(0,d.mdx)("inlineCode",{parentName:"p"},"bin/magento webhooks:list")," command  to determine if the webhooks you create in this file register correctly. The webhook name will be displayed in the list of registered webhooks."),(0,d.mdx)("p",null,"A maximal ",(0,d.mdx)("inlineCode",{parentName:"p"},"webhooks.xml")," file has the following structure:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-tree"},"|__ config\n    |__ method\n        |__ hooks\n            |__ batch\n                |__ hook\n                    |__ headers\n                    |   |__ header\n                    |__ fields\n                    |   |__ field\n                    |__ rules\n                        |__ rule\n")),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"hooks.md"},"Configure hooks")," and ",(0,d.mdx)("a",{parentName:"p",href:"./conditional-webhooks.md"},"Create conditional webhooks")," contain examples of fully-defined hooks."),(0,d.mdx)("h2",{id:"config-attributes"},(0,d.mdx)("inlineCode",{parentName:"h2"},"config")," attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"config")," element must contain the following text:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\nxsi:noNamespaceSchemaLocation="urn:magento:module:Magento_AdobeCommerceWebhooks:etc/webhooks.xsd">\n...\n</config>\n')),(0,d.mdx)("h2",{id:"method-element"},(0,d.mdx)("inlineCode",{parentName:"h2"},"method")," element"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"method")," element must define the webhook ",(0,d.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"type"),". The combination of method ",(0,d.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"type")," must be unique across the system."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The webhook code name. The value must be in the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"<type>.<webhook_name>"),", where ",(0,d.mdx)("inlineCode",{parentName:"td"},"type")," is either ",(0,d.mdx)("inlineCode",{parentName:"td"},"observer")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"plugin"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"webhook_name")," matches a valid Commerce event name. Use the ",(0,d.mdx)("inlineCode",{parentName:"td"},"bin/magento webhooks:list:all")," command to display a list of possible webhooks."),(0,d.mdx)("td",{parentName:"tr",align:null},"true")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"type")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies whether the webhook should be executed ",(0,d.mdx)("inlineCode",{parentName:"td"},"before")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"after")," the original action."),(0,d.mdx)("td",{parentName:"tr",align:null},"true")))),(0,d.mdx)("h2",{id:"hooks-element"},(0,d.mdx)("inlineCode",{parentName:"h2"},"hooks")," element"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"hooks")," element is required. It does not contain any attributes, but it must contain one or more ",(0,d.mdx)("inlineCode",{parentName:"p"},"batch")," elements."),(0,d.mdx)("h2",{id:"batch-element"},(0,d.mdx)("inlineCode",{parentName:"h2"},"batch")," element"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"batch")," element sets the order in which multiple webhooks are executed. All hooks within a batch are sent in parallel. Therefore, as you add hooks to a batch, keep in mind what task each hook will perform. For example, since the hooks are executed in parallel, you should not place a hook that relies on a response from another hook in the same batch."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"A unique name for the batch. This value must contain English alphanumeric characters and underscores (_) only."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"order")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"Sort order for batch execution."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")))),(0,d.mdx)("h2",{id:"hook-element"},(0,d.mdx)("inlineCode",{parentName:"h2"},"hook")," element"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"hook")," element defines the HTTP request to the remote server."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"A hook name that is unique within a batch."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"url")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The HTTP endpoint to send the request for processing."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"method")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The HTTP method, such as POST or PUT, that invokes the hook."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"priority")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The priority of the merging hook results in the batch."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"required")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies whether hook execution is required or optional. When set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"false")," (optional), if the hook fails to execute, the failure is logged and subsequent hooks continue to be processed. When ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),", a failure terminates the process."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"true")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"timeout")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"A hard timeout limit (milliseconds) for the request. Requests exceeding this timeout are aborted and logged. The default value of 0 indicates there is no timeout limit."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"softTimeout")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"A soft timeout limit (milliseconds) for the request. Requests exceeding this timeout are logged for debugging purposes."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"fallbackErrorMessage")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The error message to return when the hook fails."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates whether to skip a removed hook during the batch execution."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"false")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"ttl")),(0,d.mdx)("td",{parentName:"tr",align:null},"Int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The cache time-to-live (in seconds) for requests with the same URL, body, and headers. If this attribute is not specified, or if the value set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),", the response is not cached."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"headers")),(0,d.mdx)("td",{parentName:"tr",align:null},"Array"),(0,d.mdx)("td",{parentName:"tr",align:null},"A set of HTTP headers to send with the request."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"[]")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"fields")),(0,d.mdx)("td",{parentName:"tr",align:null},"Array"),(0,d.mdx)("td",{parentName:"tr",align:null},"A set of fields to include in the hook payload. If not set, the entire payload will be sent."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"[]")))),(0,d.mdx)("h3",{id:"headers-and-header-elements"},(0,d.mdx)("inlineCode",{parentName:"h3"},"headers")," and ",(0,d.mdx)("inlineCode",{parentName:"h3"},"header")," elements"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"headers")," element is optional and can contain one or more ",(0,d.mdx)("inlineCode",{parentName:"p"},"header")," elements. Each ",(0,d.mdx)("inlineCode",{parentName:"p"},"header")," definition creates an HTTP header to be sent in the remote server request."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The header name, in the same form as it will be sent. For example, ",(0,d.mdx)("inlineCode",{parentName:"td"},"Authorization"),". Specify the value, such as ",(0,d.mdx)("inlineCode",{parentName:"td"},"Bearer: <token>")," in the body of the ","<","header> element."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"resolver")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The resolver class that appends headers dynamically."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," to remove the header from the request."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"false")))),(0,d.mdx)("h2",{id:"fields-and-field-elements"},(0,d.mdx)("inlineCode",{parentName:"h2"},"fields")," and ",(0,d.mdx)("inlineCode",{parentName:"h2"},"field")," elements"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"fields")," element is optional and can contain one or more ",(0,d.mdx)("inlineCode",{parentName:"p"},"field")," elements. The ",(0,d.mdx)("inlineCode",{parentName:"p"},"fields")," element provides the ability to limit the payload of a webhook to only those fields defined in the individual ",(0,d.mdx)("inlineCode",{parentName:"p"},"field")," definitions. ",(0,d.mdx)("a",{parentName:"p",href:"hooks.md#define-the-hook-body"},"Define the hook body")," shows a fully-constructed hook."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the field to include in the transmitted webhook, such as ",(0,d.mdx)("inlineCode",{parentName:"td"},"product.sku"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"source")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the value in the default webhook. If not set, the value of ",(0,d.mdx)("inlineCode",{parentName:"td"},"name")," is used."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"converter")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"A class that transforms the value of a field, such as from integer to string."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," to remove the field from the payload."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"false")))),(0,d.mdx)("h2",{id:"rules-and-rule-elements"},(0,d.mdx)("inlineCode",{parentName:"h2"},"rules")," and ",(0,d.mdx)("inlineCode",{parentName:"h2"},"rule")," elements"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"rules")," element is optional and can contain one or more ",(0,d.mdx)("inlineCode",{parentName:"p"},"rule")," elements. Each ",(0,d.mdx)("inlineCode",{parentName:"p"},"rule")," element defines a conditional webhook, which configures the conditions that cause the webhook to be triggered when all conditions evaluate to ",(0,d.mdx)("inlineCode",{parentName:"p"},"true"),". ",(0,d.mdx)("a",{parentName:"p",href:"./conditional-webhooks.md"},"Create conditional webhooks")," provides example rules and fully describes the possible operator values."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"field")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The event field to be evaluated. For nested fields, use the dot-separated format, such as ",(0,d.mdx)("inlineCode",{parentName:"td"},"data.order.product.id"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"operator")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"A string that defines which comparison operator to use. Examples include ",(0,d.mdx)("inlineCode",{parentName:"td"},"equal"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"notEqual"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"regex"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"value")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"The value to be compared."),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not applicable")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates whether the rule is active. The default value of ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," indicates the rule is active."),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"false")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-webhooks-xml-schema-md-9396e02403854468db98.js.map