import React from 'react'

// Components
import ContentBox from './components/ContentBox'
import CardBlog from './components/cards/CardBlog'
import CardFeature from './components/cards/CardFeature'

const HomePage = () => {
  return (
    <main className='home-page'>
      <ContentBox
        title='New in the Library'
        description='Newly added accessibility resources, guides, and more.'
        isViewall={true}
      >
        <CardBlog
          category='Resources'
          title='Inclusive Publishing'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg'
        />
        <CardBlog
          category='Resources'
          title='The APLN (Accessible Publishing Learning Network)'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1679345933/Screenshot_2023_03_20_at_3_58_45_PM_b615f86e7e.png'
        />
        <CardBlog
          category='Resources'
          title='Making Accessible Books'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg'
        />
        <CardBlog
          category='Resources'
          title='The DAISY Consortium’s Accessible Publishing Knowledge Base'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg' />
        <CardBlog
          category='Resources'
          title='Language, Please: Style Guide & Resources for journalists and storytellers'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1658845042/language_please_logo_d4b822280f.png'
        />
        <CardBlog
          category='Blogs & Articles'
          title='4 steps to more inclusive, precise language'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653070254/library_author_google_7723cb132a.png'
        />
      </ContentBox>
      <ContentBox
        title='Featured Collections'
        description='Handpicked and curated collections around accessibility.'
        isViewall={true}
      >
        <CardFeature 
          title='Disability Employment'
          bgClr='#F6F6EA'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png'
        />
        <CardFeature 
          title='Making Accessible Color Combos'
          bgClr='#F3F2FC'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png'
        />
        <CardFeature  
          title='Tips and Tricks for Inclusive Social Media'
          bgClr='#F6F6EB'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_Inclusive_Social_Media_b9669e6d39.png'
        />
      </ContentBox>
    </main>
  )
}

export default HomePage