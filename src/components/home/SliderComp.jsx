import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 py-6">
          <div className="">
            <div className="text-5xl font-bold p-5">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              fugiat inventore deleniti dignissimos voluptates ut nam cum quas!
              Ratione saepe exercitationem iure quos neque expedita incidunt
              enim quasi, quam commodi.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl m-5 w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[350px] h-[443px]"
            src="https://productimages.hepsiburada.net/s/515/300-443/110000570630619.jpg"
            alt="Ayakkabı 1"
          />
        </div>

        <div className="!flex items-center bg-gray-100 py-6">
          <div className="">
            <div className="text-5xl font-bold p-5">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              fugiat inventore deleniti dignissimos voluptates ut nam cum quas!
              Ratione saepe exercitationem iure quos neque expedita incidunt
              enim quasi, quam commodi.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl m-5 w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[350px] h-[443px]"
            src="https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/53060/uploads/urunresimleri/buyuk/benito-gri-triko-strec-kalin-tabanli-s-17d-44.jpg"
            alt="Ayakkabı 2"
          />
        </div>

        <div className="!flex items-center bg-gray-100 py-6">
          <div className="">
            <div className="text-5xl font-bold p-5">
              Moda Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              fugiat inventore deleniti dignissimos voluptates ut nam cum quas!
              Ratione saepe exercitationem iure quos neque expedita incidunt
              enim quasi, quam commodi.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl m-5 w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[350px] h-[443px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbx4va2TjhQD8B5bsqYoXUzX4baENQY7atB5xAGVPZ_VVzD1o8l7uYFHNknyioEUQ2Vg&usqp=CAU"
            alt="Ayakkabı 3"
          />
        </div>

        <div className="!flex items-center bg-gray-100 py-6">
          <div className="">
            <div className="text-5xl font-bold p-5">
              Spor Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              fugiat inventore deleniti dignissimos voluptates ut nam cum quas!
              Ratione saepe exercitationem iure quos neque expedita incidunt
              enim quasi, quam commodi.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl m-5 w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[350px] h-[443px]"
            src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/33681/uploads/urunresimleri/buyuk/reiana-model-5-cm-tabanli-yeni-sezon-s-1f8cdd.jpeg"
            alt="Ayakkabı 4"
          />
        </div>

        <div className="!flex items-center bg-gray-100 py-6">
          <div className="">
            <div className="text-5xl font-bold p-5">
              En Yeni Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 p-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              fugiat inventore deleniti dignissimos voluptates ut nam cum quas!
              Ratione saepe exercitationem iure quos neque expedita incidunt
              enim quasi, quam commodi.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl m-5 w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[350px] h-[443px]"
            src="https://static.ticimax.cloud/33681/uploads/urunresimleri/largo-model-5-cm-tabanli-yeni-sezon-sn-5-ea8a.jpeg"
            alt="Ayakkabı 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
