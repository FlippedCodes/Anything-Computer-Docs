# SecurePoint

## Cluster

### Get on 2nd Firewall

To pull this off you need to know the network for the hot wire.

`ssh -L 11115:IP-FIRST-FIREWALL:11115 -L 11116:IP-SECOND-FIREWALL:11115 root@IP-FIRST-FIREWALL-BUT-ON-YOUR-NETWORK`

This way you can open up the firewall dashboard on https://localhost:11116
