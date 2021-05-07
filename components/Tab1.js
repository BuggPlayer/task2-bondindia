import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

//validation
import {Formik} from 'formik';
import * as yup from 'yup';

// SignUp.js
const signUpValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .required('First  name is required'),
  lastname: yup
    .string()
    .required('Last name is required'),
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const Tab1 = props => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          flex: 1,
          padding: 10,
          elevation: 10,
          backgroundColor: '#e6e6e6',
        }}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            firstname: '',
            lastname: '',
            username: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            console.log('values', values);
            props.navigation.navigate('tab2', {values});
          }}>
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
                name="firstname"
                placeholder="enter the fistname "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('firstname')}
                // onChangeText={()=> console.log("fewfgweg" , firstname)}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.firstname}
                </Text>
              )}
              <TextInput
                name="Last name"
                placeholder="enter the Last name "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                // keyboardType="email-address"
              />
              {errors.lastname && touched.lastname && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.lastname}
                </Text>
              )}
              <TextInput
                name="username"
                placeholder="enter username "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                // keyboardType="email-address"
              />
              {errors.username && touched.username && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.username}
                </Text>
              )}

              <TextInput
                name="password"
                placeholder="enter the password "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                // secureTextEntry
                // keyboardType="email-address"
              />
              {errors.password && touched.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}

              <TextInput
                name="confirmPassword"
                placeholder="enter the confirmPassword "
                style={{height: 40, margin: 12, borderWidth: 1, width: '80%'}}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                // keyboardType="email-address"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.confirmPassword}
                </Text>
              )}

              <Button
                onPress={handleSubmit}
                title="Next"
                // disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Tab1;
