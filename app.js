function createImage(src, width, height, opacity) {
  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  img.style.opacity = opacity;
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.position = 'fixed';
  document.body.appendChild(img);
  return img;
}


function createVideo(src, width, height, opacity) {
  const video = document.createElement('video');
  video.src = src;
  video.width = width;
  video.height = height;
  video.style.opacity = opacity;
  video.style.left = "50%";
  video.style.top = "50%";
  video.style.transform = "translate(-50%, -50%)";
  video.style.position = 'absolute';
  video.autoplay = false;
  video.muted = true;
  document.body.appendChild(video);
  return video;
}

const textHeight = document.querySelector(".mcountry").offsetHeight;
const windowHeight = window.innerHeight;
const distance = textHeight + windowHeight;
const duration = distance / 200;
var h = window.innerHeight/2
var w = window.innerWidth/2

const myImage = createImage("./images/suka2.jpg", 600, 600, 0);
const jawa = createImage("./images/jawa.jpg", 600, 600, 0);
const attend = createImage("./images/bangdunattend.png", 1000, 600, 0);
const bangbang = createVideo("./images/bangbang.mp4", 1000, 600, 0)
const organizingCountries = document.querySelectorAll('.organizing-country');
const memberCountries = document.querySelectorAll('.member-country');
const soviet = createImage("./globalpictures/soviet.png", 1000, 600, 0);
const bagpact = createImage("./globalpictures/baghdad.png", 1000, 600, 0);
const cento = createImage("./globalpictures/cento.png", 1000, 600, 0);
const firstworld = createImage("./globalpictures/first-world.jpg", 1000, 600, 0);
const huey = createImage("./globalpictures/huey.jpg", 1000, 600, 0);
const huey2 = createImage("./globalpictures/huey2.jpg", 1000, 600, 0);
const imperialism = createImage("./globalpictures/imperialism.jpg", 1000, 600, 0);


const imperialismus = createImage("./globalpictures/imperialismus.jpg", 1000, 600, 0);
const lenin = createImage("./globalpictures/lenin.jpg", 1000, 600, 0);
const marx = createImage("./globalpictures/marx.jpg", 1000, 600, 0);
const nasser = createImage("./globalpictures/nasser.jpg", 1000, 600, 0);
const nasser2 = createImage("./globalpictures/nasser2.jpg", 1000, 600, 0);
const nehru = createImage("./globalpictures/nehru.jpg", 1000, 600, 0);
const nehru2 = createImage("./globalpictures/nehru2.jpg", 1000, 600, 0);
const nonaligned = createImage("./globalpictures/nonaligned.jpg", 1000, 600, 0);
const seato = createImage("./globalpictures/seato.png", 1000, 600, 0);
const seato1 = createImage("./globalpictures/seato1.jpg", 1000, 600, 0);
const suk1 = createImage("./globalpictures/suk1.jpg", 1000, 600, 0);
const suk2 = createImage("./globalpictures/suk2.jpg", 1000, 600, 0);
const sunYatSen = createImage("./globalpictures/Sun-Yat-sen.webp", 1000, 600, 0);               //not added
const sunabe = createImage("./globalpictures/sunabe.jpg", 1000, 600, 0);                        //not added
const sunyat = createImage("./globalpictures/sunyat.jpg", 1000, 600, 0);                        //not added
const britishEmpire = createImage("./globalpictures/The_British_Empire.png", 1000, 600, 0);     // not added
const us = createImage("./globalpictures/us.png", 1000, 600, 0);                                //not added
const b1 = createImage("./globalpictures/b1.png", 1000, 600, 0);
const b2 = createImage("./globalpictures/b2.png", 1000, 600, 0);
const b3 = createImage("./globalpictures/b3.png", 1000, 600, 0);
const b4 = createImage("./globalpictures/b4.png", 1000, 600, 0);
const b5 = createImage("./globalpictures/b5.png", 1000, 600, 0);
const b6 = createImage("./globalpictures/b6.png", 1000, 600, 0);
const b7 = createImage("./globalpictures/b7.png", 1000, 600, 0);
const b8 = createImage("./globalpictures/b8.png", 1000, 600, 0);
const b9 = createImage("./globalpictures/b9.png", 1000, 600, 0);
const b10 = createImage("./globalpictures/b10.png", 1000, 600, 0);
const usa = createImage("./globalpictures/usamap.jpg", 1000, 600, 0);
const banny = createImage("./globalpictures/banny.jpg", 1000, 600, 0);
const benbella = createImage("./globalpeople/benbella.jpg", 1000, 600, 0);
const castro = createImage("./globalpeople/castro.jpg", 1000, 600, 0);
const hochi = createImage("./globalpeople/hochi.jpg", 1000, 600, 0);
const julius = createImage("./globalpeople/julius.jpg", 1000, 600, 0);
const kwame = createImage("./globalpeople/kwame.jpg", 1000, 600, 0);
const tito = createImage("./globalpeople/tito.jpg", 1000, 600, 0);
const fanon = createImage("./globalpictures/fanon.png", 1000, 600, 0);





const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.set(".begin0", { opacity: 0 }); // set initial opacity to 0
timeline.set(".org-title", {opacity:0})
timeline.set(".member-title", {opacity:0})
timeline.set(".cite", {opacity: 0, scale: .55})

timeline.to(".wrapper", { opacity: 0})
//intro section
        .to(".text", { y: "0%", duration: 2, stagger: 1 })
        .to(".slider", { y: "-100%", duration: 1, delay: .5 })
        .to(".intro", { y: "-100%", duration: 1 })

        ////////intercommunalism
        .to(".big-text", {x: "20%", duration: 2.75})
        .fromTo(".big-text2", { opacity: 0 }, { marginLeft:"-20%", opacity: 1, duration: 2})
        .to(".big-text2", { duration: 3.5}, "-1")
        .to(".big-text", { opacity: 0 } )
        .to(".big-text2", { opacity: 0} )
        .call(() => {
            document.querySelector(".cite").innerHTML = "Acharya, Amitav. 'Studying the Bandung Conference from a Global IR perspective.'" })
        ////x quote
        .to(".black-box", { opacity: 1, duration: .61 })
        .to("body", { backgroundColor: "#000000" })
        .fromTo(".begin0", { opacity: 0 }, { opacity: 1, duration: 5.5})
        .fromTo(".begin0", { opacity: 1 }, { opacity: 0, duration: 2, delay:1.15 })


        //1955
        .to(".bang span", { opacity: 1, stagger: 0.25 , duration: 1.84})
        .to(".bang span", { opacity: 0, stagger: 0.25 })

        ////bandung
        .fromTo(".city", { opacity: 0}, { opacity: 1, duration: .4, delay:1.15})
        .to(".city",  { duration: 1, delay:1.15, scale: .5, top: "10%", left: "12%"})
        .to(".city", { backgroundColor: "lightskyblue", duration: 1 }, "<")
        .to("body", { backgroundImage: "url('./images/bang1.jpeg')" , delay: 1}, "<")

        .call(() => {
        document.querySelector(".begin1 p").innerHTML = "President Sukarno of Indonesia proclaimed it 'the first international conference of colored peoples in the history of mankind.'"
        })
        .to(".cite", {opacity:1})

        //     .to({}, { duration: 3 })
        .to(".org-title", {opacity:1, duration:2, y: "-300%" })
        .to(".organizing-countries", { opacity: 1, duration: 1 })
        .to(".org-title", {opacity:0, duration:1})
        .to(".country", { opacity: 1, duration: 1 })
        .to(".country", {opacity:0, duration: 1, delay:3})

       .to(".member-title", {opacity:1, duration:1, y: "-300%"})
        .to(".member-title", {opacity:0, duration:1, delay: 1})
        .to(".member-countries", { opacity: 1, duration: 1, x: "20%"})
        .to(".mcountry", { opacity: 1, duration:1})
                     .to({}, { duration: 2 })

        .to(".mcountry", {duration: 10, y: -2500})
        .to(".mcountry", { opacity: 0}, ">")


        .to(suk1, {scale: .75, y: "-20%", opacity:1}, "=-4")
        .to(".begin1", {opacity:1, y: "80%", height: "fit-content"},"=-4")
//
        .to({}, {delay: 4})
        .to(".begin1", {opacity: 0})
        .to(".cite", {opacity:0})

        .to(suk1, {opacity: 0})
        //conference text 1
        .to(".city", { opacity: 0})
        .call(() => { document.querySelector(".begin1").innerHTML =
        "The Bandung Spirit represented a shift in international relations away from the binary Cold War worldview, which divided the world into two opposing camps."
        })

        .to(".begin1", {opacity: 1, y: "-40%"})
        .to({}, { delay: 5 })

        .to(soviet, {opacity: 1, x: "-30%"}, ">")
        .to(usa,{opacity: 1, x: "30%"})
        .call(() => { document.querySelector(".cite").innerHTML =
"Indonesia and Africa, Asian-African Summit 2005 and the Commemoration of the Golden Jubilee of the Asian-African Conference 1955."
        })
        .call(() => { document.querySelector(".begin1").innerHTML =
        "The Third World was made up of newly independent countries that were struggling to develop their economies and societies in the aftermath of colonialism."

        })

        .to(".cite", {opacity: 1})
        .to(".begin1", {scale: .8})
        .to(soviet, {opacity: 1, x: "-60%",  scale: .5}, ">")
        .to(usa,{opacity: 1, x: "60%" , scale: .5}, "<")


        .call(() => { document.querySelector(".firstworld1").innerHTML ="the First World"})
        .call(() => { document.querySelector(".secworld1").innerHTML ="the Second World"})

        .to(".firstworld1",{opacity: 0, x: "115%", y: "-150%"})
        .to(".secworld1", {opacity: 0, x: "-135%", y: "-150%"})
        .to(".firstworld1",{opacity: 1})
        .to(".secworld1", {opacity: 1})


        .to({}, { delay: 6 })

        .to(".cite", {opacity: 0})
        .to(usa,{opacity: 0})
        .to(soviet,{opacity: 0})

        .to(".secworld1", {opacity: 0})
        .to(".firstworld1", {opacity: 0})

         .call(() => {
            document.querySelector(".begin1").innerHTML =
                "The Conference paved the way for formerly subjugated nations to unite for 2 major goals:"
            })
           .to(".begin1", { opacity: 1, duration: 1 })

                      .to({}, { delay: 4 })


         .call(() => {
            document.querySelector(".begin1").innerHTML =
                "1. Promote Afro-Asian economic and cultural cooperation"
            })
           .to({}, { delay: 4 })


         .call(() => {
            document.querySelector(".begin1").innerHTML =
                 "2. Oppose colonialism and neo-colonialism by any nation"
             })

            .to({}, { delay: 4 })


            .to(".begin1", { opacity: 0 })


        .to(banny, {opacity:1})
        .to({}, { delay: 4.5 })

        .to(banny, {opacity:0})

        .to("body", { backgroundImage: "url('./globalpictures/banny.jpg')"},"<")


        .call(() => { document.querySelector(".begin1").innerHTML =
"The Bandung conference adopted in their Final Communiqué the Ten Principles, which became a cornerstone of the non-aligned movement."})
            .to(".begin1", { opacity: 1 },"<")

        .to({}, { delay: 6 })

        .call(() => { document.querySelector(".cite").innerHTML =
"Bhambra, Gurminder K. and Narayan, John (2016) 'Colonial histories and the post-colonial present of European cosmopolitanism'"
})

        .to(".cite", { opacity: 1 })


        .call(() => { document.querySelector(".begin1").innerHTML =
       "  The principles emphasized respect for sovereignty, territorial integrity, and non-interference in the internal affairs of other nations."})
        .to({}, { delay: 6 })

        .to(".cite", { opacity: 0 })


        .call(() => { document.querySelector(".begin1").innerHTML =

"The Ten Principles provided a framework for cooperation among the participating countries and became a rallying point for other non-aligned nations."
})
        .to(".cite", { opacity: 1 })

        .to({}, { delay: 6 })
        .to(".begin1", {opacity: 0, duration: 1})
        .to({}, {delay: 1})
        .to("body", { backgroundImage: "none", backgroundColor: "black" })


//Non-Aligned-Movement
        .fromTo(".nonA", {opacity: 0}, {opacity: 1, duration: 1})
        .to({}, {delay: 2})
        .to(".nonA", {opacity: 0, duration: 1})

//picture
        .to(nonaligned, {opacity:1, duration: 1})
        .to({}, { delay: 4 })
        .to(nonaligned, {opacity:0, duration: 1})

//text
        .call(() => { document.querySelector(".cite").innerHTML =
"Rodriguez, Besenia (2006) 'Long Live Third World Unity! Long Live Internationalism!'"
})

        .call(() => { document.querySelector(".begin1").innerHTML =
"The Bandung Conference gave birth to what we now know as the Non-Aligned Movement or NAM. This movement was a group of countries that refused to align themselves with either the US-led Western bloc or the Soviet-led Eastern bloc. These were countries that sought to maintain their independence and neutrality in the Cold War, refusing to become mere pawns in a game played by the great powers."
                  })
        .to(".begin1", {opacity:1})
        .to({}, { delay: 14 })
        .to(".begin1", {opacity:0})

        .to(".cite", {opacity: 0})

//tito
            .to(".begin1", {top:"50%", left:"50%",  xPercent: -50, yPercent: -20})
            .to(tito, { opacity: 1, duration: 2})
                    .call(() => { document.querySelector(".cite").innerHTML =
"Robert Niebuhr, 'Nonalignment as Yugoslavia's Answer to Bloc Politics.'"})
            .to(tito, { x: "45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Tito's Yugoslavia was one of the founding members of the Non-Aligned Movement, which aimed to promote independence, sovereignty, and cooperation among developing countries. This was a major example of Tito's commitment to non-alignment and neutrality in the Cold War, and to promoting international solidarity among developing countries."
            })
            .to(".keywordSpeaker", {opacity:0, x: "100%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "-275%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Josip Broz Tito"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Yugoslavia"})
            .to(".cite", {opacity: 1})
            .to(".begin1", {x: "-45%", duration: 3, opacity: 1},)
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(tito, { opacity: 0, duration: 1, delay: 10 })
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity: 0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//nehru
            .to(nehru, { opacity: 1, duration: 2})
            .to(nehru, { x: "-45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Nehru was a key figure in the Indian independence movement, which fought against British colonialism in India. His leadership and vision for a free and democratic India was a major example of anti-colonial struggle, and inspired similar movements in other parts of the world."
            })
            .to(".keywordSpeaker", {opacity:0, x: "-175%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "400%", y: "-350%"})
            .call(() => { document.querySelector(".cite").innerHTML ="Dipesh Chakrabarty, “Legacies of Bandung: Decolonisation and the Politics of Culture.”"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Jawaharlal Nehru"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "India"})
            .to(".cite", {opacity: 1})
            .to(".begin1", {x: "50%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(nehru, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity: 0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//sukarno
            .to(suk2, { opacity: 1, duration: 2})
            .to(suk2, { x: "45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Sukarno was a key figure in the Indonesian independence movement, which fought against Dutch colonialism in Indonesia. His leadership and vision for a free and democratic Indonesia was a major example of anti-colonial struggle, and inspired similar movements in other parts of the world."
            })
            .to(".keywordSpeaker", {opacity:0, x: "250%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "-300%", y: "-350%"})
            .call(() => { document.querySelector(".cite").innerHTML ="Rodriguez, Besenia (2006) 'Long Live Third World Unity! Long Live Internationalism!'"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Sukarno"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Indonesia"})
            .to(".cite", {opacity: 1})
            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(suk2, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity: 0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
//nyerere
            .to(julius, { opacity: 1, duration: 2})
            .to(julius, { x: "-45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Nyerere was a key figure in the Tanzanian independence movement, which fought against British colonialism in Tanzania. His leadership and vision for a free and democratic Tanzania was a major example of anti-colonial struggle, and inspired similar movements in other parts of Africa."
            })
            .to(".keywordSpeaker", {opacity:0, x: "-200%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "200%", y: "-350%"})
            .call(() => { document.querySelector(".cite").innerHTML ="Dipesh Chakrabarty, “Legacies of Bandung: Decolonisation and the Politics of Culture.”"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Julius Nyerere"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Tanzania"})
            .to(".cite", {opacity:1})
            .to(".begin1", {x: "50%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(julius, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity:0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//castro
            .to(castro, { opacity: 1, duration: 2})
            .to(castro, { x: "45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".cite").innerHTML ="Ted Roberts, ‘Cuba and the Non-Aligned Movement’"})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Castro's leadership of the Cuban Revolution, which overthrew the US-backed Batista regime in 1959, was a major example of anti-colonial struggle and international solidarity. Castro's vision for a socialist Cuba and his commitment to international solidarity with other anti-imperialist movements, particularly in Latin America, was influential in shaping the global political landscape."
            })
            .to(".keywordSpeaker", {opacity:0, x: "175%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "-630%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Fidel Castro"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Cuba"})
            .to(".cite", {opacity:1})
            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(castro, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity:0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//ho chi
            .to(hochi, { opacity: 1, duration: 2})
            .to(hochi, { x: "-45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Ho Chi Minh (Vietnam): Ho Chi Minh's leadership of the Vietnamese independence movement, which fought against French colonialism and later US imperialism, was a major example of anti-colonial struggle and international solidarity. Ho's vision for a united, independent, and socialist Vietnam was influential in shaping the global political landscape."
            })
            .call(() => { document.querySelector(".cite").innerHTML ="Dipesh Chakrabarty, “Legacies of Bandung: Decolonisation and the Politics of Culture.”"})
            .to(".keywordSpeaker", {opacity:0, x: "-250%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "250%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Ho Chi Minh"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Vietnam"})
            .to(".cite", {opacity:1})
            .to(".begin1", {x: "50%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(hochi, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity:0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//nkrumah
            .to(kwame, { opacity: 1, duration: 2})
            .to(kwame, { x: "45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Nkrumah's leadership of the Ghanaian independence movement, which fought against British colonialism in Ghana, was a major example of anti-colonial struggle and international solidarity. Nkrumah's vision for pan-Africanism and his commitment to the economic and political independence of African countries was influential in shaping the global political landscape."
            })
            .call(() => { document.querySelector(".cite").innerHTML =
"Rodriguez, Besenia (2006) 'Long Live Third World Unity! Long Live Internationalism!'"
})
            .to(".keywordSpeaker", {opacity:0, x: "75%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "-450%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Kwame Nkrumah"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Ghana"})
            .to(".cite", {opacity:1})
            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(kwame, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity:0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//nasser
            .to(nasser, { opacity: 1, duration: 2})
            .to(nasser, { x: "-45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Nasser's leadership of the Egyptian revolution, which overthrew the British-backed monarchy in 1952, was a major example of anti-colonial struggle and international solidarity. Nasser's vision for pan-Arabism and his commitment to the economic and political independence of Arab countries was influential in shaping the global political landscape."
            })
            .call(() => { document.querySelector(".cite").innerHTML =
            "Shirley Graham DuBois, 'Gamal Abdel Nasser: Son of the Nile, a Biography'"})
            .to(".keywordSpeaker", {opacity:0, x: "-150%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "450%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Gamal Abdel Nasser"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Egypt"})
            .to(".cite", {opacity: 1})
            .to(".begin1", {x: "50%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(nasser, { opacity: 0, duration: 1, delay: 10})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", { opacity: 0 })
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")

//benbella
            .to(benbella, { opacity: 1, duration: 2})
            .to(benbella, { x: "45%", scale: .75 , duration: 2, delay: 1})
            .call(() => { document.querySelector(".begin1").innerHTML =
                "Ben Bella's leadership of the Algerian independence movement, which fought against French colonialism in Algeria, was a major example of anti-colonial struggle and international solidarity. Ben Bella's vision for a united, independent, and socialist Algeria was influential in shaping the global political landscape."
            })
            .call(() => { document.querySelector(".cite").innerHTML ="Dipesh Chakrabarty, “Legacies of Bandung: Decolonisation and the Politics of Culture.”"})
            .to(".keywordSpeaker", {opacity:0, x: "90%", y: "-350%"})
            .to(".keywordCountry", {opacity:0, x: "-425%", y: "-350%"})
            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Ahmed Ben Bella"})
            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Algeria"})
            .to(".cite", {opacity:1})
            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
            .to(benbella, { opacity: 0, duration: 1, delay: 2})
            .to(".begin1", {opacity:0, duration: 1}, "<")
            .to(".cite", {opacity:0})
            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
            .to(".keywordCountry", {opacity:0, duration: 1}, "<")


//marx
            .to("body", { backgroundImage: "none", backgroundColor: "black" })
            .call(() => { document.querySelector(".NameM").innerHTML ="MARX"})
            .to(".NameM", {opacity: 1})
            .to({}, {delay: 2})
            .to(".NameM",  { y: "-30vh", x: "-35vw", duration: 1, delay:1.15, scale: .4})
            .to(marx, {opacity: 1})
            .to(marx, {opacity: 0, delay: 2})

            .call(() => { document.querySelector(".begin2").innerHTML =
"Marx's argument about capitalism:"
            })
            .to(".begin2", {opacity:1, duration: 1})
            .to({}, { delay: 2 })
            .call(() => { document.querySelector(".cite").innerHTML =
"Karl Marx, 'Wage labour and capital' "})
            .call(() => { document.querySelector(".begin2").innerHTML =

"A small class of capitalists or owners control the means of production, while the majority of people, the working class or proletariat, do not own the means of production and must sell their labor in order to survive."
            })
            .to(".cite", {opacity:1}, "<")
            .to({}, { delay: 10 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"Capitalism has an inherent drive to expand and grow, as capitalists seek to increase their profits through the accumulation of capital."
            })
            .to({}, { delay: 8 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"The expansion of capitalism in the 19th century resulted in:"
            })
            .to({}, { delay: 4 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"European powers colonizing much of Africa and Asia to access new markets and resources, leading to the exploitation of local populations and the creation of new forms of class antagonism."
            })
            .to({}, { delay: 10 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"The growth of industrial capitalism in the United States in the late 19th and early 20th centuries led to the exploitation of immigrant labor and the development of new forms of class conflict."
             })
             .to({}, { delay: 10 })
            .to(".cite", {opacity: 0})
            .to(".begin2", {opacity: 0})


//lenin
            .to(".NameM", {opacity:0}, "<")
            .call(() => { document.querySelector(".NameL").innerHTML ="LENIN"})
            .to(".NameL", {opacity: 1})
            .to({}, {delay: 2})
            .to(".NameL",  { y: "-30vh", x: "-55vw", duration: 1, delay:1.15, scale: .4})
            .to(lenin, {opacity: 1})
            .to(lenin, {opacity: 0, delay: 2})


            .call(() => { document.querySelector(".begin2").innerHTML =
"Lenin's argument:"
            })
            .to(".begin2", { opacity:1})
             .to({}, {delay: 2 })

             .call(() => { document.querySelector(".cite").innerHTML =
"Vladimir Lenin, 'Imperialism: The Highest Stage of Capitalism'"
            })
            .call(() => { document.querySelector(".begin2").innerHTML =
"Imperialism is the highest stage of capitalism, in which monopolies and finance capital dominated the global economy and competed for control over resources and markets."
            })
            .to(".cite", { opacity: 1 }, "<")
            .to({}, { delay: 9 })



            .call(() => { document.querySelector(".begin2").innerHTML =
"Imperialism intensified class antagonisms and created new forms of oppression, as capitalist powers sought to control resources and labor in the colonies and semi-colonies."
            })
            .to({}, { delay: 9 })

            .to(".begin2", {opacity:0})
            .to(imperialism, { opacity: 1 })

            .to({}, { delay: 2 })
            .to(imperialism, { opacity: 0 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"National liberation struggles were important in the fight against imperialism, as workers in the colonial and semi-colonial world were the most oppressed and therefore had the most revolutionary potential."
            })
            .to(".begin2", {opacity:1})

            .to({}, { delay: 10 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"Lenin saw the struggle against imperialism as central to the broader struggle for socialism, as it exposed the inherent contradictions and exploitative nature of capitalism."
            })
            .to({}, { delay: 9 })
            .to(".cite", { opacity: 0 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"Both Marx and Lenin saw history as the result of the dialectical interplay of forces, with conflicts and struggles driving social change."
            })
            .to({}, { delay: 8 })
            .to(".begin2", { opacity: 0 })


//fanon
            .to(".NameL", {opacity:0}, "<")
            .call(() => { document.querySelector(".NameF").innerHTML ="FANON"})
            .to(".NameF", {opacity: 1})
            .to({}, {delay: 2})
            .to(".NameF",  { y: "-30vh", x: "-55vw", duration: 1, delay:1.15, scale: .4})
            .to(fanon, {opacity: 1})
            .to(fanon, {opacity: 0, delay: 2})

                        .call(() => { document.querySelector(".begin2").innerHTML =
"Lenin's extension to Marxist thought, which emphasized the role of imperialism in the exploitation of the colonized peoples, laid the foundation for Fanon's critique of colonialism."
            })
                        .to(".begin2", { opacity: 1 })

            .to({}, { delay: 9 })
            .call(() => { document.querySelector(".begin2").innerHTML =
"Fanon, a psychiatrist and revolutionary, argued that colonialism not only had economic and political effects but also had powerful psychological effects on both the colonized and the colonizers."
            })
            .to({}, { delay: 9 })


            .call(() => { document.querySelector(".cite").innerHTML =
"Frantz Fanon, 'The Wretched of the Earth'"})
            .call(() => { document.querySelector(".begin2").innerHTML =
"Fanon saw colonialism as a process that destroyed the dynamism of colonized people and established defense mechanisms. The colonized person is made to admit the inferiority of their culture, nation, and even their own biological structure. This instills a powerful form of racism into the thinking of the victims as well as the oppressors. "
            })
            .to(".cite", {opacity: 1}, "<")
            .to({}, { delay: 15 })


            .call(() => { document.querySelector(".begin2").innerHTML =
"This mirrors Lenin's argument that imperialism creates a division between the ruling and colonized classes, creating a culture of racism and prejudice that benefits the ruling class."
            })
            .to({}, { delay: 9 })
            .call(() => { document.querySelector(".begin2").innerHTML =
"Fanon also saw the development of a national literature as a crucial aspect of the movement for national liberation. He argued that the native intellectual, who used to produce work to be read exclusively by the oppressor, should progressively take on the habit of addressing their own people. This creates a literature of combat, which calls on the whole people to fight for their existence as a nation. This idea echoes Lenin's call for national liberation movements to create a united front against imperialism."
            })
            .to({}, { delay: 23 })
            .call(() => { document.querySelector(".begin2").innerHTML =
"Ultimately, Fanon's call for the development of a 'new man' is a rejection of the European model of Man that has dominated global history. "})
            .to({}, { delay: 7 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"Fanon argues that the 'Third World' needs to create a new history of Man, one that is not based on the exploitative and oppressive models of Europe and the United States. This call for a new history echoes Lenin's belief that imperialism is a system that is incompatible with the survival of humanity and that the only way to overcome it is through revolution."
            })
            .to({}, { delay: 15 })
            .to(".cite", {opacity: 0})
            .to(".begin2", { opacity: 0 }, "<")

//huey
            .to(".NameF", {opacity:0}, "<")
            .call(() => { document.querySelector(".NameH").innerHTML ="HUEY"})
            .to(".NameH", {opacity: 1})
            .to({}, {delay: 2})
            .to(".NameH",  { y: "-30vh", x: "-35vw", duration: 1, delay:1.15, scale: .4})
            .to(huey, { opacity: 1})
            .to(huey, { opacity: 0, delay: 2})

            .call(() => { document.querySelector(".begin2").innerHTML =
"Huey P. Newton coined the terms 'reactionary intercommunalism' and 'revolutionary intercommunalism,' which can be seen as extensions of Marxist and anti-imperialist thought that emerged in the 20th century."
            })
            .to(".begin2", { opacity: 1 })
            .to({}, { delay: 9 })
            .call(() => { document.querySelector(".cite").innerHTML ="Excerpt from Huey P. Newton, 'Revolutionary intercommunalism and the right of nations to self-determination'"})
            .call(() => { document.querySelector(".begin2").innerHTML =
            "The Black Panther Party has chosen materialist assumptions on which to ground its ideology. This is a purely arbitrary choice. Idealism might be the real happening; we might not be here at all. We don’t really know whether we are in Connecticut or in San Francisco, whether we are dreaming and in a dream state, or whether we are awake and in a dream state. Perhaps we are just somewhere in a void; we simply can’t be sure. "
            })
            .to(".cite", {opacity: 1}, "<")
            .to({}, { delay: 20 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "For the purposes of discussion, I merely ask that we agree on the stipulation that a material world exists and develops externally and independently of us all. With this stipulation, we have the foundation for an intelligent dialogue. We assume that there is a material world and that it exists and develops independently of us; and we assume that the human organism, through its sensory system, has the ability to observe and analyze that material world."
            })
            .to({}, { delay: 21 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "The dialectical materialist believes that everything in existence has fundamental internal contradictions. "
            })
            .to({}, { delay: 7 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "For example, the African gods south of the Sahara always had at least two heads, one for evil and one for good. Now people create God in their own image, what they think He—for God is always a “He” in patriarchal societies—what He is like or should be. So the African said, in effect: I am both good and evil; good and evil are the two parts of the thing that is me. This is an example of an internal contradiction."
            })
            .to({}, { delay: 22 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "Western Societies, though, split up good and evil, placing God up in heaven and the Devil down in hell. Good and evil fight for control over people in Western religions, but they are two entirely different entities. This is an example of an external contradiction."
            })
            .to({}, { delay: 13 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "This struggle of mutually exclusive opposing tendencies within everything that exists explains the observable fact that all things have motion and are in a constant state of transformation. "})
            .to({}, { delay: 10 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "Things transform themselves because while one tendency or force is more dominating than another, change is nonetheless a constant, and at some point the balance will alter and there will be a new qualitative development. New properties will come into existence, qualities that did not altogether exist before. Such qualities cannot be analyzed without understanding the forces struggling within the object in the first place, yet the limitations and determinations of these new qualities are not defined by the forces that created them."
                       })
            .to({}, { delay: 27 })

            .to(".cite", {opacity: 0})
            .call(() => { document.querySelector(".begin2").innerHTML =
            "According to Newton, dialectical materialism helps to identify how the key center of conflict in any situation may have shifted. The Black Panther Party began as a black nationalist organization that invested their efforts in pursuing a politics concerned with defending and empowering Black people as a distinct community. From the start, they critiqued cultural nationalist approaches, noting both their ineffectiveness for significantly changing the lives of most Black people and their popularity among more educated and affluent African Americans."})
            .to({}, { delay: 28 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "Class conflict develops by the same principles that govern all other phenomena in the material world. In contemporary society, a class that owns property dominates a class that does not own property. There is a class of workers and class of owners, and because there exists a basic contradiction in the interests of these two classes, they are constantly struggling with one another. Now, because things do not stay the same we can be sure of one thing: the owner will not stay the owner, and the people who are dominated will not stay dominated. We don’t know exactly how this will happen, but after we analyze all the other elements of the situation, we can make a few predictions. We can be sure that if we increase the intensity of the struggle, we will reach a point where the equilibrium of forces will change and there will be a qualitative leap into a new situation with a new social equilibrium.  I say “leap” because we know from our experience of the physical world than when transformations of this kind occur they do so with great force."
            .to({}, { delay: 4 })

            .call(() => { document.querySelector(".begin2").innerHTML =
            "In 1970, Newton announced an offer of troops on behalf of the Black Panther Party to the National Liberation Front of South Vietnam as a material expression of internationalist solidarity."})
            .to({}, { delay: 4 })

                        "This announcement was a material expression of internationalist solidarity, reflecting Newton's strong belief in anti-colonial struggles and his deep commitment to the principles of the Non-Aligned Movement."
                  })
                        .to({}, { delay: 4 })

                        .call(() => { document.querySelector(".begin2").innerHTML =
            "Facing backlash from Black people as well as the federal government, Newton critiques internationalism by addressing the ideological relationship of the Black community in particular to American nationalism. Americans, including the marginalized, poor, and recently immigrated among us, uphold the false belief in their exceptionalism and superiority or at least the moral superiority of their founding ideals."
                        })
                        .to({}, { delay: 4 })

//////////////////////////////
            .call(() => { document.querySelector(".begin2").innerHTML =
"Newton argued that imperialism had evolved into a new form in the post-World War II era, which he called 'intercommunalism.' This new form of imperialism was characterized by the breakdown of national borders and the emergence of a global capitalist system dominated by multinational corporations and the military-industrial complex."
            })
            .to({}, { delay: 4 })
              .to(imperialismus, { opacity: 1 })

            .to({}, { delay: 4 })
            .to(imperialismus, { opacity: 0 })


            .call(() => { document.querySelector(".begin2").innerHTML =
"Newton believed there were two possible outcomes of intercommunalism: 'reactionary intercommunalism' and 'revolutionary intercommunalism.' In reactionary intercommunalism, the forces of imperialism would continue to dominate the world, leading to greater inequality and oppression." })
            .to({}, { delay: 3 })

            .call(() => { document.querySelector(".begin2").innerHTML =
"Newton's theory of intercommunalism explains the political force of American capitalist empire on the world stage and the decline of nation-states and nationalism. He describes the current phase of capitalism as reactionary intercommunalism where U.S. empire has reduced the world to a collection of communities lacking control over their local conditions of life. The communities can become autonomous 'liberated territories' within the larger empire and can build an interconnected and 'cooperative framework' among themselves in a global dynamic that he calls revolutionary intercommunalism."
            })
            .to({}, { delay: 3 })