import m from 'mithril';
import { SoCs } from '../../ui/socs/socs';

import './supported-hardware.css';

export const SupportedHardware = {
  view: () =>
    m('.nav', m(SoCs)),
};
