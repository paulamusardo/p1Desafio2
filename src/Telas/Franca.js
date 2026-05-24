import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from "../styleSheet/estilos";

export default function Franca() {
  let imgTema = { uri: "https://flagcdn.com/w320/fr.png" }; 
  let imgCorpo = { uri: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80" }; // Foto de Paris
  let autor = "Paula Musardo";
  let data = "2026";

  return (
    <View style={estilos.Tela_Conteudo_fundo}>
      <View style={estilos.Cartao_Branco}>
        
        <View style={estilos.Tela_Conteudo_Cab}>
          <Image source={imgTema} style={{ width: 60, height: 40, marginRight: 20, borderRadius: 5 }} />
          <View>
            <Text style={estilos.Tema_SubTitulo}>Europa Ocidental</Text>
            <Text style={estilos.Tema_Titulo}>França</Text>
          </View>
        </View>

        <ScrollView style={estilos.Tela_Conteudo_Corpo} showsVerticalScrollIndicator={false}>
          <Text style={estilos.Texto_Topico}>A Cidade Luz:</Text>
          <Text style={estilos.Texto_Corpo}>
            A França é o país mais visitado do mundo. Turistas são atraídos por sua cultura sofisticada, moda de alta costura, museus majestosos como o Louvre e as belas praias da Riviera Francesa.
          </Text>

          <Text style={estilos.Texto_Topico}>História e Cultura</Text>
          <Text style={estilos.Texto_Corpo}>
            O lema "Liberdade, Igualdade e Fraternidade" nasceu na Revolução Francesa, um evento que moldou a sociedade ocidental moderna. A França sempre foi o centro das artes, literatura e filosofia da Europa.
          </Text>
          
          <Text style={estilos.Texto_Topico}>A Torre Eiffel</Text>
          <Image source={imgCorpo} style={estilos.Imagem_Corpo} />
          <Text style={estilos.Texto_Corpo}>
            Construída por Gustave Eiffel para a Exposição Universal de 1889, a torre foi duramente criticada por artistas parisienses na época de sua construção. Hoje, é o maior símbolo de Paris e o monumento pago mais visitado do mundo.
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