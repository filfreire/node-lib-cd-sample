// Credential identifier for connecting to github
def githubCredential = env.GITHUB_CREDENTIALS
def teamDL = env.TEAM_DL

node {
    stage('Setup Git') {
        sh "git config --global user.name jenkins"
        sh "git config --global user.email ${teamDL}"
    }
    stage('Checkout') {
        checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: "${githubCredential}", url: 'git@github.corp.ebay.com:gpichot/node-package-cd-sample.git']]]
    }
    stage('Install') {
        sh 'npm install --global mocha'
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
