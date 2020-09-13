import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import PostListing from "../components/PostListing/PostListing";
// import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

const Landing = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="landing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Nav />
          <Header />
          <PostListing postEdges={postEdges} />
          {/* <Footer /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
