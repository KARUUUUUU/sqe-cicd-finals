pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Verification Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            sh 'rm -rf dist'
        }

        success {
            echo 'CI passed: linting, tests, and build verification succeeded.'
        }

        failure {
            echo 'CI failed. Review the stage and console output above.'
        }
    }
}