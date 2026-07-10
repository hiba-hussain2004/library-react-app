import React from 'react'
import Navi from './Navi'

const DeleteBook = () => {
  return (
    <div>
        <Navi/>
    <center><h1>Delete Book</h1></center>
        
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                            <label htmlFor="" className="form-label">Code/ISBN</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Delete Book</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>



    </div>
  )
}

export default DeleteBook