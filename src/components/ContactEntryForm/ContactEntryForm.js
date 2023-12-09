import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { StyledForm, Error, Title } from './ContactEntryForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactEntryForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Phone number must be in the format "000-000-0000"'
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

  const handlePhoneChange = (e, setFieldValue) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFieldValue('phone', formattedValue);
  };

  const handleAddContact = newContact => {
    const isNameRepeat = contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameRepeat) {
      alert(`${newContact.name} вже є в контактах.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleAddContact(values);
          actions.resetForm();
        }}
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
