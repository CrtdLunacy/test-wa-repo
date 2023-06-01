'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
    const router = useRouter();
    return (
        <>
            <h1>Напишите телефон в формате &quot;79990010203&quot;</h1>
            <Formik
                initialValues={{ phone: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    if(!values.phone) {
                        alert('Не указаны данные');
                        setSubmitting(false);
                    } else {
                        setTimeout(() => {
                            localStorage.setItem('phone', values.phone)
                            alert('Данные добавлены');
                            setSubmitting(false);
                            router.push('/chat');
                        }, 400);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="Id" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default AuthForm;
