// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image, Text, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/95450101?v=4';
const urlToMyGithub = 'https://github.com/TaciAlves';


export default function App() {

  const handlePressGoTogithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      await Linking.openURL(urlToMyGithub);
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image

          style={styles.avatar}
          source={{ uri: imageProfileGithub }}>

        </Image>
        <Text
          accessibilityLabel="Nome: Taciara Alves"
          style={[styles.defaultText, styles.nome]}>Taciara Alves
        </Text>
        <Text accessibilityLabel="Nickname: TaciAlves"
          style={[styles.defaultText, styles.nickname]}>TaciAlves
        </Text>
        <Text accessibilityLabel="Descrição: 26 anos, Dev. Front-end em formação."
          style={[styles.defaultText, styles.descricao]}>26 anos, Dev. Front-end em formação.
        </Text>
        <Pressable onPress={handlePressGoTogithub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>

      <StatusBar backgroundColor={'grey'} barStyle="light-content" />
    </SafeAreaView> // protege o componente de ir pra uma área que não tem acesso
  );
}


const styles = StyleSheet.create({
  container: {
    // column
    flex: 1, // expandir para a tela inteira
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,

  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  nome: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 20,
    color: colorDarkFontGithub,

  },
  descricao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  }

});
