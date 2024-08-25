import reviewStyle from './reviews.module.css';
import sampleImage from '../../assets/about-image.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './customswiper.css';
function Reviews(){
    const reviewArray = [
        {
            image:sampleImage,
            name:"Steve rogers",
            orgName:"Talent pool",
            orgUrl:"talentpool.com",
            rating:3,
            comment:"Working with Prasanth is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him."
        },
    ];

    const rating = (rate) => {
        const ratingCount = Array.from({length:rate},(_,index)=>(
            <span key={`rated_${index}`} style={{color:'#FFDF00'}} className={reviewStyle.rating}>&#9733;</span>
        ));
        const unratingCount = Array.from({length:5 - rate},(_,index)=>(
            <span key={`unrated_${index}`} style={{color:'var(--lightBlue)'}} className={reviewStyle.rating}>&#9733;</span>
        ));
        return [...ratingCount,...unratingCount];
    }

    if(reviewArray && reviewArray.length >= 3){
        return(
            <section className={reviewStyle.reviews}>
                <h2>Client Reviews <span className='bottomLine'><span className='movingBall'></span></span></h2>
                <div className={reviewStyle.reviewSwiper}>
                    <Swiper
                    spaceBetween={25}
                    slidesPerView={window.innerWidth <= 550 ? 1 : 'auto'}
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{delay:3000}}
                    >
                    {
                        reviewArray.map((review,index)=>(
                            <SwiperSlide key={index} className={reviewStyle.reviewTile}>
                                <img src={review.image} alt="client" />
                                <h5 className={reviewStyle.clientName}>{review.name}</h5>
                                <p className={reviewStyle.org}>{review.orgName} - <span>{review.orgUrl}</span></p>
                                {rating(review.rating)}
                                <p className={reviewStyle.comment}>{review.comment}</p>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </section>
        );
    }
}
export default Reviews;