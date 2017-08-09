// Credential identifier for connecting to github
def githubCredential = env.GITHUB_CREDENTIALS

node {
    stage('Checkout') {
        checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: "${githubCredential}", url: 'git@github.corp.ebay.com:gpichot/node-package-cd-sample.git']]]
    }
    stage('Install') {
        sh 'npm install --globa mocha'
        sh 'npm install'
    }
    stage('Test') {
        sh 'npm test'
    }
    stage('Version'){
        sh 'npm version patch'
        sh 'git push origin master'
    }
}
