---
title: "How to Mount a qcow2 Disk Image"
slug: Linux/how_to_mount_qcow2_image_in_linux
comments: true
category: linux
tags:
  - Learn
  - Linux
  - qcow2
  - mount qcow2
---

## Introduction

Mounting a qcow2 disk image on your host server allows you to perform various operations such as password resets, file editing, or data recovery without running the virtual machine. This guide provides step-by-step instructions on how to mount a qcow2 disk image, enabling you to access and manipulate its contents directly on the host server.

## Prerequisites

Before proceeding with the steps, ensure that you have the following:

- Administrative access to the host server.
- The qemu-nbd tool installed on the host server.
- The qcow2 disk image file you want to mount.

## Mounting a qcow2 Disk Image

Follow these steps to mount a qcow2 disk image on your host server:

1. Enable NBD (Network Block Device) on the host server by running the following command:

    ``` {.console}
    modprobe nbd max_part=8
    ```

2. Connect the qcow2 disk image file as a network block device using the qemu-nbd command. Replace /path/to/image.qcow2 with the actual path to your qcow2 disk image file:

    ``` {.console}
    qemu-nbd --connect=/dev/nbd0 /path/to/image.qcow2
    ```

3. Identify the partitions within the virtual machine disk image by running the fdisk command:

    ``` {.console}
    fdisk /dev/nbd0 -l
    ```

    This will display a list of partitions present in the qcow2 disk image.

4. Choose the partition you want to mount from the virtual machine disk image. For example, to mount the first partition (usually /dev/nbd0p1), create a mount point directory (e.g., /mnt/somepoint) and run the following command:

    ``` {.console}
    mount /dev/nbd0p1 /mnt/somepoint/
    ```

    If you encounter an error like "unknown filesystem type 'LVM2_member'," follow the instructions below:

    * Load the dm-mod kernel module by running the command

        ``` {.console}
        modprobe dm-mod
        ```

    * Use the **vgdisplay** command to obtain the UUID of the volume group (VG), and then execute the **vgrename** command to rename it

        ``` {.console}
        vgdisplay
        vgrename vg_UUID new_vgname
        ```

    * Mount the LVM physical volume (PV) to the mount point using the new VG name

        ``` {.console}
        mount /dev/new_vgname/root /mnt/
        ```

5. Once you have finished working with the mounted partition, unmount it by running the following command:

    ``` {.console}
    umount /mnt/somepoint/
    ```

6. Disconnect the qcow2 disk image from the network block device by running the following command:

    ``` {.console}
    qemu-nbd --disconnect /dev/nbd0
    ```

7. If you no longer need the NBD module, unload it from the kernel by running the following command:

    ``` {.console}
    rmmod nbd
    ```

## Conclusion

Mounting a qcow2 disk image allows you to access and modify its contents directly on the host server, providing flexibility for various maintenance and recovery tasks. By following the steps outlined in this guide, you can successfully mount a qcow2 disk image and perform necessary operations without running the associated virtual machine.





