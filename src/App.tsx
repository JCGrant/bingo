import * as React from 'react';
import BingoGrid, {IBingoItemData} from './BingoGrid';

const texts = [
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
  'Example Text',
];

const bingoLocalStorageKey = 'bingo-data';

const initialData = texts
  .map((text) => ({
    tapped: false,
    text,
  }))
  .sort(() => 0.5 - Math.random())
  ;

interface IAppState {
  data: IBingoItemData[];
}

class App extends React.Component<{}, IAppState> {
  public constructor() {
    super({});
    let data;
    const cachedData = localStorage.getItem(bingoLocalStorageKey);
    if (cachedData) {
      data = JSON.parse(cachedData);
    } else {
      data = initialData;
    }
    this.state = {data};
    localStorage.setItem(bingoLocalStorageKey, JSON.stringify(data));
  }
  public render() {
    return (
      <BingoGrid width={5} height={5} data={this.state.data} onClickItem={this.onClickBingoItem}/>
    );
  }

  private onClickBingoItem = (index: number) => () => {
    const data = this.state.data
      .map((d, i) => index === i ? {
        ...d,
        tapped: !d.tapped,
      }: d)
      ;

    this.setState({data});
    localStorage.setItem(bingoLocalStorageKey, JSON.stringify(data));
  }
}

export default App;
