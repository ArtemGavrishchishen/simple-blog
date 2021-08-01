import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.bgcolors.primary};
  min-height: 60px;
`

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.bgcolors.primary};
  min-height: 40px;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 1024px) {
    width: 960px;
  }
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`

const BaseLayout = ({ children }) => {
  return (
    <div id="root">
      <Head>
        <title>Simple blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Container>
          <Nav>
            <Link
              href={{
                pathname: '/',
              }}
            >
              <a>HOME</a>
            </Link>

            <Link
              href={{
                pathname: '/posts/new',
              }}
            >
              <a>ADD POST</a>
            </Link>
          </Nav>
        </Container>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer>
        <Container>Footer</Container>
      </Footer>
    </div>
  )
}

export default BaseLayout
