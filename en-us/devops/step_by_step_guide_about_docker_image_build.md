---
title: Building Docker Images - A Step-by-Step Guide with Examples
slug: Learn/DevOps/Step_by_Step_Guide_about_Docker_Image_Build
comments: true
tags:
  - Docker
  - Dockerfile
  - docker tutorial
  - docker build
  - installation of docker
  - DevOps
---

## What is Docker?

Docker is an open-source platform that enables the creation, deployment, and management of applications within lightweight, isolated containers. It provides a consistent and efficient way to package software and its dependencies, ensuring that applications run reliably across different computing environments.

At its core, Docker utilizes containerization technology, which allows applications to be packaged into self-contained units called Docker containers. Each container contains everything needed to run an application, including the code, runtime, system tools, libraries, and system dependencies. Containers are isolated from one another and share the host system's operating system kernel, making them lightweight and efficient.

Docker offers several key advantages:

1. Portability: Docker containers are portable, meaning they can run consistently across different environments, such as development, testing, and production. This eliminates the "it works on my machine" problem and ensures application consistency.

2. Scalability: Docker enables easy scaling of applications by allowing multiple instances of containers to run concurrently. Containers can be quickly and dynamically deployed, making it straightforward to scale up or down based on demand.

3. Resource Efficiency: Docker containers are lightweight and share the host system's resources, making efficient use of hardware resources. Multiple containers can run on the same physical or virtual machine without conflicts.

4. Isolation: Docker containers provide isolation, ensuring that each application runs independently of others. This isolation enhances security and prevents conflicts between applications or their dependencies.
5. Version Control: Docker images, which are the building blocks of containers, can be version-controlled. This allows for easy management of different versions and facilitates rollbacks if needed.

6. Rapid Deployment: Docker simplifies the deployment process by providing a standardized environment for applications. With Docker, applications can be deployed quickly and consistently, reducing deployment time and effort.

Docker has gained widespread adoption and is widely used in various scenarios, including microservices architecture, continuous integration and deployment (CI/CD), and cloud-based environments. It has a vast ecosystem of tools and services that support container orchestration, networking, storage, and management, making it a popular choice for modern application development and deployment.

## Installation & Configuration of Docker

To install Docker Engine on a new host machine, it is important to first set up the Docker repository. Once the repository is configured, you can proceed with installing and updating Docker using the repository.

### Set up the repository

It provide instructions to set up the necessary repository and prerequisites for installing the Docker engine based on the operating system (OS) in use.

=== "Ubuntu/Debian"

      ``` {.console}
      $ sudo apt-get update
      $ sudo apt-get install \
          ca-certificates \
          curl \
          gnupg \
          lsb-release
      $ sudo mkdir -p /etc/apt/keyrings
      $ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
      $ echo \
          "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
          $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
      ```

=== "CentOS/RHEL"

      ``` {.console}
      $ sudo yum install -y yum-utils
      $ sudo yum-config-manager \
                --add-repo \
                https://download.docker.com/linux/centos/docker-ce.repo
      ```

### Install Docker Engine

Install docker engine based on the operating system (OS) in use.

=== "Ubuntu/Debian"

      ``` {.console}
      $ sudo apt-get update
      $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
      ```

=== "CentOS/RHEL"

      ``` {.console}
        $ yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
      ```

## What is a Dockerfile?


Before we discuss what is a Dockerfile, it is important to know what a
Docker image is. Docker Image:

A Docker Image is a read-only file with a bunch of instructions. When
these instructions are executed, it creates a Docker container.
Dockerfile:

Dockerfile is a simple text file that consists of instructions to build
Docker images.

Mentioned below is the syntax of a Dockerfile:

=== "Syntax"
    ``` {.docker}
    # comments

    command argument argument1...
    ```

=== "Example"

    ``` {.docker}
    # "This line commented"

    Run echo "Get Certified. Get Ahead"
    ```

Now, let's have a look at how to build a Docker image using a
dockerfile.

Dockerfile Commands
-----------------------

Below is a list of Docker commands that can be used to create a Dockerfile, which is a text file used to build Docker images:

1. **FROM**: Specifies the base image to be used as the starting point for the Docker image.
2. **RUN**: Executes commands in the Docker image during the build process.
- **COPY**: Copies files and directories from the host machine to the Docker image.
- **ADD**: Similar to COPY, but with additional support for URLs and unpacking compressed files.
- **ENV**: Sets environment variables within the Docker image.
- **WORKDIR**: Sets the working directory for subsequent commands in the Docker image.
- **EXPOSE**: Informs Docker that the container listens on specific network ports at runtime.
- **CMD**: Specifies the default command to run when the Docker container is started.
- **ENTRYPOINT**: Configures the container to run as an executable and defines the command that will be executed.
- **VOLUME**: Creates a mount point for a volume or a shared directory.

These Docker commands can be used in combination to define the steps required to build a Docker image that encapsulates your application or service.

1. FROM Command:
The FROM command specifies the base image to be used as the starting point for the Docker image. It defines the environment and dependencies required by your application. For example:

    ``` {.docker}
    FROM ubuntu:20.04
    ```

2. RUN Command:
The RUN command executes commands in the Docker image during the build process. It is used to install packages, update software, and run any necessary setup steps. Here's an example:

    ``` {.docker}
    RUN apt-get update && apt-get install -y curl
    ```

* COPY Command:
The COPY command copies files and directories from the host machine to the Docker image. It is useful for adding application code, configuration files, or any other required files. An example usage is as follows:

    ``` {.docker}
    COPY app.py /app/
    ```

* ADD Command:
The ADD command is similar to COPY but provides additional features. It can handle URLs and automatically unpack compressed files. Here's an example:

    ``` {.docker}
    ADD https://example.com/archive.tar.gz /tmp/
    ```

* ENV Command:
The ENV command sets environment variables within the Docker image. It allows you to provide configuration values to your application. For instance:
    ``` {.docker}
    ENV PORT 8080
    ENV DB_HOST localhost
    ```

* WORKDIR Command:
The WORKDIR command sets the working directory for subsequent commands in the Docker image. It simplifies the path references in subsequent commands. An example usage is as follows:

    ``` {.docker}
    WORKDIR /app
    ```

* EXPOSE Command:
The EXPOSE command informs Docker that the container listens on specific network ports at runtime. It does not actually publish the ports, but serves as documentation for container users. An example usage is as follows:

    ``` {.docker}
    EXPOSE 8080
    ```

* CMD Command:
The CMD command specifies the default command to run when the Docker container is started. It defines the main executable or script for the container. Here's an example:

    ``` {.docker}
    CMD ["python", "app.py"]
    ```

* ENTRYPOINT Command:
The ENTRYPOINT command configures the container to run as an executable and defines the command that will be executed. It is typically used in conjunction with the CMD command. An example usage is as follows:

    ``` {.docker}
    ENTRYPOINT ["python", "app.py"]
    ```

* VOLUME Command:
The VOLUME command creates a mount point for a volume or a shared directory. It allows data to persist beyond the container's lifespan. Here's an example:

    ``` {.docker}
    VOLUME /data
    ```


## Docker Image Build

1. Step 1: Create a Dockerfile

    Open a text editor and create a new file named "Dockerfile" (without any file extension).
    Add the necessary instructions and configurations to the Dockerfile, such as the base image, required dependencies, and application setup.

    !!! example "Example Dockerfile"

        ``` {.docker}
        FROM ubuntu

        MAINTAINER simple

        RUN apt-get update

        CMD ["echo", "Welcome to Simple-learn"]
        ```

2. Step 2: Build the Docker Image

    1. Open a terminal or command prompt and navigate to the directory containing the Dockerfile.
    2. Run the following command to build the Docker image:

        ``` {.console}
        docker image build -t myapp:latest .
        ```

        - `-t` specifies the image tag, which is set to "myapp:latest" in this example.
        - `.` specifies the build context, which is the current directory.

3. Step 3: Monitor the Build Process

    1. Docker will start building the image and display the progress and status of each step defined in the Dockerfile.
    2. Docker will also download any required base images or dependencies specified in the Dockerfile.

4. Step 4: Verify the Built Image

    Once the build process completes successfully, you can verify the newly built image using the following command:

    ``` {.console}
    docker image ls
    ```
    This command lists all the available Docker images on your system.
    Ensure that the image "myapp" is listed with the appropriate tag and size.


5. Step 5: Run the Docker Image as a Container

  In the terminal or command prompt, execute the following command to run the Docker image as a container:

  ``` {.console}
  docker run [OPTIONS] IMAGE[:TAG] [COMMAND] [ARG...]
  ```
  - Replace [OPTIONS] with any desired runtime options, such as specifying ports, environment variables, or volumes.
  - Replace IMAGE[:TAG] with the image ID or repository:tag obtained from Step 1.
  - Replace [COMMAND] [ARG...] with any desired command and arguments to be executed inside the container.

!!! example

      Let's consider an example where we have a Docker image named "myapp:latest" that simply prints message.

      ``` {.console}
      docker run -d  --name myapp-container myapp:latest
      ```

The message 'Welcome to Simplelearn' should appear in the command line,
as seen in the image above.