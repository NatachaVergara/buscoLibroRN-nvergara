import React, { useReducer, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true,
            }
        default:
            return state
    }
};



const InputForm = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.isValid,
        tourched: false
    })

    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid)
        }
    }, [inputState, onInputChange])

    const textChangeHandler = text => {

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;

        if (props.required && text.trim().length === 0) isValid = false;

        if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;

        // if (props.min != null && +text < props.min) isValid = false;

        // if (props.max != null && +text > props.max) isValid = false;

        // if (props.minLength != null && text.length < props.minLength) isValid = false;

        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        })
    }

    const onBlurHandler = () => dispatch({ type: INPUT_BLUR })


    return (
        <View styles={styles.formControl}>
            {!inputState.isValid && inputState.touched ? (<View style={styles.errorContainer}>
                <Text style={styles.errorMsg}> {props.errorMsg}</Text>
            </View>) : <Text style={styles.label}> {props.label}  </Text>}
            <TextInput
                {...props}
                style={styles.input}
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={onBlurHandler}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize:20,
        fontFamily: 'light',
        marginVertical: 8,
        color: 'white',
        backgroundColor: "#000000c0",
        alignSelf: 'center',
        padding:10
    },
    input: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
        width:200,
        color: 'white',


    },
    errorContainer: {
        width: '100%',
    },
    errorMsg: {
        color: 'red',
        fontFamily: 'light',
        marginVertical: 8,
        fontSize:20,
        backgroundColor: "#000000c0",
    }
})


export default InputForm