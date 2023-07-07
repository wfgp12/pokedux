import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { Pokemon } from '../../models/pokemon.model';

type CardProps= {
    pokemon: Pokemon
}
const PokemonCard = ({ pokemon }: CardProps) => {
    return <Card
        title={pokemon.name}
        cover={<img src={pokemon.url} alt={pokemon.name} />}
        extra={<StarOutlined />}
    >
        <Meta description='Magic'/>
    </Card>
}

export default PokemonCard;