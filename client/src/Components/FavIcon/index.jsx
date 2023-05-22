import React, { useState } from "react";

import { Border } from "./style";

import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function FavIcon(related) {
  const [Favorit, setFavorit] = useState(false);
  return (
    <Border
      onClick={() => {
        setFavorit(!Favorit);
      }}
      related={related}
    >
      {Favorit ? <MdFavorite /> : <MdFavoriteBorder />}
    </Border>
  );
}
