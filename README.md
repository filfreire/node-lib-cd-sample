# Continuous Delivery Pipeline for a node.js package

This project demonstrates how the source code of a node.js package can be bundled with the continuous delivery pipeline for building, testing, publishing and versioning this package using Jenkins Pipeline and with a preconfigured Jenkins described via a Dockerfile that can be used to build the corresponding image that will be run in a Docker container.

## Requirements

* Node: recommended version is v6.11.2
* NPM: recommended version is 3.10.10
* Test Runner: Mocha - recommended version is 3.5.0
* Docker: https://docs.docker.com/ - recommended version 17.06.0-ce

## Useful Links

* Node.js: https://nodejs.org
* NPM: https://www.npmjs.com/
* Docker: https://www.docker.com/
* Jenkins: https://jenkins.io/
* Jenkins Pipeline: https://jenkins.io/doc/book/pipeline/
* Mocha: https://mochajs.org/

## How to say hello world!

```javascript
npm start
```

## How to run the test

```javascript
npm install
npm test
```

## Jenkins Docker Image

Jenkins Community image: https://hub.docker.com/r/jenkins/jenkins/ (version 2.73)

* Build docker image locally (from /docker):


```bash
docker build -t jenkins-nodejs-sample .
```

* Run docker image locally:

```bash
docker run -p 8080:8080 -p 50000:50000 jenkins-nodejs-sample
```

* List Jenkins Plugins:

List Jenkins plugins from *http://{jenkins-url}/script*

```groovy
Jenkins.instance.pluginManager.plugins.each{
  plugin ->
    println ("${plugin.getShortName()}:${plugin.getVersion()}")
}
```

* Pipeline Job Configuration:

The config.xml file for a job is available from *http://{jenkins-url}/{job-name}/config.xml*

### Publish Docker Image

```bash
docker images
docker login {docker registry url}
docker tag {image ID} {docker registry url}/{repository}/jenkins-nodejs-sample:{version}
docker push {docker registry url}/{repository}/jenkins-nodejs-sample:{version}
```

### Deploy and Run Docker Image

```bash
# RETRIEVE THE DOCKER IMAGE FROM REGISTRY
docker login {docker registry url}
docker pull {docker registry url}/{repository}/jenkins-nodejs-sample:{version}
docker images
docker run -p 8080:8080 -p 50000:50000 {image ID}
```

## Jenkins Job Configuration

* Configure github credential

The pipeline requires credential for checking out a git repository and pushing version update to the remote repository.
1. Open the pipeline job Configuration
2. Navigate to the 'Build Triggers/Pipeline' section
3. Add new credentials for connecting to github (e.g. SSH key)
4. Make sure that the ID defined for the credentials matches the one for the job parameter 'GITHUB_CREDENTIALS'
