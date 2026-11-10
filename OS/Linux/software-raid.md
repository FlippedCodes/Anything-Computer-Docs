# Software Raid

<!-- markdownlint-disable MD024 -->

## ZFS

### Status

#### Command

`zpool status`

#### Faulted drive

```bash
  pool: rpool
 state: DEGRADED
status: One or more devices are faulted in response to persistent errors.
        Sufficient replicas exist for the pool to continue functioning in a
        degraded state.
action: Replace the faulted device, or use 'zpool clear' to mark the device
        repaired.
  scan: scrub repaired 56K in 00:05:26 with 0 errors on Sun Jun  8 00:29:27 2025
config:

        NAME                                               STATE     READ WRITE CKSUM
        rpool                                              DEGRADED     0     0     0
          mirror-0                                         DEGRADED     0     0     0
            sda                                            ONLINE       0     0     0
            ata-********-part3                             FAULTED      0    21     7  too many errors
```

### Remove Drive

1. Get driven drive name: `zpool status`
1. Set it offline: `zpool offline POOLNAME DRIVENAME`
1. Clear errors to see if drive is offline: `zpool clear POOLNAME`
1. Check status: `zpool status`
1. Get drive name: `zpool status -L`
1. Make it blink: `while :; do smartctl -a /dev/DRIVENAME > /dev/null; done;`
1. Pull drive
1. Verify with `zpool status` --> should say "removed"

### Replace Drive

> [!Note]
> If you want to replace a boot drive or Proxmox boot drive, [please follow this guide](https://www.thomas-krenn.com/en/wiki/Boot-Device_Replacement_-_Change_of_Proxmox_ZFS_Mirror_Disk).

1. Get current drive list `lsblk`
1. Add drive to Server
1. Get new drive list `lsblk` and compare to find the new one
1. Get old drive name `zpool status`
1. Replace drive: `zpool replace POOLNAME OLD-DRIVE NEW-DRIVE`
1. Check status: `zpool status` and wait for replacement to complete (status at the top)

## MDADM

### Status

#### Overview

``` bash
$ cat /proc/mdstat
Personalities : [raid1] [raid0] [raid6] [raid5] [raid4] [raid10]
md1 : active raid1 sdb4[1] sda4[0]
      229272576 blocks super 1.2 [2/2] [UU]
      bitmap: 2/2 pages [8KB], 65536KB chunk

md0 : active raid1 sda2[0] sdb2[1]
      1022976 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

#### Individual Raid

``` bash
$ mdadm -D /dev/md0
/dev/md0:
           Version : 1.2
     Creation Time : Fri Aug 22 11:36:44 2025
        Raid Level : raid1
        Array Size : 1022976 (999.00 MiB 1047.53 MB)
     Used Dev Size : 1022976 (999.00 MiB 1047.53 MB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

       Update Time : Tue Nov 10 18:13:24 2026
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : resync

              Name : ---------------------:0  (local to host ---------------------)
              UUID : --------:--------:--------:--------
            Events : 59

    Number   Major   Minor   RaidDevice State
       0       8        2        0      active sync   /dev/sda2
       1       8       18        1      active sync   /dev/sdb2
```

### Add/Replace Drive

- Get drive letters: `lsblk`
- Get Raid: `cat /proc/mdstat`
- Add drive: `mdadm /dev/mdX -a /dev/sdaX`
