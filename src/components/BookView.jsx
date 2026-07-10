import React, { useState } from 'react'
import Navi from './Navi'

const BookView = () => {
    const [data,changeData]=useState(

        [
            {"avathar":"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg","title":"The Alchemist","author":"Paulo Coelho","price":"₹399"},
            {"avathar":"https://m.media-amazon.com/images/I/81wgcld4wxL.jpg","title":"Atomic Habits","author":"James Clear","price":"₹599"},
            {"avathar":"https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg","title":"Rich Dad Poor Dad","author":"Robert T. Kiyosaki","price":"₹799"},
            {"avathar":"https://m.media-amazon.com/images/I/91asIC1fRwL.jpg","title":"Wings of Fire","author":"A.P.J. Abdul Kalam","price":"₹499"},
            {"avathar":"https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg","title":"J.K. Rowling","author":"","price":"₹699"},
            {"avathar":"https://m.media-amazon.com/images/I/71tbalAHYCL.jpg","title":"Ikigai","author":"Héctor García","price":"₹399"}
        ]


    )
  return (
    <div>
        <center><h1>View Book</h1></center>
        <Navi/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {

                            data.map(
                                (value,index)=>{
                                    return(
                                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            <div class="card" >
                        <div class="card-body">
                            <img src={value.avathar} class="card-img-top" alt="Python Crash Course" height="400"/>
                            <h5 class="card-title">{value.title}</h5>
                            <p class="card-text"><strong>Author:</strong> {value.author}</p>
                            <p class="card-text"><strong>{value.price}</strong></p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>



                        </div>
                                    )
                                }


                            )




                        }
                        
                    </div>



                </div>
            </div>
        </div>


    </div>
  )
}

export default BookView