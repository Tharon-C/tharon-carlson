import React from 'react'
import { Link } from 'gatsby'
import Button from './Button'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import Text, { P } from './Text'

const Card = styled.div`
  ${layout}
  ${space}
`

const ArticleCard = ({post, ...rest}) => (
  <Card { ...rest } p={[1, 1, 2]} as="article">
    <header>
      <Link
        to={`/blog/${post.frontmatter.slug}`}
      >
        <Text fontSize={5} mb={1} color="black">
          {post.frontmatter.title}
        </Text>
      </Link>
      <Text fontSize={3} mb={3}>
        {post.frontmatter.date}
      </Text>
    </header>
    <P mb={3}>
      {post.excerpt}
    </P>
    <Button to={`/blog/${post.frontmatter.slug}`}>
      Keep Reading →
    </Button>
  </Card>
)

export default ArticleCard
