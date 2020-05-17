import React, { useState } from 'react';
import {SearchModal} from './searchModal';
import SearchIcon from './search.png';
import FormIcon from './form.png';

type Props = {};

export const Header: React.FC<Props> = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false); 
  
  return(
    <header className="header">
      <SearchModal isOpen={isShowModal} onRequestClose={() => setIsShowModal(false)}/>
      <div className="header__container">
        <div className="header__nav">
          <h1 className="header__title">Kyozai</h1>
          <div className="header__button_container">
            <button onClick={() => setIsShowModal(!isShowModal)} className="header__button"><img className="header__button__img" src={SearchIcon}/></button>
            <a className="header__button" href="https://docs.google.com/forms/d/e/1FAIpQLSe4_pRn-aQwu_dgGJAIn9jCOM7VJMTdLsyy9Yp17aPlQEN7kg/viewform" target="_blank"><img className="header__button__img" src={FormIcon}/></a>
          </div>
        </div>
        <h2 className="header__catchcopy">学べる教材を見つけよう。</h2>
        <p className="header__description">
          「学べる場所と学びたい人を繋げたい。」これまでは、優良コンテンツがネット上でリリースされても、
          それを知る方法がありませんでした。でももう安心です。
          kyozaiは、どこかの誰かが作ったハイクオリティな教材の情報がまとめて入手できる総合学習サイト。
          ひと目であらゆる学習コンテンツを知ることができます。
        </p>
      </div>
    </header>
  )
};

export default Header;
