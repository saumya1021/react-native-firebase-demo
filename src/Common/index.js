import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isIosDevice = Platform.OS === 'ios';

module.exports = {
	// Device height and width
	deviceHeight,
	deviceWidth,
	isIosDevice,
};
