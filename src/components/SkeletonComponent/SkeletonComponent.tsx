import React from 'react';
import ContentLoader from 'react-content-loader';

import { CARD_SIZE } from '../../helpers/constants';

export const SkeletonComponent: React.FC = () => (
  <ContentLoader
    speed={1.4}
    width={CARD_SIZE.WIDTH}
    height={CARD_SIZE.HEIGHT}
    viewBox="0 0 340 410"
    backgroundColor="#B0B0B0"
    foregroundColor="#F48A8A"
  >
    <rect x="20" y="20" rx="3" ry="3" width="300" height="250" />
    <rect x="110" y="290" rx="3" ry="3" width="120" height="20" />
    <rect x="40" y="320" rx="3" ry="3" width="260" height="13" />
    <rect x="40" y="340" rx="3" ry="3" width="260" height="13" />
    <rect x="40" y="360" rx="3" ry="3" width="260" height="13" />
    <rect x="145" y="380" rx="3" ry="3" width="50" height="20" />
  </ContentLoader>
);
