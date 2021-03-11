import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import portrait from '../img/images/portrait.png'



const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 'none',
    boxShadow: 'none',
    position: 'relative',
    minWidth: "100%",
    minHeight: 300,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));

export const CardPortraite = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={portrait}
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>Galaxy</InfoSubtitle>
            <InfoTitle>Buds 2019</InfoTitle>
            <InfoCaption>@nastkazgdanska</InfoCaption>
          </Info>
        </Box>
      </Card>
      </>
  );
});
export default CardPortraite;