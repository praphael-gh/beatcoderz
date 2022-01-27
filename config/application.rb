require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Beatcoderz
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict

    config.api_only = true
  end
end
