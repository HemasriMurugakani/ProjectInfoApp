import { StyleSheet } from 'react-native';

const ModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: 'black',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 10,
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    width: '100%',
  },
  inputContainer1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    width: '48%',
  },
  input: {
    paddingLeft: 10,
    height: 50,
    borderWidth: 0,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  amountCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
  },
  dropdownItemText: {
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingBottom: 16,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  cancelButton: {
    borderColor: '#0C356A',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#0C356A',
    height: 48,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  uploadContainer: {
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  uploadButtonText: {
    marginLeft: 8,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});

export default ModalStyles;
