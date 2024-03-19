
if(!localStorage.getItem('isLogged')){
    localStorage.setItem('isLogged', 0)
}
var isLogged=Boolean(Number(localStorage.getItem('isLogged')));
function logout(){
    localStorage.clear();
    window.location.replace(baseURL);
}
function modifyUrl(title, url) {
    if (typeof history.pushState !== "undefined") {
        var obj = {
            Title: title,
            Url: url
        };
        history.pushState(obj, obj.Title, obj.Url);
    }
}

$(function () {
    if (isLogged) {
        $("#navbar").load("components/navbar.html");
        $(function() {
            if(a!=''){
                modifyUrl("Login", `${baseURL+urlParamsString}`)
            }
            pageRoute(urlParamsString)
        });
    } else {
        $("#root").load("components/login.html");
        modifyUrl("Login", baseURL+'?a=login')
    }
})
window.addEventListener('popstate', function(event) {
    pageRoute(window.location.search, true)
});
function pageRoute(routes, historyBack=false){
    let urlParams = new URLSearchParams(routes);
    let a=""; if(urlParams.has('a')) a=urlParams.get('a');
    let category=""; if(urlParams.has('category')) category=urlParams.get('category');
    let id=""; if(urlParams.has('id')) id=urlParams.get('id');
    if(!historyBack) {
        modifyUrl(a, baseURL + routes)
    }
    /*console.log('currentPage', currentPage)
    console.log('to', link)*/
    if (a == 'movies') {
        if(id!=""){
            loadSingleMoviePage();
        }else {
            if (currentPage == 'movies') {
                if (category != '') {
                    filterStrategy.category = category;
                    getMovies();
                    $("#language").val(category);
                } else {
                    filterStrategy.category = '';
                    getMovies();
                    $("#language").val('');
                }
                //console.log(category)
                //getMovies()
            } else {
                $("#root").load("components/movies/movies.html", function () {
                    currentPage = a;
                    getMoviePage()
                    if (category != '') {
                        filterStrategy.category = category;
                        getMovies();
                        setTimeout(() => {
                            $("#language").val(category)
                        }, 500);
                    } else {
                        getMovies()
                    }

                });
            }
        }

    } else if (a == 'tv-series') {
        if(id!=""){
            loadSingleTVseriesPage();
        }else {
            if (currentPage == 'tv-series') {

                if (category != '') {
                    filterTVseriesStrategy.category = category;
                    getTvSeries();
                    $("#language").val(category);
                } else {
                    filterTVseriesStrategy.category = '';
                    getTvSeries();
                    $("#language").val('');
                }
                //console.log(category)
                //getMovies()
            } else {

                $("#root").load("components/tv-series/tv-series.html", function () {
                    currentPage = a;
                    getTvSeriesPage()
                    if (category != '') {
                        filterTVseriesStrategy.category = category;
                        getTvSeries();
                        setTimeout(() => {
                            $("#language").val(category)
                        }, 500);
                    } else {
                        filterTVseriesStrategy.category=''
                        getTvSeries()
                    }

                });
            }
        }

    } else if (a == 'genre') {

        if(currentPage=='genre'){
            if(category!=''){
                filterStrategy.genre=category;
                getMovies();
                $("#genres").val(category);
            }else{
                getMovies();
                ("#genres").val('');
            }
        }else{
            currentPage=a;
            $("#root").load("components/movies/movies.html", function() {
                getMoviePage()
                if(category!=''){
                    filterStrategy.genre=category;
                    getMovies();
                    setTimeout(()=>{$("#genres").val(category)}, 500);
                }else{
                    getMovies();
                }

            });
        }

    }else if (a == 'live-tv') {
        $("#root").load("components/live-tv/live-tv.html", function() {
            currentPage=a;
        });
    }else if (a == 'my-list') {
        $("#root").load("components/my-list/my-list.html", function() {
            currentPage=a;
        });
    }else if (a == 'request') {
        $("#root").load("components/request/request.html", function() {
            currentPage=a;
        });
    }else if (a == 'user-profile') {
        $("#root").load("components/User/userProfile.html", function() {
            currentPage=a;
        });
    }else if (a == 'parental-lock') {
        $("#root").load("components/parental-lock/parental-lock.html", function() {
            currentPage=a;
        });
    }else if (a == 'my-watchlist') {
        $("#root").load("components/my-watchlist/my-watchlist.html", function() {
            currentPage=a;
        });
    }else if (a == '') {
        $("#root").load("components/homepage.html", function() {
            currentPage='homepage';
            if(!historyBack) {
                modifyUrl("Homepage", baseURL)
            }
        });
    } else {
        $("#root").load("components/error-page/error-page.html", function() {
            currentPage=a;
        });
    }

}


