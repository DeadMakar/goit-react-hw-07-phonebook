// import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { StyledForm, Error, Title } from './ContactEntryForm.styled';
import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactEntryForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(addContact({ name: values.name, phone: values.phone }));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Phone number must be in the format "000-00-00"'
      )
      .required('Number is required'),
  });

  const initialValues = {
    name: '',
    phone: '',
  };

  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/\D/g, '');

    if (phoneNumber.length <= 10) {
      return phoneNumber.replace(/(\d{3})(\d{0,3})(\d{0,4})/, '$1-$2-$3');
    } else {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  };
  // const isContactExists = (name, phone) => {
  //   return contacts.some(
  //     contact =>
  //       contact.name.toLowerCase() === name.toLowerCase() ||
  //       contact.phone === phone
  //   );
  // };

  const handlePhoneChange = (e, setFieldValue) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFieldValue('phone', formattedValue);
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   const { name, number } = values;

  //   if (isContactExists(name, number)) {
  //     alert('Contact with the same name or number already exists!');
  //     return;
  //   }

  //   dispatch({
  //     type: 'contacts/addContact',
  //     payload: { id: nanoid(), ...values },
  //   });
  //   resetForm();
  // };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <StyledForm>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <Error name="name" component="div" />
            </div>
            <div>
              <label htmlFor="phone">Number:</label>
              <Field
                type="text"
                id="phone"
                name="phone"
                onChange={e => handlePhoneChange(e, setFieldValue)}
                value={values.phone}
              />
              <Error name="phone" component="div" />
            </div>
            <button type="submit">Add contact</button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
