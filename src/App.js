import logo from "./logo.svg";
import "./App.css";

import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon5 from "./icon5.svg";

import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import slider5 from "./slider5.jpg";

import countdown from "./coundown.svg";

import tab from "./tab.png";
import tic from "./tic.svg";

import del1 from "./del1.svg";
import del2 from "./del2.svg";
import del3 from "./del3.svg";
import ach from "./achievements.png";
import close from "./close.png";

import check from "./check.png";

import comment1 from "./comment1.svg";
import comment2 from "./comment2.svg";

import Slider from "react-slick";
function App() {
  const images = [{ icon1 }, { icon1 }, { icon1 }, { icon1 }];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <section className="max-w-[1005px] mx-auto mb-[100px] md:mx-5 sm:mx-3">
        <div className="w-full h-4 2xl:bg-orange-500 xl:bg-blue-400 lg:bg-red-400 md:bg-yellow-200 sm:bg-green-200" />
        <nav className="h-14 flex items-center justify-center">
          <h1 className="text-xs  font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-base">
            ColonBroom
          </h1>
        </nav>
        <main className="flex h-auto mt-12 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col">
          <div className="w-full pr-[10px] lg:w-1/2 2xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full ">
            <h1 className="font-bold  text-xl -tracking-wide 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-xl">
              Soulagez la constipation, perdez du poids et réduisez les
              ballonnements !
            </h1>
            <div className="icon-grid grid grid-cols-3 gap-5 mt-12">
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon2} alt=""></img>
                <p className="text-sm  sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon3} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon5} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
            </div>
            <button className="w-full h-12 text-[12px] sm:text-xs rounded-3xl font-bold text-gray-700 bg-emerald-400 mt-16">
              ACHETER MAINTENANT
            </button>
          </div>

          <div className=" mt-0  flex flex-col items-center  justify-between w-full xl:w-1/2 lg:w-1/2 md:w-1/2 2xl:w-1/2 sm:w-full ">
            <Slider {...settings} className="w-10/12 h-2/3 ">
              <div className="sm:mt-10">
                <img className="w-full" src={slider1} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider2} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider3} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider4} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider5} alt=""></img>
              </div>
            </Slider>
            <p className=" text-sm mb-[140px] sm:mb-0">
              {" "}
              Faites glisser vers la gauche pour en savoir plus !0
            </p>
          </div>
        </main>
        <section className="w-full my-10  h-20 bg-gray-200 flex flex-row justify-evenly sm:justify-around  items-center">
          <img src={countdown} className="w-[40px] sm:mx-2"></img>
          <p className="text-sm 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm text-center">
            Commandez maintenant et faites-vous livrer gratuitement aux
            États-Unis !
          </p>

          <h1 className="sm:mx-2">0:1:24</h1>
        </section>
        <section className="cards mt-[30px] w-full h-auto  ">
          <h1 className="text-2xl text-center  lg:text-4xl xl:text-4xl 2xl:text-4xl ">
            Choisissez votre offre
          </h1>
          <div className="flex justify-between mt-[40px] gap-[10px] sm:flex-col">
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] mt-4 bg-emerald-400 text-[12px]">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="delivery  justify-center items-start  gap-36 flex flex-row w-full h-[120px] sm:gap-5">
          <div className="flex flex-col items-center  justify-center gap-2">
            <img className="w-[50px]" src={del1} alt="" />
            <p className="text-sm">Livraison gratuite</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[50px]" src={del2} alt="" />
            <p className="text-sm text-center sm:w-[150px]">
              Produits fabriqués en Allemagne
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[50px] " src={del3} alt="" />
            <p className="text-sm text-center sm:w-[120px]">
              Garantie satisfait ou remboursé sous 14 jours
            </p>
          </div>
        </div>

        <section className="mt-[50px]   flex flex-col">
          <h1 className="text-4xl text-center font-bold tracking-wider">
            Si vous ressentez{" "}
            <span className="text-emerald-400">
              {" "}
              une lourdeur dans votre intestin
            </span>
            , <br></br> ou si vous luttez contre des{" "}
            <span className="text-emerald-400"> gaz au quotidien,</span>
            <br></br> Colonbroom est fait pour vous.
          </h1>

          <div className="flex flex-row mt-[60px]">
            <div className="w-full h-auto  flex-row flex items-center gap-10 sm:flex-col">
              <img className="w-1/4 sm:w-2/3" src={ach}></img>

              <div className="w-1/3 h-5/6 flex py-5 flex-col gap-2 sm:w-full">
                <h1 className="mb-[10px] text-xl">La vie avant ColonBroom</h1>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Lourdeur intestinale</p>
                </div>
                <div className="flex  items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Constipation</p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>
                    Microbiote intestinal<br></br> déséquilibré
                  </p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Difficulté à perdre du poids</p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Manque d'énergie</p>
                </div>{" "}
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Risque de ballonnements</p>
                </div>
              </div>
              <div className="w-2/5 sm:w-full h-full flex flex-col gap-4 py-4  bg-emerald-500">
                <h1 className="mb-[10px] text-white mx-5 text-xl">
                  La vie avant ColonBroom
                </h1>
                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Une légèreté intestinale</p>
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Des selles régulières</p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Un intestin protégé</p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Des objectifs de poids faciles à<br></br> atteindre
                  </p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Un incroyable stimulant pour<br></br> l'humeur et l'énergie
                  </p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14  mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Une amélioration du système <br></br> digestif
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full h-auto bg-gray-200 py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Ces ingrédients vous aideront à vous sentir<br></br> plus légers 12
            à 72 h après la première prise<br></br> de ColonBroom.
          </h1>
          <div className="w-full flex justify-center my-[50px] ">
            <div className=" flex flex-col w-fit items-center gap-1">
              <p className="text-center text-emerald-400 sm:text-sm">
                CLIQUEZ ICI POUR VOIR LA LISTE COMPLÈTE DES INGRÉDIENTS
              </p>
              <div className="border-[1px] w-full border-emerald-400"></div>
            </div>
          </div>

          <div className="w-full flex justify-between gap-24 sm:flex-col ">
            <div className="flex flex-col w-1/2  sm:w-full">
              <h1 className="text-xl font-bold my-5">
                La cosse de psyllium, fibre essentielle
              </h1>
              <p>
                La fibre essentielle contenue dans ColonBroom fait partie d'un
                type de fibre couramment utilisé comme laxatif doux. La cosse de
                psyllium est capable de transiter dans votre système digestif
                sans être entièrement décomposée ou assimilée. Au lieu de cela,
                ces fibres absorbent l'eau présente dans l'estomac pour se
                transformer en une substance visqueuse aux effets bénéfiques
                pour lutter contre la constipation, la diarrhée, la glycémie, la
                pression artérielle et la perte de poids.
              </p>
            </div>
            <div className="flex flex-col w-1/2  sm:w-full">
              <h1 className="text-xl font-bold my-5">
                Arôme naturel de fraise
              </h1>
              <p>
                Les arômes naturels enrichissent le bon goût de fraise et
                apportent un doux parfum sucré. Chaque verre aura un véritable
                goût de paradis !
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-[50px] ">
            <div className=" flex flex-col w-fit items-center gap-1">
              <p className="text-center text-emerald-400 sm:text-sm">
                WARNING: CALIFORNIA'S PROPOSITION 65
              </p>
              <div className="border-[1px] w-full border-emerald-400"></div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[70px] text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Comment ça marche ?
          </h1>
          <div className="w-full flex justify-between gap-11 sm:flex-col ">
            <div className="flex flex-col w-1/2  items-center sm:w-full">
              <img src={comment1} className="max-w-[250px]" alt="" />
              <h1 className="text-2xl font-bold my-5">
                1. Prenez une cuillère de ColonBroom
              </h1>
              <p className="text-center">
                Versez une cuillère à café de poudre dans un verre d'eau,
                mélangez bien et buvez !
              </p>
            </div>
            <div className="flex flex-col w-1/2  items-center sm:w-full">
              <img src={comment2} className="max-w-[250px]" alt="" />
              <h1 className="text-2xl font-bold my-5">
                2. Bénéficiez d'un intestin sain
              </h1>
              <p className="text-center">
                Passez de manière efficace à un intestin plus sain et un
                métabolisme revigoré.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 bg-slate-100">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Des milliers de clients satisfaits
          </h1>
          <h1 className=" mb-[70px] text-center text-2xl mt- font-medium my-4 sm:text-3xl">
            Oh oui, ils font bien caca maintenant, plus besoin de les forcer !
            Ils se plaignent toujours autant mais certainement plus à cause de
            douleurs intestinales.
          </h1>
          <div className="grid grid-cols-3 gap-[10px] ">
            <div className="flex flex-col gap-5 h-fit bg-green-50">
              <h1>
                {" "}
                Ces produits sont géniaux !!!!! Ces produits sont géniaux !!!!!
              </h1>

              <p>
                {" "}
                Doux avec votre estomac et c'est ce que j'aime ! Pas de
                ballonnements et plus d'énergie !
              </p>
            </div>

            <div className="flex flex-col gap-5 h-fit bg-green-50">
              <h1>
                {" "}
                Ces produits sont géniaux !!!!! Ces produits sont géniaux !!!!!
              </h1>

              <p>
                Jusqu'à présent, tout va bien. J'en suis à environ 2 semaines
                1/2 et j'ai récemment commencé à prendre la dose recommandée de
                deux prises par jour. Je ne me pèse jamais vraiment, donc je ne
                peux pas comparer à ce niveau-là, mais depuis 2-3 jours, je me
                sens beaucoup plus léger. Une nette diminution des
                ballonnements, mes chemises me serrent moins, mon ventre est
                beaucoup moins gonflé. J'ai hâte de voir comment je vais me
                sentir après ma cure de 2 mois. Je vous tiendrai au courant.
                Aussi, je suis allergique aux baies mais je n'ai eu aucune
                réaction à ce produit.
              </p>
            </div>
            <div className="flex flex-col gap-5 h-fit bg-green-50">
              <h1>
                {" "}
                Ces produits sont géniaux !!!!! Ces produits sont géniaux !!!!!
              </h1>

              <p>
                {" "}
                Doux avec votre estomac et c'est ce que j'aime ! Pas de
                ballonnements et plus d'énergie !
              </p>
            </div>
            <div className="flex flex-col gap-5 h-fit bg-green-50">
              <h1>
                {" "}
                Ces produits sont géniaux !!!!! Ces produits sont géniaux !!!!!
              </h1>

              <p>
                Jusqu'à présent, tout va bien. J'en suis à environ 2 semaines
                1/2 et j'ai récemment commencé à prendre la dose recommandée de
                deux prises par jour. Je ne me pèse jamais vraiment, donc je ne
                peux pas comparer à ce niveau-là, mais depuis 2-3 jours, je me
                sens beaucoup plus léger. Une nette diminution des
                ballonnements, mes chemises me serrent moins, mon ventre est
                beaucoup moins gonflé. J'ai hâte de voir comment je vais me
                sentir après ma cure de 2 mois. Je vous tiendrai au courant.
                Aussi, je suis allergique aux baies mais je n'ai eu aucune
                réaction à ce produit.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Trop beau pour être vrai ?
          </h1>
          <h1 className=" mb-[70px] text-center text-2xl mt- font-medium my-4 sm:text-[17px]">
            Les chiffres parlent d'eux-mêmes : presque tous les clients ont
            <br></br>
            constaté une amélioration de leur santé intestinale !
          </h1>

          <div className="flex flex-row justify-between gap-20 sm:gap-4">
            <div className="flex flex-col gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bolg my-4 sm:text-5xl">
                95%
              </h1>
              <p className="text-center">
                des consommateurs ont noté des selles plus fréquentes et plus
                régulières
              </p>
            </div>

            <div className="flex flex-col  gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bolg my-4 sm:text-5xl">
                80%
              </h1>
              <p className="text-center">
                des consommateurs ont constaté une perte de poids, sans
                sensation de faim
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bolg my-4 sm:text-5xl">
                90%
              </h1>
              <p className="text-center">
                des consommateurs se sont sentis plus légers 12 h après la
                première prise de ColonBroom
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 bg-slate-100">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Questions fréquemment posées par nos clients
          </h1>

          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <section className="cards mt-[20px] w-full h-auto  ">
            <h1 className="text-2xl text-center  lg:text-4xl xl:text-4xl 2xl:text-4xl ">
              Choisissez votre offre
            </h1>
            <div className="flex justify-between mt-[40px] gap-[10px] sm:flex-col">
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 px-14 h-[70px] rounded-[40px] mt-4 bg-emerald-400 text-[12px]">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="delivery mt-10 justify-center items-start  gap-36 flex flex-row w-full h-[120px] sm:gap-5">
            <div className="flex flex-col items-center  justify-center gap-2">
              <img className="w-[50px]" src={del1} alt="" />
              <p className="text-sm">Livraison gratuite</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[50px]" src={del2} alt="" />
              <p className="text-sm text-center sm:w-[150px]">
                Produits fabriqués en Allemagne
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[50px] " src={del3} alt="" />
              <p className="text-sm text-center sm:w-[120px]">
                Garantie satisfait ou remboursé sous 14 jours
              </p>
            </div>
          </div>

          <nav className="h-14 flex items-center justify-center">
            <h1 className="text-xs  font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-base">
              ColonBroom
            </h1>
          </nav>

          <p className="text-basic mb-5  text-center">
            2022 Tous droits réservés, Max Nutrition UAB, Vilnius, Lituanie 2021
          </p>
          <p className="text-basic text-gray-600 text-center">
            Avertissement : les résultats peuvent varier d'une personne à
            l'autre. Notre service n'est pas destiné à diagnostiquer, traiter,
            guérir ni empêcher une quelconque maladie et ne constitue pas un
            avis médical.
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;
