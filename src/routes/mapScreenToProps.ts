import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'directBox',
      unfocused: 'arrowLeft',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'arrowLeft',
      unfocused: 'arrowLeft',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'arrowLeft',
      unfocused: 'arrowLeft',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'arrowLeft',
      unfocused: 'arrowLeft',
    },
  },
};
