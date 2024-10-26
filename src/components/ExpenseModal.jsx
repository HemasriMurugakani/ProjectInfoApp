import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Downarrowicon from '../assets/icons/DownArrow';
import CalendarIcon from '../assets/icons/Calender';
import ShareIcon from '../assets/icons/Upload';
import DateTimePicker from '@react-native-community/datetimepicker';
import useExpenseStore from '../zustand/expenseStore';
import styles from './styles/ModalStyles';
import {pick} from 'react-native-document-picker';

const ExpenseBottomSheet = ({visible, onClose, onSubmit}) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [expenseAmount, setExpenseAmount] = useState('');
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('Education');
  const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] =
    useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = async () => {
    console.log('called');
    try {
      const [result] = await pick();
      setUploadedFile(result);
      console.log(result, 'res');
    } catch (e) {
      console.log(e, 'e');
    }
    // try {
    //   const result = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   console.log(result, 'result')
    //   // set({ uploadedFile: result[0] });
    // } catch (error) {
    //   if (DocumentPicker.isCancel(error)) {
    //     console.log('File selection was canceled');
    //   } else {
    //     console.error('File selection error:', error);
    //   }
    // }
  };
  console.log(uploadedFile, 'uploadedFile');
  const handleSubmit = () => {
    if (!expenseName || !expenseAmount) {
      alert('Please fill in all fields');
      return;
    }

    const expense = {
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      currency,
      category,
      file: uploadedFile,
    };
    onSubmit(expense);
    resetForm();
  };

  const resetForm = () => {
    setExpenseName('');
    setExpenseDate(new Date());
    setExpenseAmount('');
    setCurrency('AED');
    setCategory('Education');
    setUploadedFile(null); // Clear the uploaded file state
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={styles.modalContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.modalTitle}>Create Expense</Text>

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Expense Name</Text>
            <TextInput
              placeholder="Enter expense name"
              value={expenseName}
              onChangeText={setExpenseName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.row}>
              <TextInput
                placeholder="Enter date"
                value={expenseDate.toLocaleDateString()}
                style={[styles.input, {flex: 1}]}
                onFocus={() => setShowDatePicker(true)}
              />
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <CalendarIcon />
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={expenseDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || expenseDate;
                  setShowDatePicker(false);
                  setExpenseDate(currentDate);
                }}
              />
            )}
          </View>

          <View style={styles.amountCurrency}>
            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Currency</Text>
              <TouchableOpacity
                onPress={() =>
                  setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible)
                }
                style={styles.row}>
                <TextInput
                  placeholder="Currency"
                  value={currency}
                  editable={false}
                  style={[styles.input, {flex: 1}]}
                />
                <Downarrowicon />
              </TouchableOpacity>
              {isCurrencyDropdownVisible && (
                <View style={styles.dropdown}>
                  <FlatList
                    data={['AED', 'INR', 'EUR']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrency(item);
                          setIsCurrencyDropdownVisible(false);
                        }}>
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>

            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                placeholder="Enter Amount"
                value={expenseAmount}
                onChangeText={setExpenseAmount}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          {/* Upload File Section */}
          <View style={styles.uploadContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleFileUpload}>
              <ShareIcon />
              <Text style={styles.uploadButtonText}>
                {uploadedFile ? uploadedFile.name : 'Upload File'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}>
              <Text style={styles.buttonText1}>Save</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default ExpenseBottomSheet;
