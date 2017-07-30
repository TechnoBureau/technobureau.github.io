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


- To filter the send and receive packets from this host

{% highlight bash %}
# tcpdump host 192.168.1.1
//or
# tcpdump src 192.168.1.1 or dst 192.168.1.1
{% endhighlight %}

- To filter the packets which contain source host is 192.168.1.1

{% highlight bash %}
# tcpdump src 192.168.1.1
{% endhighlight %}

- To filter the packets which contain destination host is 192.168.1.1

{% highlight bash %}
# tcpdump dst 192.168.1.1
{% endhighlight %}

- To filter the packets on the particular network by using CIDR notation

{% highlight bash %}
# tcpdump net 192.168.1.0/24
{% endhighlight %}


### Protocol

If we need to filter the protocol based on the protocol name by using the below command on tcpdump.

- To filter the packets by using protocol name (arp)

{% highlight bash %}
# tcpdump arp
{% endhighlight %}

- To filter the packets by using protocol name (tcp)

{% highlight bash %}
# tcpdump tcp
{% endhighlight %}

- To get the packets of both udp and arp

{% highlight bash %}
# tcpdump arp or udp
{% endhighlight %}

### Ports

If we need to filter the packet capture by mentioning the ports number on the tcpdump by simply mentioning the port number or the range of ports .

- To filter SSH Packets by specifies the SSH Port

{% highlight bash %}
# tcpdump port 22
{% endhighlight %}

- To filter the packet which contain source port as 22

{% highlight bash %}
# tcpdump src port 22
{% endhighlight %}

- To filter the packet which contain destination port as 22

{% highlight bash %}
# tcpdump dst port 22
{% endhighlight %}

- To filter the packet which contain destination port as 53 and udp

{% highlight bash %}
# tcpdump src port 53 and udp
{% endhighlight %}

- To filter the packet which contain the port range as 10000-20000

{% highlight bash %}
# tcpdump portrange 10000-20000
{% endhighlight %}


### Interface

To Listen on the particular interface whereas multiple network interface available on the system by specifying the interface name on the system.

- To listen on the interface need to specify the interface name(usually eth0) after `-i` option.
{% highlight bash %}
# tcpdump -i eth0
{% endhighlight %}

- List out the available interfaces on the system along with the status by using `-D` option
{% highlight bash %}
# tcpdump -D
{% endhighlight %}


### Packet Number Limitation

For more simpler analysis we can able to limit the packet need to capture on tcpdump by mentioning the limit after `-c` option.

- To capture only 10 packets and stop
{% highlight bash %}
# tcpdump -c 10 
{% endhighlight %}

- To capture only 10 udp packets and stop the filter
{% highlight bash %}
# tcpdump udp -c 10 
{% endhighlight %}

- Display the 10 packet content in both hex and ASCII
{% highlight bash %}
# tcpdump -X -c 10 
{% endhighlight %}

### Capture on File
tcpdump normally would display the packet filter on the display but we can also capture the packets to static file instead of displaying on the screen to analysis later by using `-w` option on the command.

- Write the tcpdump packet capture on test.pcap
{% highlight bash %}
#tcpdump -w test.pcap
{% endhighlight %}

- Capture 10 arp packets which on eth0 interface .
{% highlight bash %}
#tcpdump -i eth0 arp -w test2.pcap
{% endhighlight %}

### Hostname Resolve
By default tcpdump resolve the hostname,ports into the naming format from numerical format.To avoid this resolve we can pass the option as `-n` or `-nn` on the tcpdump command.

- It Doesn't resolve the hostname on packet capture
{% highlight bash %}
#tcpdump -n
{% endhighlight %}

- It Doesn't resolve the hostname's or ports on the packet capture.
{% highlight bash %}
#tcpdump -nn
{% endhighlight %}

### Grouping
Grouping would used to build complex filter on tcpdump by using paranthesis. Also note that while using paranthesis or other special characters ,we need to use single quotes to ignore syntax error.

- Filter the network traffic from source host 192.168.1.2 and whether the destination port number or 8080 or 80.
{% highlight bash %}
# tcpdump 'src host 192.168.1.2 and ( dst port 8080 or 80)'
{% endhighlight %}

- Capture the first 5 packets of udp or arp which source host is 192.168.1.100 on test3.pcap file.
{% highlight bash %}
# tcpdump 'src host 192.168.1.100 and ( udp or arp)' -c 5 -w test.pcap
{% endhighlight %}