import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/global.css"
import Layout from "../components/Layout"
import ClickBox from "../components/ClickBox"

export default function (props: PageProps) {
  const time = Number(new URLSearchParams(props.location.search).get("t") || 5)

  return (
    <Layout>
      <h1>CPS Test - {time}초</h1>
      {time > 0 ? <ClickBox time={time}></ClickBox> : time + "초는 올바른 입력이 아닙니다."}
    </Layout>
  )
}

export const Head: HeadFC = () => <title>CPS Test</title>
