# 07 – AWS EC2 Deployment

## 1. Overview

Amazon EC2 will be used to host the containerized Vyro Studio application in a cloud environment.

## 2. Deployment Objectives

- Provision a cloud-based virtual server.
- Configure network access.
- Install Docker.
- Retrieve the application image from Docker Hub.
- Run the application inside a Docker container.
- Make the website accessible through the EC2 public address.

## 3. Infrastructure

The planned infrastructure includes:

- Amazon EC2 instance.
- Operating system: To be confirmed.
- Docker Engine.
- Docker Hub image.
- Security Group configuration.

## 4. Deployment Workflow

1. Launch an EC2 instance.
2. Configure SSH access.
3. Connect to the instance.
4. Install Docker.
5. Pull the application image.
6. Run the Docker container.
7. Verify website accessibility.

## 5. Security Considerations

- Restrict SSH access to trusted IP addresses.
- Configure only the required inbound ports.
- Never publish private keys or credentials.

## 6. Verification

The website will be tested using the EC2 public IP address after deployment.

## 7. Conclusion

AWS EC2 will provide the cloud infrastructure required to host the containerized application.
