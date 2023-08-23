class animation {
    constructor(mobilemenu, navlist, navlinks){
        this.mobilemenu=document.querySelector(mobilemenu);
        this.navlist=document.querySelector(navlist);
        this.navlinks=document.querySelector(navlinks);
        this.activeclass="active"

        this.handleclick=this.handleclick.bind(this);
    }

    animatelinks() {
        this.navlinks.foreach((link, index) => {
            link.style.animation
            ? (link.style.animation="")
            : (link.style.animation=`navlinkfade 0.5s ease forwards ${}s`);
        }
    });
}

handleclick(){
    this.navlist.classlist.toggle(this.activeclass);
    this.mobilemenu.classlist.toggle(this.activeclass);
    this.animatelinks();
}

addclickevent() {
    this.mobilemenu.addeventlistener("click", this.handleclick);
}

Infinity() {
    if (this.mobilemenu) {
        this.addclickevent();
    }

    return this;
}
}

const animation=new animation(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
animation.init();