
const headerLogic = function() {
    const burgerBtn = document.querySelector(".burger-menu");
    const burgerToggle = document.querySelector("#burger-menu-toggle");
    ///
    const userBtn = document.querySelector(".user-btn");
    const userToggle = document.querySelector("#user-icon-toggle");
    ///
    const arrowIcon = document.querySelector(".user-icon-arrow");
    const downArrow = "&#9660";
    const upArrow = "&#9650";

    let btnClick = false;
    
    burgerBtn.addEventListener('click', () => {
        userToggle.checked = false;
    });

    userBtn.addEventListener('click', () => {
        burgerToggle.checked = false;

        if(userToggle.checked){
            arrowIcon.innerHTML = upArrow;
            btnClick = true;
        } else{
            arrowIcon.innerHTML = downArrow;
            btnClick = false;
        }
    });

    userBtn.addEventListener('mouseover', () => {
        burgerToggle.checked = false;
        arrowIcon.innerHTML = upArrow;
    });

    userBtn.addEventListener('mouseout',() => {
        burgerToggle.checked = false;
        if(!btnClick){
            arrowIcon.innerHTML = downArrow;
        }
    });

}();


const bannerVideo = function() {
    const video = document.querySelector('#video');

    video.playbackRate = 0.75;
}();
