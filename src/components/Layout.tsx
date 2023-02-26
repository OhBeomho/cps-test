import { Link } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"

interface LayoutProps {
  children: ReactNode
}

export default function (props: LayoutProps) {
  const links = [1, 5, 10, 30].map((time, index) => (
    <Link to={`/?t=${time}`} key={index}>
      {time}초
    </Link>
  ))

  return (
    <Wrapper>
      <header>
        <Navbar>
          <Link to="/" className="brand">CPS Test</Link>
          <Links>{links}</Links>
          <a href="https:/github.com/OhBeomho/cps-test" target="_blank">
            GitHub
          </a>
        </Navbar>
      </header>
      <Main>{props.children}</Main>
      <Footer>
        <p>
          Made by&nbsp;
          <a href="https://github.com/OhBeomho" target="_blank">
            OhBeomho
          </a>
        </p>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);

  & .brand {
    color: black;
    font-size: 25px;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  background-color: lightgray;
  text-align: center;
`
