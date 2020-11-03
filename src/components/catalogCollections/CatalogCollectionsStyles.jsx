import styled from 'styled-components'

export const CatalogCollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: darkorange;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;