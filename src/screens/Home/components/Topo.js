import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';
import {loadHeader} from '../../../services/loadDatas';
export default function Topo() {
  const [header, setHeader] = useState({welcome: '', capiton: ''});
  const updateHeaderInfos = () => {
    return loadHeader();
  };
  useEffect(() => {
    setHeader(updateHeaderInfos);
  }, []);

  return (
    <View style={style.header}>
      <Image source={logo} style={style.imagem} />
      <Text style={style.textWelcome}>{header.welcome}</Text>
      <Text style={style.capiton}>{header.capiton}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  textWelcome: {
    marginTop: 4,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  capiton: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});
