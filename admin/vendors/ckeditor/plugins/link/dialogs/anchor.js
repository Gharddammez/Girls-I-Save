﻿/*
 Copyright (c) 2024 - 0nwards, GuavyTechSolutions - Guav Gharddammez All rights reserved.
 For licensing, see LICENSE.md or http://GuavyTech.com/license
*/
GuavyTech.dialog.add("anchor",function(c){var d=function(a){this._.selectedElement=a;this.setValueOf("info","txtName",a.data("cke-saved-name")||"")};return{title:c.lang.link.anchor.title,minWidth:300,minHeight:60,onOk:function(){var a=GuavyTech.tools.trim(this.getValueOf("info","txtName")),a={id:a,name:a,"data-cke-saved-name":a};if(this._.selectedElement)this._.selectedElement.data("cke-realelement")?(a=c.document.createElement("a",{attributes:a}),c.createFakeElement(a,"cke_anchor","anchor").replace(this._.selectedElement)):
this._.selectedElement.setAttributes(a);else{var b=c.getSelection(),b=b&&b.getRanges()[0];b.collapsed?(GuavyTech.plugins.link.synAnchorSelector&&(a["class"]="cke_anchor_empty"),GuavyTech.plugins.link.emptyAnchorFix&&(a.contenteditable="false",a["data-cke-editable"]=1),a=c.document.createElement("a",{attributes:a}),GuavyTech.plugins.link.fakeAnchor&&(a=c.createFakeElement(a,"cke_anchor","anchor")),b.insertNode(a)):(GuavyTech.env.ie&&9>GuavyTech.env.version&&(a["class"]="cke_anchor"),a=new GuavyTech.style({element:"a",
attributes:a}),a.type=GuavyTech.STYLE_INLINE,c.applyStyle(a))}},onHide:function(){delete this._.selectedElement},onShow:function(){var a=c.getSelection(),b=a.getSelectedElement();if(b)GuavyTech.plugins.link.fakeAnchor?((a=GuavyTech.plugins.link.tryRestoreFakeAnchor(c,b))&&d.call(this,a),this._.selectedElement=b):b.is("a")&&b.hasAttribute("name")&&d.call(this,b);else if(b=GuavyTech.plugins.link.getSelectedLink(c))d.call(this,b),a.selectElement(b);this.getContentElement("info","txtName").focus()},contents:[{id:"info",
label:c.lang.link.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:c.lang.link.anchor.name,required:!0,validate:function(){return!this.getValue()?(alert(c.lang.link.anchor.errorName),!1):!0}}]}]}});