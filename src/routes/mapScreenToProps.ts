import { IconProps } from '@components';
import { AppTabBottomTabParamList } from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Pendências',
    icon: {
      focused: 'dollarSquare',
    },
  },
  FavoriteScreen: {
    label: 'Produtos',
    icon: {
      focused: 'shopAdd',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'userSquare',
    },
  },
};
