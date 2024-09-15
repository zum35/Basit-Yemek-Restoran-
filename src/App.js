import React from 'react';
import './styles.css'
/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan farklı olmamalıdır (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/

function Header(){ 
    return(
    <header>
                    <div class="button-container">
                        <button>Menu</button> 
                        <button>Hakkında</button> 
                        <button>Saatler & Lokasyon</button>
                    </div> 
                </header>
                );
            }
function MainContent(){
    return (
        <main>
            <h1 className='logo-container'>Basit Yemekler Restoranı</h1>
            <p className='info-container'>Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
        Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
        ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
        oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.</p>
        <div div className='image-container'>
        <div className='image-wrapper'>
            <img className='hot-dog' src='images/hotdogs.jpg' alt='Hot Dog'/></div>
            <div className='image-wrapper'>
                <img src='images/sandwich.jpg' alt='Sandwich'/></div>
                <div className='image-wrapper'>
                    <img src='images/hamburger.jpg' alt='Hamburger'/>
                </div>
                </div>

        </main>
    )
}
function Footer(){
    return (
        <footer>
            <p>
                Made by{' '}
                <a
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                target='_blank'
                rel='noopener noreferrer'>
                Coding Company
                </a>
                ™.
      </p>
    </footer>
  );
}
   export default funtion App (){
    return (
        <div>
        <Header/>
        <MainContent/>
        <Footer/></div>
    );
   }
   
