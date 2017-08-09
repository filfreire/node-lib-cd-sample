# Docker file for building a jenkins image for Continuous Delivery Pipeline for a Node.js package
FROM jenkins/jenkins

# Install Node.js
USER root
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y nodejs

# Confirm Node.js installation
RUN node -v
RUN npm -v

# Installation complete
USER jenkins 
