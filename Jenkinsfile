pipeline { 
    agent any 
 
    stages { 
        stage('Build Image') { 
            steps { 
                sh 'docker build -t vulnerable-app .' 
            } 
        } 
 
        stage('Trivy Scan') { 
            steps { 
                sh 'trivy image vulnerable-app > trivy-report.txt' 
            } 
        } 
    } 
 
    post { 
        always { 
            archiveArtifacts artifacts: 'trivy-report.txt', fingerprint: true 
        } 
    } 
} 
