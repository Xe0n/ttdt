import React from 'react'
import ContentLoader from 'react-content-loader'

const News = props => (
  <>
    {/* <ContentLoader height="500" width="100%" viewBox="0 0 350 150" >
      <rect x="0" y="0" rx="4" ry="4" width="350" height="25" />
      <rect x="0" y="50" rx="2" ry="2" width="350" height="150" />
      <rect x="0" y="230" rx="2" ry="2" width="170" height="20" />
      <rect x="0" y="230" rx="2" ry="2" width="170" height="20" />
    </ContentLoader> */}
     <ContentLoader
      speed={2}
      width={1000}
      height={160}
      viewBox="0 0 1000 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="100%" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="100%" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="100%" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      
    </ContentLoader>
    <p className='text-center'>Идет загрузка...</p>
     
  </>
)

export default News