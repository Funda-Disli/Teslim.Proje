import React from 'react'

const Rota = () => {
    return (
      <div className='max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-2xl font-bold'>Bursa'da Tarih ve İnancın Buluştuğu Mekânlar : Cami ve Türbeler</h3>
          <p className='pt-4'>
          Bursa, tarihi zenginlikleriyle bezeli cami ve türbeleriyle dikkat çeken bir şehir. Ulu Camii, Osmanlı mimarisinin göz kamaştırıcı bir örneği olarak ön plana çıkarken, Osman Gazi ve Orhan Gazi Türbesi ve Yeşil Türbe'nin etkileyici yapısı tarih tutkunlarını cezbetmektedir. Bursa'nın bu dini mirası, Osmanlı İmparatorluğu'nun kökenlerine ve ilk dönemlerine ışık tutan anıtlarla doludur. Tarihi atmosferini hissetmek ve mimari güzellikleriyle buluşmak isteyenler için Bursa, cami ve türbeleriyle eşsiz bir deneyim sunmaktadır.
          </p>
        </div>
  
        <div className='grid grid-cols-2 col-span-2 gap-2'>
          <img
          className='object-cover w-full h-full'
            src='https://www.gotobursa.com.tr/uploads/2020/09/_izz1124_large.jpg'
            alt='/'
          />
          <img
          className='row-span-2 object-cover w-full h-full'
            src='https://www.gotobursa.com.tr/uploads/2021/04/ulucami-turizm-sube-8_large_large.jpg'
            alt='/'
          />
          <img
          className='object-cover w-full h-full'
            src='https://www.gotobursa.com.tr/uploads/2021/03/rb_n5150_large.jpg'
            alt='/'
          />
        </div>
      </div>
    );
  };
  

export default Rota
