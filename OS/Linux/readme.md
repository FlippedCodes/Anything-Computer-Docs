# Linux

## Ubuntu

### motd-news.service Permission denied

If you run checkmk you find all sorts of fun things happening with a stock installation of an OS. Like a service called `motd-news` failing. [Canonical forgot to adjust the permissions for a file it uses, and never really bothering fixing it](https://bugs.launchpad.net/ubuntu/+source/base-files/+bug/1803601):

```plain
systemd[3704]: motd-news.service: Failed to execute command: Permission denied
systemd[3704]: motd-news.service: Failed at step EXEC spawning /etc/update-motd.d/50-motd-news: Permission denied
systemd[1]: motd-news.service: Main process exited, code=exited, status=203/EXEC
systemd[1]: motd-news.service: Failed with result 'exit-code'.
systemd[1]: Failed to start Message of the Day.
```

#### The fix: Adjust permissions of the file

```bash
sudo -i
chmod +x /etc/update-motd.d/50-motd-news
systemctl daemon-reload
systemctl start motd-news.service
exit
```

## Debian

### List Packages

- List all installed packages: `dpkg -l`
- Search all installed packages: `dpkg -l | grep -i SEARCH`
