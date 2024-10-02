'use client'
// lib - actions
import { postNewProductAction } from "@/lib/actions"
// utils
import { resetForm } from "@/utils/resetForm"


const RegisterProduct = () => {
    return (
        <div className="register-product-page">
            <h1>Register Product</h1>

            <section className="register-product-feature">
                <form action={(formData) => {
                    postNewProductAction(formData)
                    resetForm()
                }} className="add-product-form">
                    <label htmlFor="productTitle">
                        Title:
                    </label>
                    <input type="text" name="productTitle" required />
                    <label htmlFor="productDescription">
                        Description:
                    </label>
                    <input type="text" name="productDescription" required />
                    <label htmlFor="productTitle">
                        Price:
                    </label>
                    <input type="number" name="productPrice" required />

                    <div className="btn-container">
                        <button type="submit" className="submit-btn">
                            Create Product
                        </button>
                        <button type="button" className="cancel-btn" onClick={() => resetForm()}>
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default RegisterProduct