require 'aws-sdk-s3'

Aws.config.update({
  sigv4_region: ENV['BUCKETEER_AWS_REGION'], 
  region: ENV['BUCKETEER_AWS_REGION'],
  credentials: Aws::Credentials.new(
    ENV['BUCKETEER_AWS_ACCESS_KEY_ID'],
    ENV['BUCKETEER_AWS_SECRET_ACCESS_KEY']
  )
})