import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { IntroductionMainLink } from '../../ui/links/introduction-main-links/introduction-main-link';
import { Alliance } from './alliance/alliance';
import { Supporters } from './supporters/supporters';

import './introduction.css';

export const Introduction = {
  view: ({ attrs: { titles }}) =>
    m('.introduction', [
      m('.introduction__main', [
        m(ParagraphTitle, { text: titles.open }),
        m('p.main-text', 'OpenIPC is a Linux operating system targeting IP cameras with processors from several manufacturers in order to replace that closed, opaque, insecure, often abandoned and unsupported firmware pre-installed by a vendor.'),
        m('p.main-text', 'OpenIPC Firmware comes as binary pre-compiled files for easy installation by end-user. Also, we provide full access to the source files for further development and improvement by any capable programmer willing to contribute to the project. OpenIPC source code is released under one of the most simple open source license agreements: MIT License, giving users express permission to reuse code for any purpose, even as part of a proprietary software. We only ask you politely to contribute your improvements back to us. We would be grateful for any feedback and suggestions.'),
        m(IntroductionMainLink, { label: 'Precompiled binary files' }),
        m(IntroductionMainLink, { label: 'Source code on GitHub' }),
        m('p.main-text', 'OpenIPC Firmware utilizes Buildroot to build its Linux distro, and uses Majestic streamer which while not yet fully open, provides unprecedented performance and capabilities for a wide range of hardware. The author of Majestic streamer is looking into possibilities to open-source the codebase after he secures enough funds to support further open development. You can help to make it happen sooner.'),
        m(ParagraphTitle, { text: titles.why }),
        m('p.main-text', 'First of all, OpenIPC Firmware brings you freedom. With OpenIPC on your camera you are the master of your streams. You have full access to the system and can control what, where, and how you want your camera to behave. There are no backdoors, no botnets, no crypto-mining malware, no keyloggers, no password sniffers, nothing you could possibly expect in a closed binary system with no access to its source code.'),
        m('p.main-text', 'As for the Firmware capabilities, we strive to provide universal support for a wide range of cameras, thus we are focused on basic functionality first, allowing end-users to upgrade their cameras\' firmware and stream video and audio (where supported) without too much hassle.'),
        m('p.main-text', 'We have some interesting bits though. Our Firmware supports IPEYE cloud storage, streaming video to Youtube and Telegram, using SOCKS5 proxy, setting up a Virtual Tunnel, and more. We also have a few projects focused on premium or specialized hardware, e.g. cameras for drones.'),
        ]),
      m('.introduction__collab', [
        m(Alliance, { text: titles.alliance }),
        m(Supporters, { text: titles.supporters }),
      ]),
    ]),
};
