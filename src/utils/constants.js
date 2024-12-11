const LOGO_IMG = "https://www.laltrapagina.it/mag/wp-content/uploads/2015/06/Netflix_Logo-300x80.png"
const BG_IMG = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png\n"
const USER_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
const PROFILE_PIC = "https://avatars.githubusercontent.com/u/104405128?v=4"
const IMG_CDN = "https://image.tmdb.org/t/p/w200/"

const GEMINI_KEY = "AIzaSyAdGe3Wwc50DFgBJ5v9AhnlXHywgYSjGgc"

const GPT_PROMPT = "Act as a movie recommendation system and suggest some movies for the query, only give me name of 5-10 movies comma separated; query : "

const SITE_TEXT = {
    signInText: "Sign In",
    subSignInText: "new to netflix?",
    signInLinkText: "Sign in now",
    signUpText: "Sign Up",
    subSignOutText: "already registered?",
    signUpLinkText:"sign up now"
}

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWI4YjQ4YTg1NzJmODc1YTZiYTM0Yjk4NDRlYjJlOCIsIm5iZiI6MTcyMjMxMDMzOS41ODg3NTcsInN1YiI6IjY2YTg1YzhmZDc5MmRkMDNkNGUwYWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gm2xpXauUcHaGvqdlaHo4wKQeqZdoj_1RWDJVznrRNA'
    }
};

export {LOGO_IMG,BG_IMG,USER_IMG,PROFILE_PIC,API_OPTIONS,IMG_CDN,
    GEMINI_KEY,
    GPT_PROMPT,
    SITE_TEXT};