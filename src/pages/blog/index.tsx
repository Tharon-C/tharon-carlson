import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from 'gatsby';
import Main from '../../components/Main';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import ArticleCard from '../../components/ArticleCard';
import Flex from '../../components/Flex';

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout isMain={true}>
        <Banner />
        <Main>
            <Flex justifyContent="center" flexWrap="wrap">
            {
              data.allMdx.nodes.map((node) =>
                <ArticleCard post={node}/>
              )
            }
            </Flex>
        </Main>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          description
          title
          slug
        }
      }
    }
  }
`
export default IndexPage


export const Head: HeadFC = () => <title>Articles</title>
