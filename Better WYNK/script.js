const listOfSongs = [
    {
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431811349/1617862818/srch_hungama_64431575.jpg",
        "songName":"Is Qadar",
        "Artist":"Tulsi Kumar - Is Qadar",
        "url":"https://pwdown.com/113514/Is%20Qadar%20-%20Darshan%20Raval.mp3",
        "songTimming":"03:46"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431877444/1651475121/srch_hungama_86794383.jpg",
        "songName":"Bhool Bhulaiyaa",
        "Artist":"Pritam - Bhool Bhulaiyaa 2",
        "url":"https://pwdown.com/113638/Bhool%20Bhulaiyaa%202%20-%20Title%20Track.mp3",
        "songTimming":"03:31"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1556259379/srch_zeemusic_INZ031405401.jpg",
        "songName":"The Hook Up",
        "Artist":"Vishal Shekhar - Student Of The Year 2",
        "url":"https://pwdown.com/14691/The%20Hook%20Up%20Song%20-%20SOTY%202.mp3",
        "songTimming":"03:34"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1601636103382/srch_sonymusic_A10328E0009736735Q.jpg",
        "songName":"Sawan Mei Lag Gyi Aag",
        "Artist":"Mika singh - Ginny weds sunny",
        "url":"https://pwdown.com/113494/Sawan%20Mein%20Lag%20Gayi%20Aag%20-%20Badshah.mp3",
        "songTimming":"03:47"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1638182531/srch_universalmusic_00602445314928-INUM72100090.jpg",
        "songName":"Sajna, Say Yes To The Dress",
        "url":"https://pwdown.com/113514/Sajna%20-%20Badshah.mp3",
        "Artist":"Badshah",
        "songTimming":"02:38"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004877618W_20220812053038087/1660276820/srch_sonymusic_A10328E0010459073B.jpg",
        "songName":"Coka 2.0",
        "Artist":"Jaani - Liger",
        "url":"https://pwdown.com/113643/Coka%202%20-%20Liger.mp3",
        "songTimming":"02:46"
    },{
        "songImage":"https://img.wynk.in/unsafe/248x248/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004860278F_20220717060457662/1658030708/srch_sonymusic_A10328E0010427685D.jpg",
        "songName":"Kesariya",
        "Artist":"Arijit Singh - Brahmastra",
        "url":"https://pwdown.com/113639/Kesariya%20-%20Brahmastra.mp3",
        "songTimming":"04:28"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431857330/1638340207/srch_hungama_78784558.jpg",
        "songName":"Aashiqui Aa Gayi",
        "Artist":"Arijit Singh - Radhe Shyam",
        "url":"https://pwdown.com/113598/Aashiqui%20Aa%20Gayi%20-%20Radhe%20Shyam.mp3",
        "songTimming":"04:20"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1563902379/srch_orchard_194491081751.jpg",
        "songName":"Hawa Banke",
        "Artist":"Darshan Raval - Hawa Banke",
        "url":"https://pwdown.com/14642/Hawa%20Banke%20-%20Darshan%20Raval.mp3",
        "songTimming":"02:52"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431896735/1663567236/srch_hungama_93074819.jpg",
        "songName":"O Sajna",
        "Artist":"Neha Kakkar - O Sajna",
        "url":"https://pwdown.com/113604/O%20Sajna%20-%20Neha%20Kakkar.mp3",
        "songTimming":"04:05"
    },{
        "songImage":"https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1516521069/srch_hungama_30967189.jpg",
        "songName":"Nainowale Ne",
        "Artist":"Neeti Mohan - Padmaavat",
        "url":"https://pwdown.com/12776/04%20Nainowale%20Ne%20-%20Padmavati%20(Neeti)%20320Kbps.mp3",
        "songTimming":"02:55"
    }
];
let timmingOfTheSong = document.querySelector(".timming-of-the-song")
let rewindTheSong = document.querySelector(".rewind-the-song");
let currentPlaySongName = document.querySelector(".currently-played-songname");
let currntPlaySongArtist = document.querySelector(".currently-played-artistname");
let currentPlaySongImage = document.querySelector(".currently-played-songimage");
let playPauseBtn = document.querySelector(".play-pause-img");
let audio_player= document.createElement("audio");
let isplaying = false;
// let currentTimming = 0;

// var duration =audio_player.duration;
// var min = duration/60 ;
// var sec = duration%60;
// console.log(min);


playPauseBtn.addEventListener("click", () => {

   

    if (isplaying) {
        isplaying = false;
        audio_player.pause();
        playPauseBtn.src = "img/play.svg";
       
    } else{
        isplaying = true;
        audio_player.play();
        playPauseBtn.src = "img/pause.svg";
    }
   
});

// const threeDotInnerText = ["Free Download","Set Free Hellotune","Share","Play Next","Add To Playlist","Report Abuse"];
// for (let i in threeDotInnerText){
//     console.log(threeDotInnerText[i]);
// }



function recentlySongs(sngImage , sngName , singer,url ){

    let song_holder = document.createElement("div");
    song_holder.className = "song-detail-holder";
    
    // let image_holder = document.createElement("div");
    // image_holder.className = "all-image-holder";

    let image = document.createElement("img");
    image.src = sngImage;
    image.style.width = "120px";
    image.style.height = "120px";
    image.className = "song-image";

    let playbtn = document.createElement("img");
    playbtn.src = "img/play-circle-fill.svg";
    playbtn.className = "playing-btn";

    let forwardArrow = document.createElement("img");
    forwardArrow.src = "img/forward-fill.svg";
    forwardArrow.className = "forward-arrow";
    
    let threeDot = document.createElement("img");
    threeDot.src = "img/3dot.svg";
    threeDot.className = "three-dot-btn";

    let threeDotContent = document.createElement("div");
    threeDotContent.className ="three-dot-content";

    let threeDotInnerContent1 = document.createElement("p");
    threeDotInnerContent1.innerText = "Free Download";
    threeDotInnerContent1.style.color = "#fff";
    threeDotInnerContent1.className = "three-dot-content-inner";

    let threeDotInnerContent2 = document.createElement("p");
    threeDotInnerContent2.innerText = "Set Free Hellotune";
    threeDotInnerContent2.style.color = "#fff";
     threeDotInnerContent2.className = "three-dot-content-inner";

    let threeDotInnerContent3 = document.createElement("p");
    threeDotInnerContent3.innerText = "Share";
    threeDotInnerContent3.style.color = "#fff";
     threeDotInnerContent3.className = "three-dot-content-inner";

    let threeDotInnerContent4 = document.createElement("p");
    threeDotInnerContent4.innerText = "Play Next";
    threeDotInnerContent4.style.color = "#fff";
     threeDotInnerContent4.className = "three-dot-content-inner";

    let threeDotInnerContent5 = document.createElement("p");
    threeDotInnerContent5.innerText = "Add To Playlist";
    threeDotInnerContent5.style.color = "#fff";
     threeDotInnerContent5.className = "three-dot-content-inner";

    let threeDotInnerContent6 = document.createElement("p");
    threeDotInnerContent6.innerText = "Report Abuse";
    threeDotInnerContent6.style.color = "#fff";
     threeDotInnerContent6.className = "three-dot-content-inner";
   

    threeDotContent.append(threeDotInnerContent1);
    threeDotContent.append(threeDotInnerContent2);
    threeDotContent.append(threeDotInnerContent3);
    threeDotContent.append(threeDotInnerContent4);
    threeDotContent.append(threeDotInnerContent5);
    threeDotContent.append(threeDotInnerContent6);

    let songs = document.createElement("h3");
    songs.innerText = sngName;
    songs.style.fontSize = "15px";
    songs.style.color = "white";
    songs.className = "song-name";

    let artist = document.createElement("p");
    artist.innerText = singer;
    artist.style.color = "white";
    artist.style.fontSize = "10px";
    artist.className = "artist-name";
   
    song_holder.append(image);
    song_holder.append(songs);
    song_holder.append(artist);
    song_holder.append(playbtn);
    song_holder.append(forwardArrow);
    song_holder.append(threeDot);
    song_holder.append(threeDotContent);
   

   song_holder.style.cursor = "pointer";

    // playbtn.addEventListener("click",()=>{
    // audio_player.src = listOfSongs[songs]['url'];

    // audio_player.play();
    // isplaying = true;

    
    // currentPlaySongName.innerText = song_name;
    // currntPlaySongArtist.innerText = singer_name;
    // currentPlaySongImage.src = song_image;

    // playPauseBtn.src = "./img/pause.svg";
    // });

    return song_holder;
};

let song_container = document.getElementsByClassName("recently-played-songs");
song_container[0].style.display = "flex";



for (let songs in listOfSongs){
    let song_image = listOfSongs[songs]["songImage"];
    let song_name = listOfSongs[songs]["songName"];
    let singer_name = listOfSongs[songs]["Artist"];
    let song_placer = recentlySongs(song_image,song_name,singer_name);
    song_placer.addEventListener("click",()=>{
        audio_player.src = listOfSongs[songs]['url'];

        audio_player.play();
        isplaying = true;

        currentPlaySongName.innerText = song_name;
        currntPlaySongArtist.innerText = singer_name;
        currentPlaySongImage.src = song_image;

        playPauseBtn.src = "./img/pause.svg";
       
    });
    song_container[0].append(song_placer);
}


// start playing the song
rewindTheSong.addEventListener("click",() => {
    audio_player.load();
    audio_player.play();
    
 });

 

