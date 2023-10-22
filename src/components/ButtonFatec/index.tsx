import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props) {
    return (
        <Button size='lg' colorScheme='green' type={type}>
            {label}
        </Button>
    )
}

export default ButtonFatec