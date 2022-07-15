(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{439:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial1.b8169d69.jpg"},440:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial2.9629e5a0.jpg"},441:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_Pilight_Digoo-DG-R8S.8a0f9d60.png"},486:function(e,t,a){"use strict";a.r(t);var s=a(45),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rf-gateways-433mhz-315mhz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rf-gateways-433mhz-315mhz"}},[e._v("#")]),e._v(" RF gateways  (433mhz/315mhz)")]),e._v(" "),s("h2",{attrs:{id:"changing-active-receiver-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-active-receiver-modules"}},[e._v("#")]),e._v(" Changing Active Receiver Modules")]),e._v(" "),s("p",[e._v("With version 0.9.7 the ability to switch active signal receiver and decoder is supported between RF, RF2, RTL_433 and Pilight receiver modules.")]),e._v(" "),s("h3",{attrs:{id:"switching-active-receiver-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switching-active-receiver-module"}},[e._v("#")]),e._v(" Switching Active Receiver Module")]),e._v(" "),s("p",[e._v("Switching of the active receiver module is available between the RF, RF2, RTL_433 and Pilight Gateway modules, allowing for changing of signal decoders without redeploying the openMQTTGateway package.  Sending a JSON message to the command topic of the desired receiver will change the active receiver module.")]),e._v(" "),s("p",[e._v("To enable the RF Gateway module send a json message to the RF Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"active":true}\'')])]),e._v(" "),s("p",[e._v("To enable the PiLight Gateway module send a json message to the PiLight Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"active":true}\'')])]),e._v(" "),s("p",[e._v("To enable the RF2 Gateway module send a json message to the RF2 Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoRF2" -m \'{"active":true}\'')])]),e._v(" "),s("p",[e._v("To enable the RTL_433 Gateway module send a json message to the RTL_433 Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoRTL_433" -m \'{"active":true}\'')])]),e._v(" "),s("h3",{attrs:{id:"status-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-messages"}},[e._v("#")]),e._v(" Status Messages")]),e._v(" "),s("p",[e._v("The openMQTTGateway status message contains a key "),s("code",[e._v("actRec")]),e._v(" which is the current active receiver module.")]),e._v(" "),s("p",[e._v("1 - PiLight\n2 - RF\n3 - RTL_433\n4 - RF2")]),e._v(" "),s("h2",{attrs:{id:"rcswitch-based-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rcswitch-based-gateway"}},[e._v("#")]),e._v(" RCSwitch based gateway")]),e._v(" "),s("h3",{attrs:{id:"receiving-data-from-rf-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),s("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),s("p",[s("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),s("p",[e._v("Generate your RF signals by pressing a remote button or other and you should see :")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/433toMQTT {"value":1315156,"protocol":1,"length":24,"delay":317}')])]),e._v(" "),s("h3",{attrs:{id:"disabling-transmit-function-to-safe-a-pin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disabling-transmit-function-to-safe-a-pin"}},[e._v("#")]),e._v(" Disabling Transmit function to safe a PIN")]),e._v(" "),s("p",[e._v("To disable transmit functions to allow the use of another pin, add the following to the config_rf.h file :")]),e._v(" "),s("p",[s("code",[e._v("#define RF_DISABLE_TRANSMIT")])]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156}\'')])]),e._v(" "),s("p",[e._v("This command will send by RF the code 1315156 and use the default parameters (protocol 1, delay 350)")]),e._v(" "),s("p",[e._v("Arduino IDE serial data received when publishing data by MQTT")]),e._v(" "),s("p",[s("img",{attrs:{src:a(439),alt:""}})]),e._v(" "),s("p",[e._v('We see that the Arduino receive the value 1315156 on the MQTT subject "MQTTto433" and send the data by RF')]),e._v(" "),s("p",[e._v("Arduino IDE serial data received when receiving data by 433Mhz")]),e._v(" "),s("p",[s("img",{attrs:{src:a(440),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),s("p",[e._v('RF sending support three advanced parameters; bits length, RF protocol and RF pulselength\nif you want to use a different RCswitch protocol put inside your payload the protocol number 2, "protocol":2.')]),e._v(" "),s("p",[e._v('if you want to use a pulselength 315 put inside your topic "delay":315')]),e._v(" "),s("p",[e._v('if you want to use a bits number different than 24 put inside your topic "length":24 for example')]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156,"protocol":2,"length":24,"delay":315}\'')]),e._v("\nwill make RCSwitch use the protocol 2 with a pulselength of 315ms and a bits number of 24")]),e._v(" "),s("h3",{attrs:{id:"repeat-the-rf-signal-openmqttgateway-receive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-openmqttgateway-receive"}},[e._v("#")]),e._v(" Repeat the RF signal OpenMQTTGateway receive")]),e._v(" "),s("p",[e._v("So as to repeat the RF signal received by the gateway once set the following parameter to true in config_RF.h")]),e._v(" "),s("p",[s("code",[e._v("#define repeatRFwMQTT true")])]),e._v(" "),s("h3",{attrs:{id:"repeat-the-rf-signal-several-times"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-several-times"}},[e._v("#")]),e._v(" Repeat the RF signal several times")]),e._v(" "),s("p",[e._v('You can add a "repeat" key/value to the MQTTto433 JSON message to override the default number of repeats.')]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"value":1315156,"protocol":1,"length":24,"delay":317, "repeat":10}')])]),e._v(" "),s("h3",{attrs:{id:"set-transmit-and-receive-frequency-of-cc1101-transceiver-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-transmit-and-receive-frequency-of-cc1101-transceiver-module"}},[e._v("#")]),e._v(" Set Transmit and Receive Frequency of CC1101 Transceiver Module")]),e._v(" "),s("p",[e._v("Default transmit frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by including the frequency in the transmit message.  Parameter is "),s("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board.")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"value":1150,"protocol":6,"length":12,"delay":450,"repeat":8,"mhz":303.732}')])]),e._v(" "),s("p",[e._v("Default receive frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by sending a message with the frequency.  Parameter is "),s("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"mhz":315.026}')])]),e._v(" "),s("p",[e._v("Messages received will include the frequency, and when transmitting on a different frequency the module return to the receive frequency afterwards.  ie transmit messages on 303.732 Mhz then receive messages on 433.92 Mhz")]),e._v(" "),s("p",[s("code",[e._v('{"value":4534142,"protocol":6,"length":26,"delay":356,"mhz":315.026}')])]),e._v(" "),s("h2",{attrs:{id:"pilight-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pilight-gateway"}},[e._v("#")]),e._v(" Pilight gateway")]),e._v(" "),s("h3",{attrs:{id:"receiving-data-from-rf-signal-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-2"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),s("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),s("p",[s("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),s("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),s("p",[s("img",{attrs:{src:a(441),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"limit-protocols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limit-protocols"}},[e._v("#")]),e._v(" Limit Protocols")]),e._v(" "),s("p",[e._v("It is possible to limit the protocols that Pilight will respond to, this can help reduce noise from unwanted devices and in some cases disable conflicting protocols.")]),e._v(" "),s("h4",{attrs:{id:"available-protocols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-protocols"}},[e._v("#")]),e._v(" Available protocols")]),e._v(" "),s("p",[e._v("To list the available protocols on the Serial -")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"available":true}\'')])]),e._v(" "),s("h4",{attrs:{id:"limit-protocols-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limit-protocols-2"}},[e._v("#")]),e._v(" Limit protocols")]),e._v(" "),s("p",[e._v("To limit the protocols, send a JSON array of protocols as below -")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols -m \'{"limit": ["array", "of", "protocols"]}\'')])]),e._v(" "),s("p",[e._v("eg: "),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"limit":["tfa", "ev1527"}\'')])]),e._v(" "),s("h4",{attrs:{id:"reset-protocols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset-protocols"}},[e._v("#")]),e._v(" Reset protocols")]),e._v(" "),s("p",[e._v("To reset and listen to all protocols -\n"),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols -m \'{"reset": true}')]),e._v("'")]),e._v(" "),s("h4",{attrs:{id:"enabled-protocols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabled-protocols"}},[e._v("#")]),e._v(" Enabled protocols")]),e._v(" "),s("p",[e._v("To list the enabled protocols on the Serial -")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"enabled":true}\'')])]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-to-transmit-a-rf-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-transmit-a-rf-signal"}},[e._v("#")]),e._v(" Send data by MQTT to transmit a RF signal")]),e._v(" "),s("h4",{attrs:{id:"using-a-known-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-known-protocol"}},[e._v("#")]),e._v(" Using a known protocol")]),e._v(" "),s("p",[s("strong",[e._v("ON")]),e._v(" "),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"on\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),s("p",[s("strong",[e._v("OFF")]),e._v(" "),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"off\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),s("p",[e._v("These commands will transmit by RF the signals to actuate an elro_400 switch.")]),e._v(" "),s("h4",{attrs:{id:"using-a-raw-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-raw-signal"}},[e._v("#")]),e._v(" Using a raw signal")]),e._v(" "),s("p",[e._v('You can transmit raw signal data by using the "raw" protocol. This uses the Pilight pulse train string format. One such example string, representing a transmission for Nexus protocol weather stations, looks like this: '),s("code",[e._v("c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@")]),e._v(". This string represents pulses and gaps directly.")]),e._v(" "),s("p",[e._v("Each number in the list after "),s("code",[e._v("p:")]),e._v(" that ends with "),s("code",[e._v(";")]),e._v(" stands for "),s("strong",[e._v("p")]),e._v("ulse and gap lengths in microseconds (µs). In this example, we have a list containing lengths of 500µs, 1000µs, 2000µs, and 4000µs.")]),e._v(" "),s("p",[e._v("Each number after "),s("code",[e._v("c:")]),e._v(" and ended by "),s("code",[e._v(";")]),e._v(" represents a "),s("strong",[e._v("c")]),e._v("ode that references the "),s("code",[e._v("p:")]),e._v(" list by index. In this example, the first 4 numbers after "),s("code",[e._v("c:")]),e._v(" are 0, 3, 0, and 2, which reference "),s("code",[e._v("p:")]),e._v("[0] = 500, "),s("code",[e._v("p:")]),e._v("[3] = 4000, "),s("code",[e._v("p:")]),e._v("[0] = 500, and "),s("code",[e._v("p:")]),e._v("[2] = 2000, respectively. In the language of digital radio transceiving, the most basic unit is usually a pulse and gap pair; in other words, 0s and 1s are represented by a pulse followed by a gap (lack of pulse) and the time lengths of these pulses and gaps. Different protocols have different pulse lengths and gap lengths representing 0, and a different one representing 1. Because of this pulse-gap nature, the codes in "),s("code",[e._v("c:")]),e._v(" must be taken as pairs; the first number in a pair represents the length of the pulse, and the second number the subsequent gap. In this example, the first pair, 03, represents a pulse of 500µs followed by a gap of 4000µs. The next pair, 02, represents a pulse of 500µs followed by a gap of 2000µs.")]),e._v(" "),s("p",[e._v("The number after "),s("code",[e._v("r:")]),e._v(" represents how many times the message in the string is to be "),s("strong",[e._v("r")]),e._v("epeated. The "),s("code",[e._v("r:")]),e._v(" block is optional. The default number of repeats if "),s("code",[e._v("r:")]),e._v(" is not specified is 10. Greater than about 100 repeats will cause a crash due to memory usage. If this example were written without specifying repeats, it would look like this: "),s("code",[e._v('{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000@"}')])]),e._v(" "),s("p",[e._v("The entire string must end in a "),s("code",[e._v("@")]),e._v(". Each block must end in a "),s("code",[e._v(";")]),e._v(", but if it is the last block in the string, the "),s("code",[e._v("@")]),e._v(" replaces the "),s("code",[e._v(";")]),e._v(". Since the "),s("code",[e._v("r:")]),e._v(" block is optional, this last block could be either "),s("code",[e._v("p:")]),e._v(" or "),s("code",[e._v("r:")]),e._v(".")]),e._v(" "),s("p",[e._v("The JSON for the MQTT message to "),s("code",[e._v("home/OpenMQTTGateway/commands/MQTTtoPilight")]),e._v(' should specify the pulse train string as the value for the "raw" key: '),s("code",[e._v('{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@"}')]),e._v(".")]),e._v(" "),s("p",[e._v("e.g. "),s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@"}\'')])]),e._v(" "),s("h2",{attrs:{id:"rf-with-sonoff-rf-bridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rf-with-sonoff-rf-bridge"}},[e._v("#")]),e._v(" RF with SONOFF RF BRIDGE")]),e._v(" "),s("h3",{attrs:{id:"receiving-data-from-rf-signal-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-3"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),s("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),s("p",[s("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),s("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The first parameter is the raw value extracted from the RF module of the Sonoff bridge. The data are in hexadecimal and correspond to the details below:\nhttps://www.itead.cc/wiki/images/5/5e/RF_Universal_Transeceive_Module_Serial_Protocol_v1.0.pdf\nOpenMQTTGateway process the raw value to extract the other decimal values that can be reused to reproduce a signal (raw value can also be reused).")]),e._v(" "),s("p",[e._v("NOTE: currently the device doesn't receive correct values from Switches remote control")]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSRFB" -m \'{"value":1315156}\'')])]),e._v(" "),s("p",[e._v("This command will send by RF the code 1315156 and use the default parameters:\nRepeat = 1\nLow time= 320\nHigh time= 900\nSYNC = 9500")]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters-2"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),s("p",[e._v('RF bridge sending support four advanced parameters; Repeat, Low time, High time & Sync\nif you want to repeat your signal sending put into your json payload "repeat":2, 2 means 2 repetitions of signal')]),e._v(" "),s("p",[e._v('if you want to use a low time of 315 put inside your json payload "Tlow":315')]),e._v(" "),s("p",[e._v('if you want to use a high time of 845 put inside your json payload "Thigh":845')]),e._v(" "),s("p",[e._v('if you want to use a sync time of 9123 put inside your json payload "Tsyn":9123')]),e._v(" "),s("p",[e._v("Example:\n"),s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Tlow_315/Thigh_845/Tsyn_9123 -m \'{"value":"33151562","delay":"9123","val_Thigh":"845","val_Tlow":"315"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of listed parameters 315, 845, 9123...")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Raw -m \'{"raw":"267A013603B6140551"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of advanced parameters defined in the raw string")]),e._v(" "),s("h2",{attrs:{id:"rf2-gateway-kaku"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rf2-gateway-kaku"}},[e._v("#")]),e._v(" RF2 gateway KAKU")]),e._v(" "),s("p",[e._v("RF2 gateway enables to send command to RF devices with the KAKU protocol. DIO chacon devices are an example.\nIt uses the same pinout as the RF gateway and both gateways can be used on the same setup.")]),e._v(" "),s("p",[e._v("Receiving RF codes with the KAKU protocol is not compatible with ZgatewayRF , so as to get the code of your remotes you should comment ZgatewayRF in User_config.h.\nTransmitting can be done with both ZgatewayRF and ZgatewayRF2")]),e._v(" "),s("h3",{attrs:{id:"receiving-data-from-kaku-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-kaku-signal"}},[e._v("#")]),e._v(" Receiving data from KAKU signal")]),e._v(" "),s("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),s("p",[s("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),s("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/RF2toMQTT {"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}')])]),e._v(" "),s("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on KAKU signal")]),e._v(" "),s("p",[e._v("Once you get the infos publish the parameters with mqtt like that for off:")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}"')])]),e._v(" "),s("p",[e._v("for on:")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"adress":8233228,"switchType":1}"')])]),e._v(" "),s("h2",{attrs:{id:"rtl-433-device-decoders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtl-433-device-decoders"}},[e._v("#")]),e._v(" rtl_433 device decoders")]),e._v(" "),s("p",[e._v("This feature is only available on a ESP32 based device with a CC1101 transceiver connected due to the resource requirements of the rtl_433 device decoders.  At the present time only Pulse Position Modulation (OOK_PPM) and Pulse Width Modulation (OOK_PWM) based decoders are available.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Registering protocol [2] "Acurite 609TXC Temperature and Humidity Sensor"\nRegistering protocol [3] "Acurite 592TXR Temp/Humidity, 5n1 Weather Station, 6045 Lightning, 3N1, Atlas"\nRegistering protocol [4] "Acurite 986 Refrigerator / Freezer Thermometer"\nRegistering protocol [5] "Acurite 606TX Temperature Sensor"\nRegistering protocol [6] "Acurite 00275rm,00276rm Temp/Humidity with optional probe"\nRegistering protocol [7] "Acurite 590TX Temperature with optional Humidity"\nRegistering protocol [8] "Akhan 100F14 remote keyless entry"\nRegistering protocol [9] "AlectoV1 Weather Sensor (Alecto WS3500 WS4500 Ventus W155/W044 Oregon)"\nRegistering protocol [10] "Ambient Weather TX-8300 Temperature/Humidity Sensor"\nRegistering protocol [11] "Auriol AFW2A1 temperature/humidity sensor"\nRegistering protocol [12] "Auriol HG02832, HG05124A-DCF, Rubicson 48957 temperature/humidity sensor"\nRegistering protocol [13] "BlueLine Power Monitor"\nRegistering protocol [14] "Blyss DC5-UK-WH"\nRegistering protocol [16] "Bresser Thermo-/Hygro-Sensor 3CH"\nRegistering protocol [18] "Burnhard BBQ thermometer"\nRegistering protocol [19] "Calibeur RF-104 Sensor"\nRegistering protocol [20] "Cardin S466-TX2"\nRegistering protocol [21] "Chuango Security Technology"\nRegistering protocol [22] "Companion WTR001 Temperature Sensor"\nRegistering protocol [25] "Ecowitt Wireless Outdoor Thermometer WH53/WH0280/WH0281A"\nRegistering protocol [26] "Eurochron EFTH-800 temperature and humidity sensor"\nRegistering protocol [30] "Esperanza EWS"\nRegistering protocol [32] "Fine Offset Electronics, WH2, WH5, Telldus Temperature/Humidity/Rain Sensor"\nRegistering protocol [33] "Fine Offset Electronics, WH0530 Temperature/Rain Sensor"\nRegistering protocol [34] "Fine Offset WH1050 Weather Station"\nRegistering protocol [35] "Fine Offset Electronics WH1080/WH3080 Weather Station"\nRegistering protocol [37] "FT-004-B Temperature Sensor"\nRegistering protocol [38] "Generic wireless motion sensor"\nRegistering protocol [39] "Generic Remote SC226x EV1527"\nRegistering protocol [40] "Generic temperature sensor 1"\nRegistering protocol [41] "Globaltronics QUIGG GT-TMBBQ-05"\nRegistering protocol [42] "Globaltronics GT-WT-02 Sensor"\nRegistering protocol [43] "Globaltronics GT-WT-03 Sensor"\nRegistering protocol [44] "Microchip HCS200 KeeLoq Hopping Encoder based remotes"\nRegistering protocol [45] "Honeywell ActivLink, Wireless Doorbell"\nRegistering protocol [46] "HT680 Remote control"\nRegistering protocol [47] "inFactory, nor-tec, FreeTec NC-3982-913 temperature humidity sensor"\nRegistering protocol [49] "Interlogix GE UTC Security Devices"\nRegistering protocol [51] "Kedsum Temperature & Humidity Sensor, Pearl NC-7415"\nRegistering protocol [52] "Kerui PIR / Contact Sensor"\nRegistering protocol [53] "LaCrosse TX Temperature / Humidity Sensor"\nRegistering protocol [54] "LaCrosse TX141-Bv2, TX141TH-Bv2, TX141-Bv3, TX141W, TX145wsdth sensor"\nRegistering protocol [55] "LaCrosse/ELV/Conrad WS7000/WS2500 weather sensors"\nRegistering protocol [56] "LaCrosse WS-2310 / WS-3600 Weather Station"\nRegistering protocol [58] "Maverick et73"\nRegistering protocol [60] "Missil ML0757 weather station"\nRegistering protocol [64] "Nexus, FreeTec NC-7345, NX-3980, Solight TE82S, TFA 30.3209 temperature/humidity sensor"\nRegistering protocol [66] "Opus/Imagintronix XT300 Soil Moisture"\nRegistering protocol [67] "Oregon Scientific SL109H Remote Thermal Hygro Sensor"\nRegistering protocol [69] "Philips outdoor temperature sensor (type AJ3650)"\nRegistering protocol [70] "Philips outdoor temperature sensor (type AJ7010)"\nRegistering protocol [71] "Prologue, FreeTec NC-7104, NC-7159-675 temperature sensor"\nRegistering protocol [73] "Quhwa"\nRegistering protocol [75] "Rubicson Temperature Sensor"\nRegistering protocol [76] "Rubicson 48659 Thermometer"\nRegistering protocol [77] "Conrad S3318P, FreeTec NC-5849-913 temperature humidity sensor"\nRegistering protocol [78] "Silvercrest Remote Control"\nRegistering protocol [79] "Skylink HA-434TL motion sensor"\nRegistering protocol [80] "Wireless Smoke and Heat Detector GS 558"\nRegistering protocol [81] "Solight TE44/TE66, EMOS E0107T, NX-6876-917"\nRegistering protocol [82] "Springfield Temperature and Soil Moisture"\nRegistering protocol [83] "TFA Dostmann 30.3221.02 T/H Outdoor Sensor"\nRegistering protocol [84] "TFA Drop Rain Gauge 30.3233.01"\nRegistering protocol [85] "TFA pool temperature sensor"\nRegistering protocol [86] "TFA-Twin-Plus-30.3049, Conrad KW9010, Ea2 BL999"\nRegistering protocol [87] "Thermopro TP11 Thermometer"\nRegistering protocol [88] "Thermopro TP08/TP12/TP20 thermometer"\nRegistering protocol [90] "TS-FT002 Wireless Ultrasonic Tank Liquid Level Meter With Temperature Sensor"\nRegistering protocol [91] "Visonic powercode"\nRegistering protocol [92] "Waveman Switch Transmitter"\nRegistering protocol [93] "WG-PB12V1 Temperature Sensor"\nRegistering protocol [94] "WS2032 weather station"\nRegistering protocol [95] "Hyundai WS SENZOR Remote Temperature Sensor"\nRegistering protocol [96] "WT0124 Pool Thermometer"\nRegistering protocol [98] "X10 Security"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br")])]),s("h3",{attrs:{id:"change-receive-frequency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-receive-frequency"}},[e._v("#")]),e._v(" Change receive frequency")]),e._v(" "),s("p",[e._v("Default receive frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by sending a message with the frequency.  Parameter is "),s("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"mhz":315.026}')])]),e._v(" "),s("h3",{attrs:{id:"minimum-signal-strength"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimum-signal-strength"}},[e._v("#")]),e._v(" Minimum Signal Strength")]),e._v(" "),s("p",[e._v("Default minimum signal strength to enable the receiver is -82, and this setting can be changed with the following command.")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"rssi":-75}')])]),e._v(" "),s("h3",{attrs:{id:"enable-rtl-433-device-decoder-verbose-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-rtl-433-device-decoder-verbose-debug"}},[e._v("#")]),e._v(" Enable rtl_433 device decoder verbose debug")]),e._v(" "),s("p",[e._v("This function does not work when all available decoders are enabled and triggers an out of memory restart.")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"debug":4}')])]),e._v(" "),s("h3",{attrs:{id:"retrieve-current-status-of-receiver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-current-status-of-receiver"}},[e._v("#")]),e._v(" Retrieve current status of receiver")]),e._v(" "),s("p",[s("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"status":1}')])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"model":"status",\n"protocol":"debug",\n"debug":0,                  - rtl_433 verbose setting\n"duration":11799327,        - duration of current signal\n"Gap length":-943575,       - duration of gap between current signal\n"signalRssi":-38,           - most recent received signal strength\n"train":1,                  - signal processing train #\n"messageCount":3,           - total number of signals received\n"_enabledReceiver":1,       - which receiver is enabled\n"receiveMode":0,            - is the receiver currently receiving a signal\n"currentRssi":-89,          - current rssi level\n"minimumRssi":-82,          - minimum rssi level to start signal processing\n"pulses":0,                 - how many pulses have been received in the current signal\n"StackHighWaterMark":5528,  - ESP32 Stack\n"freeMem":112880}           - ESP32 memory available\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);