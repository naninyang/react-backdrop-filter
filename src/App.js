import styled from "@emotion/styled";
import "./index.sass";

const Container = styled.div({
  display: "flex",
  flexDirection: "column"
});

const Header = styled.header({
  right: 0,
  left: 0,
  zIndex: 1,
  backdropFilter: "saturate(180%) blur(20px)",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "72px",
  color: "#fff",
  "& h1, & h2": {
    margin: 0,
    width: "100%",
    textAlign: "center"
  },
  "& h1": {
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: ".4em 0 .1em",
    fontSize: "1.5rem",
    fontWeight: "lighter"
  },
  "& h2": {
    backgroundColor: "rgba(255,255,255,0.72)",
    padding: ".1em 0 .3em",
    fontSize: "1.2rem",
    color: "#000"
  }
});

const Main = styled.main({
  padding: "1em"
});

const Section = styled.section({
  "& img": {
    maxWidth: "100%"
  }
});

function App() {
  return (
    <Container>
      <Header>
        <h1>React Backdrop Filter</h1>
        <h2>Image origin source by Apple</h2>
      </Header>
      <Main>
        <Section>
          <picture>
            <img
              src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/display/screen_xdr__fksbj0zqvtu2_large.jpg"
              alt=""
            />
            <p>Blackmagic Design DaVinci Resolve</p>
          </picture>
        </Section>
        <Section>
          <picture>
            <img
              src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/macos/screen_macos__fuhzca3c0wia_large.jpg"
              alt=""
            />
            <p>Beauty and the beast</p>
          </picture>
        </Section>
      </Main>
    </Container>
  );
}

export default App;
