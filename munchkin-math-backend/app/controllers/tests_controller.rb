class TestsController < ApplicationController

    def index
        tests = Test.all
        render json: tests
    end

    def show
        test = Test.find_by(id: params[:id])
        render json: test
    end

end
