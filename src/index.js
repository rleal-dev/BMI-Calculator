import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Header, Footer } from './components'
import {
    Container,
    Content,
    InlineBox,
    Gender,
    Text,
    HeightBox,
    HeightSlider,
    WeightBox,
    AgeBox,
    Decrement,
    Increment,
    Button,
    ButtonText,
} from './styles'

function App() {

    const [gender, setGender] = useState('male')
    const [height, setHeight] = useState(150)
    const [weight, setWeight] = useState(60)
    const [age, setAge] = useState(20)

    async function calculateBmi() {
        // alert(JSON.stringify({gender, height, weight, age}))
        const convertedHeight = height / 100

        const result = weight / (convertedHeight * convertedHeight)
        alert(result.toFixed(2) + ' Você está GORDA!')
    }

    return (
        <Container>
            <StatusBar backgroundColor='#222f3e' barStyle='light-content'/>

            <Header />

            <Content>

                <InlineBox>
                    <Gender active={gender == 'male'} onPress={() => setGender('male')}>
                        <Icon name='ios-male' size={50} color='#fff' type='Ionicons' />
                        <Text>MALE</Text>
                    </Gender>

                    <Gender active={gender == 'female'} onPress={() => setGender('female')}>
                        <Icon name='ios-female' size={50} color='#fff' type='Ionicons'/>
                        <Text>FEMALE</Text>
                    </Gender>

                </InlineBox>
                
                <HeightBox>
                    <Text>HEIGHT</Text>
                    <InlineBox>
                        <Decrement onPress={() => setHeight(height - 1)}>
                            <Icon name='ios-remove' size={35} color='#fff' type='Ionicons' />
                        </Decrement>
                        
                        <Text number>{height} cm</Text>

                        <Increment onPress={() => setHeight(height + 1)}>
                            <Icon name='ios-add' size={35} color='#fff' type='Ionicons' />
                        </Increment>
                    </InlineBox>
                    
                    <HeightSlider value={height} onValueChange={setHeight} />
                </HeightBox>

                <InlineBox>
                    <WeightBox>
                        <Text>WEIGHT</Text>
                        <Text number>{weight}</Text>
                        
                        <InlineBox>
                            <Decrement onPress={() => setWeight(weight - 1)}>
                                <Icon name='ios-remove' size={35} color='#fff' type='Ionicons' />
                            </Decrement>
                            
                            <Increment onPress={() => setWeight(weight + 1)}>
                                <Icon name='ios-add' size={35} color='#fff' type='Ionicons' />
                            </Increment>
                        </InlineBox>
                        
                    </WeightBox>

                    <AgeBox>
                        <Text>AGE</Text>
                        <Text number>{age}</Text>

                        <InlineBox>
                            <Decrement onPress={() => setAge(age - 1)}>
                                <Icon name='ios-remove' size={35} color='#fff' type='Ionicons' />
                            </Decrement>
                            
                            <Increment onPress={() => setAge(age + 1)}>
                                <Icon name='ios-add' size={35} color='#fff' type='Ionicons' />
                            </Increment>
                        </InlineBox>
                    </AgeBox>
                </InlineBox>
            
                <Footer>
                    <Button onPress={calculateBmi}>
                    <ButtonText>CALCULATE YOUR BMI</ButtonText>
                    </Button>
                </Footer>
            </Content>
        </Container>
    )
}

export default App
