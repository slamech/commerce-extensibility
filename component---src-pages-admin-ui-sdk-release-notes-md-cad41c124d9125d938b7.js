"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[9293],{67621:function(e,n,d){d.r(n),d.d(n,{_frontmatter:function(){return o},default:function(){return u}});var a=d(87462),i=d(63366),t=(d(15007),d(64983)),m=d(91515),r=["components"],o={},s={_frontmatter:o},l=m.Z;function u(e){var n=e.components,d=(0,i.Z)(e,r);return(0,t.mdx)(l,(0,a.Z)({},s,d,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"adobe-commerce-admin-ui-sdk-release-notes"},"Adobe Commerce Admin UI SDK release notes"),(0,t.mdx)("h2",{id:"version-121"},"Version 1.2.1"),(0,t.mdx)("h3",{id:"release-date"},"Release date"),(0,t.mdx)("p",null,"October 31, 2023"),(0,t.mdx)("h3",{id:"enhancements"},"Enhancements"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added the ",(0,t.mdx)("strong",{parentName:"p"},"Mock AdobeAdminIms Module")," field to the Admin UI SDK configuration page in the Admin. This field determines whether to send mock or real Adobe IMS credentials. ")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added the ",(0,t.mdx)("strong",{parentName:"p"},"Admin UI SDK")," (",(0,t.mdx)("inlineCode",{parentName:"p"},"Magento_CommerceBackendUix::admin"),") resource. Administrators who are not assigned this resource will not have access the Admin UI SDK configuration page. ")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Custom date columns in the order grid now use ISO 8601 formatting. Previously, these values were simple timestamps. "))),(0,t.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Menus display correctly when the Admin UI SDK is enabled but no menu registrations are found. ")),(0,t.mdx)("h2",{id:"version-120"},"Version 1.2.0"),(0,t.mdx)("h3",{id:"release-date-1"},"Release date"),(0,t.mdx)("p",null,"October 18, 2023"),(0,t.mdx)("h3",{id:"enhancements-1"},"Enhancements"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Created the ",(0,t.mdx)("a",{parentName:"p",href:"extension-points/order.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"order")," extension point"),", which adds columns to the order grid. ")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added the ",(0,t.mdx)("a",{parentName:"p",href:"configuration.md#clean-the-admin-ui-sdk-cache"},(0,t.mdx)("inlineCode",{parentName:"a"},"admin_ui_sdk")," cache type"),". When enabled, Commerce caches customizations to the Admin. ")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added the ",(0,t.mdx)("inlineCode",{parentName:"p"},"isSection")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"sortOrder")," parameters to the ",(0,t.mdx)("a",{parentName:"p",href:"extension-points/menu.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"menu")," extension point"),". The ",(0,t.mdx)("inlineCode",{parentName:"p"},"isSection")," parameter allows you to define a menu section, while ",(0,t.mdx)("inlineCode",{parentName:"p"},"sortOrder")," defines the placement of a menu item. ")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added the ",(0,t.mdx)("inlineCode",{parentName:"p"},"productSelectLimit")," parameter for mass actions in the ",(0,t.mdx)("a",{parentName:"p",href:"extension-points/product.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"product")," extension point"),". "))),(0,t.mdx)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Minimized the number of calls needed to build a menu. ")),(0,t.mdx)("h2",{id:"version-112"},"Version 1.1.2"),(0,t.mdx)("h3",{id:"release-date-2"},"Release date"),(0,t.mdx)("p",null,"October 6, 2023"),(0,t.mdx)("h3",{id:"enhancements-2"},"Enhancements"),(0,t.mdx)("p",null,"Fixed cross-site scripting (XSS) and password hash security vulnerabilities."),(0,t.mdx)("h2",{id:"version-111"},"Version 1.1.1"),(0,t.mdx)("h3",{id:"release-date-3"},"Release date"),(0,t.mdx)("p",null,"September 12, 2023"),(0,t.mdx)("h3",{id:"bug-fixes-2"},"Bug fixes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed an issue with a missing tab ID that occurred due to a dependency on a non-mandatory module.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Mass actions are now correctly cleared when the last app is removed."))),(0,t.mdx)("h2",{id:"version-110"},"Version 1.1.0"),(0,t.mdx)("h3",{id:"release-date-4"},"Release date"),(0,t.mdx)("p",null,"August 25, 2023"),(0,t.mdx)("h3",{id:"enhancements-3"},"Enhancements"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"You can now customize the ",(0,t.mdx)("a",{parentName:"li",href:"extension-points/product.md"},"mass actions")," on the Product grid."),(0,t.mdx)("li",{parentName:"ul"},"The API for registering a ",(0,t.mdx)("a",{parentName:"li",href:"extension-points/menu.md"},"menu")," has changed."),(0,t.mdx)("li",{parentName:"ul"},"Updated the Admin ",(0,t.mdx)("a",{parentName:"li",href:"configuration.md"},"configuration screen")," to give the option of enabling the Admin UI SDK.")),(0,t.mdx)("h3",{id:"bug-fixes-3"},"Bug fixes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Menus are now rendered correctly when no registrations are found.")),(0,t.mdx)("h2",{id:"known-issues"},"Known issues"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"You cannot deploy an app that uses the Admin UI SDK in a staging environment. Instead, you must deploy it in a production environment. See ",(0,t.mdx)("a",{parentName:"li",href:"publish.md"},"Prepare your app for production")," for details about this workaround.")),(0,t.mdx)("h2",{id:"version-100"},"Version 1.0.0"),(0,t.mdx)("h3",{id:"release-date-5"},"Release date"),(0,t.mdx)("p",null,"June 13, 2023"),(0,t.mdx)("h3",{id:"compatibility"},"Compatibility"),(0,t.mdx)("p",null,"Adobe Commerce for Cloud and on-premises"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"2.4.5 and higher")),(0,t.mdx)("h3",{id:"known-issues-1"},"Known issues"),(0,t.mdx)("p",null,"None"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-ui-sdk-release-notes-md-cad41c124d9125d938b7.js.map