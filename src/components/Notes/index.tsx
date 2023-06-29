import { Note } from '@/sharedTypes';
import * as Styled from './styles';
import { formatReadableDate } from '@/utils/truename';

export type NotesProps = {
  data: Note;
};
export const Notes = ({ data }: NotesProps) => {
  return (
    <Styled.NotesWrapper>
      <h3>{data.title}</h3>
      <p>Criado em: {formatReadableDate(data.created_at)}</p>
    </Styled.NotesWrapper>
  );
};
