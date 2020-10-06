import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

const SliceMasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SliceMasterStyles = styled.div`
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    height: 400px;
  }

  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }

  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 3) {
    sliceMasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        bio
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        slug {
          current
        }
      }
    }
  }
`;

const SliceMastersPage = ({ data, pageContext }) => {
  const sliceMasters = data.sliceMasters.nodes;

  return (
    <>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.sliceMasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="slice-masters"
      />
      <SliceMasterGrid>
        {sliceMasters.map((person) => (
          <SliceMasterStyles key={person.id}>
            <Link to={`/slice-master/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <div className="description">{person.bio}</div>
          </SliceMasterStyles>
        ))}
      </SliceMasterGrid>
    </>
  );
};

export default SliceMastersPage;
