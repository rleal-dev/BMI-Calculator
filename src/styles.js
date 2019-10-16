import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import Slider from '@react-native-community/slider'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled(LinearGradient).attrs({
    colors: ['#222f3e', '#2c3e50']
})`
    flex: 1;
    padding-top: ${getStatusBarHeight(true)}px;
`

export const Content = styled.View`
    flex: 1;
    height: 100%;
    align-items: center;
    padding: 10px;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const InlineBox = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`

export const Gender = styled.TouchableOpacity.attrs({
    opacity: .6,
})`
    width: 49%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-right: 2%;
    background-color: ${props => props.active ? '#ee5253' : '#34495e'};
    border-radius: 4px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: ${props => props.number ? '35px': '16px'};
    font-weight: bold;
`

export const HeightBox = styled.View`
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: #34495e;
    border-radius: 4px;
`
export const HeightSlider = styled(Slider).attrs({
    step: 1,
    minimumValue: 30,
    maximumValue: 250,
    minimumTrackTintColor: '#ffffff99',
    maximumTrackTintColor: '#2c3e50',
})`
    width: 100%;
    height: 30px;
`

export const WeightBox = styled.View`
    width: 49%;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #34495e;
    margin-right: 2%;
    border-radius: 4px;
`

export const AgeBox = styled.View`
    width: 48%;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #34495e;
    margin-right: 2%;
    border-radius: 4px;
`

export const Increment = styled.TouchableOpacity.attrs({
    opacity: 0.6,
})`
    margin-top: 5px;
    width: 40px;
    align-items: center;
    justify-content: center;
    background-color: #2c3e50;
    border-radius: 50px;
`

export const Decrement = styled(Increment)``

export const Button = styled.TouchableOpacity.attrs({
    opacity: 0.6,
})`
    padding: 14px;
    align-items: center;
    background-color: #ee5253;
    border-radius: 4px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`