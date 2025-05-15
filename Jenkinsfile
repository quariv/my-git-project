pipeline {
    agent any  // Run on any available agent

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image: vulnerable-app'
                sh 'docker build -t vulnerable-app .'
            }
        }

        stage('Scan with Trivy') {
            steps {
                echo 'Scanning image for vulnerabilities using Trivy'
                sh 'trivy image vulnerable-app > trivy-report.txt'
            }
        }
    }

    post {
        always {
            echo 'Archiving scan results'
            archiveArtifacts artifacts: 'trivy-report.txt', fingerprint: true
        }
    }
}
