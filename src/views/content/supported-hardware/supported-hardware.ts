import m from 'mithril';
import { SoCs } from '../../ui/socs/socs';
import socs from '../../../shared/constants/supported-hardware/socs';

import './supported-hardware.css';

export const SupportedHardware = {
  view: () => m(SoCs, { socs }),
};
