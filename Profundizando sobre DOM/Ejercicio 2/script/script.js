let Pintar = (e) =>{


let madrid = document.querySelector('#madrid');
let paris = document.querySelector('#paris');





if(madrid.selected==true){

const image = document.querySelector('#img1');
image.src = 'https://gerrysdmc.com/uploads/images/madrid_money_heist.jpg';
image.alt ="madrid 1"

const image1 = document.querySelector('#img2');
image1.src = 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/06/13/Recortada/img_mbigas_20190613-121711_imagenes_lv_terceros_madrid-309-kVCI-U462850729482pJG-992x558@LaVanguardia-Web.jpg';
image1.alt ="madrid 2"

const image2 = document.querySelector('#img3');
image2.src = 'https://ep01.epimg.net/ccaa/imagenes/2019/12/04/madrid/1575477191_025542_1575489979_noticia_normal.jpg';
image2.alt ="madrid 3"

}else if(paris.selected){

    const image3 = document.querySelector('#img1');
image3.src = 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/11/30/imagen-de-la-torre-eiffel.png';
image3.alt ="paris 1"

const image4 = document.querySelector('#img2');
image4.src = 'https://img.huffingtonpost.com/asset/5e1d9c4c2100003000af8d0c.jpeg?cache=5aaxY3NirQ&ops=scalefit_720_noupscale&format=webp';
image4.alt ="paris 2"

const image5 = document.querySelector('#img3');
image5.src = 'https://www.elagoradiario.com/wp-content/uploads/2019/11/Par%C3%ADs-1140x600.jpg';
image5.alt ="paris 3"


}else{

const image6 = document.querySelector('#img1');
image6.src = 'https://sergimateo.com/wp-content/2012/12/Nueva-York-2.jpg';
image6.alt ="paris 1"
    
const image7 = document.querySelector('#img2');
image7.src = 'https://ep01.epimg.net/elviajero/imagenes/2018/02/13/album/1518519651_043309_1518535580_noticia_normal_recorte1.jpg';
image7.alt ="paris 2"
    
const image8 = document.querySelector('#img3');
image8.src = 'https://i.pinimg.com/236x/33/08/7f/33087f99d794e857e60e76e403a541bc.jpg';
image8.alt ="paris 3"

}

}
let boton = document.querySelector('button');
boton.addEventListener('click', Pintar);
// event.preventDefault();
