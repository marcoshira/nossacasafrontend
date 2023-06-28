import { Recipe } from '@/sharedTypes';
import * as Styled from './styles';

export type RecipeCardProps = {
  data: Recipe;
};
export const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <Styled.RecipeCardWrapper>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Styled.RecipeCardWrapper>
  );
};
