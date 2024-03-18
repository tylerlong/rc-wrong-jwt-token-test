import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({
    // jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
    jwt: 'wrong-jwt-token',
  });
};
main();
