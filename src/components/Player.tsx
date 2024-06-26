import { useEffect, useRef, useState } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useAppDispatch, useAppSelector } from "../slice/store";
import { setPlayingSize } from "../slice/toolsSlice";

// interface SpotifyPlayOptions {
//   context_uri?: string;
//   deviceId: string;
//   offset?: number;
//   uris?: string[];
// }

export default function Player({ accestoken }: { accestoken: string | null }) {
  const [tokens, setTokens] = useState(accestoken);
  const [playing, setPlaying] = useState(false);
  const dispatch = useAppDispatch();
  const { playlistUri } = useAppSelector((state) => state.playlist);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (playing) {
      dispatch(setPlayingSize(playing));
    }
    if (!divRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const width: number | undefined = divRef.current?.clientWidth;

      if (width) {
        if (width >= 768) {
          dispatch(setPlayingSize(false));
        } else if (width <= 766 && playing) {
          dispatch(setPlayingSize(true));
        }
      }
    });

    resizeObserver.observe(divRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [divRef, playing, dispatch]);

  useEffect(() => {
    if (!accestoken) return;

    setTokens(accestoken);
  }, [accestoken]);

  return (
    <div ref={divRef} className="">
      <SpotifyWebPlayer
        token={tokens ? tokens : ""}
        play={playlistUri.length < 0 ? false : true}
        showSaveIcon
        uris={playlistUri.length < 0 ? [""] : playlistUri}
        callback={(state) => {
          setPlaying(state.isPlaying);
        }}
        styles={{
          sliderColor: "green",
          bgColor: "#464242",
          sliderHandleColor: "#eeeeee",
          color: "#eeeeee",
          trackNameColor: "#eeeeee",
          trackArtistColor: "#ccccc",
          activeColor: "#6bda55ccc",
        }}
      />
    </div>
  );
}
