import { formatDistance } from "date-fns";
import { setPlay } from "../slice/playlistSlice";
import { useAppDispatch } from "../slice/store";

export function converTime(duration: number): string {
  const time = Math.floor(duration / 1000);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeFormat = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return timeFormat;
}

const usePlay = () => {
  const dispatch = useAppDispatch();

  function playMusic(uri: string[]) {
    dispatch(setPlay(uri));
  }

  return {
    playMusic,
  };
};

export default usePlay;

export function convertDate(time: string | number): string | number {
  return new Date(time).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
}

export function dateFnsAgo(time: string) {
  const date = new Date();

  const result = formatDistance(new Date(date), new Date(time));

  return `${result} ago`;
}

export function durationOfAlbum(time: number | undefined): string {
  if (time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes} mins : ${seconds < 10 ? `0${seconds}` : seconds} sec`;
  } else {
    return "";
  }
}

interface MusicTots {
  songsDuration: number;
  totalSong: number;
}

export const useTotalMusic = (items: number[] | undefined): MusicTots => {
  if (items) {
    if (items.length > 0) {
      const songsDuration = items
        ?.map((num) => Math.floor(num / 1000))
        .reduce((acc, curr) => acc + curr);
      const totalSongs = items?.length;

      return {
        songsDuration,
        totalSong: totalSongs,
      };
    } else {
      return {
        songsDuration: 0,
        totalSong: 0,
      };
    }
  } else {
    return {
      songsDuration: 0,
      totalSong: 0,
    };
  }
};
