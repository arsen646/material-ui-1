import * as React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FeedbackIcon from 'docs/src/modules/branding/icons/Feedback';
import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ForumIcon from '@material-ui/icons/Forum';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

interface ExpectCardProps {
  color?: 'primary' | 'info';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
}

const ExpectCard = styled((props: ExpectCardProps) => {
  const { color, icon, title, children, ...other } = props;
  return (
    <Card elevation={0} {...other}>
      <CardHeader avatar={<Avatar aria-label={title}>{icon}</Avatar>} />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography component="div">{children}</Typography>
      </CardContent>
    </Card>
  );
})<ExpectCardProps>(({ color = 'primary', theme }) => ({
  '& [class*="MuiAvatar-root"]': {
    background: color === 'info' ? theme.palette.vividBlue : theme.palette.emeral,
    width: 80,
    height: 80,
  }
}));

export default function BrandingWhatToExpect() {
  return (
    <Container sx={{ mt: [10, 18], mb: [12, 20] }}>
      <Typography variant="h2">Here is <UnderlinedText>what to expect</UnderlinedText></Typography>
      <Typography variant="h2" sx={{mb: 4}}>from Material UI</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ExpectCard icon={<ForumIcon fontSize="large" />} title="Volume discount">
            <Typography sx={{ mt: 2, fontSize: 'inherit' }}>
              The licenses are on a per-developer basis. We offer 
              the following tiered discounts from list prices 
              when purchasing more than one license for your 
              development team:
            </Typography>
            <Typography sx={{ mt: 4, fontSize: 'inherit' }}>
              2-5 Licenses:{' '}
              <Typography variant="caption" sx={{ 
                fontWeight: 'bold',
                fontSize: 'inherit' 
              }}>
                10% discount
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 'inherit' }}>
              6-10 Licenses:{' '}
              <Typography variant="caption" sx={{ 
                fontWeight: 'bold',
                fontSize: 'inherit' 
              }}>
                15% discount
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 'inherit' }}>
              11+: License capped, extra developers do not need to be licensed.
            </Typography>
          </ExpectCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpectCard
            color="info"
            icon={<FeedbackIcon fontSize="large" />}
            title="Perpetual license"
          >
            <Typography sx={{ mt: 2 }}>
              When you purchase, 
              <Typography variant="caption" sx={{ 
                fontWeight: 'bold',
                fontSize: 'inherit' 
              }}>
                you are granted a license to use a version of the product in perpetuity
              </Typography>. 
              There are no further charges until you choose to extend your license 
              to cover newer versions.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Please note that while the use of the software is 
              perpetual, support and corrective maintenance are not. 
              We do not provide issue resolution to versions older 
              than 12 months. We roll bug fixes, performance 
              enhancements, and other improvements into new 
              releases; we don't patch, fix or in any way alter older 
              versions.
            </Typography>
          </ExpectCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpectCard
            color="info"
            icon={<ForumIcon fontSize="large" />}
            title="1-year subscription to new versions"
          >
            <Typography sx={{ mt: 2 }}>
              When you make a purchase{' '}
              <Typography variant="caption" sx={{ 
                fontWeight: 'bold',
                fontSize: 'inherit' 
              }}>
                you get a subscription to license new versions for 366 days
              </Typography>. 
              {' '}You can see our <Link href={'/'}>changelog</Link>. After 366 days 
              (or up to 5-year if you choose an extension package) 
              you will no longer be allowed to use the latest versions 
              without renewing your subscription. You can continue to use 
              your licensed versions in perpetuity.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Please note that while the use of the software is perpetual, 
              support and corrective maintenance are not. We roll bug fixes, 
              performance enhancements, and other improvements into new 
              releases; we don't patch, fix or in any way alter older versions.
            </Typography>
          </ExpectCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpectCard icon={<ForumIcon fontSize="large" />} title="Subscription renewal">
            <Typography sx={{ mt: 2 }}>
              At the end of your subscription period, 
              you will no longer be able to license the latest versions 
              or access support without renewing. This could range 
              from 366 days up to a 5-year term.{' '}
              <Typography variant="caption" sx={{ 
                fontWeight: 'bold',
                fontSize: 'inherit' 
              }}>
                Renewal pricing is substantially lower than first-year subscription costs.
              </Typography>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Please note that while the use of the software is 
              perpetual, access to new features, support and 
              corrective maintenance are not. We do not provide 
              issue resolution to versions older than 12 months. 
              We roll bug fixes, performance enhancements, and other 
              improvements into new releases; we don't patch, fix or 
              in any way alter older versions.
            </Typography>
          </ExpectCard>
        </Grid>
      </Grid>
    </Container>
  );
}
