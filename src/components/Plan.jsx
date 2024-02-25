import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/04/dji_0081_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/11/yenice-dostum-tesisleri-2_large_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2020/09/mudanya-evleri-9_large.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2021/03/dji_0821_1_large.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.gotobursa.com.tr/uploads/2020/11/25606_mudanya_sahil_8_201803311615_1_large.jpg'
          alt='/'
        />
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Bursaya Rota Oluşturmak İçin Heyecanlı Mısın ?</h3>
        <p className='text-2xl py-6'>
          Bursa, tarihi zenginlikleri ve kültürel mirasıyla dolu olan, Türkiye'nin önemli şehirlerinden biridir. Eğer tarih ve kültürle iç içe bir gezi arayışındaysanız, Bursa'nın sizi büyüleyeceğine emin olabilirsiniz.
        </p>
        <p className='pb-6'>
        Bursa'nın tarihi dokusunu yaşayarak keşfetmek, şehrin kültürünü daha yakından anlamanıza ve unutulmaz anılar biriktirmenize olanak tanır. Dolayısıyla, "Bursa'nın Tarihi Yaşayarak Gezmeye Var Mısın?" sorusuna cevabınız evetse, bu şehirdeki tarihî hazineleri keşfetmek için bir gezi planlamak harika bir seçenek olabilir.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Bilgi Edin
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Keşfet!</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
