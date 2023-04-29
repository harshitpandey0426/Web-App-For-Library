import React from 'react'
import BookModel from '../../models/BookModel'
type CheckoutAndReviewBoxProps = {
    book : BookModel | undefined,
    mobile: boolean

}

function CheckoutAndReviewBox(props:CheckoutAndReviewBoxProps) {

    // function buttonRender() {
    //     if (props.isAuthenticated) {
    //         if (!props.isCheckedOut && props.currentLoansCount < 5) {
    //             return (<button onClick={() => props.checkoutBook()} className='btn btn-success btn-lg'>Checkout</button>)
    //         } else if (props.isCheckedOut) {
    //             return (<p><b>Book checked out. Enjoy!</b></p>)
    //         } else if (!props.isCheckedOut) {
    //             return (<p className='text-danger'>Too many books checked out.</p>)
    //         }
    //     }
    //     return (<Link to={'/login'} className='btn btn-success btn-lg'>Sign in</Link>)
    // }

    // function reviewRender() {
    //     if (props.isAuthenticated && !props.isReviewLeft) {
    //         return(
    //         <p>
    //             <LeaveAReview submitReview={props.submitReview}/>
    //         </p>
    //         )
    //     } else if (props.isAuthenticated && props.isReviewLeft) {
    //         return(
    //         <p>
    //             <b>Thank you for your review!</b>
    //         </p>
    //         )
    //     }

    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b> 0/5 </b>
                        books checked out
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className='text-success'>
                            Available
                        </h4>
                        :
                        <h4 className='text-danger'>
                            Wait List
                        </h4>
                    }
                    <div className='row'>
                        <p className='col-6 text-start'>
                            <b>{props.book?.copies} </b>
                            copies
                        </p>
                        <p className='col-6 text-end'>
                            <b>{props.book?.copiesAvailable} </b>
                            available
                        </p>
                    </div>
                </div>
                {/* {buttonRender()} */}
                <hr />
                <p className='mt-3'>
                    This number can change until placing order has been complete.
                </p>
                {/* {reviewRender()} */}
            </div>
        </div>
    );
}

export default CheckoutAndReviewBox