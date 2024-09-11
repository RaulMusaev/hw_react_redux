import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../redux/actions';

const validationSchema = Yup.object({
  name: Yup.string().required('Имя обязательно'),
  email: Yup.string().email('Неверный формат email').required('Email обязателен'),
  age: Yup.number().required('Возраст обязателен').positive('Возраст должен быть положительным').integer('Возраст должен быть целым числом'),
});

const EditUserForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </label>
      <label>
        Возраст:
        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
      </label>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default EditUserForm;