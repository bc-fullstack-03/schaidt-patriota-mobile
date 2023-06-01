import { Text, TouchableOpacity } from 'react-native';
import { AuthForm } from '../../components/AuthForm';
import { styles } from './styles';

function SignUp({ navigation }) {
    return (
      <>
        <AuthForm 
          authFormSubTitle='Faça o cadastro e começe a usar!'
          submitFormButtonText='Cadastrar'
        />
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.link}>Já possui conta? Entre agora!</Text>
        </TouchableOpacity>
      </>
    );
}

export default SignUp;