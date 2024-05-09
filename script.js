const cardContainer = document.querySelector(".cards")
const followCardsContainer = document.querySelector(".follow-us")


function setCards(){
  
    let res = ""
    for(let i = 0 ; i < 4 ; i++){
        res+= `<div class="single-card max-w-sm bg-white border-2 border-gray-200  shadow mx-5 h-[32rem]">
        <a href="#">
            <img class="h-[18rem] w-full" src="https://cdn.create.vista.com/api/media/medium/327501630/stock-photo-skin-care-serum-and-gel-bottle-moisturizing-lotion-and-lifting?token=" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="card-btn px-14 py-2 border-1 bg-black text-white hover:bg-brown">
                Select Options
            </a>
        </div>
    </div>`
    }

    cardContainer.innerHTML = res;
}

function setfollowCards(){
    const cardImgs = [
        "https://cdn.create.vista.com/api/media/small/557559366/stock-photo-beautiful-color-light-sky-cloud-background-sunset",
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/040/975/116/small_2x/sunset-sky-with-red-clouds-photo.jpg",
        "https://as1.ftcdn.net/v2/jpg/01/84/81/52/1000_F_184815227_fAUSrlo1TNhxEQlMiCZyVG5e6TMvgXqC.jpg"
    ]
    let res = ""
    for(let i = 0 ; i < 4 ; i++){
        res+=`   <div class="follow-card w-full h-[15rem] relative">
        <img class="object-fit-cover w-full h-full" src=${cardImgs[i]} alt="">
        <div class="absolute top-[30%] text-white px-4">
            <p class="font-bold mb-7 text-xl" ><i class="fa-brands fa-square-instagram  text-white"></i> shopbirdndblocks</p>
            <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit</P>
            <h3 class="font-bold my-2">FOLLOW US</h3>
        </div>

        </div>`
    }

    followCardsContainer.innerHTML = res;
}

window.onload(setCards() , setfollowCards())