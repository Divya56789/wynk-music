const top20EnglishSongs = [ 
   `<div class="playlist-container">
   <div class="playlist-item">
 <img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6360d384cff93b08cce2d5fe/COLLECTION_524027492762295.png" alt="top-20-english-song" height="120" width="120">
  <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Weekly Top 20: English</h3>
</div>`,

`<div class="playlist-container">
<div class="playlist-item">
<img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/634d007f4163ea0ff3dec016/COLLECTION_18202818606565.png" alt="top-20-english-song" height="120" width="120">
 <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Wynk Top 100</h3>
</div>`,

`<div class="playlist-container">
<div class="playlist-item">
<img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6360d6a010047e565adebe0c/COLLECTION_621861641476651.png" alt="top-20-english-song" height="120" width="120">
 <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Romance Top 40</h3>
</div>`,

`<div class="playlist-container">
<div class="playlist-item">
<img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/635de0a1093ac136d20b44df/COLLECTION_330778742422296.png" alt="top-20-english-song" height="120" width="120">
 <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Weekly Top 20</h3>
</div>`,

`<div class="playlist-container">
<div class="playlist-item">
<img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/634929ce872a834ba5a306ef/COLLECTION_120660409236850.png" alt="top-20-english-song" height="120" width="120">
 <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Social Media Top 20: English</h3>
</div>`,

`<div class="playlist-container">
<div class="playlist-item">
<img class="song-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/635f6fc5fb939752a44adef9/COLLECTION_852545984772162.png" alt="top-20-english-song" height="120" width="120">
 <img class="playing-btn" src="img/play-circle-fill.svg" alt="play-btn">
</div>
<h3 class ="English-20" style="color:#FFF">Discovered on Reels</h3>
</div>`,
  
];

let  playlistContainer = document.createElement("div");
playlistContainer.className = "playlist-container-item";

playlistContainer.innerHTML = top20EnglishSongs;

const topcharts = document.querySelector(".top-playlist");
topcharts.append(playlistContainer);
