import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Tooltip } from '@mui/material';
import * as classes from './single-card.style';
import { Character } from './single-card.vm';
import { useCharacter } from './use-character.hook';

const CharacterDetails: React.FC<{ character: Character }> = ({
  character,
}) => (
  <div className={classes.detailsContainer}>
    <Typography>
      <strong>Status:</strong> {character.status}
    </Typography>
    <Typography>
      <strong>Species:</strong> {character.species}
    </Typography>
    <Typography>
      <strong>Gender:</strong> {character.gender}
    </Typography>
    <Typography>
      <strong>Origin:</strong> {character.origin.name}
    </Typography>
  </div>
);

export const SingleCharacterCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { character, loading, error } = useCharacter(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!character) return <div>No character found</div>;

  return (
    <div className={classes.pageContainer}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="Character">{character.id}</Avatar>}
          title={<Typography variant="h5">{character.name}</Typography>}
          subheader={character.location.name}
        />
        <Tooltip title="Go Back">
          <ArrowCircleLeftIcon
            fontSize="large"
            className={classes.backIcon}
            onClick={() => navigate(-1)}
          />
        </Tooltip>
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              component="img"
              className={classes.media}
              image={character.image}
              alt={character.name}
            />
            <CharacterDetails character={character} />
          </div>
          {character.bestSentence && (
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                mt: 2,
                pt: 2,
                borderTop: '1px solid #e0e0e0',
              }}
            >
              "{character.bestSentence}"
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
