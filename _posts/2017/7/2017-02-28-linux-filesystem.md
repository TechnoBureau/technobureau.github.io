---
layout: post
title: complete reference about linux filesystem
permalink: /tech/linux/complete-reference-about-linux-filesystem/
date: 2017-02-28 23:09:20.000000000 +05:30
category: linux
keywords:
- linux-file-system
- filesystem
- overview of filesytem
- linux
description: "File System is a methods and structure of data that an operating system used to keep track the files and control the data are organized in the disk or partition. File system logically defined the files in the disk as *shareable*, unshareable, variable, static."
---

File system logically defined the files in the disk by mentioned below:

- **Sharable** - It can be accessed locally or by remote host.
- **unsharable** - Only It can be accessed locally.
- **Variable** - These files can able to change at any time such as documents.
- **Static** - Static Binaries which is do not change without administrator permission. It used to execute the program to the user.

### Types of File systems

1. Disk File Systems
2. Flash File Systems
3. Tape File Systems
4. Database File Systems
5. Transactional File Systems
6. Network File Systems
7. Shared disk File Systems
8. Special File Systems
9. Minimal File Systems


### Disk File Systems :

Ability of disk storage media to randomly address data in a short amount of time.Additional considerations include the speed
of accessing data following that initially requested and the anticipation that the following data may also be requested.
This permits multiple users (or processes) access to various data on the disk without regard to the sequential location of
the data. Some disk file systems are journaling file systems or versioning file systems.

Here are some of Disk File Systems are :

* FAT (FAT12, FAT16, FAT32),
* exFAT,
* NTFS,
* HFS and HFS+, HPFS,
* UFS,
* ext2, ext3, ext4,
* XFS,
* btrfs,
* ISO 9660,
* Files-11,
* Veritas File System,
* VMFS,
* ZFS,
* ReiserFS and UDF.

ISO 9660 and Universal Disk Format (UDF) are two common formats that target Compact Discs, DVDs and Blu-ray discs.

### Flash File Systems :

A flash file system considers the special abilities, performance and restrictions of flash memory devices. Frequently a disk
file system can use a flash memory device as the underlying storage media but it is much better to use a file system
specifically designed for a flash device.

### Tape File Systems :

A tape file system is a file system and tape format designed to store files on tape in a self-describing form. Magnetic 
tapes are sequential storage media with significantly longer random data access times than disks, posing challenges to the 
creation and efficient management of a general-purpose file system.

In a disk file system there is typically a master file directory, and a map of used and free data regions. Any file 
additions, changes, or removals require updating the directory and the used/free maps. Random access to data regions is 
measured in milliseconds so this system works well for disks.

### Database file systems :

Another concept for file management is the idea of a database-based file system. Instead of, or in addition to, hierarchical
structured management, files are identified by their characteristics, like type of file, topic, author, or similar rich
metadata.

### Transactional file systems :

Some programs need to update multiple files “all at once”. For example, a software installation may write program binaries, 
libraries, and configuration files. If the software installation fails, the program may be unusable. If the installation is 
upgrading a key system utility, such as the command shell, the entire system may be left in an unusable state.

Transaction processing introduces the isolation guarantee, which states that operations within a transaction are hidden from
other threads on the system until the transaction commits, and that interfering operations on the system will be properly 
serialized with the transaction. Transactions also provide the atomicity guarantee, ensuring that operations inside of a 
transaction are either all committed or the transaction can be aborted and the system discards all of its partial results. 
This means that if there is a crash or power failure, after recovery, the stored state will be consistent. Either the 
software will be completely installed or the failed installation will be completely rolled back, but an unusable partial 
install will not be left on the system.

Journaling file systems are one technique used to introduce transaction-level consistency to file system structures. Journal
transactions are not exposed to programs as part of the OS API; they are only used internally to ensure consistency at the 
granularity of a single system call.

### Network File Systems :

A network file system is a file system that acts as a client for a remote file access protocol, providing access to files on
a server. Programs using local interfaces can transparently create, manage and access hierarchical directories and files in 
remote network-connected computers.

Examples of network file systems include clients for the

* NFS
* AFS
* SMB protocols

And file-system-like clients for

* FTP
* WebDAV

### Shared disk file systems :

A shared disk file system is one in which a number of machines (usually servers) all have access to the same external disk 
subsystem (usually a SAN). The file system arbitrates access to that subsystem, preventing write collisions.

Examples include

* GFS2 from Red Hat,
* GPFS from IBM,
* SFS from DataPlow,
* CXFS from SGI and
* StorNext from Quantum Corporation.
