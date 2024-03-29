import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Stars from '../../../components/Stars';
export default function Producer({nome, imagem, distancia, estrelas}) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={style.card}
      onPress={() => {
        setSelected(oldState => !oldState);
      }}>
      <Image source={imagem} style={style.image} accessibilityLabel={nome} />
      <View style={style.information}>
        <View>
          <Text>{nome}</Text>
          <Stars qutStars={estrelas} editable={selected} big={selected} />
        </View>
        <Text style={style.distance}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //Android
    elevation: 4,

    //Ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginLeft: 8,
    marginRight: 16,
  },
  textName: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
