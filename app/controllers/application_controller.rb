class ApplicationController < ActionController::API

    include ActionController::Cookies
    skip_before_action :verify_authenticity_token

    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid


private
  
    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def record_not_found(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

end
