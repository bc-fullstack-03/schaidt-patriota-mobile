import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { Envelope, Lock } from 'phosphor-react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/TextInput';
import { THEME } from '../../theme';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';
import { Auth } from "../../Model/Auth";

interface AuthFormProps {
    authFormSubTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (auth: Auth) => void;
}

export function AuthForm(props: AuthFormProps) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? "padding" : "position"}
            style={styles.container}
            contentContainerStyle={styles.containerPosition}
        >
            <Image source={logo} resizeMethod="scale" style={styles.logo} />
            <Heading title="Sysmap Parrot" subtitle={props.authFormSubTitle} />
            <Input.Root>
            <Input.Icon>
                <Envelope color={THEME.COLORS.INPUT}/>
                <Input.Input value={user} onChangeText={setUser} placeholder="Digite seu e-mail" autoCorrect={false} autoCapitalize="none" />
            </Input.Icon>
            </Input.Root>
            <Spacer />
            <Input.Root>
            <Input.Icon>
                <Lock color={THEME.COLORS.INPUT}/>
                <Input.Input value={password} onChangeText={setPassword} placeholder="*********" autoCapitalize="none" autoCorrect={false} secureTextEntry />
            </Input.Icon>
            </Input.Root>
            <Spacer />
            <Button title={props.submitFormButtonText} onPress={() => {
                props.submitFormButtonAction({ user, password })
            }}/>
        </KeyboardAvoidingView>
    );
}