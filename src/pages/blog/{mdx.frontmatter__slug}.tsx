import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import Text from '../../components/Text';
import Main from '../../components/Main';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Seo from "../../components/Seo";

const IndexPage: React.FC<PageProps> = ({ data, children }) => {
  return (
    <Layout isMain={true}>
        <Banner />
        <Main className="Content">
         <Text as="h1">{data.mdx.frontmatter.title}</Text>
          <Text as="h2">{data.mdx.frontmatter.description}</Text>
          <Text>{data.mdx.frontmatter.date}</Text>
          {children}
        </Main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = ({data}) => <Seo title={data.mdx.frontmatter.title} />
