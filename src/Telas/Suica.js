import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from "../styleSheet/estilos";

export default function Suica() {
  let imgTema = { uri: "https://flagcdn.com/w320/ch.png" }; 
  let imgCorpo = { uri: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=500&q=80" }; // Foto dos Alpes
  let autor = "Paula Musardo";
  let data = "2026";

  return (
    <View style={estilos.Tela_Conteudo_fundo}>
      <View style={estilos.Cartao_Branco}>
        
        <View style={estilos.Tela_Conteudo_Cab}>
          <Image source={imgTema} style={{ width: 60, height: 60, marginRight: 20, borderRadius: 5, resizeMode: 'contain' }} />
          <View>
            <Text style={estilos.Tema_SubTitulo}>Europa Central</Text>
            <Text style={estilos.Tema_Titulo}>Suíça</Text>
          </View>
        </View>

        <ScrollView style={estilos.Tela_Conteudo_Corpo} showsVerticalScrollIndicator={false}>
          <Text style={estilos.Texto_Topico}>Paraíso Alpino:</Text>
          <Text style={estilos.Texto_Corpo}>
            A Suíça é uma nação localizada no coração dos Alpes, famosa por suas paisagens montanhosas de tirar o fôlego, lagos cristalinos e vilarejos charmosos. O país possui altíssima qualidade de vida.
          </Text>

          <Text style={estilos.Texto_Topico}>Diversidade e Neutralidade</Text>
          <Text style={estilos.Texto_Corpo}>
            O país tem quatro idiomas oficiais: alemão, francês, italiano e romanche. Historicamente, a Suíça é célebre por sua política de neutralidade, não se envolvendo em conflitos armados internacionais desde 1815.
          </Text>
          
          <Text style={estilos.Texto_Topico}>Chocolates e Precisão</Text>
          <Image source={imgCorpo} style={estilos.Imagem_Corpo} />
          <Text style={estilos.Texto_Corpo}>
            Quando pensamos na Suíça, pensamos em qualidade. Além de serem os criadores do chocolate ao leite e produzirem os melhores chocolates do mundo, os suíços são donos das marcas de relógios mais luxuosas e precisas do mercado global.
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