import React, {useEffect, useState} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

import {loadProducers} from '../../../services/loadDatas';
import Producer from './Producer';
export default function Producers({todo: Topo}) {
  const [producers, setProducers] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    const producers = loadProducers();

    setTitle(producers.titulo);
    setProducers(producers.lista);
  }, []);

  const HeadList = () => {
    return (
      <>
        <Topo />
        <Text style={styled.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={producers}
      renderItem={({item}) => <Producer {...item} />}
      ListHeaderComponent={HeadList}
      keyExtractor={({nome}) => nome}
    />
  );
}

const styled = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
