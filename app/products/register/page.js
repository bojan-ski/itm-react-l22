'use client'
// lib - actions
import { postNewProductAction } from "@/lib/actions"


const RegisterProduct = () => {
    const handleClearForm = () =>{
        console.log('handleClearForm');
        
    }

    return (
        <div className="register-product-page">
            <h1>Register Product</h1>

            <section className="register-product-feature">
                <form action={postNewProductAction}>
                    <input type="text" name="productTitle" required/>
                    <input type="text" name="productDescription" required/>
                    <input type="number" name="productPrice" required/>

                    <div className="btn-container">
                        <button type="submit" className="submit-btn">
                            Create Product
                        </button>
                        <button type="button" className="cancel-btn" onClick={handleClearForm}>
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default RegisterProduct