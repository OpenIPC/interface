export default {
  introduction: {
    open: {
      p1: 'OpenIPC is a Linux operating system targeting IP cameras with processors from several manufacturers in order to replace that closed, opaque, insecure, often abandoned and unsupported firmware pre-installed by a vendor.',
      p2: 'OpenIPC Firmware comes as binary pre-compiled files for easy installation by end-user. Also, we provide full access to the source files for further development and improvement by any capable programmer willing to contribute to the project. OpenIPC source code is released under one of the most simple open source license agreements: [MIT License](https://opensource.org/licenses/MIT), giving users express permission to reuse code for any purpose, even as part of a proprietary software. We only ask you politely to contribute your improvements back to us. We would be grateful for any feedback and suggestions.',
      p3: 'OpenIPC Firmware utilizes [Buildroot](https://buildroot.org/) to build its Linux distro, and uses [Majestic streamer](https://github.com/OpenIPC/majestic) which while not yet fully open, provides unprecedented performance and capabilities for a wide range of hardware. The author of Majestic streamer is looking into possibilities to open-source the codebase after he secures enough funds to support further open development. You can [help](https://openipc.org/support-open-source) to make it happen sooner.',
    },
    why: {
      p1: 'First of all, OpenIPC Firmware brings you freedom. With OpenIPC on your camera you are the master of your streams. You have full access to the system and can control what, where, and how you want your camera to behave. There are no backdoors, no botnets, no crypto-mining malware, no keyloggers, no password sniffers, nothing you could possibly expect in a closed binary system with no access to its source code.',
      p2: 'As for the Firmware capabilities, we strive to provide universal support for a wide range of cameras, thus we are focused on basic functionality first, allowing end-users to upgrade their cameras\' firmware and stream video and audio (where supported) without too much hassle.',
      p3: 'We have some interesting bits though. Our Firmware supports IPEYE cloud storage, streaming video to Youtube and Telegram, using SOCKS5 proxy, setting up a Virtual Tunnel, and more. We also have a few projects focused on premium or specialized hardware, e.g. cameras for drones.'
    },
  },
};
