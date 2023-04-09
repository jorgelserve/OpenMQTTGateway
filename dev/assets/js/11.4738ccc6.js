(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_Arduino_Addon_IR.d037a5e7.png"},358:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP8266_Addon_IR.0b60a2b2.png"},359:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP32_Addon_IR.0be79a89.png"},415:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ir-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ir-gateway"}},[t._v("#")]),t._v(" IR gateway")]),t._v(" "),e("h2",{attrs:{id:"compatible-parts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatible-parts"}},[t._v("#")]),t._v(" Compatible parts")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Module")]),t._v(" "),e("th",[t._v("Purpose")]),t._v(" "),e("th",[t._v("Where to Buy")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("IR diode")]),t._v(" "),e("td",[t._v("Emitting")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("IR receiver")]),t._v(" "),e("td",[t._v("Receiving")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("transistor 2N2222")]),t._v(" "),e("td",[t._v("Amplify uC signal for the IR diode")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("330 ohms resistor")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("220 ohms resistor")]),t._v(" "),e("td",[t._v("limit current to LED")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("The IR setup can work with bc547 and a 4x3 LED-Matrix.")]),t._v(" "),e("h2",{attrs:{id:"pinout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Board")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Receiver Pin")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Emitter Pin")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Arduino UNO")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D9")])]),t._v(" "),e("tr",[e("td",[t._v("ESP8266")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D0")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("27/"),e("strong",[t._v("26")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("14")])])])]),t._v(" "),e("p",[t._v("Connect the Emitter and Receiver to a 5V supply source, and the ground of your supply source to the ground of your board.")]),t._v(" "),e("h2",{attrs:{id:"arduino-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arduino-hardware-setup"}},[t._v("#")]),t._v(" Arduino Hardware setup")]),t._v(" "),e("p",[e("img",{attrs:{src:r(357),alt:"IR"}})]),t._v(" "),e("h2",{attrs:{id:"esp8266-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-hardware-setup"}},[t._v("#")]),t._v(" ESP8266 Hardware setup")]),t._v(" "),e("p",[e("img",{attrs:{src:r(358),alt:"IR"}})]),t._v(" "),e("h2",{attrs:{id:"esp32-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp32-hardware-setup"}},[t._v("#")]),t._v(" ESP32 Hardware setup")]),t._v(" "),e("p",[e("img",{attrs:{src:r(359),alt:"IR"}})]),t._v(" "),e("h2",{attrs:{id:"credits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[t._v("#")]),t._v(" Credits")]),t._v(" "),e("p",[t._v("This gateway exists thanks to the work done on "),e("a",{attrs:{href:"https://github.com/z3t0/Arduino-IRremote",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRRemote"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/crankyoldgit/IRremoteESP8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRremoteESP8266"),e("OutboundLink")],1),t._v(" libraries. Thanks for the works of contributors and especially "),e("a",{attrs:{href:"https://github.com/crankyoldgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@crankyoldgit"),e("OutboundLink")],1),t._v(" for its active contributions.")])])}),[],!1,null,null,null);e.default=s.exports}}]);