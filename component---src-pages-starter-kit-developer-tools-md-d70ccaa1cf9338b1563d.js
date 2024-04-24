"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[3376],{32875:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return c}});var a=t(87462),o=t(45987),i=(t(35776),t(3905)),r=t(91515),d=t(96497);const m=["components"],s={},l={_frontmatter:s},p=r.Z;function c(e){let{components:n}=e,t=(0,o.Z)(e,m);return(0,i.mdx)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(d.Z,{mdxType:"BetaNote"}),(0,i.mdx)("h1",{id:"developer-tools"},"Developer tools"),(0,i.mdx)("p",null,"The following sections describe development tools and processes available in the Starter Kit."),(0,i.mdx)("h2",{id:"parameters-as-environment-variables"},"Parameters as environment variables"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionparams")," object allows you to pass values from your environment variables to an action. Add the parameter to your ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"YOUR_PARAM=your_value")),(0,i.mdx)("p",null,"To pass the parameters to the action, add the parameter as an ",(0,i.mdx)("inlineCode",{parentName:"p"},"input")," under the corresponding action in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions/{entity}/../actions.config.yaml")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"{action name}:\n  function: {action name}/index.js\n  web: 'no'\n  runtime: nodejs:16\n  inputs:\n    LOG_LEVEL: debug\n    YOUR_PARAM: $YOUR_PARAM\n  annotations:\n    require-adobe-auth: true\n    final: true\n")),(0,i.mdx)("p",null,"This parameter is now accessible in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"params")," object."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"async function main(params) {\n  params.YOUR_PARAM\n}\n")),(0,i.mdx)("h2",{id:"logging"},"Logging"),(0,i.mdx)("p",null,"Application logs allow developers to debug an application in development as well as monitor it in production. By default, the Starter Kit uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"Adobe I/O SDK")," to store logs in Adobe I/O Runtime. You can find additional details in ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/application_logging/"},"Managing Application Logs"),"."),(0,i.mdx)("p",null,"Alternatively, the application logs can be forwarded to a customer-owned log management solution. Use ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/application_logging/#when-to-use-log-forwarding"},"When to use Log Forwarding")," to inform your decision when choosing to store logs in Adobe I/O Runtime or forward them to a log management platform."),(0,i.mdx)("p",null,"If you are using Adobe Commerce on Cloud Infrastructure, you have access to a New Relic instance. ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/application_logging/new_relic/"},"Forwarding Logs to New Relic")," page describes the process necessary to configure Starter Kit to forward logs to New Relic."),(0,i.mdx)("h3",{id:"hiding-secrets-in-logs"},"Hiding secrets in logs"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"stringParameters")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"./actions/utils.js")," file can help you prevent exposing secrets when logging the parameters received by a runtime action. It replaces the authorization header value with ",(0,i.mdx)("inlineCode",{parentName:"p"},"<hidden>")," and any parameters containing a term present in the hidden array with ",(0,i.mdx)("inlineCode",{parentName:"p"},"<hidden>"),"."),(0,i.mdx)("p",null,"By default, the following parameters are hidden:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const hidden = [\n  'secret',\n  'token'\n]\n")),(0,i.mdx)("p",null,"Adjust these values to hide any secrets you want to pass as ",(0,i.mdx)("inlineCode",{parentName:"p"},"params")," to your runtime actions."),(0,i.mdx)("h2",{id:"testing"},"Testing"),(0,i.mdx)("p",null,"The Starter Kit provides unit tests for most of the predefined runtime actions. These tests are located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"./test/actions")," folder."),(0,i.mdx)("p",null,"Additionally, unit tests for the onboarding script can be found in the ",(0,i.mdx)("inlineCode",{parentName:"p"},".test/onboarding")," folder."),(0,i.mdx)("p",null,"For more details about unit testing, refer to ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/resources/barcode-reader/test/"},"Testing a Serverless Action"),"."),(0,i.mdx)("h2",{id:"create-or-modify-an-event"},"Create or modify an event"),(0,i.mdx)("p",null,"The Starter Kit comes with predefined events for each entity. If you need to add a new event to an entity or modify an existing one, use the following steps."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add the event to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"./onboarding/config/events.json")," file under the corresponding entity. For example, if the event is related to a customer and is coming from commerce, you should add it under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"customer")," entity in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"commerce")," section. To modify an existing event, edit the event in the corresponding section of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"./onboarding/config/events.json")," file."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'    "customer": {\n      "commerce": [\n        "com.adobe.commerce.observer.customer_save_commit_after",\n        "com.adobe.commerce.observer.customer_delete_commit_after",\n        "com.adobe.commerce.observer.customer_group_save_commit_after",\n        "com.adobe.commerce.observer.customer_group_delete_commit_after",\n        "com.adobe.commerce.THE_NEW_CUSTOMER_EVENT"\n      ],\n    ...\n    }\n'))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the onboarding script:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run onboard\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"action/{entity}/{flow}")," directory, add or modify the action that will handle this event, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions/customer/commerce/NEW_OPERATION/index.js"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add the newly created operation action to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"action/{entity}/{flow}/actions.config.yaml")," config file or edit the existing action flow."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"NEW_OPERATION:\n  function: NEW_OPERATION/index.js\n  web: 'no'\n  runtime: nodejs:16\n  inputs:\n    LOG_LEVEL: debug\n  annotations:\n    require-adobe-auth: true\n    final: true\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"case")," to the switch statement in the consumer of the entity flow ",(0,i.mdx)("inlineCode",{parentName:"p"},"action/{entity}/{flow}")," or edit the existing ",(0,i.mdx)("inlineCode",{parentName:"p"},"case"),":"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"  case 'com.adobe.commerce.observer.NEW_CUSTOMER_EVENT': {\n    logger.info('Invoking NEW OPERATION')\n    const res = await openwhiskClient.invokeAction('customer-commerce/NEW_OPERATION', params.data.value)\n    response = res?.response?.result?.body\n    statusCode = res?.response?.result?.statusCode\n    break\n  }\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Deploy the changes:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"`aio app deploy`\n")))),(0,i.mdx)("p",null,"After completing this process, you can consume the new or updated event."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-starter-kit-developer-tools-md-d70ccaa1cf9338b1563d.js.map