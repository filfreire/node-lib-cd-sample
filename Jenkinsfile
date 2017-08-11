// Credential identifier for connecting to github
def githubCredential = env.GITHUB_CREDENTIALS
def teamDL = env.TEAM_DL

node {
    stage('Setup Git') {
        sh "git config --global user.name jenkins"
        sh "git config --global user.email ${teamDL}"
    }
    stage('Checkout') {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'WipeWorkspace'], [$class: 'CleanBeforeCheckout'], [$class: 'CleanCheckout'], [$class: 'LocalBranch', localBranch: 'master'], [$class: 'UserExclusion', excludedUsers: 'jenkins']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: "${githubCredential}", url: 'git@github.corp.ebay.com:gpichot/node-package-cd-sample.git']]])
    }
    stage('Install') {
        sh 'npm install mocha'
        sh 'npm install'
    }
    stage('Test') {
        sh 'npm test'
    }
    stage('Version'){
        sh 'npm version patch'
        sshagent([githubCredential]) {
          sh 'git push --set-upstream origin master'
        }
        sshagent([githubCredential]) {
          sh 'git push origin master'
        }
        sshagent([githubCredential]) {
          sh "git push --follow-tags"
        }
    }
    stage('Complete Build'){
        echo 'Well Done!'
    }
}
