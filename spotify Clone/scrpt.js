console.log("rishu")

async function getSong()
{
   
    let response = await fetch("http://127.0.0.1:3000/songs/")
    let data =  await response.text()
    let div = document.createElement("div")
    div.innerHTML = data
    let as = div.getElementsByTagName("a")
   let songs = []
   for (let index = 0; index < as.length; index++)
 {
     const element = as[index];
    if(element.href.endsWith(".mp3"))
       {
       songs.push(element.href.split("/songs/")[1])
       }
    
  }
    return songs
}

async function main(){
    let songs = await getSong()
    let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
      songUl.innerHTML = songUl.innerHTML + `<li>${song.replaceAll("%20"," ")}</li>`
    }
    let audio = new Audio(songs[0])
    audio.play();
  
   
}
main()