import React from 'react'

const Rotauc = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Bursa'nın Sıcak Dokunuşu: Hamamlar ve Termaller</h3>
        <p className='pt-4'>
        
Bursa, tarihi hamamları ve termal sularıyla ünlü bir şehir. Osmanlı döneminden günümüze uzanan bu hamamlar, sadece temizlik ve rahatlama için değil, aynı zamanda tarihi bir atmosferde kendinizi kaybetmek için de ideal mekanlardır. Bursa'daki termal tesisler ise şifalı sularıyla sağlık ve dinlenme arayanları cezbetmektedir. Şehirdeki bu termal güzellikler, ziyaretçilere hem tarihi hem de doğal bir şifa deneyimi sunmaktadır. Bursa'nın hamam ve termallerinde, şehrin stresinden uzaklaşarak huzur dolu anlar yaşayabilirsiniz.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://www.gotobursa.com.tr/uploads/2021/04/eski-kaplica-1_large_large.jpg'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://www.gotobursa.com.tr/uploads/2021/04/17kukurtlu-kaplicalari--kukurtlu-hot-springs_1_large.jpg'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://www.gotobursa.com.tr/uploads/2021/04/gonluferah-3_large.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rotauc