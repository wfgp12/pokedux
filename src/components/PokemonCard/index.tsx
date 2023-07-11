import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { Pokemon } from '../../models/pokemon.model';

type CardProps = {
    pokemon: Pokemon
}
const PokemonCard = ({ pokemon }: CardProps) => {
    console.log(pokemon.types)
    return <Card
        title={pokemon.name}
        cover={
            <img
                src={pokemon.sprites?.other['official-artwork'].front_default}
                style={{ margin: 0 }}
                alt={pokemon.name}
            />
        }
        extra={<StarOutlined />}
    >
        <Meta description={pokemon.types?.map(({type}) => type.name).join(',')} />
    </Card>
}

export default PokemonCard;