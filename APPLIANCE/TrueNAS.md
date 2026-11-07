# TrueNAS

## Session mgmt

[Source article](https://www.truenas.com/community/resources/smb-tips-and-tricks.15/)

### Finding out who has a file open and then closing it

Periodically, at work, I get approached, if a colleague has a file open, as they can't edit it. There are several methods to view open files.

<!-- tabs:start -->

#### **Locally in FreeNAS**

1. Type `smbstatus -L` in CLI of FreeNAS
1. Note the Pid of the samba session that has the file open.
1. Type `pkill <Pid>` in FreeNAS CLI.

### **Computer Management in Windows Client**

1. In windows, right-click <kbd>Computer Management</kbd> and click <kbd>Run as Administrator</kbd>
2. Enter admin credentials, then right-click on your computer in the left pane
3. Click <kbd>Connect to another computer</kbd>. Enter the address of your FreeNAS server
4. In Computer Management, expand <kbd>System Tools</kbd> → <kbd>Shared Folders</kbd> → <kbd>Open Files</kbd>
5. Find the file you want to close, right-click on it, and click <kbd>Close Open File</kbd>

<!-- tabs:end -->

