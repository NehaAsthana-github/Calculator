import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './MainScreenStyles'
const MainScreen = () => {

    const [value, setValue] = useState('0')
    const [bracketopen, setBracketopen] = useState(false)

    const handlePress = (val) => {
        // console.log('pressed', val)
       
        if (val == 'AC') {
            setValue('0')
        }
        else if (val == '=') {

            try {
                if ((value.match(/\(/g) || [].length == (value.match(/\)/g) || []).length)) {
                   
                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' ||
                        value.slice(-1) == '/' ||  value.slice(-1) == '.') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else if ( value.slice(-1) ==  '%') {
                        try {
                         
                          setValue(`${eval(value.replace(/(\d+)%/g, '($1/100)'))}`);
                        } catch (e) {
                          setValue('Format Error');
                        }
                      }
                    
                    
                    else {
                        setValue(`${eval(value.replace('()', '(0)'))}`)
                    }

                }
            }
            catch (e) {
                setValue('Format Error')
            }
            


        }
        else if (val == 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketopen(true)
            }
            else if (
                value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' ||
                value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'
            ) {
                setValue(value + '(')
                setBracketopen(true)
            }
            else {
                if (bracketopen == true) {
                    setValue(value + ')')
                    setBracketopen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketopen(true)
                }

            }

        }
        else if (value == 'Format Error') {
            setValue(val)
        }

        else {
            if (value == '0') {
                setValue(val)
                if (val == '+' || val == '-' || val == '*' || val == '/' || val == '%' || val == '.') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }

            }

            else if (isNaN(val)) {
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' ||
                    value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }

            else {
                setValue(value + val)
            }

        }
        

    }
    return (
        <>
            <View style={styles.main_screen}>
                <ScrollView ref={ref => { this.scrollView = ref }} style={styles.main_screen_display} onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
                    <Text style={styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                </ScrollView>
                <View style={styles.main_screen_keypad}>
                    <View style={styles.main_screen_keypad_row}>
                        <Pressable onPress={() => handlePress('AC')}>
                            <View style={styles.btn1_outer}>
                                <Text style={styles.bg1_button}>AC</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('()')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>()</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('%')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>%</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('/')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>/</Text>

                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.main_screen_keypad_row}>
                        <Pressable onPress={() => handlePress('7')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>7</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('8')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>8</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('9')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>9</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('*')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>*</Text>

                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.main_screen_keypad_row}>
                        <Pressable onPress={() => handlePress('4')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>4</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('5')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>5</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('6')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>6</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('-')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>-</Text>

                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.main_screen_keypad_row}>
                        <Pressable onPress={() => handlePress('1')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>1</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('2')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>2</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('3')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>3</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('+')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>+</Text>

                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.main_screen_keypad_row}>
                        <Pressable onPress={() => handlePress('0')}>
                            <View style={styles.btn_outer}>
                                <Text style={styles.bg_button}>0</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('.')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>.</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('back')}>
                            <View style={styles.btn1_outer}>
                                <Text style={styles.bg1_button}>&lt;</Text>

                            </View>
                        </Pressable>
                        <Pressable onPress={() => handlePress('=')}>
                            <View style={styles.btn2_outer}>
                                <Text style={styles.bg2_button}>=</Text>

                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}

export default MainScreen