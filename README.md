# Campeonato Gamer

## Situação problema

Nossa turma vai organizar partidas de jogos. Queremos registrar **jogo**, **tima A**, **time B**, **placar** e **status**.  Uma partida começa `agendada` com placar `0 X 0`. Depois podemos atualizar o resultado para `finalizada`.

Ao final, a API terá estas rotas:

|Método     |Rota               |O que faz                              |
|---        |---                |---                                    |
|GET        |`/`                |Confirma que a API está funcionando    |
|GET        |`/partidas`        |Lista e filtra partidas                |
|GET        |`/partidas:id`     |Buscar uma partida                     |
|POST       |`/partidas`        |Cadastrar uma partida                  |
|PUT        |`/partidas`        |Altera uma partida e o placar          |
|DELETE     |`/partidas`        |Exclui uma partida                     |

## Etapa 1 - Criar o projeto

No terminal, digite **uma linha por vez**,

```bash
mkdir CampeonatoGamer
cd CampeonatoGamer
npm init -y
npm install express cors
code .
```
"# CampeonatoGamer" 
