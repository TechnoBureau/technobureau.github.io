---
title: Remote Accessing Linux PC/Server using OpenSSH
slug: Learn/Linux/Remote_Accessing_Linux_using_OpenSSH
date: 2014-12-16 17:10:00.000000000 +05:30
category: linux
tags:
  - Linux
  - SSH
  - OpenSSH
---

Remote accessing of Linux PCs from another Linux PC or server is an essential capability that is required in many scenarios, especially for system administrators and developers. It allows users to access a remote server, execute commands, transfer files, and perform other essential tasks from the comfort of their own workstation or laptop. Fortunately, the process of accessing a Linux PC or server remotely is straightforward and can be accomplished using a set of computer tools called OpenSSH.

OpenSSH is a free and open-source set of computer tools that is used to provide secure and encrypted communication over a computer network using the ssh protocol. OpenSSH is commonly used to connect to a remote Linux shell, but it can also be used for other purposes, such as file transfer, tunneling, and port forwarding.

Many people new to computers and protocols tend to create a misconception about OpenSSH, thinking it is a protocol. However, it is not. Instead, it is a set of computer programs that use the ssh protocol. The ssh protocol is a set of standards for secure and reliable communication between two computers over a network. It provides a secure and encrypted channel for data transfer, making it suitable for remote accessing of Linux PCs and servers.

## Installation of OpenSSH

To install OpenSSH, you need to have superuser permissions on the remote server. The installation process varies depending on the Linux distribution you are using. On Ubuntu/Debian/Linux Mint, you can install OpenSSH by running the following command in the terminal

### On Ubuntu/Debian/Linux Mint

```sh
sudo apt-get install openssh-server openssh-client
```

### On RHEL/Centos/Fedora

```sh
yum -y install openssh-server openssh-clients
```

## Login Procedure - Windows

Once the OpenSSH server is installed on the remote Linux PC/Server, we can use a Windows application like PuTTY to access it. If you don't have PuTTY installed on your system, you can download and install it from the official website.

To log in to the remote Linux PC/Server using PuTTY, follow these steps:

1. Open PuTTY and select "ssh" as the connection type.
2. Enter the hostname or the remote server's DNS name or remote IP in the Host Name field. For example, hostname: technobureuau.com
3. Enter your identity information, including your username and password.
4. Download and install WinSCP or FileZilla application if you don't have it, to transfer files between your Windows and Linux PC/Server.


## Login Procedure - Linux
To access the remote Linux PC/Server from another Linux PC/Server, you need to install the OpenSSH client on the source system. This will allow you to log in to the remote system from the source system.

* To log in to the remote Linux shell, open a terminal and type:

```sh
ssh -X <your_username>@<host_name>
```
The host name is the remote server's DNS name or remote IP, such as technobureau.com. You will be asked to enter the password, which you can simply type and press Enter. Once you are logged in, you can execute commands, transfer files, and perform other essential tasks on the remote server.


* To transfer files between the local and remote Linux PC or server, you can use the scp command. The scp command allows you to copy files securely between two Linux computers. To copy files to the server, run the following command on your workstation or laptop:
```sh
scp -r <path_from_directory> <your_username>@<host_name>:<path_to_directory>
```

* To copy files from the server, run the following command on your workstation or laptop:

```sh
scp -r <your_username>@<host_name>:<path_from_directory> <path_to_directory>
```

## Conclusion

OpenSSH is a set of computer tools that makes remote accessing of Linux PCs from another Linux PC or server possible. Installing OpenSSH is a straightforward process that involves using superuser permissions to run commands on the terminal. By installing OpenSSH, you can access a remote Linux PC from a Windows machine or another Linux PC or server.