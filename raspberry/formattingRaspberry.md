# How to format a Raspberry Pi and install various software
------

## Installing the OS (Raspbian)
First of all, you need an SD card that fits in the Raspberry Pi.

To achieve the installation, we follow the tutorial on this link: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md

 - Go on https://www.raspberrypi.org/downloads/raspbian/ and download the "Raspbian Stretch Lite" as ZIP.

 - Use the `lsblk` command to see all disks
 - Insert your SD card in the computer
 - Run `lsblk` again. Your SD card is the device that just appeared. Check the size to be sure.
 - If the card is mounted somewhere (you see that in the rightmost column, blank means that the card is not mounted), unmount it using `umount`.
 - To copy the image to the SD card, run 

   `dd bs=4M if=2018-11-13-raspbian-stretch.img of=/dev/sdX status=progress conv=fsync`

   `if` is the input file, `of` is the output file. `status=progress` allows to see the progress of the copy operation.

   __CAUTION:__ don't make mistakes in the `of`, because you can overwrite your computer's hard drive.

## Logging in (default)
__username:__ pi  
__password:__ raspberry

## Enable SSH
 - `raspi-config`
 - 5 Interfacing Options
 - P2 SSH

 ## Enable WIFI
 https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

 These commands are supposed to work for Raspberry Pi 3 and Zero W.

 - `sudo apt-get install dnsmasq hostapd`
 - Then turn the new software off  
   `sudo systemctl stop dnsmasq`  
   `sudo systemctl stop hostapd`
 - Then reboot  
   `sudo reboot`
 - Edit the dhcpcd configuration file with:  
   `sudo nano /etc/dhcpcd.conf`
 - Add to the end of the file
   ```
    interface wlan0
      static ip_address=172.16.1.1/24
      nohook wpa_supplicant
   ```
 - restart the dhcpcd daemon and set up the new wlan0   configuration:  
  `sudo service dhcpcd restart`

### Configuring the DHCP server (dnsmasq)
- We are going to write a configuration file from scratch
- `sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig`  
- Edit the file with  
  `sudo nano /etc/dnsmasq.conf`  
  and paste that in it
   ```
   interface=wlan0  # Use the require wireless interface - usually wlan0
     dhcp-range=172.16.1.100,172.16.1.200,255.255.255.0,24h
   ```

### Configuring access point host software (hostapd)
- We are going to write a configuration file from scratch 
- Edit the file with  
  `sudo nano /etc/hostapd/hostapd.conf`  
  and paste that in it
   ```
    interface=wlan0
    driver=nl80211
    ssid=CylinderControl
    hw_mode=g
    channel=7
    wmm_enabled=0
    macaddr_acl=0
    auth_algs=1
    ignore_broadcast_ssid=0
    wpa=2
    wpa_passphrase=CylinderControl
    wpa_key_mgmt=WPA-PSK
    wpa_pairwise=TKIP
    rsn_pairwise=CCMP
   ```
- Tell the system where to find the file:
  `sudo nano /etc/default/hostapd`
- replace the line with `#DAEMON_CONF` and replace by
  `DAEMON_CONF="/etc/hostapd/hostapd.conf"`

### Starting it
- Turn these on again:  
   `sudo systemctl start dnsmasq`  
   `sudo systemctl start hostapd`
- To add masquerade and rooting, see tutorial
- Reboot
- Connect to the WiFi from a wireless device and try to ssh the Raspberry with  
  `ssh pi@172.16.1.1`

## Various installs
Run `apt-get update`

### GitHub
As root:  
`apt-get instalchipl git`

### Node.js and npm
As root:  
`apt-get install nodejs npm`

### I2C
To enable I2C and serial and access to other paramters, use the `raspi-config` command.

Packages to manage I2C:  
`sudo apt-get install python-sm bus`  
`sudo apt-get install i2c-tools`

To scan the I2C bus:  
`i2cdetect -y 1`