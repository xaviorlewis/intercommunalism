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

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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


// Create an image and store it in a variable
const myImage = createImage("./images/suka2.jpg", 600, 600, 0);
const jawa = createImage("./images/jawa.jpg", 600, 600, 0);
const attend = createImage("./images/bangdunattend.png", 1000, 600, 0);
const bangbang = createVideo("./images/bangbang.mp4", 1000, 600, 0)

const senty = typeSentence("do i work i rly hope so", "#sentence")


const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.set(".begin0", { opacity: 0 }); // set initial opacity to 0


timeline.to(".wrapper", { opacity: 0})
//intro section
        .to(".text", { y: "0%", duration: .2, stagger: .15 })
        .to(".slider", { y: "-100%", duration: .5, delay: 0.5 })
        .to(".intro", { y: "-100%", duration: .1 })
        //.to(senty, {duration:1, y:"100%"})
////intercommunalism
        .to(".big-text", { x: "70%", duration: 2.75})
        .fromTo(".big-text2", { opacity: 0 }, { opacity: 1, duration: 2.7})
        .to(".big-text2", { x: "-40%", duration: 3.5}, "-1")
        .to(".big-text", { opacity: 0 } )
        .to(".big-text2", { opacity: 0} )

////x quote
        .to(".black-box", { opacity: 1, duration: .61 })
        .to("body", { backgroundColor: "#000000" })
        .fromTo(".begin0", { opacity: 0 }, { opacity: 1, duration: 5.5})
        .fromTo(".begin0", { opacity: 1 }, { opacity: 0, duration: 2, delay:1.15 })

//1955
        .to(".bang span", { opacity: 1, stagger: 0.25 , duration: 1.84}, "-=2")
        .to(".bang span", { opacity: 0, stagger: 0.25 })

//bandung
        .fromTo(".city", { opacity: 0, left: "50%"}, { opacity: 1, duration: .4, delay:1.15})
        .to(".city",  { y: "-320", x: "-630", duration: 1, delay:1.15, scale: .5})
        .to(".city", { backgroundColor: "lightskyblue", borderRadius: "105%", padding: "-50rem 2rem", width: "fit-content", duration: 1 }, "<")

//bg change
        .to("body", { backgroundImage: "url('./images/bang1.jpeg')" })
//attendance picture
        .to(attend, { opacity: 1, duration: 1 ,y:"-10%", delay: 0.75})
//
////conference text 1
        .fromTo(".begin1", { opacity: 0}, { opacity: 1, duration: 2, y:"180%", delay: .5, height: "19%"})

        .to(attend, { opacity: 0})
//conference text 2
        .call(() => {
            document.querySelector(".begin1 p").innerHTML = "The conferences stated aims were:"
              })

        .call(() => {
            document.querySelector(".keywordX").innerHTML =
                "1. Promote Afro-Asian econoic and cultural cooperation"
             }, {delay:2})


         .to(".keywordX", { opacity: 1, duration: 1, y: "-750%" })

         .call(() => {
            document.querySelector(".keywordY").innerHTML =
                 "2. Oppose colonialism and neo-colonialism by any nation"
             }, {delay:2})

          .to(".keywordY", { opacity: 1, duration: 1, y: "-700%" })

        .to(".begin1", { opacity: 0})
        .to(".keywordX", { opacity: 0})
        .to(".keywordY", { opacity: 0})

        .to("body", { backgroundImage: "none", backgroundColor: "black" })

.to(bangbang, { opacity: 1, onComplete: () => {
    bangbang.play();
    bangbang.muted = false;
}})

        .call(() => {
            document.querySelector(".keywordX").innerHTML =

'The five organizing countries were Indonesia, India, Burma, Ceylon, and Pakistan; participating countries included Ethiopia, Lebanon, Libya, and Egypt among others.'


             }, {delay:2})


         .to(".keywordX", { opacity: 1, duration: 1, x:"0%", y: "-620%" , width: "83%"})
//    'The five organizing countries were Indonesia, India, Burma, Ceylon, and Pakistan; participating countries included Ethiopia, Lebanon, Libya, and Egypt among others.',

.to(bangbang, { opacity: 0})


        //"The conference was a gathering of independent nations to discuss issues of sovereignty, racism, and colonialism and became known simply as 'The Bandung Conference'."


//world
        .to(".image", { opacity: 1, y: "-1000" })


//keywords
        .to(".keyword1", { opacity: 1, duration: 1, y: "-500" })
        .to(".keyword2", { opacity: 1, duration: 1, y: "-500" })
        .to(".keyword3", { opacity: 1, duration: 1, y: "-500" })
        .to(".keyword1", { opacity: 0, duration: 1})
        .to(".keyword2", { opacity: 0, duration: 1, delay: .5 })
        .to(".keyword3", { opacity: 0, duration: 1, delay: .5 })

//conference text 3
        .call(() => {
            document.querySelector(".begin1 p").innerHTML ='the five Prime Ministers of Burma, Ceylon(Sri Lanka), India, Indonesia and Pakistan held a conference in Bogor, Indonesia and reached an agreement on convening an Asian-African conference and decided that the conference would be jointly proposed by the five countries. The conference was attended by 29 Asian and African countries besides the five countries mentioned above, namely, Afghanistan, Cambodia, China, Egypt, Ethiopia, the Gold Coast (Ghana), Iran, Iraq, Japan, Jordan, Laos, Lebanon, Liberia, Libya, Nepal, the Philippines, Saudi Arabia, Sudan, Syria, Thailand, Turkey, the Vietnam Democratic Republic, South Vietnam (later reunified with the Democratic Republic of Vietnam) and Yemen (Republic of Yemen). '
        }, {delay:2})

//conference text 4
        .call(() => {
            document.querySelector(".begin1 p").innerHTML = 'The Bandung Conference was a pivotal moment in the global emphasis on the need for solidarity and unity among oppressed people of different nations, races, and backgrounds.'
        }, {delay:2})

//conference text 5
        .call(() => {
            document.querySelector(".begin1 p").innerHTML = 'President Sukarno of Indonesia proclaimed it "the first international conference of colored peoples in the history of mankind.'
        }, {delay:2})

        .to(".begin1", { x: "-40%", width: "80%", height:"19%" , y: "80%" ,duration: 1, ease: "power2.out" })

        .to(myImage, { opacity: 1, duration: 1})
        .to(jawa, { opacity: 1, duration: 1, delay: 0.5})

        .to(myImage, { opacity:0})
        .to(jawa, { opacity: 0})

        .call(() => {
            document.querySelector(".begin1 p").innerHTML = 'Many of the nations that participated in the conference were newly independent and sought to be free from the influence of the United States and the Soviet Union.'
        }, {delay:2, x: "300" , y: "30%" ,duration: 1, ease: "power2.out" })
        .to(".begin1", { y: "0%", x: "-60%", width: "80%", height:"19%"})
        .call(() => {
            document.querySelector(".begin1 p").innerHTML ='The term "Third World" started to grow in significance to describe these independent nations. The Bandung Conference was a major political expression of the developing countries of the Third World.'
        }, {delay:2})
        .to(".begin1", { x: "-900", height: "30%", duration: 1, ease: "power2.out" })

         .call(() => {
            document.querySelector(".begin1 p").innerHTML ='At the end of the conference, the delegates outlined their ten principles of cooperation also known as the Dasasila Bandung. The principles included respect for sovereignty and territorial integrity, non-interference in the internal affairs of other states, and the peaceful settlement of disputes.'

        })



//    'Many of the nations that participated in the conference were newly independent and sought to be free from the influence of the United States and the Soviet Union.',









//const images = ["./images/hueyhuey.png", "hueyjail.jpg" ,"./images/bang.jpeg", "./images/bang1.jpeg", "./images/bang3.jpeg", "./images/bang4.jpg", "./images/bang.jpg" ];
//const texts = [
//    'On April 18-24, 1955, delegates from 29 nations from Asia and Africa came together in Bandung, Indonesia for the Konferensi Asia-Afrika.',
//    'The conference was a gathering of independent nations to discuss issues of sovereignty, racism, and colonialism and became known simply as "The Bandung Conference."',
//    'The five organizing countries were Indonesia, India, Burma, Ceylon, and Pakistan; participating countries included Ethiopia, Lebanon, Libya, and Egypt among others.',
////    'President Sukarno of Indonesia proclaimed it "the first international conference of colored peoples in the history of mankind."',

//    'Many of the nations that participated in the conference were newly independent and sought to be free from the influence of the United States and the Soviet Union.',
//    'The term "Third World" started to grow in significance to describe these independent nations. The Bandung Conference was a major political expression of the developing countries of the Third World.',

//1/1//1/?!?!?1/1/?1/1/?!?1/1/HEREHEREHEREHEREHEREHEREHERERHERERHERERHRERH:ERER::HERER/1/1/1/;1/1;.1.,1.,1/.1.1,;.1,..>><>?<L>;.1.1;>!<!

//    'The Bandung Conference led to the creation of the Non-Aligned Movement, which provided a platform for tricontinental nations to condemn racism, imperialism, and neo-colonialism.',
//    'The Non-Aligned Movement sought to maintain independence from the major world powers and to promote cooperation among member nations.',
//    'The Bandung Conference was a pivotal moment in the global emphasis on the need for solidarity and unity among oppressed people of different nations, races, and backgrounds.',
//    'At the end of the conference, the delegates outlined their ten principles of cooperation also known as the Dasasila Bandung. The principles included respect for sovereignty and territorial integrity, non-interference in the internal affairs of other states, and the peaceful settlement of disputes.',
//    'The Bandung Conference led to the creation of the Non-Aligned Movement, which provided a platform for tricontinental nations to condemn racism, imperialism, and neo-colonialism.',
//    'The Non-Aligned Movement sought to maintain independence from the major world powers and to promote cooperation among member nations.',
//
//
//    'The Bandung Conference had an impact on Harlem, where residents discussed the significance of the declarations and solidarities forged in Bandung for their lives.',
//    'Paul Robeson, W.E.B. Du Bois, W. Alphaeus Hunton, and labor leader Jose Santiago spoke at a Harlem event commemorating the anniversary of the Bandung Conference, emphasizing the importance of solidarity among oppressed people of different nations, races, and backgrounds.',
//    'Malcolm X played an important role in connecting the Bandung Conference to the formation of the Black Panther Party.',
//    'In his speech "A Message to the Grassroots," he highlighted the need for political unity borne of a shared oppression, which was a central theme of the Bandung Conference. His speech was a call to action for African Americans to recognize the power of international solidarity and to use it to fight for their own liberation.',
//    'The Black Panther Party was heavily influenced by the works of Gamal Abdel Nasser and Malcolm X. The BPP sought to bring attention to the struggles of people of color around the world and to create a platform for international solidarity. The BPP\'s leader, Huey P. Newton, was a strong admirer of both Nasser and Malcolm X and often cited their works in his writings.',
//    'It seeks to hold the U.S. government accountable for its acts of aggression against racialized peoples throughout the world, and to promote international solidarity and cooperation among oppressed peoples in Africa, Asia, and Latin America.',
//    'Tricontinental politics emerged in the 1960s as a response to the global challenges faced by communities of color, particularly in the aftermath of colonialism and imperialism. It sought to unite oppressed peoples across continents and to mobilize against common enemies, including imperialism, racism, and capitalism.',
//
//const imageTimes = [6,6,6,6,6,6]; // in seconds
//let index = 0;
//
//function changeBackgroundImage() {
//  gsap.to(".landing", {background: `url(${images[index]})`});
//  console.log(texts[index]);
//
//  document.querySelector(".begin1 p").innerHTML = texts[index];
//  index++;
//  if (index === images.length) {
//    index = 0;
//  }
//  gsap.delayedCall(imageTimes[index], changeBackgroundImage);
//}
//
//imageTimes.forEach((time) => {
//  timeline.to({}, {duration: time, onComplete: changeBackgroundImage});
//});
