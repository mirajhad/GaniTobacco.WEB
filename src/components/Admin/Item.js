import React from 'react'
import ReusableForm from '../ReusableForm'

const handleSubmit = (values) => {
  console.log("val===",values)
}
const Item = () => {
  return (
    <>
     <ReusableForm  initialValues={{ 'Sale Price': '', 'Purchase Price': '', 'In Stock':'', 'Stock Value':'','Item Code':'' }}
        onSubmit={handleSubmit} submitText={'Add Item'}
        />
    </>
  )
}

export default Item
