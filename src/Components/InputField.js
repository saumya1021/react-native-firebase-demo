import React from 'react';
import {View, TextInput, Image} from 'react-native';
import Label from './Label';
import {styles} from './style';

type Props = {
  inputStyle: Object,
  inputStyle: Object,
  label: string,
  name: string,
};

const INPUT_LABEL = (props: Props) => {
  const {
    placeholderTextColor,
    wrapper,
    wrapperTxt,
    styleLabel = {},
    label,
    imageIcon,
    imageIconStyle,
    placeHolderText,
    inputStyle,
    onInputChange,
    name,
    keyboardType = 'default',
  } = props;
  return (
    <View style={wrapper}>
      {label ? (
        <Label
          text={label}
          styleLabel={{...styles.inputLabelStyle, ...styleLabel}}
        />
      ) : null}
      <View style={wrapperTxt}>
        <TextInput
          style={inputStyle}
          onChangeText={text => onInputChange(text, name)}
          keyboardType={keyboardType}
          placeholder={placeHolderText}
          autoCapitalize="none"
          placeholderTextColor={placeholderTextColor}
        />
        <Image source={imageIcon} style={imageIconStyle} />
      </View>
    </View>
  );
};
export default INPUT_LABEL;
