import { ImageList, ImageListItem } from '@mui/material'
import React, { Fragment } from 'react'

function Home() {
  const itemData = [
    {
      id:1,
      title:"meditation chairs",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/b/AmazonStores/A21TJRUUN4KGV/213cece81b3019ecd7daf3eb0eaea030.w3900.h2600._CR650%2C0%2C2600%2C2600_SX960_SY960_.jpg",
      href:"https://www.amazon.in/stores/page/5F2BFB02-BA06-44B4-8612-3F6F4F1AF62B?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:2,
      title:"meditation cushions",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/056c60cda419ecbd82194a91572e4909.w3467.h2311._CR969%2C0%2C2311%2C2311_SX960_SY960_.jpg",
      href:"https://www.amazon.in/stores/page/93540868-10CB-4CD2-AC56-A7A9005149C8?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:3,
      title:"sleep mask",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/f8814670b1eb38c3c605b138cb7cd349.w7360.h4912._SL5000_CR995%2C0%2C4004%2C3336_SX960_SY800_.jpg",
      href:"https://www.amazon.in/stores/page/D370D2C3-5738-4C8C-9605-A5C7F0E6D5C7?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:4,
      title:"restorative yoga prop",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/7/AmazonStores/A21TJRUUN4KGV/72f7f09b90ad778b9af5d09c15affaeb.w4891.h3284._CR935%2C0%2C3941%2C3284_SX960_SY800_.jpg",
      href:"https://www.amazon.in/stores/page/BC8DDC02-DDED-4B38-8C13-9202BEF59DA4?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:5,
      title:"yoga mats",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/3964a2c6b0ffedc3ab95b82c919b5299.w8660.h5773._SL5000_CR833%2C0%2C3333%2C3333_SX960_SY960_.jpg",
      href:"https://www.amazon.in/stores/page/B92507A3-8860-4980-8E9F-5C11E2908E39?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:6,
      title:"yoga brick & belt",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/99ff37366600a6a39a0134134ded7eb0.w2500.h1656._CR0%2C195%2C2500%2C1250_SX960_SY480_.jpg",
      href:"https://www.amazon.in/stores/page/B77381EE-87F2-4C31-9FB7-975F2F0276CD?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
    {
      id:7,
      title:"travel accessories",
      src:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/55d16cdae2c9e819b3c1d46040a53495.w600.h397._CR0%2C62%2C600%2C300_SX600_SY300_.jpg",
      href:"https://www.amazon.in/stores/page/5EFD1B57-D7F2-425D-BB6D-70C867B34B0F?ingress=2&visitId=f2a33e1e-fbac-4817-9f3f-6d3fd4c9e137&ref_=ast_bln"
    },
]
  return (
    <Fragment>
    <div className='Home_section'>
      <ImageList gap={16} className="Home_section_contain">
          {itemData.map((item) => (
            <ImageListItem key={item.id} className="home_section_item">
              <a href={item.href}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="home_section_img"
                />
              </a>
            </ImageListItem>
          ))}
      </ImageList>
    </div>
    </Fragment>
  )
}

export default Home