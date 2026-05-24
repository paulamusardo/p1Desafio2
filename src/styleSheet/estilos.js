import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  // === FUNDOS ===
  Tela_Principal_fundo: {
    flex: 1,
    backgroundColor: "#d3d3d3", 
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  Tela_Conteudo_fundo: {
    flex: 1,
    backgroundColor: "#1A365D", // Azul Escuro Europeu
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  
  Cartao_Branco: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    overflow: "hidden", 
  },

  // === TELA PRINCIPAL ===
  Tela_Princpal_Cab: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  Tela_Princpal_Titulo: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
  },
  Tela_Princpal_SubTitulo1: {
    fontSize: 22,
    color: '#1A365D',
  },
  Tela_Princpal_SubTitulo2: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
    marginBottom: 20,
  },
  Tela_Princpal_Corpo: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 20,
  },
  Tela_Principal_Botoes: {
    borderWidth: 1.5,
    borderColor: "#1A365D",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
  },
  Botao_Texto: {
    fontSize: 16,
    color: "#1A365D",
    fontWeight: 'bold',
  },
  Tela_Principal_Rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#d3d3d3",
  },
  Rodape_Texto: {
    fontSize: 14,
    color: "black",
  },

  // === TELAS DE CONTEÚDO ===
  Tela_Conteudo_Cab: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
  },
  Tema_SubTitulo: {
    fontSize: 14,
    color: "#1A365D",
    textTransform: "uppercase",
    fontWeight: 'bold',
  },
  Tema_Titulo: {
    fontSize: 30,
    color: "black",
  },
  Tela_Conteudo_Corpo: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  Texto_Topico: {
    fontSize: 22,
    color: "#1A365D",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  Texto_Corpo: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
    lineHeight: 24,
    color: '#333'
  },
  Imagem_Corpo: {
    width: "100%",
    height: 180,
    resizeMode: "cover", // Faz a foto preencher bem o espaço
    borderRadius: 10,    // Arredonda as pontas da foto
    marginVertical: 10,
  }
});