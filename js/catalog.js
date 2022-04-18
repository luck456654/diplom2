(() => {
    function setTabs (dataPath, dataTarget) {
        const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
        const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);
        
        btns.forEach((btn) => {
            btn.addEventListener('click', function (evt) {
                const path = this.getAttribute(dataPath);
                console.log(path);
                const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


                btns.forEach((currentBtn) => {
                    currentBtn.classList.remove('is-active');
                });

                this.classList.add('is-active');

                contents.forEach((content) => {
                    content.classList.remove('is-active');
                });

                target.classList.add('is-active');
            });
        });
    }
window.setTabs=setTabs;
    
})();

let empty=document.querySelectorAll(".catalog__show-empty")
let contentEmpty=document.querySelector(".catalog__empty")
let domeniko=document.querySelector(".catalog__domeniko")


empty.forEach((empty) => {empty.addEventListener("click",showEmpty)})

function showEmpty(){
    contentEmpty.style.display="block";
    domeniko.style.display="none";
}
let dominico=document.querySelector(".catalog__show-dominico")
dominico.addEventListener("click",showDomenico)

function showDomenico(){
    contentEmpty.style.display="none";
    domeniko.style.display="block";
}