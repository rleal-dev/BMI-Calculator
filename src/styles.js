import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled(LinearGradient).attrs({
    colors: ['#222f3e', '#2c3e50']
})`
    flex: 1;
    padding-top: ${getStatusBarHeight(true)}px;
    padding-bottom: 30px;
`

export const Content = styled.View`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
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
    margin: 12px 0;
`

export const Gender = styled.TouchableOpacity.attrs({
    opacity: .6,
})`
    width: 49%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-right: 2%;
    background-color: #34495e;
    border-radius: 4px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: ${props => props.number ? '50px': '18px'};
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