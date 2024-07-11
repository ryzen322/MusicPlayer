export interface Links {
  icon: React.ReactNode;
  heading: string;
  to: "/" | "categories" | "library" | "settings";
}

export interface Images {
  height?: number;
  url: string;
  width?: number;
}

export type FeatureObj = {
  id: string;
  uri: string;
  name: string;
  images: Images[];
};

export interface LinksArray extends Links {
  id: number;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export type External_urls = {
  spotify: string;
};

export type Owner = {
  external_urls: External_urls;
  display_name?: string;
  href: string;
  id: string;
  type: string;
  uri: string;
};
export type Artist = {
  external_urls: External_urls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type RecommenObject = {
  album_type: string;
  artists: Artist[];
  available_markets?: string[] | undefined;
  external_urls: External_urls;
  href: string;
  images: Images[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  id: string;
};

export interface PlayList {
  description: string | null;
  collaborative: boolean;
  external_urls: External_urls;
  href: string;
  id: string;
  name: string;
  images: Images[];
  owner: Owner;
  primary_color?: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}
interface External_ids {
  isrc?: string;
}
export interface Recommend {
  local: PlayList[];
  international: RecommenObject[];
  topArtist: FeatureObj[];
}

type albumType = {
  album_type: string;
  artists: Artist[];
  available_markets?: string[];
  external_urls: External_urls;
  images: Images[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export interface TopPlaylist {
  album: albumType;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: External_ids;
  external_urls: External_urls;
  href: string;
  is_local?: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number?: number;
  type: string;
  uri: string;
  id: string;
}

export interface topArtist {
  album: albumType;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  external_ids: External_ids;
  external_urls: External_urls;
  explicit: boolean;
  href: string;
  id: string;
  is_local?: boolean;
  is_playable?: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface AlbumTracks {
  album_group?: string;
  album_type: string;
  artists: Artist[];
  external_urls: External_urls;
  href: string;
  images: Images[];
  id: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SingleAlbum {
  name: string;
  artists: Artist[];
  release_date: string;
  type: string;
  id: string;
  album_type: string;
  images: Images[];
  uri: string;
}

export interface AlbumArtist {
  items?: SingleAlbum[];
}

export interface Followers {
  href: string | null;
  total: number | null;
}

export interface MusicList {
  images: Images[];
  id: string;
  name: string;
  genres: string[];
  type: string;
  followers: Followers;
  uri: string;
}

export interface Items {
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  expliocit?: boolean;
  href: string;
  id: string;
  is_local?: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface Copyrights {
  text: string;
  p?: string;
}

export interface TracksItems {
  items: Items[];
}

export interface SingleAlbumResponse {
  album_type: string;
  artists: Artist[];
  href: string;
  id: string;
  images: Images[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  total_tracks: number;
  type: string;
  uri: string;
  tracks: TracksItems;
  copyrights: Copyrights[];
}

export type User = {
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastname?: string | null;
  gender?: string | null | boolean;
};

export interface Tract {
  name: string;
  uri: string;
  type: string;
  id: string;
  album: albumType;
}

export interface liked {
  added_at: string;
  track: Tract;
}

export type TrackAlbum = {
  album_type: string;
  artists?: TrackArtist[];
  images: Images[];
  id: string;
  href: string;
  name?: string;
};

export type TrackArtist = {
  external_urls: External_urls;
  id: string;
  href: string;
  name: string;
  type: string;
  uri: string;
};

export type TracksArray = {
  name: string;
  disc_number?: number;
  espisode?: boolean;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local?: boolean;
  popularity?: number;
  preview_url?: string;
  track?: boolean;
  track_number?: number;
  type: string;
  uri: string;
  external_urls: External_urls;

  external_ids?: External_ids;

  artists?: TrackArtist[];
  album?: TrackAlbum;
};

export type TrackItems = {
  added_at: string;
  is_local: boolean;
  primary_color?: null;
  video_thumbnail?: {
    url: null;
  };
  track: TracksArray;
};

export interface Tracks {
  id: string;
  images: Images[];
  name: string;
  owner: Owner;
  type: string;
  uri: string;
  tracks: {
    href: string;
    limit: number;
    next: null | string;
    offset: number;
    previous: null | string;
    total: number;
    items: TrackItems[];
  };
}
