import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;

    label {
      display: grid;
      grid-gap: 1rem;

      &:not([for="name"]) {
        margin-top: 1rem;
      }
    }

    .pizza-wrapper {
      display: grid;
      grid-gap: var(--pizza-gap);

      @media (min-width: 601px) {
        --pizza-gap: 1rem;
      }

      @media (max-width: 600px) {
        --pizza-gap: 3rem;
      }
    }

    .maple-syrup {
      display: none;
    }

    &.menu,
    &.order {
      grid-column: span 1;
    }

    @media (max-width: 900px) {
      &.menu,
      &.order {
        grid-column: span 2;
      }
    }
`;

export default OrderStyles;
