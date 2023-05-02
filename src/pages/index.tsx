import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
//import 'prismjs/themes/prism-tomorrow.css'
import Cabin from '../components/graphics/Cabin';
import Main from '../components/Main';
import ArchiveLinks from '../components/ArchiveLinks';
import Layout from '../components/Layout';
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout isLanding={true}>
        <Main>
          <ArchiveLinks
            style={{
              zIndex: 999,
              width: "75%",
              position: 'fixed',
              bottom: '33vh',
              left: 0,
              right: 0,
              margin: "auto",
              minWidth: '400px',
            }}
          />
          <Cabin styleWrapper={{ position: "fixed", top: "100px", maxWidth: '800px', width: '100%', right: 0, left: 0, margin: 'auto' }} />
        </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
