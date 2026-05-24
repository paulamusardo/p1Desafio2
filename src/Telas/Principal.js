import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { estilos } from "../styleSheet/estilos";
import { useNavigation } from "@react-navigation/native";

function Principal() {
    // Bandeira da Europa
    let img1 = { uri: "https://flagcdn.com/w320/eu.png" };
    let autor = "Paula Musardo";
    let data = "2026";

    const nav = useNavigation();

    function acessaTela(Tela) {
        if (Tela == 'I') nav.navigate("Italia");
        else if (Tela == 'F') nav.navigate("Franca");
        else if (Tela == 'S') nav.navigate("Suica");
    }

    return (
        <View style={estilos.Tela_Principal_fundo}>
            <View style={estilos.Cartao_Branco}>
                
                <View id="Principal_Cab" style={estilos.Tela_Princpal_Cab}>
                    <Text style={estilos.Tela_Princpal_SubTitulo1}>Guia de Viagens</Text>
                    <Text style={estilos.Tela_Princpal_Titulo}>EUROPA</Text>
                    <Text style={estilos.Tela_Princpal_SubTitulo2}>O Velho Continente</Text>
                    <Image source={img1} style={{ width: 160, height: 105, borderRadius: 8, marginTop: 10 }} />
                </View>

                <View id="Principa_Corpo" style={estilos.Tela_Princpal_Corpo}>
                    <Text style={[estilos.Tela_Princpal_SubTitulo1, {marginBottom: 10}]}>Escolha o Destino</Text>
                    
                    <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('I')}>
                        <Text style={estilos.Botao_Texto}>🇮🇹 Itália</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('F')}>
                        <Text style={estilos.Botao_Texto}>🇫🇷 França</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('S')}>
                        <Text style={estilos.Botao_Texto}>🇨🇭 Suíça</Text>
                    </TouchableOpacity>
                </View>

                <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
                    <Text style={estilos.Rodape_Texto}>{autor}</Text>
                    <Text style={estilos.Rodape_Texto}>{data}</Text>
                </View>

            </View>
        </View>
    );
}

export default Principal;