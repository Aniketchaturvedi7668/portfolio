
// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// gsap
gsap.from("#ha", {
    y: -50,
    opacity: 0,
    delay: 0.1,
    dyration: 1,
    stagger: 1,
})

function br() {
    var name1 = document.querySelector("p")
    var ba = name1.textContent
    var spa = ba.split("")
    var cluter = ""
    spa.forEach(function(elem) {
        cluter = cluter + `<span>${elem}</span>`
    })

    name1.innerHTML = cluter

}
br()
gsap.from("p span", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.15,

    })
    // function brr(){
    //     var name1=document.querySelector("#na")
    //     var ba=name1.textContent
    //     var spa=ba.split("")
    //     var cluter=""
    //     spa.forEach(function(elem){
    //     cluter= cluter+`<span>${elem}</span>`
    //     })

//      name1.innerHTML=cluter

//     }
//     brr()
//     gsap.from("#na span",{
//         y:70,
//         opacity:0,
//         duration:0.8,
//         delay:2,
//         stagger:0.15,

// })
//para\

function brrr() {
    var name1 = document.querySelector("#para")
    var ba = name1.textContent
    var spa = ba.split("")
    var cluter = ""
    spa.forEach(function(elem) {
        cluter = cluter + `<span>${elem}</span>`
    })

    name1.innerHTML = cluter

}
brrr()
gsap.from("#para span", {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        delay: 3,

    })
    // img
gsap.from("#im", {
        x: 300,
        opacity: 0,
        scale: .3,
        delay: 3,
        duration: 2,
        rotate: 360,

    })
    // about

gsap.from("h2", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "h2",
        scroller: "body",
        markers: "",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }


})

function brr2() {
    var name1 = document.querySelector("#para2")
    var ba = name1.textContent
    var spa = ba.split("")
    var cluter = ""
    spa.forEach(function(elem) {
        cluter = cluter + `<span>${elem}</span>`
    })

    name1.innerHTML = cluter

}
brr2()
gsap.from("#para2 span", {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        delay: 1,
        scrollTrigger: "para2 span"
    })
    // project
gsap.from("h3", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "h3",
        scroller: "body",
        markers: "",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})
gsap.from("#info", {
    x: -100,

    rotate: 10,
    duration: 1,
    scrollTrigger: ("#info")

})
gsap.from("#info2", {
    x: -100,

    rotate: 9,
    duration: 1.2,
    scrollTrigger: ("#info2")

})

    
    // form
gsap.from("#forma", {
        x: 200,
        delay: 0.01,
        scrollTrigger: ("#forma")

    })
    // info
gsap.from("#li2", {
    x: -50,
    opacity: 0,
    delay: 0.1,
    dyration: 1,
    stagger: 1,
    scrollTrigger: ("#li2")

})







// loader1
let circle1 = document.querySelector(".circle"),
    value1 = document.querySelector(".valu")
let start = 0,
    end = 70,
    speed = 100
const rol = () => {
    let progress = setInterval(() => {
        start++;
        value1.textContent = `${start}%`
        circle1.style.background = `conic-gradient(#deae67 ${start * 3.6}deg, #ededed 0deg)`
        if (start == end) {
            clearInterval(progress)
        }

    }, speed);
}
const box2 = document.getElementById("go");
const obcsd = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rol();
            obcsd.unobserve(box2);
        }
    });
}, {
    threshold: 0.5
});
obcsd.observe(box2);
//
let circle2a = document.querySelector(".circle2"),
    value2a = document.querySelector(".valu2")
let start2 = 0,
    end2 = 60,
    speed2 = 100
const rol2 = () => {
    let progress2 = setInterval(() => {
        start2++;
        value2a.textContent = `${start2}%`
        circle2a.style.background = `conic-gradient(#deae67 ${start2 * 3.6}deg, #ededed 0deg)`
        if (start2 == end2) {
            clearInterval(progress2)
        }

    }, speed2);
}
const box2aa = document.getElementById("go2");
const obcsd2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rol2();
            obcsd2.unobserve(box2aa);
        }
    });
}, {
    threshold: 0.5
});
obcsd2.observe(box2aa);
//
let circle3a = document.querySelector(".circle3"),
    value3a = document.querySelector(".valu3")
let start3 = 0,
    end3 = 50,
    speed3 = 100
const rol3 = () => {
    let progress3 = setInterval(() => {
        start3++;
        value3a.textContent = `${start3}%`
        circle3a.style.background = `conic-gradient(#deae67 ${start3 * 3.6}deg, #ededed 0deg)`
        if (start3 == end3) {
            clearInterval(progress3)
        }

    }, speed3);
}
const box3aa = document.getElementById("go3");
const obcsd3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rol3();
            obcsd3.unobserve(box3aa);
        }
    });
}, {
    threshold: 0.5
});
obcsd3.observe(box3aa);
//
let circle4a = document.querySelector(".circle4"),
    value4a = document.querySelector(".valu4")
let start4 = 0,
    end4 = 70,
    speed4 = 100
const rol4 = () => {
    let progress4 = setInterval(() => {
        start4++;
        value4a.textContent = `${start4}%`
        circle4a.style.background = `conic-gradient(#deae67 ${start4 * 3.6}deg, #ededed 0deg)`
        if (start4 == end4) {
            clearInterval(progress4)
        }

    }, speed4);
}
const box4aa = document.getElementById("go4");
const obcsd4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rol4();
            obcsd4.unobserve(box4aa);
        }
    });
}, {
    threshold: 0.5
});
obcsd4.observe(box4aa);
