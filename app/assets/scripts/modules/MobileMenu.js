// 1. Select the Element
// 2. Add the listener
// 3. write a function which performs job when event occurs
// =>  : arrow opeartor  prevents the scope of this
// document.querySelector("selector").addEventListener("click",function(){

// })


class MobileMenu {
    constructor() {
        // select the Element
        this.menuIcon = document.querySelector(".mobile-header-icon");
        this.mobileHeader = document.querySelector(".mobile-menu");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu()); //arrow opeartor  prevents the scope of this
        console.log("clicked");
    }
    toggleMenu() {
        this.mobileHeader.classList.toggle("mobile-menu-active");
        this.menuIcon.classList.toggle("mobile-header-icon-close");
    }
}

export default MobileMenu;