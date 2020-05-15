import React from 'react';
import { Link } from 'gatsby';
import SearchIcon from '../styles/search.svg';

type Props = {};

export const Header: React.FC<Props> = () => {
  return(
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <h1 className="header__title">Kyozai</h1>
          <div className="header__button_container">
            <button className="header__button"><img className="header__button__img" src={SearchIcon}/></button>
            <a className="header__button" href="https://google.com">お問い合わせ</a>
          </div>
        </div>
        <h2 className="header__catchcopy">学べる教材を見つけよう。</h2>
        <p className="header__description">「学べる場所と学びたい人を繋げたい。（仮）」そんな思いから高校生3人が制作した、<br/>あらゆるジャンルの無料教材情報が入手できる総合学習サイトです。<br/>「　」ボタンをクリックして、学びたい教材のタグを検索するだけで、教材一覧が表示されます。<br/>「お問い合わせ（仮）」ボタンからは、あなたのオススメの教材を掲示する要望を出す事ができます。
        </p>
      </div>
    </header>
  )
};

export default Header;
