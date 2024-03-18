import React from 'react'

// Components
import ContentBox from '../components/ContentBox'
import CardFeature from '../components/cards/CardFeature'

const CollectionsPage = () => {
  return (
    <main className='collections-page'>
      <ContentBox
        title='Featured Collections'
        description='Handpicked and curated collections around accessibility.'
        isViewall={false}
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
      <ContentBox
        title='Browse All Collections'
        isViewall={false}
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
        <CardFeature
          title='Accessibility Tips, Tricks, and Resources for Designers'
          bgClr='#11284B'
          textClr='#ffffff'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845745/library_collection_Tips_for_Designers_80f5675abb.png'
        />
        <CardFeature
          title='Inclusive Personas and Accessible Design Prompts'
          bgClr='#99D6CC'
          textClr='#11284B'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Accessibility_Prompts_37b9c23607.png'
        />
        <CardFeature
          title='Accessibility Tips, Tricks, and Resources for Developers'
          bgClr='#F6F6EB'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_illo_3_4266a2609d.png'
        />
        <CardFeature
          title='Design Patterns in Accessibility'
          bgClr='#11284B'
          textClr='#ffffff'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_illo_5_f2797b4848.png'
        />
        <CardFeature
          title='Getting Started with Accessibility'
          bgClr='#99D6CC'
          textClr='#000000'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_illo_1_24c8c55168.png'
        />
        <CardFeature
          title='Getting Started with Accessibility'
          bgClr='#381FD1'
          textClr='#ffffff'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_illo_6_cb222493bf.png'
        />
        <CardFeature
          title='Your Summer Book List for Accessibility and Inclusivity'
          bgClr='#FEDB63'
          textClr='#000000'
          imgUrl='https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_illo_4_c911701878.png'
        />
      </ContentBox>
    </main>
  )
}

export default CollectionsPage