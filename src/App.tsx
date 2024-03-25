import Hero from "./component/Hero";
import Divider from "./component/Divider";
import Tokenomics from "./component/Tokenomics";
import Ready from "./component/Ready";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import { Box, Button, Container, Fab, Fade, useScrollTrigger } from "@mui/material";
import Header from "./component/Header";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#start');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior:'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App(props:Props) {
  return (
    <div className="wrapper">
      <Container maxWidth="lg" sx={{ position:'absolute',top:20,left:0,right:0 }}>
        <Header />
      </Container>
      <Hero />
      {/* <Community/> */}
      <div className="marque ">
        <Divider />
      </div>
      <section className="about" id="about">
        <img className="about-content" src="/assets/img/about/website 3.png" />
      </section>
      <div className="marque ">
        <Divider />
      </div>
      <Tokenomics />
      <Ready />
      <div className="marque ">
        <Divider />
      </div>
      {/* <Banner />
      <div className="marque ">
        <Divider />
      </div> */}
      <Footer />
      <Box>

      </Box>
      <ScrollTop {...props}>
        <Button size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Button>
      </ScrollTop>
    </div>
  );
}

export default App;
