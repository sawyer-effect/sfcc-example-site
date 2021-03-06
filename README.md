# Salesforce Commerce Cloud Example Site

## Setup environment for new project

### Download and install dependencies

* In the same folder, clone the following projects:

  * [storefront-reference-architecture](https://github.com/SalesforceCommerceCloud/storefront-reference-architecture)
  * [storefrontdata](https://github.com/SalesforceCommerceCloud/storefrontdata)
  * [sfcc-example-site](https://github.com/sawyer-effect/sfcc-example-site)
  * [build-suite](https://github.com/SalesforceCommerceCloud/build-suite)

* Install node (if not installed already)
* Run npm install in all the projects except storefrontdata
* Install sgmf-scripts globally `npm install -g sgmf-scripts`

### Use build suite for deployment

* Copy file `build/sfcc-example-site.json` to `build-suite/build` folder and update connection params
* Run command to build code: `grunt build --project=sfcc-example-site`
* Run command to deploy code: `grunt dist --project=sfcc-example-site`
* Run command to import sites: `grunt importSite --project=sfcc-example-site`
* Go to Business Manager and generate search indexes.

### Sync sandbox without build

* Inside this project folder, copy `dw.json.example` to `dw.json` and update connection parameters
* Run command: `npm run watch` to watch, compile and upload files to the sandbox
* Run command `npm run watch:compile` to watch and complie files (If you are using an editor like VS or Eclipse to upload changes)
* Have fun!

## Further customization

* (Coming soon)
  * Site Template
  * Tests
  * Adding plugins
  * DIS
