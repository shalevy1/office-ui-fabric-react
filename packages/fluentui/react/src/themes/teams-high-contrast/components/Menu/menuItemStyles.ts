import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { MenuVariables } from '../../../teams/components/Menu/menuVariables';
import { default as MenuItem, MenuItemProps, MenuItemState } from '../../../../components/Menu/MenuItem';
import { underlinedItem } from '../../../teams/components/Menu/menuItemStyles';
import submenuIndicatorUrl from '../../../teams/components/Menu/submenuIndicatorUrl';

type MenuItemPropsAndState = MenuItemProps & MenuItemState;

const menuItemStyles: ComponentSlotStylesPrepared<MenuItemPropsAndState, MenuVariables> = {
  wrapper: ({ props: p, variables: v }): ICSSInJSStyle => {
    return {
      [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
        backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
      },

      ':hover': {
        color: v.colorActive,

        ...(p.underlined && { color: v.color }),
        ...(!p.underlined && { background: v.backgroundColorFocus })
      },

      ...(p.active && {
        color: v.colorActive,

        ...(p.underlined && { color: v.color }),
        ...(!p.underlined && { background: v.backgroundColorActive })
      }),

      ...(p.isFromKeyboard && {
        color: v.colorActive,

        ...(!p.underlined && { background: v.backgroundColorFocus })
      }),

      ...(p.pointing &&
        p.vertical && {
          '::before': {
            display: 'none'
          }
        })
    };
  },

  root: ({ props, variables: v }): ICSSInJSStyle => {
    const { underlined, primary, active } = props;

    return {
      ...(underlined &&
        active && {
          color: v.color,
          ...(!primary && underlinedItem(v.color))
        })
    };
  }
};

export default menuItemStyles;
