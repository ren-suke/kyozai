import React, {useState} from "react";
import {SearchItemsContext} from "../context/SearchItemsContext";
import Header from "../components/header";
import "../styles/import.scss";
import {Contents} from "../components/contents";

type Props = {};
const IndexPage: React.FC<Props> = () => {
  const [searchItems, setSearchItems] = useState<Array<string>>([])
  return(
    <SearchItemsContext.Provider value={{searchItems, setSearchItems}}>
      <Header />
      <Contents />
    </SearchItemsContext.Provider>
  )
}

export default IndexPage;
