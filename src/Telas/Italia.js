import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from "../styleSheet/estilos";

export default function Italia() {
  let imgTema = { uri: "https://flagcdn.com/w320/it.png" }; 
  let imgCorpo = { uri: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=500&q=80" }; // Foto do Coliseu
  let autor = "Paula Musardo";
  let data = "2026";

  return (
    <View style={estilos.Tela_Conteudo_fundo}>
      <View style={estilos.Cartao_Branco}>
        
        <View style={estilos.Tela_Conteudo_Cab}>
          <Image source={imgTema} style={{ width: 60, height: 40, marginRight: 20, borderRadius: 5 }} />
          <View>
            <Text style={estilos.Tema_SubTitulo}>Europa Mediterrânea</Text>
            <Text style={estilos.Tema_Titulo}>Itália</Text>
          </View>
        </View>

        <ScrollView style={estilos.Tela_Conteudo_Corpo} showsVerticalScrollIndicator={false}>
          <Text style={estilos.Texto_Topico}>La Dolce Vita:</Text>
          <Text style={estilos.Texto_Corpo}>
            Conhecida pelo seu inconfundível formato de bota no mapa, a Itália é o berço do Império Romano e do Renascimento. É o país que possui o maior número de Patrimônios Mundiais da UNESCO no mundo.
          </Text>

          <Text style={estilos.Texto_Topico}>Gastronomia</Text>
          <Text style={estilos.Texto_Corpo}>
            A culinária italiana conquistou o planeta. Muito além da pizza (criada em Nápoles), o país oferece massas frescas incríveis, queijos como o Parmigiano-Reggiano, vinhos excepcionais e o tradicional Gelato.
          </Text>
          
          <Text style={estilos.Texto_Topico}>O Coliseu de Roma</Text>
          <Image source={imgCorpo} style={estilos.Imagem_Corpo} />
          <Text style={estilos.Texto_Corpo}>
            Localizado na capital Roma, o Coliseu é o maior anfiteatro já construído. Inaugurado em 80 d.C., era palco de espetáculos épicos e combates de gladiadores, reunindo até 80 mil espectadores em suas arquibancadas.
          </Text>
        </ScrollView>

        <View style={estilos.Tela_Principal_Rodape}>
          <Text style={estilos.Rodape_Texto}>{autor}</Text>
          <Text style={estilos.Rodape_Texto}>{data}</Text>
        </View>

      </View>
    </View>
  );
}