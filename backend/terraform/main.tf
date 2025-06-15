provider "aws" {
    region = "eu-west-1"
}

resource "aws_s3_bucket" "imgur_image_bucket" {
    bucket = "dev-imgur-clone-bucket"

    cors_rule {
      allowed_headers = ["*"]
      allowed_methods = ["PUT", "POST"]
      allowed_origins = ["*"]
      expose_headers  = ["x-amz-server-side-encryption", "x-amz-request-id", "x-amz-id-2"]
      max_age_seconds = 3000
    }

    tags = {
        Name = "Dev Imgur Clone Bucket"
        Environment = "Dev"
    }
}
resource "aws_s3_bucket" "frontend_bucket" {
    bucket = "imgur-clone-frontend"

    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    tags = {
        Name = "Dev Imgur Clone Frontend"
        Environment = "Dev"
    }
}

output "app-path" {
    value = "${aws_s3_bucket.frontend_bucket.website_endpoint}"
}

resource "aws_cognito_user_pool" "imgur_clone_pool" {
    name = "imgurclonepool"
}

resource "aws_cognito_user_pool_client" "client" {
  name = "imgur-app-client"

  user_pool_id = "${aws_cognito_user_pool.imgur_clone_pool.id}"
}

output "UserPoolId" {
    value = "${aws_cognito_user_pool.imgur_clone_pool.id}"
}

output "UserPoolArn" {
    value = "${aws_cognito_user_pool.imgur_clone_pool.arn}"
}

output "ClientId" {
    value = "${aws_cognito_user_pool_client.client.id}"
}