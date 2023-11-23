import { Text,View, TextInput, StyleSheet, Button, ToastAndroid } from 'react-native';
import { useState } from 'react';
import axiosConfig from '../../helpers/axiosConfig';
import axios from 'axios';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        axios
        .post('http://http://172.18.192.1:8000/api/login', {
          email,
          password,
        })
        .then(response => {
         
  console.log(response,'response');
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                console.log('Axios error: ', error.message);
                if (error.response) {
                    // La requête a été faite et le serveur a répondu avec un status code
                    // qui ne se situe pas dans la plage de 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // La requête a été faite mais aucune réponse n'a été reçue
                    console.log(error.request);
                }
            } else {
                // Quelque chose s'est produit lors de la mise en place de la requête
                // qui a déclenché une erreur
                console.log('Error', error.message);
            }
       
        });
    };
    
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>Se connecter</Text>
            <TextInput 
                style={styles.input} 
                keyboardType='email-address'
                onChangeText={setEmail}
                placeholder='addresse mail'/>
            <TextInput 
                style={styles.input} 
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={setPassword}
                placeholder='mot de passe'/>
                <Button 
                    title='Se connecter' 
                    onPress={onLogin}/>
                <Text>S'inscrire</Text>
                <Button color="gray" 
                    title="S'inscire" 
                    onPress={()=>navigation.navigate('Register')}/>
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