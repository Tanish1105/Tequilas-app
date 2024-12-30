import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TInput} from '../../components';
export const Changepass: React.FC = () => {
  type FormData = {
    password: string;
    confirmPassword: string;
  };

  const {control, getValues} = useForm<FormData>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.titel}>Change Password</Text>
        <Text style={styles.subtitel}>Set new password for your account</Text>
      </View>
      <View style={styles.input}>
        <TInput
          control={control}
          placeholder="Password"
          name={'Password'}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          source={'lock'}
        />

        <TInput
          control={control}
          placeholder="Confirm Password"
          name={'Confirm Password'}
          secureTextEntry
          rules={{
            required: 'Please confirm your password',
            validate: value =>
              value === getValues('Password') || 'Passwords do not match',
          }}
          source={'lock'}
        />
      </View>
      <Pressable>
        <View style={styles.btn} >
            <Text style={styles.btninput}>Update Password</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    height: 150,
    // width:400,
    // backgroundColor: 'red',
    marginTop: 80,
    // marginLeft:15,
  },
  titel: {
    fontSize: 40,
    fontFamily: 'Urbanist-Bold',
    alignSelf: 'center',
    marginLeft: 1,
  },
  subtitel: {
    fontSize: 19,
    marginLeft: 25,
  },
  input: {
    marginLeft: 15,
  },
  btn:{
    backgroundColor: 'rgba(245, 102, 0, 1)',
    height: 58,
    width: 320,
    marginTop: 40,
    borderRadius: 16,
  },  btninput:{
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: 700,
    marginTop: 10,
    color: 'white',
    fontFamily:'Urbanist-Bold',
  },
});
