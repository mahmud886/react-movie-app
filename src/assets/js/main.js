var baseURL = window.location.origin + window.location.pathname;
var urlParamsString=window.location.search;
var urlParams=new URLSearchParams(urlParamsString);
var a=""; if(urlParams.has('a')) a=urlParams.get('a');
var category=""; if(urlParams.has('category')) category=urlParams.get('category');
var currentPage='homepage';
var isMuted=true;


function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const diff = (today, date) => Math.floor((today - date) / (1000 * 60 * 60 * 24));

    const daysDiff = diff(today, date);

    if (daysDiff === 0) {
        return 'Today';
    } else if (daysDiff === 1) {
        return 'Yesterday';
    } else {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
}
const fakeSliderData2  = [
    {   id:0,
        img: "http://103.68.104.71//Admin/main/images/tt14672882/screen//hYCqInu2vhRysytIyifA41iw2Ek.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt14672882/poster//Ah3pJ3iuX28PKHjGLyIrEsFVq5q.jpg",
        title: "The Tomorrow Job",
        videoId: "zeKp69CY47Y",
        titleImg:"http://103.68.104.71//Admin/main/images/tt14672882/logo/tt14672882.png",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Tomorrow Job (2023)/The.Tomorrow.Job.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        rating: 4.85,
        year:2023,
        genre:[],
        category: "Si-Fi",
        length:"2h 12m",
    },
    {
        id:1,
        img: "http://103.68.104.71//Admin/main/images/tt0830515/screen//3CqMIX3ZlrD0pU3fpBL6DM0Cneb.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt0830515/poster//e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
        title: "James Bond Quantum of Solace",
        titleImg:"http://103.68.104.71//Admin/main/images/tt0830515/logo/tt0830515.png",
        videoId: "BBqYaFEWBxI",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2008/James Bond Quantum of Solace (2008)/James.Bond.Quantum.of.Solace.2008.720p.BRrip.x264.YIFY.mp4",
        rating: 3.75,
        year:2023,
        genre:[],
        category: "Action",
        length:"1h 39m",
    },
    {   id:2,
        img: "http://103.68.104.71//Admin/main/images/tt14799576/screen//baLw3zvl9R31Ocxh7uIpkk5cLVx.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt14799576/poster//dteXMzVY53GBHUgrR7vigAartsP.jpg",
        title: "The secret Kingdom",
        videoId: "h6TxL-C7zqA",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Secret Kingdom (2023)/The.Secret.Kingdom.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt14799576/logo/tt14799576.png",
        rating: 4.23,
        year:2021,
        genre:[],
        category: "Adventure",
        length:"2h 39m",
    },
    {   id:3,
        img: "http://103.68.104.71//Admin/main/images/tt13141250/screen//bQTfSXQrcVwXJ5TvNzbd3ioMnnM.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt13141250/poster//1VtHaELqLMovl8EueBWHDtihhzF.jpg",
        title: "The Retual Killer",
        videoId: "DIa__DpZX9U",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Ritual Killer (2023)/The.Ritual.Killer.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt13141250/logo/tt13141250.png",
        rating: 3.75,
        year:2013,
        genre:[],
        category: "Action",
        length:"1h 56m",
    },
    {   id:4,
        img:"http://103.68.104.71//Admin/main/images/tt7825076/screen//lOhyq1FqSlJe7li1G9ERebP0ukM.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt7825076/poster//q926UPyqeVrJ6Usgup1aW26JFT9.jpg",
        title: "The Stalker King",
        videoId: "kXFtB1epXa8",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Stalker King (2023)/The.Stalker.King.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt7825076/logo/tt7825076.png",
        rating: 2.67,
        year:2023,
        genre:[],
        category: "Thriller",
        length:"2h 39m",
    },
    {   id:5,
        img:"http://103.68.104.71//Admin/main/images/tt16437278/screen//cKqk1m6n2lPHZMHNSVYhrnRCiux.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt16437278/poster//3OKBFYRVSKkBVJ7WpKogTVQfUqC.jpg",
        title: "The Strays",
        videoId: "BzwOLKTbCUw",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Strays (2023)/The.Strays.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt16437278/logo/tt16437278.png",
        rating: 3.90,
        year:2020,
        genre:[],
        category: "Horror",
        length:"1h 49m",
    },
    {   id:6,
        img: "http://103.68.104.71//Admin/main/images/tt12672536/screen//f5pYm9znYtntwZYNoVG2tIfvpWq.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt12672536/poster//wve9qIZ8pXrDpHy1h47cGXHjZpH.jpg",
        title: "The Three Musketeers: D’Artagnan",
        videoId: "SAaSEZpa4cE",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Three Musketeers (2023)/The.Three.Musketeers.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt12672536/logo/tt12672536.png",
        rating: 4.82,
        year:2029,
        genre:[],
        category: "Adventure",
        length:"1h 29m",
    },
    {   id:7,
        img: "http://103.68.104.71//Admin/main/images/tt16916320/screen//4eC0tsU9OxR3Adlo1yRJYUDraW9.jpg",
        lThumb:"http://103.68.104.71//Admin/main/images/tt16916320/poster//hVh4hMzkXNLnScudbid6hDvjMPk.jpg",
        title: "The Siege",
        videoId: "cKC5sw4mojA",
        movieLink:"http://103.68.104.71/Data/movies/hollywood/2023/The Siege (2023)/The.Siege.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
        titleImg:"http://103.68.104.71//Admin/main/images/tt16916320/logo/tt16916320.png",
        rating: 4.70,
        year:2017,
        genre:[],
        category: "Action",
        length:"1h 45m",
    },


]
function muteToogle(flag=true){
    var coSliderVideo=document.getElementById('coSliderVideo');
    var videoSrc=coSliderVideo.src;
    if(flag){
        isMuted=false;
        coSliderVideo.src=videoSrc.replace('mute=1', 'mute=0');
    }else{
        isMuted=true;
        coSliderVideo.src=videoSrc.replace('mute=0', 'mute=1');
    }
}
var players;
function playTrailerCommonVideoCard(trailerId, playerId){
    if(window.screen.width>767) {
        let content = fakeSliderData2.filter(x => x.id == trailerId)[0];
        var doc = document;
        let player = doc.getElementById("player_" + playerId);
        let muteIcon = doc.getElementById("muteIcon_" + playerId);
        player.src = `https://www.youtube.com/embed/${content.videoId}?autoplay=1&amp;mute=${isMuted ? 1 : 0}&amp;controls=0&amp;origin=http%3A%2F%2F103.68.104.71&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;vq=hd720&amp;enablejsapi=1&amp;widgetid=37`;
        player.style.opacity = '0';
        player.style.transition = 'all 0.3s ease-in-out';
        setTimeout(() => {
            player.style.opacity = '1';
        }, 1000)
        if (isMuted) {
            muteIcon.classList.add('fa-volume-xmark');
        } else {
            muteIcon.classList.add('fa-volume-high');
        }
    }
}
function stopTrailerCommonVideoCard(trailerId, playerId){
    document.getElementById("player_"+playerId).src="";
}
function videoCardMuteToogle(playerId){
    console.log(playerId)
    var trailerPlayer=document.getElementById("player_"+playerId);
    var iconId=document.getElementById("muteIcon_"+playerId);
    console.log("=>(main.js:148) iconId", iconId);
    var videoSrc=trailerPlayer.src;
    if(videoSrc.includes('mute=1')){
        isMuted=false;
        trailerPlayer.src=videoSrc.replace('mute=1', 'mute=0');
        iconId.classList.remove('fa-volume-xmark');
        iconId.classList.add('fa-volume-high');
    }else{
        isMuted=true;
        trailerPlayer.src=videoSrc.replace('mute=0', 'mute=1');
        iconId.classList.remove('fa-volume-high');
        iconId.classList.add('fa-volume-xmark');
    }

}
function muteToogleButton_homepageSlider(){
    var $icon = $("#muteToogleButton").find('i.fa-solid');
    if ($icon.hasClass('fa-volume-xmark')) {
        $icon.removeClass('fa-volume-xmark').addClass('fa-volume-high');
        muteToogle()
    } else {
        $icon.removeClass('fa-volume-high').addClass('fa-volume-xmark');
        muteToogle(false)
    }
}
function videoCards(item,categoryName=""){
    var i=0;
    op=`
        <div class="swiper-slide commonVideoCard" onmouseenter="playTrailerCommonVideoCard(${item.id}, '${categoryName}_${item.id}')" onmouseleave="stopTrailerCommonVideoCard(${item.id}, '${categoryName}_${item.id}')">
            <div class="card w-full bg-base-100 shadow-xl image-full rounded-md overflow-hidden bg-transparent before:hidden">
                <div class="videoWrap hidden md:flex  overflow-hidden" id="playerContainer${i}" >
                    <div class="trailerVideo w-[150%] h-[200%] ml-[-25.1%] mt-[-30.2%] overflow-hidden ">
                        <iframe  id="player_${categoryName}_${item.id}" class="object-cover opacity-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen="1"
                              frameborder="0" height="100%"
                              title=" " width="100%"
                          ></iframe>
                    </div>
                </div>
                <a type="NavLink" class="playBtn flex items-center justify-center m-auto pl-1 " href="#"><i class="fas fa-play "></i></a>
                <div class="play-button"></div>
                <figure><img src="${item.thumb}" alt="" class="w-full h-full rounded-none" /></figure>
                <div class="actionWrap flex justify-self-end mt-4 mr-4 flex-col gap-4">
                    <button class="actionBtn" onclick="videoCardMuteToogle('${categoryName}_${item.id}')"><i id="muteIcon_${categoryName}_${item.id}" class="fas "></i></button>
                    <button class="actionBtn"><i class="fa-regular fa-bookmark"></i></button>
                </div>
                <div class="card-body p-0">
                    <div class="p-2 md:p-4">
                        <div class="flex justify-between items-center text-white h-full gap-2">
                            <div class="bg-black bg-opacity-50 md:font-bold rounded-[5px] px-1 text-[12px] md:text-[15px]">
                                <i class="fa-solid fa-star text-[#FAFF00]"></i> <span>${item.imdbRating}</span>
                            </div>
                        </div>
                    </div>
        
                    <div class="h-full flex items-end">
                        <div class="w-full h-auto md:h-[72px] pl-2 md:pl-4 py-3">
                            <div class="flex items-center text-white h-full gap-2">
                                <div class="w-full">
                                    <h3 class="text-base md:text-lg font-bold mb-1">${item.title}</h3>
                                    <p class="text-xs md:text-sm">2023 | 720 Blu Ray</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return op;
}
function videoCardsNonHoverPlay(item){
    op=`
        <div class="col-span-4 md:col-span-3 lg:col-span-2" >
            <a onclick="pageRoute('?a=movies&id=${item.id}')">
                <div class="card videoCardsNonHoverPlay relative w-full shadow-xl image-full rounded-md overflow-hidden bg-transparent before:hidden">
                    <figure><img src="http://103.68.104.71//Admin/main/images/${item.MovieID}/poster/${item.poster}" alt="" class="w-full rounded-none" /></figure>
                    <div class="actionWrap flex justify-self-end mt-4 mr-4 flex-col gap-4">
                        <button class="actionBtn"><i class="fa-regular fa-bookmark"></i></button>
                    </div>
                    <div class="card-body p-0 " style="padding:0px !important;">
                        <div class="p-2">
                            <div class="flex justify-between items-center text-white h-full gap-2 ">
                                <div class=" bg-black bg-opacity-60 px-1 md:px-2 py-0.5 font-bold rounded-[5px] text-xs md:text-sm">
                                    <i class="fa-solid fa-star text-[#FAFF00]"></i> <span>${parseFloat(item.MovieRatings).toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
            
                        <div class="h-full flex items-end px-2 py-2">
                            <div class="w-full ">
                                <div class="flex items-center text-white h-full gap-2 " style="text-shadow: 2px 3px 3px #000; ">
                                    <div class="w-full">
                                        <h3 class="text-sm md:text-md font-bold mb-1 ">${item.MovieTitle}</h3>
                                        <p class="text-xs md:text-sm">${item.MovieYear} | ${item.MovieQuality}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" absolute w-full h-full " style="background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9)80%)"></div>
                    <div class="playLayer absolute opacity-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] transition-all duration-300">
                        <div class="">
                                <button class="btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]">
                                  <i class="fa-solid fa-play text-[20px] pl-1 "></i>
                                </button>
                        </div>
                    </div>
                    
                </div>
            </a>
        </div>
    `;
    return op;
}
function tvSeriesCardsNonHoverPlay(item){
    op=`
        <div class="col-span-4 md:col-span-3 lg:col-span-2" >
            <a onclick="pageRoute('?a=tv-series&id=${item.id}')">
                <div class="card videoCardsNonHoverPlay relative w-full shadow-xl image-full rounded-md overflow-hidden bg-transparent before:hidden">
                    <figure><img src="http://103.68.104.71//Admin/main/TVseries/${item.TVID}/poster/${item.TVposter}" alt="" class="w-full rounded-none" /></figure>
                    <div class="actionWrap flex justify-self-end mt-4 mr-4 flex-col gap-4">
                        <button class="actionBtn"><i class="fa-regular fa-bookmark"></i></button>
                    </div>
                    <div class="card-body p-0 " style="padding:0px !important;">
                        <div class="p-2">
                            <div class="flex justify-between items-center text-white h-full gap-2 ">
                                <div class=" bg-black bg-opacity-60 px-1 md:px-2 py-0.5 font-bold rounded-[5px] text-xs md:text-sm">
                                    <i class="fa-solid fa-star text-[#FAFF00]"></i> <span>${item.TVRatings==""?0:parseFloat(item.TVRatings).toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
            
                        <div class="h-full flex items-end px-2 py-2">
                            <div class="w-full ">
                                <div class="flex items-center text-white h-full gap-2 " style="text-shadow: 2px 3px 3px #000; ">
                                    <div class="w-full">
                                        <h3 class="text-sm md:text-md font-bold mb-1 ">${item.TVtitle}</h3>
                                        <p class="text-xs md:text-sm">${item.TVcategory}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" absolute w-full h-full " style="background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9)80%)"></div>
                    <div class="playLayer absolute opacity-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] transition-all duration-300">
                        <div class="">
                                <button class="btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]">
                                  <i class="fa-solid fa-play text-[20px] pl-1 "></i>
                                </button>
                        </div>
                    </div>
                    
                </div>
            </a>
        </div>
    `;
    return op;
}
function sessionsCards(item){
    op=`
        <div class="swiper-slide ">
                <div class="card videoCardsNonHoverPlay relative w-full h-[100px] md:h-[160px]  shadow-xl image-full rounded-md overflow-hidden bg-transparent before:hidden">
                    <figure><img src="${item.thumb}" alt="" class="w-full rounded-none" /></figure>
                    <div class="card-body p-0 " style="padding:0px !important;">
                        <div class="p-2">
                            <div class="flex justify-end items-center text-white h-full gap-2 ">
                                <div class=" bg-white bg-opacity-30 backdrop-blur px-2 py-0.5 rounded-[3px] text-[11px]">
                                    <span class="text-[14px]">S</span>01 <span class="text-[14px]">E</span>${item.id<10 && '0'}${item.id+1} 
                                </div>
                            </div>
                        </div> 
            
                        <div class="h-full flex items-end px-2 py-1">
                            <div class="w-full ">
                                <div class="flex justify-between text-white h-full gap-2 " style="text-shadow: 2px 3px 3px #000; ">
                                    <a class="text-sm"><i class="fa-solid fa-download"></i></a>
                                    <h3 class="text-sm">${item.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" absolute w-full h-full " style="background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9)80%)"></div>
                    <div class="playLayer absolute opacity-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] transition-all duration-300">
                        <div class="">
                                <button class="btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]">
                                  <i class="fa-solid fa-play text-[20px] pl-1 "></i>
                                </button>
                        </div>
                    </div>
                    
                </div>
        </div>
    `;
    return op;
}
function continueWatchingCards(item){
    return  `
            <div class="swiper-slide">
                <div class="card w-full bg-base-100 shadow-xl image-full rounded-[5px] overflow-hidden bg-transparent before:hidden">
                    <figure ><img src="${item.thumb}" alt="" class="w-full h-full rounded-none" /></figure>
                    <div class="card-body p-0 ">
                        <div class="p-2 md:p-4">
                            <div class="flex justify-between items-center text-white h-full gap-2">
                                <div class="bg-black bg-opacity-50 md:font-bold rounded-[5px] px-1 text-[12px] md:text-[15px]">
                                    <i class="fa-solid fa-star text-[#FAFF00]"></i> <span>${item.imdbRating}</span>
                                </div>
                                <div class="">
                                    <button class=""><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="h-full flex items-end">
                            <div class="bg-[#5F5F5F] opacity-95 w-full h-[50px] md:h-[80px] px-2 py-3" style="box-shadow: 0px 17px 6px -12px rgba(0,0,0,0.25) inset;">
                                <div class="flex items-center text-white h-full gap-2">
                                    <div class="w-full">
                                        <h3 class="text-sm md:text-base truncate font-bold">${item.title}</h3>
                                        <div class="flex md:py-1.5 md:pb-3">
                                            <div class="w-[${item.watchTime}%] pt-0.5 bg-[#DD192A]"></div>
                                            <div class="w-full pt-0.5 bg-[#6D6E6E]"></div>
                                        </div>
                                        <p class="text-[10px] md:text-xs truncate">${item.remainingTime}</p>
                                    </div>
                                    <div class="">
                                        <button class="w-[25px] h-[25px] md:w-[40px] md:h-[40px] rounded-full bg-[#DD192A] text-xs md:text-base pl-[2px] pt-[1px]"><i class="fa-solid fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
    `;
}
