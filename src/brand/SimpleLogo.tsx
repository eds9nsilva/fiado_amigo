import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { useAppTheme } from '@hooks';

interface Props {
    width?: number;
}

export function SimpleLogo({ width = 105 }: Props) {
    const { colors } = useAppTheme();
    return (
        <Svg
            width={width}
            height={(width * 24) / 105}
            viewBox="0 0  224 75"
            fill="none">
            <Path
                d="M10.3799 71.6879H8.31763V73.0001H10.3799V71.6879Z" fill="#24A19C"
            />
            <Path
                d="M52.3351 55.7289H28.5743V57.0411H52.3351V55.7289Z" fill="#24A19C"
            />
            <Path
                d="M26.8958 55.7289H24.9921V57.0411H26.8958V55.7289Z" fill="#24A19C"
            />
            <Path
                d="M40.537 62.6244H24.9921V63.9366H40.537V62.6244Z" fill="#24A19C"
            />
            <Path
                d="M52.3352 59.1768H49.2686V60.489H52.3352V59.1768Z" fill="#24A19C"
            />
            <Path
                d="M47.1235 59.1768H24.9921V60.489H47.1235V59.1768Z" fill="#24A19C"
            />
            <Path
                d="M63.8479 56.3849H62.1833V61.1532H63.8479V56.3849Z" fill="#24A19C"
            />
            <Path
                d="M63.848 47.8318H3.44067V70.4847H51.9122V69.1725H5.10525V49.144H62.1834V54.4789H63.848V47.8318Z"
                fill="#24A19C"
            />
            <Path
                d="M5.46462 40.0686L6.50415 43.9011L8.13193 43.6267L7.44047 41.0773L69.8319 30.5576L74.1299 46.3974L67.1327 47.5774V45.3166H45.4488L59.7525 42.9051L59.4042 41.6219L37.4893 45.3166H12.1093L11.4721 42.9695L67.2868 33.5585L68.7024 38.776L70.3303 38.5015L68.5665 32.0009L9.49621 41.9608L10.4071 45.3166H0V73H6.09699V71.6878H1.66457V46.6288H65.4681V62.8259H55.1672V68.831H56.8318V64.1381H64.4088L55.6335 71.6878H12.5212V73H56.3659L67.1327 63.7371V48.9191L73.4214 47.8587L68.1775 54.7667L69.6057 55.4405L76 47.017L71.1117 29L5.46462 40.0686Z"
                fill="#24A19C" />
            <Path d="M72.0975 45.0279L70.8328 40.3651L69.2048 40.6395L70.4696 45.3023L72.0975 45.0279Z" fill="#24A19C" />
            <Path
                d="M14.8517 58.5035H14.7936V55.7599H18.2254V54.4477H14.7936V51.7965H13.129V54.4476H13.0489C11.1402 54.4476 9.58696 55.6517 9.58696 57.1314C9.58696 58.6115 11.1402 59.8156 13.0489 59.8156H13.129V62.7379H9.55933V64.0501H13.129V66.52H14.7936V64.0501H14.8517C16.8245 64.0501 18.4293 62.806 18.4293 61.2767C18.4293 59.7475 16.8243 58.5035 14.8517 58.5035ZM13.0488 58.5035C12.0577 58.5035 11.2514 57.8882 11.2514 57.1316C11.2514 56.3752 12.0577 55.7599 13.0488 55.7599H13.1288V58.5035H13.0488ZM14.8517 62.7379H14.7936V59.8156H14.8517C15.9065 59.8156 16.7648 60.471 16.7648 61.2767C16.7648 62.0824 15.9063 62.7379 14.8517 62.7379Z"
                fill="#24A19C" />
            <Path
                d="M86.3332 73V18.6H97.9332V73H86.3332ZM80.5332 31V22H110.033V31H80.5332ZM86.3332 18.7C86.3332 12.9667 87.7999 8.5 90.7332 5.3C93.7332 2.03333 97.8665 0.399999 103.133 0.399999L104.433 9.9C103.1 9.9 101.933 10.2667 100.933 11C99.9999 11.6667 99.2665 12.6667 98.7332 14C98.1999 15.2667 97.9332 16.8333 97.9332 18.7H86.3332ZM108.933 11.6C108.267 11.0667 107.567 10.6667 106.833 10.4C106.1 10.0667 105.3 9.9 104.433 9.9L103.133 0.399999C104.933 0.399999 106.667 0.666664 108.333 1.19999C110.067 1.73333 111.733 2.6 113.333 3.8L108.933 11.6ZM123.722 73.8C121.722 73.8 120.056 73.1667 118.722 71.9C117.456 70.5667 116.822 68.9 116.822 66.9C116.822 64.9 117.456 63.2333 118.722 61.9C120.056 60.5 121.722 59.8 123.722 59.8C125.722 59.8 127.389 60.5 128.722 61.9C130.122 63.2333 130.822 64.9 130.822 66.9C130.822 68.9 130.122 70.5667 128.722 71.9C127.389 73.1667 125.722 73.8 123.722 73.8ZM168.846 73V39.1H180.446V73H168.846ZM156.846 74.5L158.346 65.5C160.479 65.5 162.312 64.9667 163.846 63.9C165.446 62.7667 166.679 61.1667 167.546 59.1C168.412 57.0333 168.846 54.6 168.846 51.8L174.046 51.3C174.046 55.7667 173.279 59.7667 171.746 63.3C170.212 66.7667 168.146 69.5 165.546 71.5C163.012 73.5 160.112 74.5 156.846 74.5ZM156.846 74.5C153.712 74.5 150.879 73.8 148.346 72.4C145.879 71 143.912 69.1 142.446 66.7C141.046 64.2333 140.346 61.4667 140.346 58.4L150.946 57.9C150.946 60.1 151.679 61.9333 153.146 63.4C154.679 64.8 156.412 65.5 158.346 65.5L156.846 74.5ZM140.346 58.4C140.346 55.3333 141.146 52.6 142.746 50.2C144.412 47.8 146.646 45.9 149.446 44.5C152.246 43.0333 155.379 42.3 158.846 42.3L159.846 50.3C157.246 50.3 155.112 51 153.446 52.4C151.779 53.8 150.946 55.6333 150.946 57.9L140.346 58.4ZM159.846 50.3L158.846 42.3H173.046V50.3H159.846ZM168.846 51.8V39.6H174.046V51.3L168.846 51.8ZM180.446 39.7H168.846C168.846 36.7667 168.046 34.4 166.446 32.6C164.912 30.8 162.912 29.9 160.446 29.9V20.4C164.246 20.4 167.646 21.2333 170.646 22.9C173.712 24.5667 176.112 26.8667 177.846 29.8C179.579 32.7333 180.446 36.0333 180.446 39.7ZM152.046 38.3L141.546 36.3C142.079 33.1 143.179 30.3333 144.846 28C146.579 25.6 148.779 23.7333 151.446 22.4C154.179 21.0667 157.179 20.4 160.446 20.4V29.9C158.312 29.9 156.446 30.6 154.846 32C153.312 33.4 152.379 35.5 152.046 38.3Z"
                fill="#24A19C" />
        </Svg>
    );
}