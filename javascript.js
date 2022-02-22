var nomes = ["Vinicius", "Wendley", "Islan", "Tibúrcio", "Almofadinhas"]
var marcas = ["Honda Civic - R$ 134.900,00", "Renault Sandero - R$ 73.090,00", "Mobilete - R$ 2.422,00", "Yamaha Fazer 150 - R$ 9.990,00", "Fiat Uno - R$ 45.890"]
var cpfs = ["11111111111", "22222222222", "33333333333", "44444444444", "55555555555"]

function Avaliar() {
    var inputusers = document.getElementById('usuario1').value
    var selectmarcas = document.getElementById('marcas').value
    var cpfs1 = document.getElementById('cpf').value

    if (cpfs1 == cpfs[4]) {
        alert('Esse usuário está bloqueado no sistema, favor entrar em contato em 4002-8922')
        return;
    }

    if (inputusers == nomes[2] && selectmarcas == marcas[2]){
           if (cpfs1 == cpfs[0]) {
                alert('Islan comprou a ' + selectmarcas)
                return;
           } else if (cpfs1 != cpfs[0]){
            alert('[Erro] CPF inválido!')
            return;
           }
        }
        if (inputusers == nomes[2] && selectmarcas != marcas[2]) {
            alert("[ERRO] Usuário não tem direito de comprar outra coisa que não seja uma bike com motor")
            return;
        }
        if (inputusers == nomes[0] && selectmarcas == marcas[0] || inputusers == nomes[0] && selectmarcas == marcas[1] || inputusers == nomes[0] && selectmarcas == marcas[2] || inputusers == nomes[0] && selectmarcas == marcas[3] || inputusers == nomes[0] && selectmarcas == marcas[4]) {
             if (cpfs1 == cpfs[1]) {
                  alert(`Vinicius solicitou a compra de um ${selectmarcas} e está pré-aprovado para o financiamento`)
                  return;
             } else if (cpfs1 != cpfs[1]) {
                  alert('[Erro] CPF inválido!')
                  return; 
             }  
        }
        if (inputusers == nomes[1] && selectmarcas == marcas[0] || inputusers == nomes[1] && selectmarcas == marcas[1] || inputusers == nomes[1] && selectmarcas == marcas[2] || inputusers == nomes[1] && selectmarcas == marcas[3] || inputusers == nomes[1] && selectmarcas == marcas[4] ) {
              if (cpfs1 == cpfs[2]) {
                alert(`Wendley solicitou a compra de um ${selectmarcas} e está pré-aprovado para o financiamento`)
                return;
              } else if (cpfs1 != cpfs[2]) {
                  alert('[Erro] CPF inválido!')
                  return; 
           }  
        }
        if (inputusers == nomes[3] && selectmarcas == marcas[0] || inputusers == nomes[3] && selectmarcas == marcas[1] || inputusers == nomes[3] && selectmarcas == marcas[2] || inputusers == nomes[3] && selectmarcas == marcas[3] || inputusers == nomes[3] && selectmarcas == marcas[4] ) {
            if (cpfs1 == cpfs[3]) {
                alert(`Tibúrcio solicitou a compra de um ${selectmarcas} e está pré-aprovado para o financiamento`)
                return;
            } else if (cpfs1 != cpfs[3]) {
                alert('[Erro] CPF inválido!')
                return; 
         } 
        }
        if (inputusers == nomes[4] && selectmarcas == marcas[0] || inputusers == nomes[4] && selectmarcas == marcas[1] || inputusers == nomes[4] && selectmarcas == marcas[2] || inputusers == nomes[4] && selectmarcas == marcas[3] || inputusers == nomes[4] && selectmarcas == marcas[4] ) {
                alert('Seja bem vindo, Almofadinhas! Sente que vou pegar um cafezinho para o senhor')
                alert(`A compra do senhor de um ${selectmarcas} está pré-aprovado para o financiamento`)
                return;
        }
        if (inputusers == '' || inputusers != nomes) {
            alert('Usuário ainda não cadastrado, favor entrar em contato com a administração em 4002-8922')
            return;
        }
}

