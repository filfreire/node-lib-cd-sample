# Continuous Delivery Pipeline for a node.js package

## Requirements

* Node: recommended version is v6.11.2
* NPM: recommended version is 3.10.10
* Test Runner: Mocha - recommended version is 3.5.0
* Docker: https://docs.docker.com/ - recommended version 17.06.0-ce

## How to say hello

```javascript
$ node
> var hello = require('./hello.js');
undefined
> hello
[Function]
> hello()
'Hello World!'
```

## How to run the test

```javascript
npm install
npm test
```

## Jenkins Docker Image

Jenkins Community image: https://hub.docker.com/r/jenkins/jenkins/ (version 2.73)

Build docker image (from /docker):

```bash
docker build -t jenkins-nodejs-sample .
```

Run docker image:

```bash
docker run -p 8080:8080 -p 50000:50000 jenkins-nodejs-sample
```

Plugins:
List Jenkins plugins: from http://{jenkins-url}/script

```groovy
Jenkins.instance.pluginManager.plugins.each{
  plugin ->
    println ("${plugin.getShortName()}:${plugin.getVersion()}")
}
```

* SSH Agent Plugin

Path to initial password: /var/jenkins_home/secrets/initialAdminPassword
