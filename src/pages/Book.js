import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Book = ({navigation}) => {

    return (

        //Underline dos ícones se ajusta com traço -
        <View style={styles.container}>

        <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>

        <TextInput 
        style={styles.input}
         placeholder="Título"   
        />

        <TextInput 
        style={styles.input}    
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        />

        <TouchableOpacity style={styles.cameraButton}>
            <Icon name="photo-camera" size={18} color="#fff"></Icon> 
        </TouchableOpacity>


        <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}
        onPress={() => {
            navigation.goBack();
        }}
        >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>


        </View>


    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },

    pageTitle: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
    },

    input: {
        fontSize: 16,
        borderBottomColor: "#f39c12",
        borderBottomWidth: 1,
        marginBottom: 10,
    },

    cameraButton: {
        backgroundColor: "#f39c12",
        width: 32,
        height: 32,
        borderRadius: 30,
        alignItems: "center", 
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 20
    },

    saveButton: {
        backgroundColor: "#f39c12",
        alignSelf: "center",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20
    },

    saveButtonText: {
        color: "#fff",
        fontSize: 16,
    },

    cancelButton: {
        alignSelf: "center",
    },

    cancelButtonText: {
        color: "#95a5a6"
    }

})

export default Book;