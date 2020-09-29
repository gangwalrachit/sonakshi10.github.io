let songs = [
    {
        thumbnail: "./files/help.jpg",
        audio: "./files/Help!.mp3",
        name: "Help!",
        desc: `The Beatles fifth studio album was released on July 23, 1965, in the United Kingdom.
        In States, where the Fab Four material was repackaged, recycled and retitled on several 
        labels, it was either their eighth or tenth release, depending on how you count them. 
        Regardless of its sequential place in the band's discography, 
        Help! signaled a dramatic turning point in the Beatles' career. 
        The Liverpool quartet made a bold leap from teen beat combo to studio artists. 
        Rock & roll covers were now a rarity, 
        relegated to just a couple tracks on Side Two. Paul, John, 
        George and Ringo were no longer wearing black suits or turtlenecks on the album cover. 
        The Beatles had met Bob Dylan a year before, and now acoustic guitars and frank 
        introspection were working their way into the songwriting. 
        The title alone was an sincerely plea from John, not merely some love-struck ditty.
        Days later, Help!, the group's zany second feature film, would hit theaters.`
    },
    {
        thumbnail: "./files/hey-jude.jpeg",
        audio: "./files/Hey_Jude.mp3",
        name: "Hey Jude",
        desc: `“Hey Jude” sums up the Beatles’ turbulent summer of 1968 — 
        a tribute to their friendship, right at the moment it was starting to fracture. 
        The single was a smash as soon as they released it on August 26th, 50 years ago — 
        their biggest hit, topping the U.S. charts for nine weeks. It’s the Beatles at their warmest, 
        friendliest, most open-hearted. John, Paul, George and Ringo sound utterly in sync, 
        building to that power-drone “na na na na” chant. Yet it’s a song born from conflict.
         Nobody knew they were falling apart — in fact, “Hey Jude” was released four days 
         after Ringo officially quit the band, walking out on the White Album sessions. 
         Paul wrote it during John’s divorce, to cheer up his mate’s five-year-old son. 
         As Julian Lennon recalled, “He was just trying to console me and Mum.” 
        The world has been taking consolation from “Hey Jude” ever since.`
    },
    {
        thumbnail: "./files/let-me-down.jpg",
        audio: "./files/Let_Me_Down.mp3",
        name: "Let Me Down",
        desc: `Written by John Lennon as an anguished love song to Yoko Ono,[1] it was interpreted 
        by Paul McCartney as a "genuine plea", with Lennon saying to Ono, "I'm really stepping out 
        of line on this one. 
        I'm really just letting my vulnerability be seen, so you must not let me down."
        The song is in the key of E major and is in 4
        4 time during the verse, chorus and bridge, but changes to 5
        4 in the pick-up to the verse.It grew (like "Sun King") from the F♯m7–E changes 
        from Fleetwood Mac's "Albatross" with McCartney arranging instrumental and vocal 
        parts and George Harrison adding a descending two-part lead guitar accompaniment 
        to the verse and a countermelody in the bridge.[`
    },
    {
        thumbnail: "./files/ob-la-di.jpg",
        audio: "./files/Ob-la-di-ob-la-da.mp3",
        name: "Ob-la-di ob-la-da",
        desc: `McCartney wrote "Ob-La-Di, Ob-La-Da" in a cod Jamaican 
        ska style and appropriated a phrase popularised by Jimmy Scott, 
        a London-based Nigerian musician, for the song's title and chorus. 
        Following its release, Scott attempted, unsuccessfully, to receive a composing credit. The recording sessions for the track were marked by disharmony as McCartney's perfectionism tested his bandmates and their recording staff. The song was especially disliked by John Lennon, and a heated argument during one of the sessions led to Geoff Emerick quitting his job as the Beatles' recording engineer. A discarded early version of the 
        track, featuring Scott on congas, was included on the band's 1996 compilation Anthology 3.`
    },
    {
        thumbnail: "./files/norwegian-wood.jpg",
        audio: "./files/Norwegian-Wood.mp3",
        name: "Norwegian Wood",
        desc: `Lennon wrote the song as a veiled account of an extramarital affair he had in London.
         When recording the track, Harrison chose to add a sitar part after becoming interested in 
         the instrument's exotic sound while on the set of the Beatles' film Help!, in early 1965. 
         Further to several British bands, including the Beatles, using guitars to imitate the drone and other musical textures of the sitar in their recordings, "Norwegian Wood" was influential in the development of raga rock and psychedelic rock during the mid 1960s. The song also
         helped elevate Ravi Shankar and Indian classical music 
         to mainstream popularity in the West..`
    },
    {
        thumbnail: "./files/sun.jpg",
        audio: "./files/Here comes the sun with The Beatles.mp3",
        name: "Here Comes the Sun",
        desc: `It was written by George Harrison and 
        is one of his best-known compositions for the Beatles. 
        Harrison wrote the song in early 1969 at the country house of his friend Eric Clapton, 
        where Harrison had chosen to play truant for the day to avoid attending a meeting at the Beatles' 
        Apple Corps organisation. The lyrics reflect his relief at the arrival of spring and the 
        temporary respite he was experiencing from the band's business affairs. As of September 2019, 
        it was the most streamed Beatles song in the United Kingdom, with over 50 million plays.`
    }


]

let currentSong = 0;
const audio = document.querySelector(".player .main audio")
const thumbnail =document.querySelector(".thumbnail img")
const name =document.querySelector(".songTitle h2")
const seekbar = document.querySelector(".seekbar input")
const details = document.querySelector(".song-info p")
const playPauseControl = document.querySelector(".player .main .controls .play-pause-control")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
window.addEventListener('DOMContentLoaded',function(){
    displaySong();
})

function displaySong(){
    let song = songs[currentSong];
    thumbnail.setAttribute("src",song.thumbnail);
    // document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("${song.thumbnail}") center no-repeat`;
	// document.body.style.backgroundSize = "cover";	
    name.innerText = song.name;
    details.innerText = song.desc;
	audio.setAttribute("src",song.audio);
	seekbar.setAttribute("value",0);
	seekbar.setAttribute("min",0);
	seekbar.setAttribute("max",0);
	audio.addEventListener("canplay",function(){
		//audio.play();
		if(!audio.paused){
			playPauseControl.classList.remove("paused");
		}
		seekbar.setAttribute("max",parseInt(audio.duration));
		audio.onended = function(){
			nextBtn.click();
		}
    })
}
setInterval(function(){
	seekbar.value = parseInt(audio.currentTime);
},1000);
nextBtn.addEventListener("click",function(){
    currentSong = (currentSong+1)%songs.length
    displaySong()
    playPause()
})

prevBtn.addEventListener("click",function(){
    currentSong--;
    if(currentSong < 0){
        currentSong = currentSong + songs.length
    }
    displaySong()
    playPause()
})

playPauseControl.addEventListener("click",function(){
	playPause()
});
function playPause(){
    if(audio.paused){
		playPauseControl.classList.remove("paused");
		audio.play();
	} else {
		playPauseControl.classList.add("paused");
		audio.pause();
	}
}
seekbar.addEventListener("change",function(){
	audio.currentTime = main.seekbar.value;
});