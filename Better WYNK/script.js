const listOfSongs = [
    {
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431811349/1617862818/srch_hungama_64431575.jpg",
        "songName":"Is Qadar",
        "Artist":"Tulsi Kumar - Is Qadar",
        "url":"https://pwdown.com/113514/Is%20Qadar%20-%20Darshan%20Raval.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431877444/1651475121/srch_hungama_86794383.jpg",
        "songName":"Bhool Bhulaiyaa",
        "Artist":"Pritam - Bhool Bhulaiyaa 2",
        "url":"https://pwdown.com/113638/Bhool%20Bhulaiyaa%202%20-%20Title%20Track.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1556259379/srch_zeemusic_INZ031405401.jpg",
        "songName":"The Hook Up",
        "Artist":"Vishal Shekhar - Student Of The Year 2",
        "url":"https://pwdown.com/14691/The%20Hook%20Up%20Song%20-%20SOTY%202.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1601636103382/srch_sonymusic_A10328E0009736735Q.jpg",
        "songName":"Sawan Mei Lag Gyi Aag",
        "Artist":"Mika singh - Ginny weds sunny",
        "url":"https://pwdown.com/113494/Sawan%20Mein%20Lag%20Gayi%20Aag%20-%20Badshah.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1638182531/srch_universalmusic_00602445314928-INUM72100090.jpg",
        "songName":"Sajna, Say Yes To The Dress",
        "url":"https://pwdown.com/113514/Sajna%20-%20Badshah.mp3",
        "Artist":"Badshah"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004877618W_20220812053038087/1660276820/srch_sonymusic_A10328E0010459073B.jpg",
        "songName":"Coka 2.0",
        "Artist":"Jaani - Liger",
        "url":"https://pwdown.com/113643/Coka%202%20-%20Liger.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/248x248/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004860278F_20220717060457662/1658030708/srch_sonymusic_A10328E0010427685D.jpg",
        "songName":"Kesariya",
        "Artist":"Arijit Singh - Brahmastra",
        "url":"https://pwdown.com/113639/Kesariya%20-%20Brahmastra.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431857330/1638340207/srch_hungama_78784558.jpg",
        "songName":"Aashiqui Aa Gayi",
        "Artist":"Arijit Singh - Radhe Shyam",
        "url":"https://pwdown.com/113598/Aashiqui%20Aa%20Gayi%20-%20Radhe%20Shyam.mp3"
    },{
        "songImage":"https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1563902379/srch_orchard_194491081751.jpg",
        "songName":"Hawa Banke",
        "Artist":"Darshan Raval - Hawa Banke",
        "url":"https://pwdown.com/14642/Hawa%20Banke%20-%20Darshan%20Raval.mp3"
    }
];
// In  playing song bar, heading and paragraph changes when song changes by the user.
function songInfo(name_of_the_song , artist_of_the_song){
    let heading = document.createElement("h4");
    heading.innerText = name_of_the_song;
    heading.style.color = "white";
    

    let paragraph = document.createElement("p");
    paragraph.style.color = "rgb(157, 162, 167)";
    paragraph.style.fontSize = "12px";
    paragraph.innerText = artist_of_the_song;

    let playing_song_container = document.getElementsByClassName("titleSongs");
    playing_song_container[0].append(heading);
    playing_song_container[0].append(paragraph);
};

for (let i = 0; i<listOfSongs.length; i++){
    let details = listOfSongs[i];
    let playing_song_details = document.getElementsByClassName("leftpart");
    playing_song_details[0].append(songInfo(details["songName"] , details["Artist"]));
    
}



let isplaying = false;
function recentlySongs(sngImage , sngName , singer,url ){

    let song_holder = document.createElement("div");
    song_holder.className = "song-detail-holder";

    let image = document.createElement("img");
    image.src = sngImage;
    image.style.width = "170px";
    image.style.height = "170px";


    let songs = document.createElement("h3");
    songs.innerText = sngName;
    songs.style.fontSize = "15px";
    songs.style.color = "white";

    let artist = document.createElement("p");
    artist.innerText = singer;
    artist.style.color = "white";
    artist.style.fontSize = "10px";

    // let audio = document.createElement("audio");
    // audio.src = audiotrack;

    // let video = document.createElement("video");
    // video.src = videoplay;
    
   
    song_holder.append(image);
    song_holder.append(songs);
    song_holder.append(artist);
    // song_holder.append(audio);

    return song_holder;
};

let song_container = document.getElementsByClassName("recently-played-songs");
song_container[0].style.display = "flex";

let audio_player= document.createElement("audio");

for (let songs in listOfSongs){
    let song_image = listOfSongs[songs]["songImage"];
    let song_name = listOfSongs[songs]["songName"];
    let singer_name = listOfSongs[songs]["Artist"];
    let song_placer = recentlySongs(song_image,song_name,singer_name);
    song_placer.addEventListener("click",()=>{
        audio_player.src = listOfSongs[songs]['url'];
       
    });
    song_container[0].append(song_placer);
}

// function playTheSong(){
//     if(isplaying==false){
//         audio_player.play();
//         isplaying=true;
//     }else{
//         audio_player.pause();
//         isplaying=false;
//     }
   
// }

let playButton = document.getElementsByClassName("play-btn");
let pauseButton = document.getElementsByClassName("pause-btn")

function playTheSong(){
    audio_player.play();
    if(isplaying==false){
       pauseButton.style.display = "none";
    }else{
       pauseButton.style.display = "flex";
    }
    
}
function pauseTheSong(){
    audio_player.pause();
    if(isplaying==true){
        playButton.style.display = "none";
    }else{
        playButton.style.display ="flex";
    }
}