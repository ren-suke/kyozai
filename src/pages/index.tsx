import React from "react"
import Header from "../components/header"
import "../styles/import.scss"
import {Contents} from "../components/contents";

type Props = {};
const IndexPage: React.FC<Props> = () => {
  return(
    <>
      <Header />
      <Contents />
    </>
  )
}

export default IndexPage;
