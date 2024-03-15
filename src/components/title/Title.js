import React from "react";
import {View, Text} from "react-native";
import styles from "./titleStule";

export default function Titulo(){
    return(
        <view style={styles.boxTitle}>
            <Text style={styles.textTitle}>Fit Calc</Text>
        </view>
    )
}