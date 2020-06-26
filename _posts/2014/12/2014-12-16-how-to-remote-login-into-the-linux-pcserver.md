---
layout: post
title: How to Login into Remotely login into Linux System?
permalink: /tech/linux/how-to-remote-login-into-the-linux-pcserver/
date: 2014-12-16 17:10:00.000000000 +05:30
category: linux
keywords: 
- linux
- ssh
- openssh
- linux remote login
description: "For Remote accessing of Linux PC from Linux PC/Server is required openssh server on destination PC(The Linux PC/Server which we need to take on remote location).OpenSSH is a free open source set of computer tools used to provide secure and encrypted communication over a computer network by using the ssh protocol. Many people, new to computers and protocols, create a misconception about OpenSSH, they think it is a protocol, but it is not, it is a set of computer programs that use the ssh protocol"
---

**Installation of OpenSSH in Linux**  
  
To install **OpenSSH**, open a terminal and run the following commands with superuser permissions.  
  
**On Ubuntu/Debian/Linux Mint**  
  
```
    sudo apt-get install openssh-server openssh-client
```

****On RHEL/Centos/Fedora  
****

```
    yum -y install openssh-server openssh-clients
```
  
**Windows**

1.  _Download PuTTY windows application if you do not have it._Open Putty and select ssh.
2.  Provide the host name (or remote server's domain name or remote IP)
    *   hostname: [www.technobureuau.com](http://www.technobureuau.com/)
3.  Enter your identity information
    *   username: Type _your username and click Enter._
    *   _password: Type _your password and click Enter. ( Nothing would show up while entering password, so simply enter it.)__
4.  Download and install WinSCP or FileZilla application if you do not have it for file Exchange between from your windows to linux pc/server.

**Linux**  
For Remote accessing of Linux PC from Linux PC/Server is required openssh client on source PC(The PC which we using to take another Linux PC/server),

*   To log-in into the remote Linux shell, open terminal and type:

```
    ssh -X <your_username>@<host_name>
```

*   **host name** is the remote server's domain name (e.g. [www.technobureau.com](../../))

(You will be asked to enter the password, simply type it and press enter.)

*   To copy files **To** the server run the following on your workstation or laptop:

```
    scp -r <path_from_directory> <your_username>@<host_name>:<path_to_directory>
```

*   To copy files **From** the server run the following on your workstation or laptop:

```
    scp -r <your_username>@<host_name>:<path_from_directory> <path_to_directory>
```