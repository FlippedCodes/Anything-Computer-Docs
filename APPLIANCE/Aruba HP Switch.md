# Aruba HP Switch

[Source article (German)](https://sysadms.de/2018/10/16/aruba-switches-fuer-802-1x-authentifizierung-konfigurieren/)

## Radius - 802.1X

### Current Radius configuration

`show radius`

### Server Setup

<!-- tabs:start -->

#### **Add Server**

1. Enter configuration mode

`config`

1. Add the new Radius server

`radius-server host SERVERIP key PASSWORD`

1. Optionally, set the radius timeout and retransmit values

`radius-server timeout 5`

`radius-server retransmit 3`

1. Exit configuration mode

`end`

1. Save the configuration

`wr mem`

#### **Remove Server**

1. Enter configuration mode

`config`

1. Remove the old Radius server configuration

`no radius-server host SERVERIP`

1. Exit configuration mode

`end`

1. Save the configuration

`wr mem`

#### Enable 802.1X Globally

1. Enter configuration mode

`configure terminal`

1. Enable 802.1X globally

`aaa port-access authenticator active`

1. Exit configuration mode

`end`

1. Save the configuration

`write memory`

<!-- tabs:end -->

### Port Setup

<!-- tabs:start -->

#### **Add Port**

1. Enter configuration mode

`config`

1. Enter interface configuration mode for the specific port - optional; never used myself

`interface 1/1/1`

1. Enable 802.1X authentication on the port

`aaa port-access authenticator PORTNUMBER`

1. Configure Guest VLAN

`aaa port-access authenticator PORTNUMBER unauth-vid VID`

1. Configure VLAN if not provided via Radius

`aaa port-access authenticator PORTNUMBER auth-vid VID`

1. Set the port to controlled-direction in - optional; never used myself

`aaa port-access authenticator controlled-direction in`

1. Exit interface configuration mode - only needed if the "interfce" command has ran

`exit`

1. Exit configuration mode

`end`

1. Save the configuration

`wr mem`

#### **Remove Port**

1. Enter configuration mode

`config`

1. disable 802.1X authentication on the port

`no aaa port-access authenticator PORTNUMBER`

1. Exit configuration mode

`end`

1. Save the configuration

`wr mem`

<!-- tabs:end -->
