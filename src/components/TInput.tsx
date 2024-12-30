import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {ImageKey, Images} from '../assets/Images';


interface TInputProps extends TextInputProps {
  control: any;
  name: string;
  rules: any;
  source: ImageKey;
}

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    backgroundColor:'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    borderRadius: 12,
    marginTop: 20,
    width: 330,
  },
  inputError: {
    borderColor: 'red',
  },
  input1: {
    alignSelf: 'center',
    color: 'black',
    width: 260,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  icon1: {
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom:10,
    alignSelf: 'flex-start',
    fontFamily:'Urbanist-Regular',
  },
  
});

type EyeLockType = {
  showPass: boolean;
  onSecurityChange: (flag: boolean) => void;
};
const EyeLock = ({showPass, onSecurityChange}: EyeLockType) => {
  return (
    <Pressable
      style={styles.icon1}
      onPress={() => {
        onSecurityChange(!showPass);
      }}>
      <Image  source={showPass ? Images.frame : Images.frame2} />
    </Pressable>
  );
};

export const TInput: React.FC<TInputProps> = ({
  control,
  name,
  rules,
  source,
  ...rest
}: TInputProps) => {
  const [showPass, setShowPass] = useState<boolean>(
    rest.secureTextEntry ?? false,
  );
  const handleOnSecurityChange = (flag: boolean) => {
    setShowPass(flag);
  };

  const showSecurityicon = rest.secureTextEntry ?? false;

  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <View>
            <View style={[styles.input, error && styles.inputError]}>
              <Image style={styles.icon} source={Images[source]} />
              <TextInput
                style={styles.input1}
                placeholderTextColor="black"
                value={value}
                onChangeText={onChange}
                {...rest}
                secureTextEntry={showPass}
              />
              {showSecurityicon && (
                <EyeLock
                  showPass={showPass}
                  onSecurityChange={handleOnSecurityChange}
                />
              )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};
