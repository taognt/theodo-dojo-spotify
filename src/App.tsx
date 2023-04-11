import logo from './assets/logo.svg';
import './App.css';
import { fetchTracks } from './lib/fetchTracks';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex((trackIndex + 1) % trackUrls.length);
  };

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  if (tracks === undefined) {
    return <div></div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Blind test Spotify</h1>
        <h3> Première musique : {tracks[0]?.track.name}</h3>
      </header>
      <div className="App-images">
        <p>Place à la musique</p>
        <div>
          <audio src={trackUrls[trackIndex]} controls />
        </div>
        <button type="button" onClick={goToNextTrack} className="button_click">
          Nouveau son
        </button>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];

export default App;
