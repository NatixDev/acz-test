import React from "react";
import { Link } from "gatsby";
import Card from "../Card/Card";
import { Container, Title } from "./style";

const PostListing = ({ postEdges }) => {
  function getPostList() {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }

  const postList = getPostList();
  return (
    <Container>
      {
        /* Your post list here. */
        postList.slice(0, 3).map((post) => (
          <Card>
            <Link to={post.path} key={post.title}>
              <Title>{post.title}</Title>
            </Link>
          </Card>
        ))
      }
    </Container>
  );
};

export default PostListing;
