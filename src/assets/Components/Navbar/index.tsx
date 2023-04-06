import { Nav, Container } from "react-bootstrap"
import logo from "../../images/logo-horizontal.png"
import { LoginArea, LoginButton, NavBrand, NavItems, NavLinkAnchorTag } from "./styles"
import {UserCircle} from "phosphor-react"
export function Navbar(){
  return (
    <Container className="py-2">
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">
          <NavBrand src={logo} alt="logo"/>
        </Nav.Link>
      </Nav.Item>
      <NavItems>
      <Nav.Item as="li">
        <NavLinkAnchorTag href="/">Início</NavLinkAnchorTag>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLinkAnchorTag href="/">Quem Somos</NavLinkAnchorTag>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLinkAnchorTag href="/">Eventos</NavLinkAnchorTag>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLinkAnchorTag href="/">Contato</NavLinkAnchorTag>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLinkAnchorTag href="/">Rádio</NavLinkAnchorTag>
      </Nav.Item>
      </NavItems>

      <LoginArea>
        <LoginButton as="li">
          <Nav.Link className="text-light" href="/">Login</Nav.Link >
        </LoginButton>
        <Nav.Item as="li">
          <NavLinkAnchorTag href="/"><UserCircle size={38}/></NavLinkAnchorTag>
        </Nav.Item>
      </LoginArea>
      
    </Nav>
    </Container>
    

  )
}