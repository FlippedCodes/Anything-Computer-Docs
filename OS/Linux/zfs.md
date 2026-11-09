# ZFS

## Status

### Command

`zpool status`

### Faulted drive

```
$ zpool status
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

## Remove Drive

1. Get driven drive name: `zpool status`
1. Set it offline: `zpool offline POOLNAME DRIVENAME`
1. Clear errors to see if drive is offline: `zpool clear POOLNAME`
1. Check status: `zpool status`
1. Get drive name: `zpool status -L`
1. Make it blink: `while :; do smartctl -a /dev/DRIVENAME > /dev/null; done;`
1. Pull drive
1. Verify with `zpool status` --> should say "removed"

## Replace Drive

> [!Note]
> If you want to replace a boot drive or Proxmox boot drive, [please follow this guide](https://www.thomas-krenn.com/en/wiki/Boot-Device_Replacement_-_Change_of_Proxmox_ZFS_Mirror_Disk).

1. Get current drive list `lsblk`
1. Add drive to Server
1. Get new drive list `lsblk` and compare to find the new one
1. Get old drive name `zpool status`
1. Replace drive: `zpool replace POOLNAME OLD-DRIVE NEW-DRIVE`
1. Check status: `zpool status` and wait for replacement to complete (status at the top)
