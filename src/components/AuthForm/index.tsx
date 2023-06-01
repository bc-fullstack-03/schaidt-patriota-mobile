import React, { ReactNode } from "react";
import { Image, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { Envelope, Lock } from 'phosphor-react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/TextInput';
import { THEME } from '../../theme';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';

interface AuthFormProps {
    authFormSubTitle: string;
    submitFormButtonText: string;
}

export function AuthForm(props: AuthFormProps) {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? "padding" : "position"}
            style={styles.container}
            contentContainerStyle={styles.containerPosition}
        >
            <Image source={logo} resizeMethod="scale" />
            <Heading title="Sysmap Parrot" subtitle={props.authFormSubTitle} />
            <Input.Root>
            <Input.Icon>
                <Envelope color={THEME.COLORS.INPUT}/>
                <Input.Input placeholder="Digite seu e-mail" autoCapitalize="none" />
            </Input.Icon>
            </Input.Root>
            <Spacer />
            <Input.Root>
            <Input.Icon>
                <Lock color={THEME.COLORS.INPUT}/>
                <Input.Input placeholder="*********" autoCapitalize="none" autoCorrect={false} secureTextEntry />
            </Input.Icon>
            </Input.Root>
            <Spacer />
            <Button title={props.submitFormButtonText} onPress={() => {}}/>
        </KeyboardAvoidingView>
    );
}