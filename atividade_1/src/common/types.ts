import { ReactNode } from "react";

export interface IMediaData {
  id?: number;
  title?: string;
  name?: string;
  poster_path?: string
  alt?: string
}

export interface IListMediaProps {
  mediaData?: IMediaData[]
}

export interface IProps {
  media: IMediaData
}

export interface IContactCardProps {
  Icon: React.FC;
  text: string;
}

export interface IMenuProps {
  children: ReactNode;
}
