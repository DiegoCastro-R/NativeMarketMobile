import React, {useState,useEffect} from 'react';
import { Text, Image,View,StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { FlatGrid } from 'react-native-super-grid';
interface RouteParams {
  categoryId: string;
  categoryImage: string;
}

interface IGrid {
  ProductName: string;
  Price: string;
  ProductImage: string;

}

import {Container,Header, HeaderTitle} from './styles';

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 220,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    marginTop: 5,
    color: '#fff',
  },
});


const CategoryProcucts: React.FC = () => {
  const [items, setItems] = useState<IGrid[]>([]);
  const route = useRoute();
  const params = route.params as RouteParams;
  useEffect(() => {
        api.get(`/products/${params.categoryId}`).then(response => {
          const data = [];
          data.push(response.data.products)
          setItems(data)

        }).catch(err => {
          console.log(err);
        });
      },[]);


  return(
<Container>
  <Header>
  <HeaderTitle>{params.categoryId}</HeaderTitle>
  <Image style={{width: 60, height: 60, borderRadius: 60/ 2, backgroundColor: '#fff' }} source={{uri: `${params.categoryImage}`}}></Image>
  </Header>
  {
  <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: '#b782a1' }]}>
          <Text style={styles.itemName}>{item.ProductName}</Text>
          <Image style={{width: 160, height: 150, marginTop: 4, borderRadius: 8, backgroundColor: '#fff' }} source={{uri: `${item.ProductImage}`}}></Image>
          <Text style={styles.itemCode}>{item.Price}</Text>
        </View>
      )}
    />}
  </Container>
  );
};

export default CategoryProcucts
