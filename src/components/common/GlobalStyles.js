import {StyleSheet} from 'react-native';
const globalStyles = StyleSheet.create({
  textCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  inputTextContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderBottomWidth: 1,
    // marginVertical: 10,
    borderBottomColor: '#000000',
  },
  errorTextContainer: {
    color: 'red',
    padding: 5,
  },
});

export default globalStyles;
