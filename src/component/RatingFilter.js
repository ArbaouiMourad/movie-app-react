import React from 'react'
import Rating from './Rating'
const RatingFilter = ({onChange,count}) => {
    return (
        <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      {/* <span>★★★★★</span> */}
      <Rating 
      count={count}
      onChangeRating={(newRating) =>{
            onChange(newRating)
        }} />
    </div>
    )
}

export default RatingFilter
