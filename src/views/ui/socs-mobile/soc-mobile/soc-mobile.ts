import m from 'mithril';
import socsIcons from '../../../../shared/icons/socs-info/socs-icons';

import './soc-mobile.css';

export const SocMobile = {
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

    return m('li.soc-mobile', [
      m('dl.soc-mobile__content',
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'Stage'),
          m('dd.soc-mobile__descr', m.trust(socsIcons[stage.toLowerCase()])),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'SoC Model'),
          m('dd.soc-mobile__descr', socModel),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'Docs'),
          m('dd.soc-mobile__descr', docs ? m.trust(socsIcons.infoFrame) : m.trust(socsIcons.emptyFrame)),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'U-Boot'),
          m('dd.soc-mobile__descr', uBoot ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'Linux'),
          m('dd.soc-mobile__descr', linux ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'SDK'),
          m('dd.soc-mobile__descr', sdk ? m.trust(socsIcons.downArrowFrame) : m.trust(socsIcons.emptyFrame)),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'Load address'),
          m('dd.soc-mobile__descr', loadAddress),
        ),
        m('.soc-mobile__wrapper',
          m('dt.soc-mobile__term', 'Build status'),
          m('dd.soc-mobile__descr', 'buildStatus'),
        ),
      ),
    ]);
  },
}
