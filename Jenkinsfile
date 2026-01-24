pipeline {
    agent any 
    
    environment {
        // This tells kubectl to use the config file we just fixed
        KUBECONFIG = '/var/jenkins_home/kubeconfig'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Building the image (using the fix we found earlier)
                sh 'DOCKER_BUILDKIT=0 docker build -t hello-k8s:1.0 .' 
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo 'Deploying to Minikube...'
                
                // 1. Apply the deployment files from your k8s/ folder
                sh 'kubectl apply -f k8s/'
                
                // 2. Force a restart so it picks up the new image immediately
                sh 'kubectl rollout restart deployment/hello-k8s'
                
                // 3. Print the status to the logs so we can see it worked
                sh 'kubectl get pods'
            }
        }
    }
}
