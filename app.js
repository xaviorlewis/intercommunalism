function createImage(src, width, height, opacity) {
  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  img.style.opacity = opacity;
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.position = 'absolute';
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





const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.set(".begin0", { opacity: 0 }); // set initial opacity to 0
timeline.set(".org-title", {opacity:0})
timeline.set(".member-title", {opacity:0})

timeline.to(".wrapper", { opacity: 0})
//intro section
        .to(".text", { y: "0%", duration: .2, stagger: .15 })
        .to(".slider", { y: "-100%", duration: .5, delay: 0.5 })
        .to(".intro", { y: "-100%", duration: .1 })
////

        //        .to("body", { backgroundImage: "url('./images/bang1.jpeg')" , delay: 1})
        //                .to("body", { backgroundImage: "url('./globalpictures/b2.png')" , delay: 1})

//
//        ////////intercommunalism
//        .to(".big-text", { x: "70%", duration: 2.75})
//        .fromTo(".big-text2", { opacity: 0 }, { opacity: 1, duration: 2.7})
//        .to(".big-text2", { x: "-40%", duration: 3.5}, "-1")
//        .to(".big-text", { opacity: 0 } )
//        .to(".big-text2", { opacity: 0} )
//
//
//        ////x quote
//        .to(".black-box", { opacity: 1, duration: .61 })
//        .to("body", { backgroundColor: "#000000" })
//        .fromTo(".begin0", { opacity: 0 }, { opacity: 1, duration: 5.5})
//        .fromTo(".begin0", { opacity: 1 }, { opacity: 0, duration: 2, delay:1.15 })
//
//        //
//        //1955
//        .to(".bang span", { opacity: 1, stagger: 0.25 , duration: 1.84})
//        .to(".bang span", { opacity: 0, stagger: 0.25 })
//
//        //////bandung
//        .fromTo(".city", { opacity: 0, left: "50%"}, { opacity: 1, duration: .4, delay:1.15})
//        .to(".city",  { y: "-300", x: "-630", duration: 1, delay:1.15, scale: .5})
//        .to(".city", { backgroundColor: "lightskyblue", borderRadius: "105%", padding: "-50rem 2rem", width: "fit-content", duration: 1 }, "<")
//        .to("body", { backgroundImage: "url('./images/bang1.jpeg')" , delay: 1}, "<")
//
//        //
//        //////bg change
//        //                .to("body", { backgroundImage: 'url(${b1.src})', delay: 1 })
//        //                .to("body", { backgroundImage: 'url(${b2.src})', delay: 1 })
//        //
//        //                .to("body", { backgroundImage: 'url(${b3.src})', delay: 1 })
//        //
//        ////
//
//        //         Animate the organizing countries' boxes
//
//        //     .to({}, { duration: 3 })
//        .to(".org-title", {opacity:1, duration:1, y: "-300%" })
//        .to(".organizing-countries", { opacity: 1, duration: 1,  marginTop: "-35%", marginLeft: "30%" })
//        .to(".org-title", {opacity:0, duration:1})
//        .to(".country", { opacity: 1, duration: 1 })
//        .to(".country", {opacity:0, duration: 1, delay:3})
//
//        .to(".member-title", {opacity:1, duration:1, y: "-300%"})
//        .to(".member-title", {opacity:0, duration:3, delay: 1})
//        .to(".member-countries", { opacity: 1, duration: 1, marginTop: "-30%", marginLeft: "15%" })
//        .to(".mcountry", { opacity: 1, duration:1 })
//        .to(".mcountry", {y: "-=2500", duration: 9, ease: "Power2.easeOut"})
//
//        .to(".mcountry", { opacity: 0})
//
//        .call(() => {
//        document.querySelector(".begin1 p").innerHTML = "President Sukarno of Indonesia proclaimed it 'the first international conference of colored peoples in the history of mankind.'"
//        })
//        .to(suk1, {scale: .75, y: "30%" , opacity:1})
//        .to(".begin1", {opacity:1, y: "90%", height: "fit-content"})
//
//        .to({}, {delay: 4})
//        .to(".begin1", {opacity: 0})
//
//        .to(suk1, {opacity: 0})
//        ////conference text 1
//        .to(".city", { opacity: 0})
//        .call(() => { document.querySelector(".begin1").innerHTML =
//        "The Bandung Spirit represented a shift in international relations away from the binary Cold War worldview, which divided the world into two opposing camps"
//        })
//
//        .to(".begin1", {opacity: 1, y:"-60%"})
//        .to({}, { delay: 2 })
//
//        .to(soviet, {opacity: 1, x: "-30%"}, ">")
//        .to(usa,{opacity: 1, x: "30%"})
//
//        //
//        .call(() => { document.querySelector(".begin1").innerHTML =
//        "The Third World was made up of newly independent countries that were struggling to develop their economies and societies in the aftermath of colonialism."
//
//        })
//        .to(".begin1", {scale: .8})
//        .to(soviet, {opacity: 1, x: "-60%",  scale: .5}, ">")
//        .to(usa,{opacity: 1, x: "60%" , scale: .5}, "<")
//        .call(() => { document.querySelector(".firstworld1").innerHTML ="the First World"})
//        .call(() => { document.querySelector(".secworld1").innerHTML ="the Second World"})
//        .to(".firstworld1",{opacity: 0, x: "115%", y: "-150%"})
//        .to(".secworld1", {opacity: 0, x: "-135%", y: "-150%"})
//        .to(".firstworld1",{opacity: 1})
//        .to(".secworld1", {opacity: 1})
//
//
//        .to({}, { delay: 2 })
//
//        .to(usa,{opacity: 0})
//        .to(soviet,{opacity: 0})
//
//        .to(".secworld1", {opacity: 0})
//        .to(".firstworld1", {opacity: 0})
//
//         .call(() => {
//            document.querySelector(".begin1").innerHTML =
//                "The Conference paved the way for formerly subjugated nations to unite for 2 major goals:"
//            })
//           .to(".begin1", { opacity: 1, duration: 1 })
//
//                      .to({}, { delay: 2 })
//
//
//         .call(() => {
//            document.querySelector(".begin1").innerHTML =
//                "1. Promote Afro-Asian economic and cultural cooperation"
//            })
//           .to({}, { delay: 2 })
//
//
//         .call(() => {
//            document.querySelector(".begin1").innerHTML =
//                 "2. Oppose colonialism and neo-colonialism by any nation"
//             })
//
//            .to({}, { delay: 2 })
//
//
//            .to(".begin1", { opacity: 0 })
//
//
//         .call(() => { document.querySelector(".begin1").innerHTML =
//                     "The Bandung conference adopted the Ten Principles, which became a cornerstone of the non-aligned movement. The principles emphasized respect for sovereignty, territorial integrity, and non-interference in the internal affairs of other nations. They also called for mutual respect for cultural diversity and the right to self-determination. The Ten Principles provided a framework for cooperation among the participating countries and became a rallying point for other non-aligned nations."
//  })
//
//        .to({}, { delay: 2 })
//        .to(nonaligned, {opacity:1})
//
//        .to(nonaligned, {opacity:0, delay: 2})
//
//        .to("body", { backgroundImage: "url('./globalpictures/banny.jpg')" , delay: 1})
//
//
//        .call(() => { document.querySelector(".begin1").innerHTML =
//"The Bandung conference adopted in their Final Communiqué the Ten Principles, which became a cornerstone of the non-aligned movement."})
//            .to(".begin1", { opacity: 1 })
//
//        .to({}, { delay: 2 })
//
//
//        .call(() => { document.querySelector(".begin1").innerHTML =
//       "  The principles emphasized respect for sovereignty, territorial integrity, and non-interference in the internal affairs of other nations."})
//        .to({}, { delay: 2 })
//
//
//
//        .call(() => { document.querySelector(".begin1").innerHTML =
//
//"The Ten Principles provided a framework for cooperation among the participating countries and became a rallying point for other non-aligned nations."
//})
//        .to({}, { delay: 2 })
//
//
//        .call(() => { document.querySelector(".begin1").innerHTML =
//"The Bandung conference also had a significant impact on the structure of the United Nations. Before Bandung, the UN was largely dominated by the First World powers, who used the organization to advance their own interests. The Bandung conference marked the beginning of a new era in which the Third World countries began to play a more significant role in the UN. The Bandung principles, which emphasized equality and mutual respect, provided a basis for the non-aligned movement to work together to advance their interests within the UN."
//  })
//        .to({}, { delay: 2 })
//
//
//
//        .to("body", { backgroundImage: "none", backgroundColor: "black" })
//
//
//
////Non-Aligned-Movement
//
//                .call(() => { document.querySelector(".begin1").innerHTML =
//"It gave birth to what we now know as the Non-Aligned Movement or NAM. This movement was a group of countries that refused to align themselves with either the US-led Western bloc or the Soviet-led Eastern bloc. These were countries that sought to maintain their independence and neutrality in the Cold War, refusing to become mere pawns in a game played by the great powers."
//                  })
//
//                  .to({}, { delay: 2 })

////tito
//            .to(".begin1", {opacity:0, duration: 1})
//            .to(tito, { opacity: 1, duration: 2})
//            .to(tito, { x: "45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Tito's Yugoslavia was one of the founding members of the Non-Aligned Movement, which aimed to promote independence, sovereignty, and cooperation among developing countries. This was a major example of Tito's commitment to non-alignment and neutrality in the Cold War, and to promoting international solidarity among developing countries."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "100%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "-275%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Josip Broz Tito"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Yugoslavia"})
//            .to(".begin1", {x: "-45%", duration: 3, opacity: 1},)
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(tito, { opacity: 0, duration: 1, delay: 2 })
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////nehru
//            .to(nehru, { opacity: 1, duration: 2})
//            .to(nehru, { x: "-45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Nehru was a key figure in the Indian independence movement, which fought against British colonialism in India. His leadership and vision for a free and democratic India was a major example of anti-colonial struggle, and inspired similar movements in other parts of the world."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "-175%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "400%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Jawaharlal Nehru"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "India"})
//            .to(".begin1", {x: "45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(nehru, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////sukarno
//            .to(suk1, { opacity: 1, duration: 2})
//            .to(suk1, { x: "45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Sukarno was a key figure in the Indonesian independence movement, which fought against Dutch colonialism in Indonesia. His leadership and vision for a free and democratic Indonesia was a major example of anti-colonial struggle, and inspired similar movements in other parts of the world."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "250%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "-300%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Sukarno"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Indonesia"})
//            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(suk1, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////nyerere
//            .to(julius, { opacity: 1, duration: 2})
//            .to(julius, { x: "-45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Nyerere was a key figure in the Tanzanian independence movement, which fought against British colonialism in Tanzania. His leadership and vision for a free and democratic Tanzania was a major example of anti-colonial struggle, and inspired similar movements in other parts of Africa."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "-200%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "200%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Julius Nyerere"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Tanzania"})
//            .to(".begin1", {x: "45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(julius, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////castro
//            .to(castro, { opacity: 1, duration: 2})
//            .to(castro, { x: "45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Castro's leadership of the Cuban Revolution, which overthrew the US-backed Batista regime in 1959, was a major example of anti-colonial struggle and international solidarity. Castro's vision for a socialist Cuba and his commitment to international solidarity with other anti-imperialist movements, particularly in Latin America, was influential in shaping the global political landscape."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "175%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "-630%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Fidel Castro"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Cuba"})
//            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(castro, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////ho chi
//            .to(hochi, { opacity: 1, duration: 2})
//            .to(hochi, { x: "-45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Ho Chi Minh (Vietnam): Ho Chi Minh's leadership of the Vietnamese independence movement, which fought against French colonialism and later US imperialism, was a major example of anti-colonial struggle and international solidarity. Ho's vision for a united, independent, and socialist Vietnam was influential in shaping the global political landscape."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "-250%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "250%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Ho Chi Minh"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Vietnam"})
//            .to(".begin1", {x: "45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(hochi, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////nkrumah
//            .to(kwame, { opacity: 1, duration: 2})
//            .to(kwame, { x: "45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Nkrumah's leadership of the Ghanaian independence movement, which fought against British colonialism in Ghana, was a major example of anti-colonial struggle and international solidarity. Nkrumah's vision for pan-Africanism and his commitment to the economic and political independence of African countries was influential in shaping the global political landscape."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "75%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "-450%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Kwame Nkrumah"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Ghana"})
//            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(kwame, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////nasser
//            .to(nasser, { opacity: 1, duration: 2})
//            .to(nasser, { x: "-45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Nasser's leadership of the Egyptian revolution, which overthrew the British-backed monarchy in 1952, was a major example of anti-colonial struggle and international solidarity. Nasser's vision for pan-Arabism and his commitment to the economic and political independence of Arab countries was influential in shaping the global political landscape."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "-150%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "450%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Gamal Abdel Nasser"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Egypt"})
//            .to(".begin1", {x: "45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(nasser, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//
////benbella
//            .to(benbella, { opacity: 1, duration: 2})
//            .to(benbella, { x: "45%", scale: .75 , duration: 2, delay: 1})
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Ben Bella's leadership of the Algerian independence movement, which fought against French colonialism in Algeria, was a major example of anti-colonial struggle and international solidarity. Ben Bella's vision for a united, independent, and socialist Algeria was influential in shaping the global political landscape."
//            })
//            .to(".keywordSpeaker", {opacity:0, x: "90%", y: "-350%"})
//            .to(".keywordCountry", {opacity:0, x: "-425%", y: "-350%"})
//            .call(() => { document.querySelector(".keywordSpeaker").innerHTML ="Ahmed Ben Bella"})
//            .call(() => { document.querySelector(".keywordCountry").innerHTML = "Algeria"})
//            .to(".begin1", {x: "-45%", duration: 3, opacity: 1})
//            .to(".keywordSpeaker", {opacity:1, duration: 3}, "=-1")
//            .to(".keywordCountry", {opacity:1, duration: 3}, "<")
//            .to(benbella, { opacity: 0, duration: 1, delay: 2})
//            .to(".begin1", {opacity:0, duration: 1}, "<")
//            .to(".keywordSpeaker", {opacity:0, duration: 1}, "<")
//            .to(".keywordCountry", {opacity:0, duration: 1}, "<")
//

//marx
            .to("body", { backgroundImage: "none", backgroundColor: "black" })
            .call(() => { document.querySelector(".NameM").innerHTML ="MARX"})
            .to({}, {delay: 2})
            .to(".NameM",  { y: "-300", x: "-630", duration: 1, delay:1.15, scale: .4})
            .to(marx, {opacity: 1})
            .to(marx, {opacity: 0, delay: 2})
            .call(() => { document.querySelector(".begin1").innerHTML =
"Marx's argument about capitalism:"
            })
            .to(".begin1", {opacity:1, duration: 1})
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =

"A small class of capitalists or owners control the means of production, while the majority of people, the working class or proletariat, do not own the means of production and must sell their labor in order to survive."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"This creates a fundamental antagonism between the interests of the capitalist class and the working class, as the capitalists seek to maximize their profits and the working class seeks to improve their conditions of labor and compensation."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"Capitalism has an inherent drive to expand and grow, as capitalists seek to increase their profits through the accumulation of capital."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"The expansion of capitalism in the 19th century resulted in:"
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"European powers colonizing much of Africa and Asia to access new markets and resources, leading to the exploitation of local populations and the creation of new forms of class antagonism."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"The growth of industrial capitalism in the United States in the late 19th and early 20th centuries led to the exploitation of immigrant labor and the development of new forms of class conflict."
             })


//lenin
            .call(() => { document.querySelector(".NameL").innerHTML ="LENIN"})
            .to({}, {delay: 2})
            .to(".NameL",  { y: "-300", x: "-55%", duration: 1, delay:1.15, scale: .4})
            .to(lenin, {opacity: 1})
            .to(lenin, {opacity: 0, delay: 2})


            .call(() => { document.querySelector(".begin1").innerHTML =
"Lenin's argument:"
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"Imperialism is the highest stage of capitalism, in which monopolies and finance capital dominated the global economy and competed for control over resources and markets."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"Imperialism intensified class antagonisms and created new forms of oppression, as capitalist powers sought to control resources and labor in the colonies and semi-colonies."
            })
            .to({}, { delay: 2 })
            .to(imperialism, { opacity: 1 })

.to({}, { delay: 2 })
.to(imperialism, { opacity: 0 })
            .call(() => { document.querySelector(".begin1").innerHTML =
"National liberation struggles were important in the fight against imperialism, as workers in the colonial and semi-colonial world were the most oppressed and therefore had the most revolutionary potential."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"Lenin saw the struggle against imperialism as central to the broader struggle for socialism, as it exposed the inherent contradictions and exploitative nature of capitalism."
            })
            .to({}, { delay: 2 })

            .call(() => { document.querySelector(".begin1").innerHTML =
"Both Marx and Lenin saw history as the result of the dialectical interplay of forces, with conflicts and struggles driving social change."
            })
            .to({}, { delay: 2 })

//fanon
            .call(() => { document.querySelector(".NameF").innerHTML ="FANON"})
            .to({}, {delay: 2})
            .to(".NameF",  { y: "-300", x: "-60%", duration: 1, delay:1.15, scale: .4})
            .to(marx, {opacity: 1})
            .to(marx, {opacity: 0, delay: 2})

//huey
//            .call(() => { document.querySelector(".begin1").innerHTML =
//
//"Huey P. Newton coined the terms 'reactionary intercommunalism' and 'revolutionary intercommunalism,' which can be seen as extensions of Marxist and anti-imperialist thought that emerged in the 20th century."
//            })
//            .to({}, { delay: 2 })
//
//               .to(huey, { opacity: 1})
//
//               .to({}, { delay: 2 })
//               .to(huey, { opacity: 0})
//
//              .to(huey2, { opacity: 1})
//
//               .to({}, { delay: 2 })
//               .to(huey2, { opacity: 0})
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"Newton argued that imperialism had evolved into a new form in the post-World War II era, which he called 'intercommunalism.' This new form of imperialism was characterized by the breakdown of national borders and the emergence of a global capitalist system dominated by multinational corporations and the military-industrial complex."
//            })
//            .to({}, { delay: 2 })
//              .to(imperialismus, { opacity: 1 })
//
//            .to({}, { delay: 2 })
//            .to(imperialismus, { opacity: 0 })
//
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"Newton believed there were two possible outcomes of intercommunalism: 'reactionary intercommunalism' and 'revolutionary intercommunalism.' In reactionary intercommunalism, the forces of imperialism would continue to dominate the world, leading to greater inequality and oppression. In revolutionary intercommunalism, the forces of the oppressed would come together to challenge imperialism and build a new, more just world order."
//            })
//            .to({}, { delay: 2 })
////
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"Newton's theory of intercommunalism explains the political force of American capitalist empire on the world stage and the decline of nation-states and nationalism. He describes the current phase of capitalism as reactionary intercommunalism where U.S. empire has reduced the world to a collection of communities lacking control over their local conditions of life. The communities can become autonomous 'liberated territories' within the larger empire and can build an interconnected and 'cooperative framework' among themselves in a global dynamic that he calls revolutionary intercommunalism."
//            })
//            .to({}, { delay: 2 })
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"Newton believed that no ethical, social, or political goal can be adequately pursued without a philosophical examination and understanding of the world in which that pursuit might occur. He embraced affirmational philosophies that assert a positive ontology and offer clearer political possibilities, culminating in his embrace of dialectical materialism."
//            })
//            .to({}, { delay: 2 })
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"According to Newton, dialectical materialism helps to identify how the key center of conflict in any situation may have shifted. The Black Panther Party began as a black nationalist organization that invested their efforts in pursuing a politics concerned with defending and empowering Black people as a distinct community. From the start, they critiqued cultural nationalist approaches, noting both their ineffectiveness for significantly changing the lives of most Black people and their popularity among more educated and affluent African Americans."
//            })
//            .to({}, { delay: 2 })
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"In 1970, Newton announced an offer of troops on behalf of the Black Panther Party to the National Liberation Front of South Vietnam as a material expression of internationalist solidarity."
//            })
//            .to({}, { delay: 2 })
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//"Newton critiques internationalism by addressing the ideological relationship of the Black community in particular to American nationalism. Americans, including the marginalized, poor, and recently immigrated among us, uphold the false belief in their exceptionalism and superiority or at least the moral superiority of their founding ideals."
//            })
//            .to({}, { delay: 2 })
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//




















































































































































//                .call(() => { document.querySelector(".begin1").innerHTML =
//
//"the two main founders of the NAM, Nehru and Indonesia, were present. Egypt's new leader, Gamal Abdel Nasser, also attended the conference, and proved to be one of the most engaged and popular participants. He was instrumental in negotiating compromises without which the Final Communiqué would not have been possible."
//                        })
//
//                        .to({}, { delay: 2 })
////                .to(nehru, {opacity: 1})
////                .to(nasser,{opacity: 1})
////                .to(nasser,{opacity: 0, delay:2})
////                .to(nehru, {opacity: 0, delay: 2})
//
//
//                .call(() => { document.querySelector(".begin1").innerHTML =
//
//"Nasser had been described in secret US assessments as pro-Western before attending the conference. But at Bandung, he heard Nehru's arguments against the dangers posed by the Cold War pacts being promoted by the US Secretary of State, Dulles. This reinforced Nasser's own misgivings about the Baghdad Pact and its offshoot, the Central Treaty Organization (CENTO)."
//                        })
//
//                        .to({}, { delay: 2 })
//
//                        .to(bagpact, { opacity: 1, duration: 3 })
//                        .to(bagpact, { opacity: 0 })
//
//                        .to(cento, { opacity: 1, duration: 3 })
//                        .to(cento, { opacity: 0 })
//
//
//                .call(() => { document.querySelector(".begin1").innerHTML =
//
//"Nehru was not shy in expressing his bitter opposition to such pacts, especially SEATO. He criticized the decision of some countries represented at Bandung, namely Turkey, Pakistan, Thailand, and the Philippines, for joining such pacts. Nehru saw membership in such pacts as rendering a country a 'camp follower' and depriving it of its 'freedom and dignity'."
//                        })
//
//                        .to({}, { delay: 2 })
//                    .to(seato, {opacity: 1})
//                    .to(seato, {opacity: 0, delay:2})
//
//                .call(() => { document.querySelector(".begin1").innerHTML =
//
//"The conference compromised by listing among the 'Ten Principles' (Dasa Sila) of its Final Communiqué 'Respect for the right of each nation to defend itself singly or collectively, in conformity with the Charter of the United Nations' (Principle 5), as well as the principle of 'abstention from the use of arrangements of collective defence to serve the particular interests of any of the big powers' (Principle 6a). The latter became one of the founding declaratory principles of the NAM."
//                        })
//                        .to({}, { delay: 2 })
//
//                .call(() => { document.querySelector(".begin1").innerHTML =
//
//"Contrary to popular myth, my friends, the Bandung conference was not attended by Tito of Yugoslavia or Nkrumah of Gold Coast (Ghana)."
//          })
//          .to({}, { delay: 2 })
//
//
/////////////////////////// NON   ALIGNED          MOVEMENT.                   /////////////////////////////////////////////
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Before attending the conference, Nasser had been described in secret US assessments as pro-Western. However, at Bandung, he heard Nehru's arguments against the dangers posed by the Cold War pacts being promoted by the US Secretary of State, Dulles, which reinforced Nasser's own misgivings about the Baghdad Pact and its offshoot, the Central Treaty Organization (CENTO). Nehru gave full vent to his bitter opposition to such pacts, especially SEATO. He criticized the decision of some countries represented at Bandung, namely Turkey, Pakistan, Thailand, and the Philippines, for joining such pacts. Nehru saw membership in such pacts as rendering a country a 'camp follower' and depriving it of its 'freedom and dignity.'"
//            })
//            .to({}, { delay: 2 })
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "The conference compromised by listing among the 'Ten Principles' (Dasa Sila) of its Final Communiqué 'Respect for the right of each nation to defend itself singly or collectively, in conformity with the Charter of the United Nations' (Principle 5), as well as the principle of 'abstention from the use of arrangements of collective defence to serve the particular interests of any of the big powers' (Principle 6a). The latter became one of the founding declaratory principles of the NAM. Moreover, the conference affirmed the right of collective self-defense, but it had the effect of discouraging any further new members for SEATO, as had been hoped for by its supporters."
//            })
//            .to({}, { delay: 2 })
//                 .to(seato1, {opacity: 1})
//                 .to(seato1, {opacity: 0, delay:2})
//
//
//            .call(() => { document.querySelector(".begin1").innerHTML =
//                "Furthermore, although no direct link could be established from the available primary sources, Nasser's experience at the conference seemed to transform his policy. Within four months after returning from Bandung, Nasser signed a historic arms deal with Czechoslovakia, and less than a year thereafter, in July 1956, he nationalized the Suez Canal Company, thereby prompting the Anglo-French-Israeli invasion that would change the history of the Middle East and the course of the Cold War."
//            })
//            .to({}, { delay: 2 })























//        .to(".begin1", { opacity: 0, delay:2})


////attendance picture
//        .to(attend, { opacity: 1, duration: 1 ,y:"-10%", delay: 0.75})
//        .to(attend, { opacity: 0, delay:2})
//////conference text 2

//
//          .to(".keywordY", { opacity: 1, duration: 1, y: "-700%" })
//
//        .to(".begin1", { opacity: 0})
//        .to(".keywordX", { opacity: 0})
//        .to(".keywordY", { opacity: 0})
//
//        .to("body", { backgroundImage: "none", backgroundColor: "black" })
//
////        .to(bangbang, { opacity: 1, onComplete: () => {
////            bangbang.play();
////            bangbang.muted = false;
////        }})
//
//        .call(() => {
//            document.querySelector(".keywordX").innerHTML ='The five organizing countries were Indonesia, India, Burma, Ceylon, and Pakistan; participating countries included Ethiopia, Lebanon, Libya, and Egypt among others.'
//             }, {delay:2})
//
//
//        .to(".keywordX", { opacity: 1, duration: 1, x:"0%", y: "-620%" , width: "83%"})
//
//
//
//
////world
//        .to(".image", { opacity: 1, y: "-1000" })
//
//
////keywords
//        .to(".keyword1", { opacity: 1, duration: 1, y: "-500" })
//        .to(".keyword2", { opacity: 1, duration: 1, y: "-500" })
//        .to(".keyword3", { opacity: 1, duration: 1, y: "-500" })
//        .to(".keyword1", { opacity: 0, duration: 1})
//        .to(".keyword2", { opacity: 0, duration: 1, delay: .5 })
//        .to(".keyword3", { opacity: 0, duration: 1, delay: .5 })
//
////conference text 3
//        .call(() => {
//            document.querySelector(".begin1 p").innerHTML ='the five Prime Ministers of Burma, Ceylon(Sri Lanka), India, Indonesia and Pakistan held a conference in Bogor, Indonesia and reached an agreement on convening an Asian-African conference and decided that the conference would be jointly proposed by the five countries. The conference was attended by 29 Asian and African countries besides the five countries mentioned above, namely, Afghanistan, Cambodia, China, Egypt, Ethiopia, the Gold Coast (Ghana), Iran, Iraq, Japan, Jordan, Laos, Lebanon, Liberia, Libya, Nepal, the Philippines, Saudi Arabia, Sudan, Syria, Thailand, Turkey, the Vietnam Democratic Republic, South Vietnam (later reunified with the Democratic Republic of Vietnam) and Yemen (Republic of Yemen). '
//        }, {delay:2})
//
////conference text 4
//        .call(() => {
//            document.querySelector(".begin1 p").innerHTML = 'The Bandung Conference was a pivotal moment in the global emphasis on the need for solidarity and unity among oppressed people of different nations, races, and backgrounds.'
//        }, {delay:2})
//
////conference text 5
//        .call(() => {
//            document.querySelector(".begin1 p").innerHTML = 'President Sukarno of Indonesia proclaimed it "the first international conference of colored peoples in the history of mankind.'
//        }), {delay:2})
//
//        .to(".begin1", { x: "-40%", width: fit-content, height:fit-content , y: "80%" ,duration: 1, opacity:1, ease: "power2.out" })
//
//        .to(myImage, { opacity: 1, duration: 1})
////        .to(jawa, { opacity: 1, duration: 1, delay: 0.5})
//
//        .to(myImage, { opacity:0})
////        .to(jawa, { opacity: 0})
//
//        .call(() => {
//            document.querySelector(".begin1 p").innerHTML = 'Many of the nations that participated in the conference were newly independent and sought to be free from the influence of the United States and the Soviet Union.'
//        }, {delay:2, x: "300" , y: "30%" ,duration: 1, ease: "power2.out" })
//        .to(".begin1", { y: "0%", x: "-60%", width: "80%", height:"19%"})
//        .call(() => {
//            document.querySelector(".begin1 p").innerHTML ='The term "Third World" started to grow in significance to describe these independent nations. The Bandung Conference was a major political expression of the developing countries of the Third World.'
//        }, {delay:2})
//        .to(".begin1", { x: "-900", height: "30%", duration: 1, ease: "power2.out" })
//
//         .call(() => {
//            document.querySelector(".begin1 p").innerHTML ='At the end of the conference, the delegates outlined their ten principles of cooperation also known as the Dasasila Bandung. The principles included respect for sovereignty and territorial integrity, non-interference in the internal affairs of other states, and the peaceful settlement of disputes.'
//
//        })
//
//
//
//
