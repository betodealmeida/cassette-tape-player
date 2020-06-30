# cassette-tape-player
A pure Javascript music player shaped like a cassette tape.

[Demo](https://jsfiddle.net/robertodealmeida/40d3mp7q/169/)

# Usage

Create an HTML file with an `<audio>` element:

```html
<html>
  <head>
    <!-- permanent marker font for song metadata -->
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

    <link href="cassette.css" rel="stylesheet">
    <script src="cassette.js"></script>
  </head>

  <body>
    <!-- div where the player will be inserted -->
    <div id="player-div"></div>

    <audio
      controls
      class="cassette"
      src="https://blog.taoetc.org/an_svg_music_player/mp3/purple.mp3"
      data-target-id="player-div"
      data-title="Song title"
      data-artist="Artist name"
      data-album="Album name"
    />
  </body>
</html>
```

# Controls

Pressing the triangle plays the song, and then pauses. Dragging the mouse forward or backward will seek in the song.
