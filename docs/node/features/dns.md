# Features: Dns

The node can run in DNS (nameserver) mode, which makes it respond to domain name resolutions and return the IPs of all outgoing (public available) IP addresses.

That's a way to ensure that anyone who runs public nodes, can become visible for participants (clients) in the network without manually editing seed lists.

Below is a sample `docker-compose.yml` you can run to host your DNS nameserver for dynamic IP lists:

```
version: "2.4"

volumes:
  blockchain:
    name: my-data

services:
  chain:
    container_name: my-chain
    image: blockcore/node-multi:latest
    # mem_limit: 6144m
    # cpus: 1.000
    command: ["-server=1", "-txindex=1", "-dnslistenport=5399", "-iprangefiltering=0", "-externalip=200.100.100.100", "-dnshostname=seed.my-chain.org", "-dnsnameserver=dns.seed.my-chain.org", "-dnsmailbox=admin@my-chain.org", "-dnsfullnode=1"]
    restart: unless-stopped
    stop_grace_period: 5m
    volumes:
      - blockchain:/root/.blockcore
    ports:
      - 4333:4333 # Your public node port
      - 53:5399/udp
      - 53:5399/tcp
```

You need the following entries on your domain:

Type: NS   
Domain: seed.my-chain.org   
Name: dns.seed.my-chain.org   

Type: A   
Domain: dns.seed.my-chain.org   
IP: 200.100.100.100   

You might also potentially need to do the following instructions as well:

#### Open port 53 on Linux
When setting up a DNS server on linux its required to open port 53
see this guid to open that port or follow the steps bellow
https://www.linuxuprising.com/2020/07/ubuntu-how-to-free-up-port-53-used-by.html

Open this file:
```
nano /etc/systemd/resolved.conf
```

Set this params:
```
DNS=1.1.1.1
DNSStubListener=no
```

Save the file.

Create a link:
```
ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
```

Reboot the machine