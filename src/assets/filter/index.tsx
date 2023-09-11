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

const iconObject: Record<string, React.FC<IconColor>> = {
  KOREA: Korea,
  JAPAN: Japan,
  CHINA: China,
  FUSION: Fusion,
  FOREIGN: Foreign,
  CAFE: Cafe,
  BAR: Bar,
  ETC: ETC,
  POSSIBLE: Possible,
  IMPOSSIBLE: Impossible,
};

interface MyIconProps {
  color: string;
  iconName: string;
}

//아이콘 종류와 색깔을 받아서 각각에 맞는 아이콘 호출
const FilterIcon: React.FC<MyIconProps> = ({ color, iconName }) => {
  const IconComponent = iconObject[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent color={color} />;
};

export default FilterIcon;

export interface IconColor {
  color: string;
}
