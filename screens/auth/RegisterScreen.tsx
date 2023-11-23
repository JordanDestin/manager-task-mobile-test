import { Text,View, TextInput, StyleSheet, Button, ToastAndroid } from 'react-native';
import { useState } from 'react';
import axiosConfig from '../../helpers/axiosConfig';

export default function RegisterScreen({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

    const onRegister = async (): Promise<void> => {
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
    
        try {
            console.log('try');
            const response = await axiosConfig.post("/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,

            });
            console.log(response.data);
            ToastAndroid.show('Inscription Réussie', ToastAndroid.SHORT);
        } catch (error) {
           
        }
    };
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>S'inscrire'</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setName}
                placeholder='Nom'
                />
            <TextInput 
                style={styles.input} 
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholder='addresse mail'
                />
            <TextInput 
                style={styles.input} 
                onChangeText={setPassword}
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                placeholder='mot de passe'
                />
            <TextInput 
                style={styles.input} 
                onChangeText={setPassword_confirmation}
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                placeholder='Confirmation mot de passe'
                />
                <Button 
                    title='Enregistrer' 
                    onPress={onRegister}/>
                <Text>Se connecter</Text>
                <Button color="gray" 
                    title="Se connecter" 
                    onPress={()=>navigation.navigate('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20
    },
    text:{
        fontSize:18,
        padding:12

    },
    title:{
        fontSize: 24,
        fontWeight: '600',
        color: '#444',
        alignSelf: 'center',
        paddingBottom: 24,
    }
})