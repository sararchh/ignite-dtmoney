import styled from 'styled-components';

export const Container = styled.div`
  display: grid; //sao tres grid em summary
  grid-template-columns: repeat(3, 1fr); //informa que nao tres colunas
  gap: 2rem; //espacamento entre cada um dos itens do grid
  margin-top: -10rem;

  div{ 
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{ 
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background{
      background: var(--green);
      color: #FFF;
    }
  }
`;