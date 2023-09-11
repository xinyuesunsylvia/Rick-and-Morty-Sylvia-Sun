export interface HeaderProps {
  title: string;
}
export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface CardListProps {
  currPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}
