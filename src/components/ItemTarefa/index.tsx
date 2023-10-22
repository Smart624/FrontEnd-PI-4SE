import { Button } from "@chakra-ui/react";
import { ITarefa } from "../../interfaces/tarefa";

interface Props {
  tarefa: ITarefa
}

export default function ItemTarefa({ tarefa }: Props) {
  return (
    <li>
      {tarefa.title}
      <Button colorScheme={tarefa.completed ? 'green' : 'orange'}>
        {tarefa.completed ? 'Realizada' : 'Pendente'}
      </Button>
    </li>
  )
}