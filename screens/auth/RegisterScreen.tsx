import { Text,View, TextInput, StyleSheet, Button } from 'react-native';

export default function RegisterScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>S'inscrire'</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Nom'
                />
            <TextInput 
                style={styles.input} 
                keyboardType='email-address'
                placeholder='addresse mail'
                />
            <TextInput 
                style={styles.input} 
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                placeholder='mot de passe'
                />
                <Button 
                    title='Enregistrer' 
                    onPress={()=>navigation.navigate('ListTheme')}/>
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