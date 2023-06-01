import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { AuthForm } from '../../components/AuthForm';

function Login({ navigation }) {
    return (
      <>
        <AuthForm 
          authFormSubTitle='Faça o login e começe a usar!'
          submitFormButtonText='Entrar'
        />
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.link}>Não possui conta? Crie uma agora!</Text>
        </TouchableOpacity>
      </>
    );
}

export default Login;