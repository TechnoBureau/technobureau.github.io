---
layout: post
title: What is the Linux Swap Space ?. And what is the Use of ?
permalink: /tech/linux/what-is-the-linux-swap-space-and-what-is-the-use-of/
date: 2015-05-17 18:53:00.000000000 +05:30
category: linux
keywords: 
- linux
- swap
- swap space
description: "A space/partition in Linux to use when System running out of RAM(Random Access Memory) Memory. If the System RAM memory is full and then inactive pages in memory moved into swap space to run the program parallel without interrupting.It can help system to run the program for additional RAM Memory when RAM memory fully utilized but not an replacement of RAM Memory"
---

It act like a additional RAM memory on your system without actually adding additional RAM but isn't the case.Because RAM is extremely fast and ideal hardware on your system but Swap space would created on Hard disk and much slower than RAM.  
  
Also use prioritization to move from Memory into Swap Space in-order to leave more room/space on memory for more important items to run faster depend upon swapiness. A Higher swapiness means that items are more likely to be moved to SWAP space.For Example significant number of the pages used by an application during its start-up phase may only be used for initialization and then never used again. These are higher swapiness and it should likely more swapiness to move into SWAP Space in-order to free the memory to use other applications.  
  
Swap space is absolutely necessary when system going to hibernate. It is a destination of your memory contents when system going to hibernate. So without swap partition hibernate is not possible and it is very rare to use by users.A Linux system can perform well without a swap partition. And it doesn't help always and not an all kind of system. When System have 1GB of RAM and very minimal (5400rpm) speed of Hard Disk means absolutely Swap is waste one to use.  

  
### Recommended System Swap Space  
#### Amount of RAM in the System** -- Recommended Amount of Swap Space 

4GB of RAM or less -- a minimum of 2GB of swap space  
4GB to 16GB of RAM -- a minimum of 4GB of swap space  
16GB to 64GB of RAM -- a minimum of 8GB of swap space  
64GB to 256GB of RAM -- a minimum of 16GB of swap space  
256GB to 512GB of RAM -- a minimum of 32GB of swap space  
  
Note: Usually Swap space calculation would be double of Existing RAM.