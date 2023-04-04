import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videFooter__icon" />
          <div className="videFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img 
      className="videoFooter__record"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" alt="Imagem de um vinil girando" />
    </div>
  )
}

export default VideoFooter