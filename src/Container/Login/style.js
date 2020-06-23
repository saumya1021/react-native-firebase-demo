import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  backImageWrapper: {
    height: '100%',
    width: '100%',
  },
  formWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 10,
    paddingTop: 30,
    marginHorizontal: 15,
    borderColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 0.5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    elevation: 5,
    zIndex: 0,
  },
  input: {
    height: 45,
    paddingHorizontal: 5,
    width: '90%',
    marginBottom: 20,
    borderBottomWidth:1,
    borderBottomColor:'#d6d6d6',
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: '#6821b3',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
  },
  bottomBar: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  registerHereTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    color: '#1b1b1d',
  },
  newMemberText: {
    fontSize: 16,
    paddingRight: 5,
    fontWeight: 'bold',
    color:'grey'
  },
  registerHereText: {
    fontSize: 16,
    paddingRight: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  inputImageWrapper: {
    position: 'relative',
  },
  inputImage: {
    position: 'absolute',
    left: '7%',
    top: 15,
    zIndex: 1,
  },
});
