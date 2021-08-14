import React, { FC } from 'react';
import { HeroProps, useHistory } from 'umi';
interface FreeHeroItemProps {
  data: HeroProps;
  thisIndex: number;
  onItemHover: (thisIndex: number) => void;
  itemHover: number;
}
const FreeHeroItem: FC<FreeHeroItemProps> = ({
  data,
  thisIndex,
  onItemHover,
  itemHover,
}) => {
  if (!data || !data.ename) return null;

  const history = useHistory();

  return (
    <img
      onClick={() => history.push(`/herodetail/${data.ename}`)}
      onMouseEnter={() => {
        /* 当itemHover与thisIndex不同时，设置itemHover的值为thisIndex */
        itemHover !== thisIndex && onItemHover(thisIndex);
      }} //步骤7 需要
      style={{
        borderRadius: '5px',
        height: '69px',
        margin: '5px',
        cursor: 'pointer',
        width: itemHover === thisIndex ? '224px' : '69px',
      }}
      src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${
        data.ename
      }${itemHover === thisIndex ? '-freehover.png' : '.jpg'}`}
    />
  );
};
export default FreeHeroItem;
