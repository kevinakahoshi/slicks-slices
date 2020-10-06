import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        image
        name
        price
        rating {
          average
          reviews
        }
      }
    }
  }
`;

const BeerStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 1.5rem;
    color: black;
    margin-bottom: 2rem;
  }
`;

const BeerPage = ({ data }) => {
  const { beers } = data;

  return (
    <>
      <h2 className="center">
        We have {beers.nodes.length} beers available. Dine in only!
      </h2>
      <BeerStyles>
        {beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);

          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3 className="beer-title">{beer.name}</h3>
              <p>{beer.price}</p>
              <p title={`${rating} out of 5 stars`}>
                {`⭐️`.repeat(rating)}
                <span
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                >
                  {`⭐️`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerStyles>
    </>
  );
};

export default BeerPage;
