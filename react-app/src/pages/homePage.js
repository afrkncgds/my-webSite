import React from 'react';
import Aside from '../components/layout/aside';

function HomePage() {
    return (
        <div className="home-root">
            <Aside />
            <div className="home-wrapper">
                <div className='home-container'>
                <div className="image-wrapper">
                    <img src="img/cv-foto.png" alt="profile" />
                </div>
                <div className="text-wrapper">
                    <div className='title-block'>
                        <p>
                            Front-end Develooper
                        </p>
                        <h1>
                            Ayhan Furkan Çağdaş
                        </h1>
                    </div>
                    <div className='text-block'>
                        <div className='text-item'>
                            <p>
                            Uzun yıllar yönetici konumunda iş
deneyimi olan, ekip çalışmasına
yatkın, ikili ilişkileri iyi, temiz ve kısa
kod yazılımına önem veren,
sorumluluk bilinci olan, stres
yönetiminde başarılı, yenilikleri
takip eden ve uyum sağlayan mid
level full-stack developer ve project
manager assistanım. Teknik
doküman okuyup takip edebilecek
kadar İngilizce bilgisine sahibim.
                            </p>
                        </div>
                        <div className='button-block'>
                            <div className='btn-item'>
                                <span>CV İndir</span>
                            </div>

                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
