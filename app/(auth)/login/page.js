'use client'
// components
import PageHeader from '@/components/PageHeader'
import FormInput from '@/components/FormInput'
import FormBtnContainer from '@/components/FormBtnContainer'

const Login = () => {
    return (
        <div className='login-page'>
            <PageHeader text='Login'/>

            <section className="login-feature">
                <form className="login-form">
                    <FormInput name='username' title='Username' type='text'/>

                    <FormInput name='password' title='Password' type='password'/>

                    <FormBtnContainer btnOne='Login' btnTwo='Cancel'/>
                </form>
            </section>

        </div>
    )
}

export default Login