---
layout: post
title: DHCP - Dynamic Host Configuration Protocol Overview
permalink: /tech/linux/dhcp-dynamic-host-configuration-protocol-overview/
date: 2016-12-26 01:20:00.000000000 +05:30
category: linux
keywords: 
- linux
- nfs
- Network File System
- nfslock
description: "Dynamic Host Configuration Protocol (DHCP) is a client/server network communication protocol that automatically provides an IP address and other related configuration information such as the subnet mask and default gateway to the client host by the configured DHCP Server on the network"
---

In addition to IP address and subnet mask information, DHCP can provide the following protocol parameters:

*   Default Gateway
*   Domain Name and DNS servers
*   Time Servers
*   WINS servers

Port Number:

*   67 - UDP - DHCP Server Port
*   68 - UDP - DHCP Client Port

Advantages:

*   Easy to manage IP administrations by the local administrators.
*   Client host doesn't required manual IP configuration.
*   Without any configuration client user can join on any DHCP enabled network.

Process:

DHCP process is usually called as DORA Process.

**Discover(D)** - The client broadcast a DHCPDISCOVER packet in order to locate a DHCP server in the network, in some cases that the DHCP server isn't in the same subnet of the client, you'll need to configure in your network devices (usually routers) a DHCP Relay Agent, in order to transfer the DHCPDISCOVER packet to the DHCP server.

**Offer (O) -** The DHCP server broadcast a DHCPOFFER packet to the client which includes an offer to use a unique IP address for the client.

**Request (R) -** The client broadcast a DHCPREQUEST packet to the DHCP server with an answer, and "asks" from the server to "rent" the unique address that the server offer to her.

**Acknowledgement (A) -** The DHCP server broadcast a DHCPACK packet to the client, in this packet the server acknowledge the request from the client to use the IP address, and provide to the client the IP address lease and other details such as DNS servers, default gateway, etc. if the server cannot provide the requested IP address or from some reasons the address is not valid the server sends DHCPNACK packet in stand of DHCPACK more information about DHCPNACK is under the specific subject - DHCPNACK.

Other DHCP Messages:

1.  **DHCPDECLINE** - If the client recognizes that the IP address that the DHCP server offer to her in use, the client will generate a new request to another IP address (in the DHCPREQUEST step).
2.  **DHCPRELEASE** - This message is commonly in use when the client "give up" and release IP address.
3.  **DHCPRENEW** - This is the request packet to renew and continue "renting" the IP address lease.
4.  **DHCPINFORM** - The DHCPINFORM is packet that the client send to the DHCP server in order to get more details from the server, for example DHCPINFORM can be send in order to locate another DHCP servers in the network.
5.  **DHCPNACK** \- The DHCPNACK or Negative Acknowledgment is a packet that the server sends if the IP address is not available in stand of DHCPACK (in use on other client for example) or the address is no longer valid. In case of DHCPNACK the client must restart the lease process in order to get an IP address

 **Installation** :

Debian and Ubuntu:

```
    # apt-get install dhcp3­-server
```

Redhat & Fedora:

```
    # yum install dhcp 
```

**Configuration**:

These mentioned below are the some basic configuration which need to configure to start the server by editing the /etc/dhcp/dhcpd.conf

```
    default­lease­time 500;
    
    max­lease­time 6000;
    
    subnet 10.1.1.0 netmask 255.255.255.0 {
    
      range 10.1.1.3 10.1.1.254;
    
      option domain­name­servers 10.1.1.1, 8.8.8.8;
    
      option routers 10.1.1.1;
    
    }
    
    subnet 192.168.0.0 netmask 255.255.0.0 {
    
    } 
```
And we can able to enter the host-specific configuration to keep assign single IP address to the host by DHCP server.

```
    host web­server {
    
      hardware ethernet 00:17:a4:c2:44:22;
    
      fixed­address 10.1.1.200;
    
    }
```