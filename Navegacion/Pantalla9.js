import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pantalla9 = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navItem}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Pantalla7')}>
                <Text style={styles.navItem}>Cursos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Pantalla7')}>
                <Text style={styles.navItem}>Matrícula</Text>
                </TouchableOpacity>           


                
            </View>

            <View style={styles.subHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Pantalla10')}>
                    <Text style={styles.subNavItem}>Mis cursos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ConsumiApi')}>

                <Text style={styles.subNavItem}>Cursos virtuales</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.courseContainer}>
                <View style={styles.course}>
                    <View style={styles.course1}>
                        <Text style={styles.courseTitle}>Horario de consulta en línea</Text>
                    </View>
                    <Image source={require('../assets/image14.png')} style={styles.courseImage} />
                </View>
                <View style={styles.course}>
                    <View style={styles.course1}>
                        <Text style={styles.courseTitle}>Retroalimentación personalizada</Text>
                    </View>
                    <Image source={require('../assets/image15.png')} style={styles.courseImage} />
                </View>
                <View style={styles.course}>
                    <View style={styles.course1}>
                        <Text style={styles.courseTitle1}>Asistencia técnica</Text>
                    </View>
                    <Image source={require('../assets/image16.png')} style={styles.courseImage} />
                </View>

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 0,
        marginTop: 30,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2C6C6C',
        marginTop: 30,
        marginBottom: 20,
        width: 393,
        height: 66,
        alignItems: 'center',
    },
    navItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#3E838C',
        marginBottom: 10,
        width: 393,
        height: 43,
        alignItems: 'center',
    },
    subNavItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    courseContainer: {
        padding: 10,
        marginTop: 20
    },
    course: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#3E838C',
        borderWidth: 2,
        width: 361,
        height: 195,
    },
    course1: {
        backgroundColor: '#195E63',
        justifyContent: 'center',
        alignItems: 'center',
        width: 186,
        height: 195,
        padding: 30,

    },
    courseImage: {
        width: 149,
        height: 150,
        marginLeft: 20,
    },
    courseTitle: {
        fontSize: 17,
        color: 'white',
        flex: 1,
        textAlign: 'center',
        marginTop: 50
    },
    courseTitle1: {
        fontSize: 18,
        color: 'white',
        flex: 1,
        textAlign: 'center',
        marginTop: 50
    },
});

export default Pantalla9;