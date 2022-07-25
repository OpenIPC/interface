import m from 'mithril';
import socs from '../../../shared/constants/supported-hardware/socs';

export const SupportedHardware = {
  view: () =>
    m('ul', 
      socs.map((soc) => m('li', soc)),
    )
};
