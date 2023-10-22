import { Button, Container, Input } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import { useEffect, useState } from "react"
import { ITarefa } from "../../interfaces/tarefa"
import ListaTarefas from "../../components/ListaTarefas"
import api from "../../helpers/axios"

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  async function getTarefas(){
    const response = await api.get('/task')
    setTarefas(response.data)
  }

  useEffect(()=>{
    getTarefas()
  },[])

  const [inputNome, setInputNome] = useState('')

  function adicionarTarefa() {
    if(inputNome != ''){
      const novaTarefa = {
        title: inputNome,
        completed: false
      }
      api.post('/task', novaTarefa).then(() => {
        setInputNome('')
        getTarefas()
      }).catch((erro) => console.log(erro))
    }
  }

  function removerTarefa(id: number) {
    api.delete(`/task/${id}`).then(() => {
      getTarefas()
    }).catch((erro) => console.log(erro))
  }

  function alterarStatusTarefa(tarefa: ITarefa){
    tarefa.completed = !tarefa.completed
    api.put(`/task/${tarefa.id}`, tarefa).then(() => {
      getTarefas()
    }).catch((erro) => console.log(erro))
  }

  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <h1>Lista de tarefas</h1>
        <Input type="text"
          onChange={(evento) => setInputNome(evento.target.value)}
          value={inputNome} />

        <Button onClick={adicionarTarefa}
          colorScheme="blue">Adicionar</Button>
        <hr />
        <ListaTarefas
          tarefas={tarefas}
          remover={removerTarefa}
          alterar={alterarStatusTarefa} />
        <Button>Mudar tarefas</Button>
      </Container>
    </Layout>
  )
}