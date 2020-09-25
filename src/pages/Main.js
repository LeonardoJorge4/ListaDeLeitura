import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = ({ navigation }) => {
    const data = [
        {
            id: "1",
            title: "Código Limpo",
            anotations: "Livro Muito Bom!",
            read: false,
            photo: null,
        },
        {
            id: "2",
            title: "C completo e Total",
            anotations: "Livro Muito Bom!",
            read: false,
            photo: null,
        },
        {
            id: "3",
            title: "A biblia do PHP",
            anotations: "Livro Muito Bom!",
            read: false,
            photo: null,
        },    

    ]

    return (
        <View style={styles.container}>

            <View style={styles.toolbox}>
                <Text style={styles.title}>Lista De Leitura...</Text>

                <TouchableOpacity style={styles.toolboxButton}
                onPress= {() => {
                    navigation.navigate("Book");
                }}
                >
                    <Icon name="add" size={14} color="#ffffff"></Icon>
                </TouchableOpacity>
            </View>

             <FlatList //FlatList rendeniza texto para cada elemento do meu array de objetos
             data={data} 
             keyExtractor={item => item.id}
             renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
             )}
             />   

        </View>
    )
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        padding: 5 //descolar da borda

    },

    toolbox: {
        marginBottom: 5,
        flexDirection: "row", // deixar na horizontal
       
    },
    
    title: {
        flex: 1,
        fontSize: 16,
        color: "#3498db",
    },

    toolboxButton: {
        backgroundColor: "#3498db",
        width: 22,
        height: 22,
        borderRadius: 30,
        alignItems: "center", // alinha o item no centro
        justifyContent: "center" // alinha o item no centro do circulo
    },

    itemButton: {

    },

    itemText: {
        fontSize: 16
    },

  
})

export default Main;