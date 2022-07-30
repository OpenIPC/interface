import m from 'mithril';
import socsIcons from '../../../../shared/icons/socs-info/socs-icons';

import './soc.css';

export const Soc = {
  view: ({ attrs: { soc }}) => {
    const {
      stage,
      socModel,
      docs,
      uBoot,
      linux,
      sdk,
      loadAddress,
      buildStatus,
    } = soc;

    return m('ul.soc', [
      m('li.soc__cell', m.trust(socsIcons[stage.toLowerCase()])),
      m('li.soc__cell', socModel),
      m('li.soc__cell',
        docs ? m.trust(socsIcons.infoFrame) : m.trust(socsIcons.emptyFrame)
      ),
      m('li.soc__cell',
        uBoot ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)
      ),
      m('li.soc__cell',
        linux ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)
      ),
      m('li.soc__cell',
        sdk ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)
      ),
      m('li.soc__cell', loadAddress),
      m('li.soc__cell', 'buildStatus'),
    ])
  },
}
