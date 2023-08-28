import React from 'react';

import Bar from './Bar';
import Cafe from './Cafe';
import China from './China';
import ETC from './ETC';
import Foreign from './Foreign';
import Fusion from './Fusion';
import Impossible from './Impossible';
import Japan from './Japan';
import Korea from './Korea';
import Possible from './Possible';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'KOREA':
      return Korea;
    case 'JAPAN':
      return Japan;
    case 'CHINA':
      return China;
    case 'FUSION':
      return Fusion;
    case 'FOREIGN':
      return Foreign;
    case 'CAFE':
      return Cafe;
    case 'BAR':
      return Bar;
    case 'ETC':
      return ETC;

    case 'POSSIBLE':
      return Possible;
    case 'IMPOSSIBLE':
      return Impossible;

    default:
      return null;
  }
};

interface MyIconProps {
  color: string;
  iconName: string;
}
//아이콘 종류와 색깔을 받아서 각각에 맞는 아이콘 호출
const FilterIcon: React.FC<MyIconProps> = ({ color, iconName }) => {
  const IconComponent = getIconComponent(iconName);
  if (!IconComponent) {
    return null;
  }

  return <IconComponent color={color} />;
};

export default FilterIcon;

export interface IconColor {
  color: string;
}
