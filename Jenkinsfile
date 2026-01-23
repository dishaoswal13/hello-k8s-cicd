pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/dishaoswal13/hello-k8s-cicd'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hello-k8s:1.0 .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
