import React from 'react'

const Rotaiki = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2020/09/teleferik-44_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/04/uludag_bursa_ulu_sehir-3_1_large_1_large_2_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/04/arif-miletli---kayak_large_large.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/04/suuctu-selalesi1_1_large_1_large_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2020/10/mustafa-dogan---alacam-selalesi_large.jpg'
          alt='/'
        />
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-2xl font-bold'>Bursa'nın Doğal Zenginlikleri : Dağlar, Akarsular ve Göller</h3>
        <p className='pt-4'>
        Bursa, doğal güzellikleriyle de büyüleyen bir şehir. Bursa'nın çevresini saran dağlar, muhteşem manzaralar sunarak doğaseverleri kendine çekiyor. Uludağ, yıl boyunca ziyaretçilerine hem kış sporları hem de doğa yürüyüşleri için bir cennet sunuyor.

Şehirdeki akarsular, yeşilin ortasında serpilip huzur verici bir atmosfer oluşturuyor. Nilüfer Çayı ve Gökdere gibi akarsular, şehri adeta bir doğa resitaline dönüştürüyor. Suların melodisiyle baş başa kalmak isteyenler için mükemmel bir seçenek.

Bursa'nın sakin gölleri de doğa severleri cezbetmekte. Gölcük ve Uluabat Gölü, şehirdeki göllerden sadece birkaçı. Bu göller, kuş gözlemciliği ve doğal yaşamı keşfetmek isteyenler için ideal destinasyonlar.

Bursa'nın dağları, akarsuları ve gölleriyle çevrili doğal güzellikleri, şehre farklı bir dokunuş katıyor. Doğayla iç içe olmak isteyenler için Bursa, keşfedilmeyi bekleyen bir doğa hazinesidir.
        </p>
        
      </div>
    </div>
      
  )
}

export default Rotaiki
