import * as React from 'react';
import styled from 'styled-components';

const BingGridContainer = styled.div`
`;

const BingGridRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BingoItemContainer = styled.div`
  width: 20vw;
  height: 20vw;
  display: inline-block;
  border: 1px solid black;
  font-size: 2.5vw;
`;

export interface IBingoItemData {
  tapped: boolean;
  text: string;
}

interface IBingItemProps extends IBingoItemData {
  onClick: () => void;
}

const BingoItem = ({text, tapped, onClick}: IBingItemProps) => (
  <BingoItemContainer onClick={onClick} style={{background: tapped ? 'red': 'white'}}>
    {text}
  </BingoItemContainer>
);

interface IBingoGridProps {
  width: number;
  height: number;
  data: IBingoItemData[];
  onClickItem: (i: number) => () => void;
}

export default ({width, height, data, onClickItem}: IBingoGridProps) => (
  <BingGridContainer>
    {Array.from({length: height}, (row, i) => (
      <BingGridRow>
        {Array.from({length: width}, (elem, j) =>
          <BingoItem {...data[i * width + j]} onClick={onClickItem(i * width + j)} />
        )}
      </BingGridRow>
    ))}
  </BingGridContainer>
);
