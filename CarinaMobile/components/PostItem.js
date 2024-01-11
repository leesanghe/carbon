import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import MenuComponent from './MenuComponent';
const PostItem = ({data}) => {
    const [love, setLove] = useState(data.isLoved);
    const [like, setLike] = useState(!data.isLiked);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
      };
      const handleDelete = () => {
        // 사용자가 삭제 확인을 선택하면 수행할 동작
        // 로그인 한 사용자와 게시글 글쓴이와 비교해서 동작하게 만들 것 .
        console.log('게시물 삭제를 수행합니다.');
        // 여기에 실제 삭제 동작을 구현
        // 메뉴 닫기
        setMenuVisible(false);
      };
  return (
    <View
        style={{
            paddingBottom: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.2,
        }}
    >
        <View
            style={{
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems: 'center',
              padding: 15,
          }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={data.postPersonImage}
                    style={{width: 40, height: 40, borderRadius: 100}}
                    />
                <View style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.7}}>
                        {data.postTitle}
                    </Text>
                </View>
                <View style={{paddingLeft: 30, marginTop: -10}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                        {data.postName}
                    </Text>
                </View>
            </View>
            <Feather name='more-vertical' style={{fontSize:35}} onPress={toggleMenu}/>
            {isMenuVisible && (
                // 여기에 메뉴 컴포넌트 또는 메뉴 아이템들을 넣습니다.
                <MenuComponent />
            )}
        </View>
        <View
            style={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Image
                source={data.postImage}
                style={{width: '96%', height: 400 }}
            />
            <Text style={{
                fontWeight: '700',
                fontSize: 14,
                paddingVertical: 2,
                marginTop: 15
            }}>
                {data.postContent}
            </Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
            <Text>
                좋아요 { love ? data.likes + 1 : data.likes } 개
            </Text>
            {/* <Text style ={{ opacity: 0.4 , paddingVertical: 2, marginTop: 5, marginBottom: 5}}>
                댓글 모두 보기
            </Text> */}
        </View>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15
            }}
        >
           <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <TouchableOpacity onPress={() => setLove(prev => !prev)}>
                    <AntDesign
                    name={love ? 'heart' : 'hearto'}
                    style={{
                        paddingRight: 10,
                        fontSize: 20,
                        color: love ? 'red' : 'black',
                    }}
                    />
                </TouchableOpacity>
                
                {/* <TouchableOpacity>
                    <Ionic
                    name="ios-chatbubble-outline"
                    style={{
                        paddingRight: 10,
                        fontSize: 20,
                    }}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity>
                    <Feather name="navigation" style={{fontSize:20}}/>
                </TouchableOpacity>
            </View>
            <Feather name='bookmark' style={{fontSize:20}}/>
        </View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
                style={{
                    flexDirection : 'row', alignItems: 'center',
                }}
            >
                <Image
                    source={data.postPersonImage}
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: 'orange',
                        marginRight: 10
                    }}
                />
                <TextInput
                    placeholder='댓글달기...'
                    style={{ opacity: 0.5 }}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ color: '#0095F6' }}> 게시 </Text>
            </View>
        </View>
         */}
    </View>
  )
}
export default PostItem