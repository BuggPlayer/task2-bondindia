import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import DetailsAction from '../redux/details/DetailsAction';

const Tab2 = props => {
  const dispatch = useDispatch();
  const signUpValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Enter a valid phone number',
      )
      .required('Phone number is required'),
    username: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
  });

  const submitHandler = values => {
    const data = {...props.route.params, ...values};
    dispatch(DetailsAction.getDetailsRequest(data));
    // console.log(data);
  };

  return (
    <View>
      <View>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            username: '',
            phoneNumber: '',
          }}
          onSubmit={submitHandler}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                name="username"
                placeholder="enter username "
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  width: '80%',
                }}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                // keyboardType="email-address"
              />
              {errors.username && touched.username && (
                <Text style={{fontSize: 14, color: 'red', textAlign: 'center'}}>
                  {errors.username}
                </Text>
              )}
              <TextInput
                name="phoneNumber"
                placeholder="enter the phoneNumber "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                keyboardType="numeric"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={{fontSize: 14, color: 'red', textAlign: 'center'}}>
                  {errors.phoneNumber}
                </Text>
              )}

              <View
                style={{
                  padding: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="previous"
                  onPress={() => props.navigation.goBack()}
                />
                <Button title="submit" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Tab2;
