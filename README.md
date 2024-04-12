# Writed by Tomer Rozen 
The task mission was to upload devops-test-main.zip file to minikube - locally .
prerequisites tools that i installed:
VirtualBox
Docker desktop for mac
Minikube
Helm

After that i set up my local repository and Unzip the file devops-test-main.zip to my new repository directory named utopia_tech.
Start Minikube with Docker Driver
Set Docker Environment
eval $(minikube docker-env)
Build docker images 
(there was 2 docker files (fronted+backend))
and then Deploy the Application:
kubectl apply -f deployment.yaml

Install the Helm Chart
helm install myapp-release .
Validate the Helm Chart Structure
Chart.yaml
values.yaml
templates/deployment.yaml
Service.yaml

Load Custom Docker Images into Minikube
Test the Helm Chart Locally
Deploy the Helm Chart to Minikube
Access the Application - 
we can access the application using Minikube services or port forwarding
minikube service my-release-my-chart
minikube service kubernetes
Accessing an application deployed in Kubernetes, like Minikube Using Ingress
minikube addons enable ingress
ingress.yml
kubectl apply -f ingress.yaml
Add an entry to your local machine's hosts file (/etc/hosts

Access the Services
Frontend Service:

Navigate to http://myapp.local/frontend 

Backend Service:

Navigate to http://myapp.local/backend

Debugging Access Issues




I pushes my Changes to GitHub
