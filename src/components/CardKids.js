import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import "../translations/i18n"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import kids from '../img/images/kids.jpg'


const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 'none',
    boxShadow: 'none',
    position: 'relative',
    minWidth: "100%",
    minHeight: 400,
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

export const CardKids = React.memo(function GalaxyCard() {

  const { t } = useTranslation();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={kids}
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoTitle>{t("card.titleKids")}</InfoTitle>
            <InfoCaption>@nastkazgdanska</InfoCaption>
          </Info>
        </Box>
      </Card>
     </>
  );
});
export default CardKids;