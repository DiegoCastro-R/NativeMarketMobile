import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  CategoryListTitle,
} from './styles';
import {Image, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';

interface IList {
  CategoryName: string;
  Description: string;
  CategoryImage: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [UserAvatarImg, setUserAvatarImg] = useState({});
  const [data,setData] = useState<IList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { signOut, user  } = useAuth();
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem('@nativemarket:token');
        api.defaults.headers.authorization = `Bearer ${token}`};
        loadStoragedData().then(() => {
          api.get('users/avatar').then(response => {
            setUserAvatarImg(response.data)
          }).catch(err=>{
          console.log(err)
        })
        }).catch(err=> {
          console.log(err)
        });
        loadStoragedData();

        api.get('/categorys')
          .then(response =>
            // console.log(response.data.categorys)
            setData(response.data.categorys)

            )
          .catch(error => console.log(error));


          if(data){
            setIsLoading(false);
          }

  },[] )

  const handleSelectCategory = useCallback(
    (categoryId: string, categoryImage: string) => {
      navigation.navigate('CategoryProducts', { categoryId, categoryImage });
    },
    [navigation],
  );

  const testePress = () => {
    console.log('teste');
  }

  return (
    <Container>
    <Header>
      <HeaderTitle>
        Bem vindo, {'\n'}
        <UserName>{user.name}</UserName>
      </HeaderTitle>
      <Image style={{width: 60, height: 60, borderRadius: 60/ 2 }} source={{uri: `${UserAvatarImg}`}}></Image>
      <Icon.Button  name="log-out" style={{marginLeft: -10}} onPress={signOut} backgroundColor="transparent" />
    </Header>

    <CategoryListTitle>Categorias</CategoryListTitle>



    {
    data.map((l, i) => (
      <ListItem onPress={() =>handleSelectCategory(l.CategoryName, l.CategoryImage)} key={i} bottomDivider>
        <Image source={{uri: l.CategoryImage}} style={{width: 60, height: 60, borderRadius: 60/ 2 }} />
        <ListItem.Content>
        <ListItem.Title>{l.CategoryName}</ListItem.Title>
          <ListItem.Subtitle>{l.Description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

    {/* list.map((item => (
      <ListItem onPress={() =>handleSelectCategory(item.CategoryName, item.CategoryImage)} key={item.CategoryName} bottomDivider>
        <Image source={{uri: item.CategoryImage}} style={{width: 60, height: 60, borderRadius: 60/ 2 }} />
        <ListItem.Content>
          <ListItem.Title>{item.CategoryName}</ListItem.Title>
          <ListItem.Subtitle>{item.Description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )) */}

  </Container>


  );
};

export default Dashboard;
