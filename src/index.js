import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'

import { Header, Footer } from './components'
import {
    Container,
    Content,
    InlineBox,
    Gender,
    Text,
    HeightBox,
    WeightBox,
    AgeBox,
} from './styles'

function App() {
    return (
        <Container>
            <Header />

            <Content>

                <InlineBox>
                    <Gender>
                        <Icon name='ios-male' size={80} color='#fff' type='Ionicons' />
                        <Text>MALE</Text>
                    </Gender>

                    <Gender>
                        <Icon name='ios-female' size={80} color='#fff' type='Ionicons'/>
                        <Text>FEMALE</Text>

                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                        />
                    </Gender>

                </InlineBox>
                
                <HeightBox>
                    <Text>HEIGHT</Text>
                    <Text number>186 cm</Text>
                </HeightBox>

                <InlineBox>
                    <WeightBox>
                        <Text>WEIGHT</Text>
                        <Text number>74</Text>
                        
                        <InlineBox>
                            <Icon name='ios-remove' size={30} color='#fff' type='Ionicons' />
                            <Icon name='ios-add' size={30} color='#fff' type='Ionicons' />
                        </InlineBox>
                        
                    </WeightBox>

                    <AgeBox>
                        <Text>AGE</Text>
                        <Text number>20</Text>

                        <InlineBox>
                            <Icon name='ios-remove' size={30} color='#fff' type='Ionicons' />
                            <Icon name='ios-add' size={30} color='#fff' type='Ionicons' />
                        </InlineBox>
                    </AgeBox>
                </InlineBox>
            </Content>
            
            <Footer />
        </Container>
    )
}

export default App
