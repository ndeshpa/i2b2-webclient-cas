{
	startZoomed: true,
	urlProxy: "https://localhost:8443/eurekaclinical-i2b2-integration-webapp/i2b2/",
    urlFramework: "js-i2b2/",
    casDomain: "i2b2demo",
	//-------------------------------------------------------------------------------------------
	// THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
	lstDomains: [
		{ domain: "i2b2demo",
		  name: "HarvardDemo",
		  urlCellPM: "http://services.i2b2.org/i2b2/services/PMService/",
		  allowAnalysis: true,
		  debug: false,
		  "EC_I2B2_INTEGRATION_URL": "https://localhost:8443/eurekaclinical-i2b2-integration-webapp",
		  "CAS_SERVER": "https://localhost:8443/cas-server"
		}
	]
	//-------------------------------------------------------------------------------------------
}
