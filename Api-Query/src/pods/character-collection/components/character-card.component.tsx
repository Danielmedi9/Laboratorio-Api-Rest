import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${character.id}/detail`);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Hotel">{character.id}</Avatar>}
        title={character.name}
        subheader={character.location.name}
      />
      <CardContent onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.bestSentence}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
