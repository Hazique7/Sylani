import React from 'react'
import { Carousel } from 'antd'
export const Slide = () => {
  return (
    <div>
        <Carousel autoplay='1s'>
            <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg" alt="" height={500} />
            <img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4" alt="" height={500} />
            <img src="https://img.freepik.com/premium-photo/set-fresh-raw-meat-fish-plastic-boxes-veal-salmon-steak-chicken-pork-banner-supermarket-dark-background-organic-food_187166-26544.jpg?w=2000" alt="" height={500} />
            <img src="https://images.healthshots.com/healthshots/en/uploads/2022/07/21132649/pulses.jpg" alt="" height={500} />
        </Carousel>
    </div>
  )
}
