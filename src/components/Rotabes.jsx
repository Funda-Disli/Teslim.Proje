import React from 'react'

const Rotabes = () => {
    return (
      <div className='max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-2xl font-bold'>Bursa'nın Tabiat Şaheseri: Uludağ Kayak Merkezi ve Doğanın Dansı</h3>
          <p className='pt-4'>        
          Bursa'nın incisi, Uludağ Kayak Merkezi, kış sporları tutkunlarının kalbinde atıyor. Bembeyaz örtüsü altında, kayakseverleri ağırlayan bu muazzam merkez, kışın keyifli anlar yaşatmak için bekliyor. Her seviyeden kayakçının beklentilerini karşılayan zengin pistleriyle Uludağ, adeta kayağın kalbi konumunda. Bu eşsiz kayak destinasyonu, sadece spor tutkunlarını değil, aynı zamanda doğanın büyüleyici güzelliklerini keşfetmek isteyenleri de cezbetmeye devam ediyor. Uludağ Kayak Merkezi, karın altındaki bu beyaz dünyada unutulmaz bir kış deneyimi sunuyor.
          </p>
        </div>
  
        <div className='grid grid-cols-2 col-span-2 gap-2'>
          <img
          className='object-cover w-full h-full'
            src='https://www.gotobursa.com.tr/uploads/2021/04/uludag_bursa_ulu_sehir-3_1_large_1_large_2_large.jpg'
            alt='/'
          />
          <img
          className='row-span-2 object-cover w-full h-full'
            src='https://www.gotobursa.com.tr/uploads/2021/04/uludag-3_1_large_1_large_large.jpg'
            alt='/'
          />
          <img
          className='object-cover w-full h-full'
            src='https://www.bingezi.com/resimler/n339-uludag-kayak-merkezi.jpg'
            alt='/'
          />
        </div>
      </div>
    );
  };
  

export default Rotabes
