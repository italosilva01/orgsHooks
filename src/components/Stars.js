import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Star from './Star';
export default function Stars({qutStars, editable = false}) {
  const numberMaxStars = 5;
  const [quantityStars, setQuantityStars] = useState(qutStars);

  const RenderStars = () => {
    const stars = [];
    for (let index = 0; index < numberMaxStars; index++) {
      stars.push(
        <Star
          key={index}
          isFilled={index > quantityStars}
          editable={editable}
          onPress={() => setQuantityStars(index)}
        />,
      );
    }
    return stars;
  };
  return <View style={styled.containerStars}>{RenderStars()}</View>;
}

const styled = StyleSheet.create({
  containerStars: {
    flexDirection: 'row',
  },
});
