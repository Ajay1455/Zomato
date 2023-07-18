import React from 'react'
j

function AddRestaurant() {

    const handleSubmit=()=>{
        console.log("Form is submited");
    }

  return (
    <div>
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Name </label>
            <input type="text" name='name' />

            <label htmlFor="city">City </label>
            <input type="text" name="city" />

            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddRestaurant