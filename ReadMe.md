*************Cordova : Get IP Address of your Device*****************

By using this plugin you can get the ip address of your devices.


Install this plugin using:

cordova plugin add com.jp.plugins.getipaddress



Remove Plugins :

cordova plugin remove com.jp.plugins.getipaddress



Put the below code in your javascript code to get the ip address: 

getdeviceip.get_ip(
	function(ipaddress)
	{
            console.log(ipaddress);
        }, 
	function(error)
	{
            console.log(error);
        }
    );