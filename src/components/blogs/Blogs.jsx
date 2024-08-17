import blogStyle from './blogs.module.css';
import sampleImage from '../../assets/alcaline.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function Blogs(){
    const blogContent = [
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        },
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        },
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        },
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        },
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        },
        {
            image:sampleImage,
            month:'Aug',
            date:15,
            year:2024,
            title:"Learn programming easy way",
            category:"Technology"
        }
    ];

    return(
        <section className={blogStyle.blogs}>
            <h2>Latest blogs <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={blogStyle.blogSwiper}>
                <Swiper
                spaceBetween={25}
                slidesPerView={ window.innerWidth <= 550 ? 1 : 'auto'}
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{delay:4000}}
                >
                {
                    blogContent.map((blog,index)=>(
                        <SwiperSlide key={index} className={blogStyle.blogTile}>
                            <figure>
                                <img src={blog.image} alt="blogImage" />
                                <p className={blogStyle.dateIndicator}>
                                    <span className={blogStyle.month}>{blog.month}</span>
                                    <span className={blogStyle.date}>{blog.date}</span>
                                    <span className={blogStyle.year}>{blog.year}</span>
                                </p>
                            </figure>
                            <h5 className={blogStyle.title}>{blog.title}</h5>
                            <p className={blogStyle.category}>{blog.category}</p>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    );
}
export default Blogs;