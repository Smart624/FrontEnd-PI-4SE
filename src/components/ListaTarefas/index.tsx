import { Button } from "@chakra-ui/react"
import { ITarefa } from "../../interfaces/tarefa"

interface Props {
    tarefas: ITarefa[]
    remover: (id: number) => void
    alterar: (tarefa: ITarefa) => void
}

export default function ListaTarefas({tarefas,remover,alterar}: Props) {
    return (
        <ul>
            {
                tarefas.map((tarefa) => (
                    <li>
                        {tarefa.title}
                        <Button 
                        onClick={() => alterar(tarefa)}
                        colorScheme={tarefa.completed ? 'green' : 'orange'}>
                            {tarefa.completed ? 'Realizada' : 'Pendente'}
                        </Button>
                        <Button colorScheme='red' onClick={() => remover(tarefa.id)}>
                            Excluir
                        </Button>
                    </li>
                ))
            }
        </ul>
    )
}