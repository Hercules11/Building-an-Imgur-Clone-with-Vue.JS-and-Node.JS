export type cfg = {
  region: string,
  IdentityPoolId: string,
  UserPoolId: string,
  ClientId: string,
  s3SignedUrl: string
}

const config: cfg = {
  region: 'eu-west-1',
  IdentityPoolId: 'eu-west-1_SOMERANDOMSTRING',
  UserPoolId: 'eu-west-1:12345678910',
  ClientId: 'SomeR4ndomClientId',
  // This will be the upload endpoint that we got from the last tutorial
  s3SignedUrl: 'https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload-node'
}

export default config
