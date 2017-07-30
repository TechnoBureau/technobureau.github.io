---
layout: post
title: Tcpdump Command in detailed with examples
category: Linux
author : Ganapathi Chidambaram
date : 2017-07-29 21:05:00
tags: 
- tcpdump
- Linux
- packet sniffer
- network analysis
---

TCPDUMP is a command line tool in linux to capture the network on the system to analysis the network flow of the pc in the network.

With various options we can able to filter the network capture on the system to analysis more easily.

Below are the some of necessary filter as we are going to see which we usually required to filter the network packet to analysis.
    
- Host
- Protocol
- Ports
- Interface
- Packet Number Limitation
- Capture on File
- Hostname Resolve

### Host
    
If we need to look for the traffic based on the IP address then mentioned below command used to filter the network packets based on the host.


{% highlight bash %}

// To filter the send and receive packets from this host
# tcpdump host 192.168.1.1
//or
# tcpdump src 192.168.1.1 or dst 192.168.1.1
{% endhighlight %}


{% highlight bash %}
// To filter the packets which contain source host is 192.168.1.1
# tcpdump src 192.168.1.1
{% endhighlight %}


{% highlight bash %}
// To filter the packets which contain destination host is 192.168.1.1
# tcpdump dst 192.168.1.1
{% endhighlight %}


{% highlight bash %}
    // To filter the packets on the particular network by using CIDR notation
    # tcpdump net 192.168.1.0/24
{% endhighlight %}


### Protocol

If we need to filter the protocol based on the protocol name by using the below command on tcpdump.

{% highlight bash %}

// To filter the packets by using protocol name (arp)
# tcpdump arp
{% endhighlight %}

{% highlight bash %}        
// To filter the packets by using protocol name (tcp)
# tcpdump tcp 
{% endhighlight %}


{% highlight bash %}
// To get the packets of both udp and arp
# tcpdump arp or udp

{% endhighlight %}

### Ports

If we need to filter the packet capture by mentioning the ports number on the tcpdump by simply mentioning the port number or the range of ports .

{% highlight bash %}

    // To filter SSH Packets by specifies the SSH Port
    # tcpdump port 22
{% endhighlight %}

{% highlight bash %}
    // To filter the packet which contain source port as 22
    # tcpdump src port 22
{% endhighlight %}


{% highlight bash %}
    // To filter the packet which contain destination port as 22
    # tcpdump dst port 22
{% endhighlight %}


{% highlight bash %}
    // To filter the packet which contain destination port as 53 and udp
    # tcpdump src port 53 and udp
{% endhighlight %}


{% highlight bash %}
    // To filter the packet which contain the port range as 10000-20000
    # tcpdump portrange 10000-20000

{% endhighlight %}


### Interface