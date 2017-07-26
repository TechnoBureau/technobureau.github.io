---
layout: post
title: TOP Command Overview
---

TOP is a tool monitor the process running on the server and able to see the top of the list with their attributes like CPU%, Memory utilization, Process ID etc.

Each Set of Rows contain displays some set of information about the system realtime.

#### First Row : Load Average

Mentioned below are the list of values displays on the first row of the TOP Command output.

- Current Time
- Up time of the machine.
- User's Session current loggedin on the machine.
- Average Load values of the machine in terms of last one minute,five minute and 15 minutes.

#### Second Row : Task count

- Total Number of Process running
- Number of Processes accessing resources
- Number of Sleeping Processes
- Number of Stopped Processes 
- Processes waiting to be stopped from the parent process (0 zombie)

#### Third Row : CPU Percentage

The third line indicates how the cpu is used. If you sum up all the percentages the total will be 100% of the cpu. Let’s see what these values indicate in order:

- Percentage of the CPU for user processes (%us)
- Percentage of the CPU for system processes (%sy)
- Percentage of the CPU processes with priority upgrade nice (%ni)
- Percentage of the CPU not used (%id)
- Percentage of the CPU processes waiting for I/O operations(%wa)
- Percentage of the CPU serving hardware interrupts (% hi — Hardware IRQ
- Percentage of the CPU serving software interrupts (% si — Software Interrupts
- The amount of CPU ‘stolen’ from this virtual machine by the hypervisor for other tasks (such as running another virtual machine) this will be 0 on desktop and server without Virtual machine. (%st — Steal Time)

#### Fourth & Fifth Row : Memory Usage

- Total Memory available on the server
- Used Memory available on the server
- Free Memory which is available currently to use
- Buffered Memory used on the server

#### Remaining Rows : Process List

Process list ordered by CPU usage (as default) there are the processes currently in use. Let’s see what information we can get in the different columns:

- PID – ID of the process
- USER – The user that is the owner of the process
- PR – priority of the process 
- NI – The “NICE” value of the process
- VIRT – virtual memory used by the process
- RES – physical memory used from the process
- SHR – shared memory of the process
- S – indicates the status of the process: S=sleep R=running Z=zombie (S)
- %CPU – This is the percentage of CPU used by this process
- %MEM – This is the percentage of RAM used by the process
- TIME+ –This is the total time of activity of this process 
- COMMAND – And this is the name of the process