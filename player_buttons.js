class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        // this.audios[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        // this.audios[1] = "music.mp3";
        // this.audios[2] = "http://178.33.34.48:7764/;stream.mp3";
    
        this.audios[0] = "https://stream.radiojar.com/8s5u5tpdtwzuv";
        this.audios[1] = "https://edge.mixlr.com/channel/eterm";
        this.audios[2] = "http://curiosity.shoutca.st:6035/;stream.mp3";
        this.audios[3] = "https://stream.radiojar.com/4wqre23fytzuv";
        this.audios[4] = "https://stream.live.vc.bbcmedia.co.uk/bbc_arabic_radio";
        this.audios[5] = " https://s4.radio.co/s907eaefbe/listen";
        this.audios[6] = " http://mbn-channel-01.akacast.akamaistream.net/7/29/233450/v1/ibb.akacast.akamaistream.net/mbn_channel_01";
        this.audios[7] = "music.mp3";

        this.names = [];
        this.names[0] = "محطة القران الكريم ";
        this.names[1] = "إذاعة نور على نور ";
        this.names[2] = "روتانا إف إم ";
        this.names[3] =" إذاعة القران الكريم السعودية";
        this.names[4] ="BBC Arabic ";
        this.names[5] =" إنت إف إم";
        this.names[6] =" راديو الخليج ";
        this.names[7] ="station MUSIC ";

        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();