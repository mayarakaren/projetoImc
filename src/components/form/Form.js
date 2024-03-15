import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultImc from "./resultImc/resultImc";
import stylesForm from "./formStyle";

export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [resultImc, setResultImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [pesoIdeal, setPesoIdeal] = useState(null);

    const imcCalculator = () => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura.replace(",", "."));
            const pesoKg = parseFloat(peso.replace("kg", ""));
            const imc = pesoKg / (alturaMetros * alturaMetros);
            setResultImc(imc.toFixed(2));
            setMessageImc("Seu IMC é:");
            setPesoIdeal(pesoIdeal);
        } else {
            setResultImc(null);
            setMessageImc("Por favor, preencha a altura e o peso");
            setPesoIdeal(null);
        }
    };

    const handleReset = () => {
        setAltura(null);
        setPeso(null);
        setMessageImc(null);
    };

    return (
        <View style={stylesForm.formContext}>
            <View>
                <View style={stylesForm.formTextAltura}>
                    <Text style={stylesForm.formText}>Altura</Text>
                </View>
                <View style={stylesForm.larguraTela}>
                    <TextInput
                        style={stylesForm.input}
                        placeholder="Ex. 1.65"
                        keyboardType="numeric"
                        onChangeText={setAltura}
                        value={altura}
                    />
                </View>
                <View style={stylesForm.larguraTela}>
                    <TextInput 
                        style={stylesForm.input}
                        placeholder="Ex. 85Kg"
                        keyboardType="numeric"
                        onChangeText={setPeso}
                        value={peso}
                    />
                </View>
                <ResultImc messageResultImc={messageImc} rsultImc={resultImc}/>
                {resultImc !== null && (
                    <TouchableOpacity 
                        style={[stylesForm.buttoncss, stylesForm.buttonContainer]}
                        onPress={imcCalculator}
                    >
                        <Text style={stylesForm.buttonText}>Calcular IMC</Text>
                    </TouchableOpacity>
                )}
                <ResultImc messageResultImc={messageImc} rsultImc={resultImc}/>
                {resultImc !== null && (
                    <TouchableOpacity 
                        style={[stylesForm.buttoncss, stylesForm.buttonContainer]}
                        onPress={handleReset}
                    >
                        <Text style={stylesForm.buttonText}>Limpar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
