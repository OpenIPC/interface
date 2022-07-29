import m from 'mithril';
import socsIcons from '../../../../shared/icons/socs-info/socs-icons';

export const Soc = {
  view: ({ attrs }) => {
    const {
      stage,
      socModel,
      docs,
      uBoot,
      linux,
      sdk,
      loadAddress,
      buildStatus,
    } = attrs;

    m.trust(socsIcons[stage])

    return m('dl.soc', [
      m('dt.soc__cell', m.trust(socsIcons[stage])),
      m('dt.soc__cell', socModel),
      m('dt.soc__cell', docs),
      m('dt.soc__cell', uBoot),
      m('dt.soc__cell', linux),
      m('dt.soc__cell', sdk),
      m('dt.soc__cell', loadAddress),
      m('dt.soc__cell', buildStatus),
    ])
  },
}
