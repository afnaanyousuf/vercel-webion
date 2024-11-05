import React from 'react'

const Company = () => {
    return (
        <div className='company'>
            <div className="container">
            <div className="company-wrapper">
                <h1>Our Placement Partners</h1>
                <div className="row company-image">
                   <div className="col-md-3 col-sm-12">
                    <img src='./img/airbnb.png' alt="airbnb" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./img/coty.png" alt="coty" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./img/lilly.png" alt="lilly" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./img/tailus.png" alt="tailus" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./logo/lifegroups.png" alt="lifegroups" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./logo/client-8.png"alt="grabyo" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./logo/myob.png" alt="myob" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./img/microsoft.png" alt="microsoft" width="200px"  height="100px" />
                   </div>
                </div>
                <button>and, more companies</button>
            </div>
            </div>
        </div>
    )
}

export default Company
