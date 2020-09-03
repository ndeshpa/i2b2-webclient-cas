# i2b2 Web Client Repository

The i2b2 Web Client is a web based client that is installed on a web server. This client can be accessed by an authorized user who has access to a web browser. 

The i2b2 Web Client Repository contains the source code for the i2b2 Web Client.

[Georgia Clinical and Translational Science Alliance (Georgia CTSA)](http://www.georgiactsa.org), [Emory University](http://www.emory.edu), Atlanta, GA

## What does it do?
This is a stock i2b2 1.7.12a web client patched with support for 
* delegating authentication to [Eureka! Clinical CAS](https://github.com/eurekaclinical/cas) or other CAS server that supports version 2 of the CAS protocol
* automated i2b2 account creation using the [Eureka! Clinical i2b2 Integration microservice](https://github.com/eurekaclinical/eurekaclinical-i2b2-integration-service)
* requiring users to sign an electronic data use agreement using [Eureka! Clinical User Agreement microservice](https://github.com/eurekaclinical/eurekaclinical-user-agreement-service)

## Documentation
Additional information about the i2b2 Web Client can be found on the [i2b2 Community Wiki](http://community.i2b2.org/wiki/dashboard.action "i2b2 Community Wiki") within the [i2b2 Web Client Space](http://community.i2b2.org/wiki/display/webclient/Web+Client+Home) space.

## Version history
### Version 1.3
Updated to version 1.7.09c of the web client.

### Version 1.2
Updated to version 1.7.08 of the web client.

### Version 1.1
Commented out the Project Request plugin in the plugin registry list.

### Version 1.0
Initial release using version 1.7.05 of the web client.

## Installation
Installation instructions can be found in the [INSTALL-README.md](/INSTALL-README.md) file. 

## Development / Maintenance
The code for the i2b2 Web Client is maintained by the i2b2 team.

Plugins developed by the i2b2 Community can be found in the [i2b2plugins Github organization](https://github.com/i2b2plugins).

## Reporting Issues
If an issue is found with the i2b2 Web Client please submit an issue in the [i2b2 Bug Tracker](http://community.i2b2.org/jira/secure/Dashboard.jspa "i2b2 Bug Tracker") under the *i2b2 Web Client* project.

Suggestions for improvements or enhancements to the i2b2 Web Client can also be submitted into the i2b2 Bug Tracker.
