# Docker file for building a jenkins image for Continuous Delivery Pipeline for a Node.js package
FROM jenkins/jenkins

# Install Node.js
USER root
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y \
      nodejs \
      vim

# Confirm Node.js installation
RUN node -v
RUN npm -v

# Complete Jenkins Installation
USER jenkins

# Install Jenkins Plugins
COPY plugins.txt /usr/share/jenkins/ref/
RUN /usr/local/bin/plugins.sh /usr/share/jenkins/ref/plugins.txt

# Restore pipeline job
USER root
COPY node-package-delivery-pipeline-config.xml /var/jenkins_home/jobs/node-package-delivery-pipeline/config.xml
RUN chown -R jenkins:jenkins /var/jenkins_home/jobs/
