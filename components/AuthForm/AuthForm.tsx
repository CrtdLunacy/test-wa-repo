'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './AuthForm.module.scss';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
    const router = useRouter();
    return (


        <>
            <h1>Any place in your app!</h1>
            <Formik
                initialValues={{ Id: '', Token: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    if(!values.Id || !values.Token) {
                        alert('Не указаны данные');
                        setSubmitting(false);
                    } else {
                        setTimeout(() => {
                            localStorage.setItem('Id', values.Id)
                            localStorage.setItem('Token', values.Token)
                            alert('Данные добавлены');
                            setSubmitting(false);
                            router.push('/phone');
                        }, 400);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field type="text" name="Id" />
                        <ErrorMessage name="Id" component="div" />
                        <Field type="text" name="Token" />
                        <ErrorMessage name="Token" component="div" />
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
