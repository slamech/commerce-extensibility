"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[7690],{97001:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return c},default:function(){return u}});var t=i(87462),a=i(45987),r=(i(35776),i(3905)),o=i(91515);const s=["components"],c={},d={_frontmatter:c},p=o.Z;function u(e){let{components:n}=e,i=(0,a.Z)(e,s);return(0,r.mdx)(p,(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"webhooks-signature-verification"},"Webhooks signature verification"),(0,r.mdx)("p",null,"Because webhook URLs are publicly accessible, it is important to ensure that the incoming requests are sent by Adobe Commerce and not by a third-party actor. You can enable signature verification to ensure your webhooks are secure."),(0,r.mdx)("h2",{id:"enable-signature-verification"},"Enable signature verification"),(0,r.mdx)("p",null,"Signature verifications are disabled by default, because you might have other ways for securing your webhooks. Authorization headers and IP whitelisting are common techniques."),(0,r.mdx)("p",null,"To enable signature verification, navigate to ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Webhooks")," and change the ",(0,r.mdx)("strong",{parentName:"p"},"Enabled")," to ",(0,r.mdx)("strong",{parentName:"p"},"Yes"),". Then click ",(0,r.mdx)("strong",{parentName:"p"},"Regenerate key pair")," to generate a new key pair."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/5530d/signature-configuration.webp 320w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/0c8fb/signature-configuration.webp 640w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/94b1e/signature-configuration.webp 1280w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/0b34d/signature-configuration.webp 1920w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/2ae4e/signature-configuration.webp 2146w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/dd4a7/signature-configuration.png 320w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/0f09e/signature-configuration.png 640w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/bbbf7/signature-configuration.png 1280w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/ac7a9/signature-configuration.png 1920w","/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/e52c7/signature-configuration.png 2146w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/0dddefcf00ac12b8ad7357080c3f91d7/bbbf7/signature-configuration.png",alt:"Webhooks configuration",title:"Webhooks configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"After enabling the signature verification, Commerce adds the ",(0,r.mdx)("inlineCode",{parentName:"p"},"x-adobe-commerce-webhook-signature")," header. The value of this header is a base64 encoded HMAC SHA256 signature of the request body based on the private key."),(0,r.mdx)("h2",{id:"verify-the-signature"},"Verify the signature"),(0,r.mdx)("p",null,"To verify the signature you must decode value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"x-adobe-commerce-webhook-signature")," header and compare it with the HMAC SHA256 signature of the base64 encoded request body using the public key from the webhooks configuration."),(0,r.mdx)("p",null,"Here is an example of the verification method of the signature using node.js:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const fs = require(\"fs\");\nconst crypto = require(\"crypto\");\n\nmodule.exports = {\n    validate: function (req){\n        const publicKey = fs.readFileSync(__dirname + '/publickey', 'utf-8');\n\n        if (!req.headers['x-adobe-commerce-webhook-signature']) {\n            return false;\n        }\n\n        const signature = req.headers['x-adobe-commerce-webhook-signature'];\n        const verifier = crypto.createVerify('SHA256');\n\n        const base64Payload = Buffer.from(JSON.stringify(req.body)).toString('base64');\n        verifier.update(base64Payload);\n\n        return verifier.verify(publicKey, signature, 'base64');\n    }\n}\n")),(0,r.mdx)("p",null,"The following example shows how to use the signature verification in the webhook action:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const signatureValidator = require('../signatureValidator');\n\napp.post('/validate-signature', function (req, res) {\n    console.log(JSON.stringify(req.body, null, 4));\n    console.log(JSON.stringify(req.headers, null, 4));\n\n    let operations = [];\n    if (signatureValidator.validate(req)) {\n        // Perform the webhook action\n        console.log(\"The signature is valid.\");\n        operations.push({\n            op: 'success'\n        });\n    } else {\n        console.log(\"The signature is invalid.\");\n        operations.push({\n            op: 'exception',\n        });\n    }\n    console.log(operations);\n    res.json(operations);\n});\n")),(0,r.mdx)("p",null,"Keep in mind that when the key pair is regenerated, the old public key will be invalid. You must subsequently update the public key in the signature verification code."),(0,r.mdx)("h2",{id:"verify-the-signature-in-the-app-builder-action"},"Verify the signature in the App Builder action"),(0,r.mdx)("p",null,"To verify the signature in the App Builder action, set the ",(0,r.mdx)("inlineCode",{parentName:"p"},"raw-http")," annotation in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," file. When the ",(0,r.mdx)("inlineCode",{parentName:"p"},"raw-http")," annotation is configured, the HTTP request query and body parameters are passed to the action as reserved properties."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"    inputs:\n      PUBLIC_KEY: $PUBLIC_KEY\n    annotations:\n      raw-http: true\n")),(0,r.mdx)("p",null,"The following code example below shows how the signature can be verified in the App Builder action:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core } = require('@adobe/aio-sdk')\nconst { errorResponse } = require('../utils')\nconst crypto = require('crypto');\n\nasync function main (params) {\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    const signature = params.__ow_headers['x-adobe-commerce-webhook-signature'] || '';\n    const verifier = crypto.createVerify('SHA256');\n    verifier.update(params.__ow_body);\n\n    const isSignatureValid = verifier.verify(params.PUBLIC_KEY, signature, 'base64');\n\n    let operations = [];\n    if (isSignatureValid) {\n      logger.info('The signature is valid.');\n      // Here will be performed real action logic\n      operations.push({\n        op: 'success'\n      });\n    } else {\n      logger.info('The signature is invalid.');\n      operations.push({\n        op: 'exception',\n        message: 'The signature is invalid.'\n      });\n    }\n\n    return {\n      statusCode: 200,\n      body: JSON.stringify(operations)\n    }\n  } catch (error) {\n    logger.error(error)\n\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-webhooks-signature-verification-md-f63e25a27f3a50a7ce44.js.map