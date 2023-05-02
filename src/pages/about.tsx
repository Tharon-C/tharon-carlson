import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Text from '../components/Text';
import Main from '../components/Main';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout isMain={true}>
        <Banner />
        <Main>
         <Text as="h1">Greetings and Thank You</Text>
        </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About Me</title>
