import React from 'react'
import './Home.css';
import Product from "./Product"
import footer from './footer.jpg'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg1 from './sliderImg1.jpg'
import sliderImg2 from './sliderImg2.jpg'
import sliderImg3 from './sliderImg3.jpg'
import sliderImg4 from './sliderImg4.jpg'
import sliderImg5 from './sliderImg5.jpg'
import sliderImg6 from './sliderImg6.jpg'
import sliderImg7 from './sliderImg7.jpg'
import sliderImg8 from './sliderImg8.jpg'
import sliderImg9 from './sliderImg9.jpg'
import sliderImg10 from './sliderImg10.jpg'
import sliderImg11 from './sliderImg11.jpg'
import sliderImg12 from './sliderImg12.jpg'
import sliderImg13 from './sliderImg13.jpg'
import sliderImg14 from './sliderImg14.jpg'
import sliderImg15 from './sliderImg15.jpg'
import sliderImg16 from './sliderImg16.jpg'
import sliderImg17 from './sliderImg17.jpg'
import sliderImg18 from './sliderImg18.jpg'
import sliderImg19 from './sliderImg19.jpg'
import sliderImg20 from './sliderImg20.jpg'
import sliderImg21 from './sliderImg21.jpg'
import sliderImg22 from './sliderImg22.jpg'
import sliderImg23 from './sliderImg23.jpg'
import sliderImg224 from './sliderImg224.jpg'
import sliderImg25 from './sliderImg25.jpg'
import sliderImg26 from './sliderImg26.jpg'
import budgetBuy1 from './budgetBuy1.jpg'
import budgetBuy2 from './budgetBuy2.jpg'
import budgetBuy3 from './budgetBuy3.jpg'
import budgetBuy4 from './budgetBuy4.jpg'
import budgetBuy5 from './budgetBuy5.jpg'
import mustHaveStyles1 from './mustHaveStyles1.jpg'
import mustHaveStyles2 from './mustHaveStyles2.jpg'
import topBrands1 from './topBrands1.jpg'
import topBrands2 from './topBrands2.jpg'

import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
    return (
        <div className="home">

            <img className="home__img" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/77f10961-cf70-49d1-ad97-215a476e21fa1653803143256-000_Header-Creative.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/31/c5889a8a-0c46-420f-b283-42ec3cbb8eb81654002229869-Bank-strip-prebuzz.jpg" alt="" className="home__img" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/28/2f759fd4-ad52-4f18-af25-5708d07bc5f51653734073545-PRE-PREBUZZ_03.jpg" alt="" className="home__img" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/30/3b972063-78b0-4028-bebe-9e9e196db6bc1653890374501-00-RTBs.jpg" alt="" className="home__img" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/6/1/d4788020-5a54-4407-9867-e5139845ae451654106755801-HOT-HERO-DEALS-HEADER-UPDATED.jpg" alt="" className="home__img" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/96252248-9f48-4b85-96f2-f082afbc745b1653489635681-Header_Grand-Opening.jpg" alt="" className="home__img" />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sliderImg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg7} alt="" />
                </SwiperSlide>
            </Swiper>
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/81981985-075c-4579-a456-00ce3e1077ab1653489635674-Header_Crazy-Deals.jpg" alt="" className="home__img" />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sliderImg10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg12} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg13} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg14} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg15} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg17} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg16} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg18} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg19} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg20} alt="" />
                </SwiperSlide>
            </Swiper>

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/25/10a80886-62d3-4700-a193-84d33b7f5a721653489635668-Header_Budget-Buys.jpg" alt="" className="home__img" />
            <img src={budgetBuy1} alt="" className="home__img__budgetBuy" />
            <img src={budgetBuy2} alt="" className="home__img__budgetBuy" />
            <img src={budgetBuy3} alt="" className="home__img__budgetBuy" />
            <img src={budgetBuy4} alt="" className="home__img__budgetBuy" />
            <img src={budgetBuy5} alt="" className="home__img__budgetBuy" />

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/29/80ce4635-684e-4608-be15-48193234376b1653786135681-EORS-SectionalHeader-HandpickedByInfluencers.jpg" alt="" className="home__img" />

            <div className="home__row">
                <Product
                    id="1234567890"
                    title="Anouk"
                    des="Pompom Lace Straight Kurta"
                    price={809}
                    rating={4.2}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10297647/2021/1/21/8548a7ff-1c4e-476d-9cf3-5496bc5e3c8f1611224460739-Anouk-Navy-Blue-Striped-Rayon-Straight-Kurta-With-Pompom-Lac-1.jpg"
                />
                <Product
                    id="1234567891"
                    title="Anouk"
                    des="Women Floral Printed Kurta"
                    price={1599}
                    rating={3.7}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16190792/2022/4/4/86002632-d18e-4556-aab5-c3fb9185a9a61649057215981-Anouk-Women-Kurtas-9401649057215379-1.jpg"
                />
                <Product
                    id="1234567892"
                    title="Anouk"
                    des="Printed straight Kurta"
                    price={899}
                    rating={3.9}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg"
                />
                <Product
                    id="1234567893"
                    title="Sangria"
                    des="Pure cotton printed Kurta"
                    price={749}
                    rating={4.3}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16844732/2022/4/6/0eef9319-ee5a-41ef-bd97-5201bc53fa641649237169050-Sangria-Women-Kurtas-9171649237168277-1.jpg"
                />
                <Product
                    id="1234567894"
                    title="HERE&NOW"
                    des="Cotton Ethnic Anarkali Kurta"
                    price={899}
                    rating={3.9}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14885440/2021/9/14/eed33873-b5a6-4e96-b7f4-94871405d1ce1631599683159-HERENOW-Women-Kurtas-4671631599682587-1.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345678903"
                    title="Anouk"
                    des="Women Striped Kurta"
                    price={549}
                    rating={4.4}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14854724/2021/11/11/d641e99c-8d9a-44a7-9747-97c7ebbb7fca1636623969138AnoukWomenPinkWhiteStripedKurta1.jpg"
                />
                <Product
                    id="12345678912"
                    title="Taavi"
                    des="Woven Legacy Kurta"
                    price={849}
                    rating={4.4}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11125436/2022/4/7/87f2207e-891f-4e79-b119-b663801c56321649328659303TaaviWomenMulticolouredStripedWovenLegacyStraightSustainable1.jpg"
                />
                <Product
                    id="12345678923"
                    title="HERE&NOW"
                    des="Printed straight Kurta"
                    price={899}
                    rating={3.9}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16927264/2022/2/14/a7bc27f6-f7be-41f4-9735-5fb81416d88d1644839000395-HERENOW-Women-Magenta--White-Geometric-Printed-Kurta-6164483-1.jpg"
                />
                <Product
                    id="12345678923"
                    title="Sangria"
                    des="Printed Tiered Anarkali Kurta"
                    price={1349}
                    rating={3.7}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8350119/2021/3/3/5daeb4fa-9c22-4aa4-b984-f6e876ade9c31614750819158-Sangria-Women-Pink-Printed-Tiered-Anarkali-Kurta-64516147508-1.jpg"
                />
                <Product
                    id="12345672894"
                    title="NA-KD"
                    des="Ribbed Open Back Dress"
                    price={2999}
                    rating={4.9}
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17341986/2022/3/14/a6d49249-f2ec-48c4-9707-b3b66dab78cd1647240021479-NA-KD-Beige-Ribbed-Open-Back-Bodycon-Mini-Dress-737164724002-1.jpg"
                />
            </div>

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/ab0b84c2-0c51-4f04-9a90-fe7e572976b91653805077312-Strip_Rs-1-Deals.jpg" alt="" className="home__img" />
            <div className="grid">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/2fdfb110-3452-4c53-bdfa-156d3879612f1653803881656-Best-of-Deals_01_1000-Off.gif" alt="" className="home__img__gif" />
                <img className="home__img__gif" src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/605f36b5-40e9-4070-a405-fcf39a25066d1653803905103-Best-of-Deals_02_Buy-1-get-4.gif" alt="" />
            </div>
            <div className="grid">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/9fa05213-c911-48fe-abd9-43fc42a737621653804023380-Best-of-Deals_03_Up-to-10000.gif" alt="" className="home__img__gif" />
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/c4b4d4d6-7206-4609-8931-65ef68c790f11653804043676-Best-of-Deals_04_Extra-Rs-1.gif" alt="" className="home__img__gif" />
            </div>
            <div className="grid">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/8f47eb62-01cf-4f2c-8344-7113b319d3971654014022120-Box-Bonanza_01.gif" alt="" className="home__img__gif" />
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/ecb32fdf-b775-46cd-b854-ba5d80d5494e1654014027945-Box-Bonanza_02.gif" alt="" className="home__img__gif" />
            </div>

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/b43743c0-f3b2-428b-89b2-e951cf7b64261653806057587-Header_Quick-Links.jpg" alt="" className="home__img" />
            <img src={mustHaveStyles1} alt="" className="home__img" />
            <img src={mustHaveStyles2} alt="" className="home__img" />

            <div className="grid">
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/b87fccbd-907a-447f-a202-cd7a78ddd6ec1653832535861-Slots-banner_6-Actions_03.gif" alt="" className="home__img__gif__bottom" />
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/4fb45c9d-434b-4763-8bfd-1ab626d8e5281653832577970-Slots-banner_6-Actions_04.gif" alt="" className="home__img__gif__bottom" />
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/d74fdd84-06f7-47b9-bbd2-4f621fcce0a31653832631968-Slots-banner_6-Actions_05.gif" alt="" className="home__img__gif__bottom" />
            </div>
            <div className="grid">
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/4e5d8dee-92d5-4b1a-8a62-1d8d1cc675191653833079506-Slots-banner_6-Actions_06.gif" alt="" className="home__img__gif__bottom" />
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/1fc5a256-43fb-4158-b121-7ea48e59ff4d1653833104567-Slots-banner_6-Actions_07.gif" alt="" className="home__img__gif__bottom" />
                <img src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/0e272e73-20e5-4de2-80a1-f9b9751514f31653833159005-Slots-banner_6-Actions_08.gif" alt="" className="home__img__gif__bottom" />
            </div>

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/2b592cd1-8f9a-4c57-a1e2-deafed4852fd1653806135225-Header_Super-Specials.jpg" alt="" className="home__img" />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sliderImg21} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg22} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg26} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg23} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg224} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg25} alt="" />
                </SwiperSlide>
            </Swiper>

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/553799f1-aa08-4ef1-85d1-1081abfa27f11653804485918-Daily-Rewards.jpg" alt="" className="home__img" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/09cd0633-ebc7-4d15-92db-226b09bc678d1653803716874-10-ways-to-maximize.jpg" alt="" className="home__img" />

            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/60fdd3e5-a8e6-45c6-853d-3e43d0a505841653806195340-Header_Brand-Tiles.jpg" alt="" className="home__img" />

            <img src={topBrands1} alt="" className="home__img" />
            <img src={topBrands2} alt="" className="home__img" />

            <img className="home__img" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/5/29/9fbb02ad-5291-4de2-b357-c4efec5436891653806576554-Gift-Cards.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/29/2651b3c3-0848-4ada-94f0-e76772da260e1653786135772-EORS-SectionalHeader-We_veGotMoreInStore.jpg" alt="" className="home__img" />

            <img src={footer} alt="" className="home__img footer__img" />
        </div>
    )
}

export default Home
