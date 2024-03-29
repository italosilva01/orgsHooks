import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png';

export default function Star({editable = false, onPress, isFilled = false}) {
  const getImage = () => {
    if (isFilled) {
      return starGray;
    }
    return star;
  };

  const styled = styledFunction(editable);

  return (
    //o component TouchableOpacity faz o componente ser clicavel
    // e ter o feito de ficar "palido" ao clica-lo
    <TouchableOpacity onPress={onPress} disabled={!editable}>
      <Image source={getImage()} style={styled.star} />
    </TouchableOpacity>
  );
}
const styledFunction = big =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });
