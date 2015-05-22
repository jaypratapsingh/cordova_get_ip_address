var getdeviceip = {
    get_ip: function(successCallback, errorCallback) {
		cordova.exec( successCallback,
		            errorCallback,
		            "Get_IP_Address",
		            "get_ip_address",
            []);

    }
}

module.exports = getdeviceip;