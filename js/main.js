window.onscroll = function (e) {
    console.log(this.document.body.scrollTop);
    let div = document.getElementById("zombie");

    
    if (this.document.body.scrollTop <50 || document.documentElement.scrollTop <50) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-100px';
    }
    if (this.document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '100px';
    }
    if (this.document.body.scrollTop >=400 || document.documentElement.scrollTop >= 400) {
        div.style.backgroundPosition = '-123px 0px';
        div.style.top = '250px';
    }
    if (this.document.body.scrollTop >=800 || document.documentElement.scrollTop >= 800) {
        div.style.backgroundPosition = '-246px 0px';
        div.style.top = '35%';
    }
    if (this.document.body.scrollTop >=1200 || document.documentElement.scrollTop >= 1200) {
        div.style.backgroundPosition = '-369px 0px';
        div.style.top = '35%';
    }
    if (this.document.body.scrollTop >=1600 || document.documentElement.scrollTop >= 1600) {
        div.style.backgroundPosition = '-492px 0px';
        div.style.top = '35%';
    }
    if (this.document.body.scrollTop >=2000 || document.documentElement.scrollTop >= 2000) {
        div.style.backgroundPosition = '-615px 0px';
        div.style.top = '60%';
    }
    if (this.document.body.scrollTop >=2400 || document.documentElement.scrollTop >= 2400) {
        div.style.backgroundPosition = '-123px -80px';
        div.style.top = '60%';
    }
    if (this.document.body.scrollTop >=2800 || document.documentElement.scrollTop >= 2800) {
        div.style.backgroundPosition = '-246px -80px';
        div.style.top = '60%';
    }
    if (this.document.body.scrollTop >=3200 || document.documentElement.scrollTop >= 3200) {
        div.style.backgroundPosition = '-369px -80px';
        div.style.top = '70%';
    }
    if (this.document.body.scrollTop >=3500 || document.documentElement.scrollTop >= 3500) {
        div.style.backgroundPosition = '-492px -80px';
        div.style.top = '80%';
    }
    if (this.document.body.scrollTop >=3600 || document.documentElement.scrollTop >= 3600) {
        div.style.backgroundPosition = '-615px -80px';
        div.style.top = '90%';
    }
}